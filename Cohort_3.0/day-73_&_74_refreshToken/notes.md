# Day 73 & 74 Notes: Access Token vs Refresh Token

## Overview
Jab koi user login karta hai to server ko verify karna hota hai ki "ye user kaun hai". Iske liye **tokens** use kiye jaate hain. Do types ke tokens use hote hain:

1. **Access Token** - API data access dene ke liye (short-lived)
2. **Refresh Token** - Naya Access Token lane ke liye (long-lived)

---

## 1. Access Token kya hai?

- Ek **credential** jo user logged-in hone par milta hai.
- Har API request ke **header** me bheja jaata hai.
- Generally ek **JWT (JSON Web Token)** hota hai.
- **Short lifetime** hota hai: 15–30 min (ya 1 hour).
- Isme user ki info hoti hai, isliye **secretly** rakha jaata hai.

### JWT structure (3 parts, dots se alag):
```
header.payload.signature
XXXXXXXXX.YYYYYYYYY.ZZZZZZZZZ
```

**Example JWT:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2FiYyIsImVtYWlsIjoidXNlckBnbWFpbC5jb20ifQ.r5xL8kQp9NhQOiH7VvP3KJ2kI1wZ3aB2vM2c9qN1ZfY
```

### JWT ke 3 parts decode karne par:
| Part | Content |
|------|---------|
| Header | `{"alg":"HS256","typ":"JWT"}` |
| Payload | `{"id":"643abc","email":"user@gmail.com"}` |
| Signature | `HMACSHA256(header.payload, SECRET_KEY)` — verify ke liye |

---

## 2. Access Token kaise kaam karta hai? (Flow)

```
Frontend (React)                    Backend (Express)
      │  1. POST /login                  │
      │  {email, password}              │
      │ ─────────────────────────────>  │  verify user in DB
      │                                 │  create JWT (access token)
      │  2. {token: "eyJhbGci..."}     │
      │ <─────────────────────────────  │
      │                                 │
      │  3. GET /posts                 │
      │  Authorization: Bearer <token>  │
      │ ─────────────────────────────>  │  verify token via middleware
      │                                 │  token sahi → data do
      │  4. {posts: [...]}             │
      │ <─────────────────────────────  │
```

**Frontend me token bhejne ka tarika:**
```javascript
const res = await fetch("http://localhost:5000/api/posts", {
    headers: {
        "Authorization": `Bearer ${accessToken}`   // important!
    }
});
```

---

## 3. Problemmm — sirf Access Token kyu nahi?

2 options hote:

### Option A: Short expiry (15 min)
- Agli baar token khatam = user login karega. Har 15 min me login karna **annoying** hai.

### Option B: Long expiry (7 din)
- Agar token **leak** ho jaye (XSS/localStorage hack), toh attacker **7 din tak** aapka account access kar sakta hai. **Bahut dangerous**.

> **Solution:** Access Token short (15 min) + Refresh Token long (7 din).

---

## 4. Refresh Token kya hai?

- Access Token khatam hone par **naya Access Token** lene ke liye.
- **Long-lived** hota hai (7 din / 30 din).
- Sirf **/refresh** endpoint par use hota hai — kisi aur API par **nahi** pathna chahiye.
- Jiska matlab: agar refresh token leak bhi ho jaye toh attacker ko sirf naya access token milta hai, woh directly data nahi le sakta.
- Optionally **DB me save** hota hai taaki **reuse detection** (detect agar token phir se use hua) aur **logout** (token delete) kar sake.

---

## 5. Complete Flow — Access + Refresh Together

```
LOGIN:
Frontend ──email/password──> Backend
Backend:                    - verify user
                            - create accessToken (15 min)
                            - create refreshToken (7 din)
Backend <──{accessToken, refreshToken}── Frontend
                            (frontend dono save karta hai)

API CALL:
Frontend ──Authorization: Bearer accessToken──> Backend ✔ data
Frontend ──Authorization: Bearer accessToken──> Backend ⚠ (expired)

REFRESH:
Frontend ──POST /refresh {refreshToken}──> Backend
Backend:  - refresh token check karo
          - naya accessToken banao
Backend <──{newAccessToken}── Frontend
                            (frontend naya token save karke dobara API call)

LOGOUT:
Frontend ──POST /logout──> Backend (refresh token DB se delete)
```

---

## 6. Code Example — Backend (Node + Express + jsonwebtoken)

### A. Login — dono tokens banao

```javascript
// controllers/auth.controller.js
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// SECRETS ko .env me rakho (kabhi code me nahi!)
const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;   // e.g. "a8f2c..."
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET; // e.g. "k9p3d..."

function createAccessToken(userId) {
    return jwt.sign({ id: userId }, ACCESS_SECRET, { expiresIn: "15m" }); // 15 min
}

function createRefreshToken(userId) {
    return jwt.sign({ id: userId }, REFRESH_SECRET, { expiresIn: "7d" }); // 7 din
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    // (best practice) refresh token ko DB me save karo
    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({ accessToken, refreshToken });
};
```

### B. Refresh endpoint — naya Access Token do

```javascript
// routes/auth.routes.js
router.post("/refresh", async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ message: "No token" });

    try {
        // 1. verify karo signature
        const payload = jwt.verify(refreshToken, REFRESH_SECRET);

        // 2. check karo DB me same token hai ya nahi (reuse attack se bachav)
        const user = await User.findById(payload.id);
        if (!user || user.refreshToken !== refreshToken) {
            return res.status(403).json({ message: "Invalid refresh token" });
        }

        // 3. naya access token do
        const newAccessToken = createAccessToken(user._id);
        res.status(200).json({ accessToken: newAccessToken });
    } catch (err) {
        return res.status(403).json({ message: "Refresh token expired or invalid" });
    }
});
```

### C. Auth Middleware — Access Token verify

```javascript
// middleware/auth.middleware.js
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const header = req.headers.authorization; // "Bearer eyJhb..."
    if (!header) return res.status(401).json({ message: "Not authorized" });

    const token = header.split(" ")[1]; // "Bearer" hatao
    try {
        const payload = jwt.verify(token, ACCESS_SECRET);
        req.userId = payload.id;
        next(); // verify ho gaya → agla middleware/handler
    } catch (err) {
        return res.status(401).json({ message: "Token invalid or expired" });
    }
};
```

### D. Logout — refresh token destroy

```javascript
router.post("/logout", async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.sendStatus(204);

    const user = await User.findOne({ refreshToken });
    if (user) {
        user.refreshToken = null;   // DB se delete/disable
        await user.save();
    }
    res.sendStatus(204);
});
```

---

## 7. Frontend Example — Auto-Refresh (Axios Interceptor)

Axios me **response interceptor** lagao. Agar 401 (token expired) mile toh automaticaly refresh kar ke wahi request dobara bhejo:

```javascript
// api/axiosInstance.js
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
});

// HAR request me access token add karo
axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

// response me 401 → refresh → request retry
axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem("refreshToken");
                const { data } = await axios.post(
                    "http://localhost:5000/api/auth/refresh",
                    { refreshToken }
                );
                localStorage.setItem("accessToken", data.accessToken);
                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
                return axiosInstance(originalRequest); // wahi request retry
            } catch (err) {
                localStorage.clear();
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);
```

---

## 8. Tokens kahan store karein?

| Storage | Pros | Cons |
|---------|------|------|
| **localStorage** | Simple, code me access aasan | **XSS** attack me attacker access token chura sakta hai (jo bhi JS us page par chalega) |
| **httpOnly Cookie** | JavaScript access nahi kar sakta → XSS se safe | CSRF attack ka risk; refresh ke liye extra setup |

> **Best Practice:** Access token ko **memory/localStorage**, aur Refresh token ko **httpOnly cookie** me rakho.

Example — refresh token ko httpOnly cookie me bhejna:
```javascript
res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,      // HTTPS par hi
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 din
});
```

---

## 9. Access Token vs Refresh Token — Comparison Table

| Feature | Access Token | Refresh Token |
|---------|-------------|---------------|
| **Kaam** | API data access | Naya access token banana |
| **Lifetime** | Short (15 min – 1 hr) | Long (7 – 30 din) |
| **Kaha bhejte** | Har request ke header me | Sirf `/refresh` endpoint par |
| **Storage** | Frontend (memory/localStorage) | httpOnly cookie / DB |
| **Leak hone par damage** | Kam (jaldi expire) | Jyada (lamba chalega) |
| **DB me store** | Zaroori nahi (stateless) | Optionally (logout/reuse detect) |
| **Khud access deta hai?** | Ha (protected API ko) | Nahi (sirf naya token deta hai) |

---

## 10. Security Best Practices

1. **Secret keys** hamesha `.env` me rakho — kabhi code ya GitHub par nahi.
2. Access token **short** rakho (`15m`) taaki leak hone par bhi damage kam.
3. Refresh token ko **httpOnly cookie** me rakho (XSS se safe).
4. Hindi phrase: "**Refresh token kabhi API data access ke liye use mat karo**" — sirf refresh ke liye.
5. Har refresh par **naya refresh token** bhi banao (rotation) — reuse detect karne ke liye.
6. Logout par refresh token ko **DB se delete** karo.
7. `sameSite: "strict"` + `secure: true` use karo.
8. HTTPS required — bina encryption ke tokens **man-in-the-middle** me leak ho sakte.

---

## 11. Real-Life Analogy (Samajhne ke liye)

Socho ek **night club** (protected server) hai:

- **Access Token** = Entry pass jo **stamp** hai. Club se baahar aaye toh stamp **fade** ho jaata hai (15 min).
- **Refresh Token** = Aapka **ID card**. Stamp fade hone par gateman se kehte ho "mera ID card dekho, dobara stamp laga do" → naya access token milta hai.
- **Logout** = ID card gateman ko de do (refresh token delete) → ab aage entry nahi milegi.

```
[Login] ──▶ Stamp (access) + ID card (refresh)
  │
  ▼
[Request] ──▶ stamp dikhao ✅ data
  │
  ▼  (stamp fade)
[Request] ──▶ stamp dikhao ❌ 401
  │
  ▼
[Refresh] ──▶ ID card dikhao → naya stamp (naya access token)
  │
  ▼
[Request] ──▶ naya stamp dikhao ✅ data
```

---

## Key Takeaways (Yaad Rakho)

1. **Access Token** = short-lived, har request me, data access ke liye.
2. **Refresh Token** = long-lived, sirf naya access token lene ke liye.
3. Access token sirf `expiresIn` wala **JWT** hai — isliye verify middleware se hota hai.
4. Refresh token ka main faayda = **security + badhiya user experience** (baar-baar login nahi).
5. Production-grade apps me **Redis/DB** me refresh token store karke revocation (logout) support karte hain.