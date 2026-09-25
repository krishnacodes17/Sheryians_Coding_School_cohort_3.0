# PRD / SRS Notes (URL Shortener Project)

> Basis: PRD.md — SRS (Software Requirements Specification) ke concepts, detailed notes.

---

## 1. What is SRS?

**SRS = Software Requirements Specification**

Yeh ek formal document hai jo define karta hai:

- **System kya karega** (functionality)
- **System ko kaisa behave karna chahiye** (constraints, quality)
- **Users/System ki kya requirements hain**

### Key Points:
- SRS **design document nahi hai** — yeh *WHAT* batata hai, *HOW* nahi (implementation detail next phase me aata hai).
- Yehi document developers, testers, aur stakeholders ke beech **single source of truth** hota hai.
- Poor SRS = miscommunication → delivery me bugs, delay, cost overrun.

### SRS ke Advantages:
1. Requirements clear ho jaati hain before coding start.
2. Testing team ko expected behavior pata hota hai.
3. Scope creep (features add ho jaana) control hota hai.
4. Estimation (time/cost) accurate ho jaati hai.
5. Maintenance me documentation as reference kaam aata hai.

### SRS ke Components (ideally):
| # | Component | Example (URL Shortener) |
|---|-----------|--------------------------|
| 1 | Introduction | Project ka purpose, scope |
| 2 | Overall Description | Users, environment, assumptions |
| 3 | Functional Requirements | Feature-by-feature specifications |
| 4 | Non-Functional Requirements | Performance, security, usability |
| 5 | External Interfaces | API, DB, UI interfaces |
| 6 | Constraints & Assumptions | Tech stack, regulations |

---

## 2. Types of SRS / Requirements

Requirements 2 main types me divide hoti hain:

### 2.1 Functional Requirements (FR)
> **System ko KYA karna hai**

- Behavior/feature based hote hain.
- Directly testable hote hain ("if input X → output Y").
- Numeric/verbose bhi ho sakte hain — FR IDs assign karte hain (FR-001, FR-002...).

#### URL Shortener ke Functional Requirements (Examples):
| FR ID | Requirement |
|-------|-------------|
| FR-001 | User ek long URL submit kar sakta hai |
| FR-002 | System ek unique short code/URL generate karega (e.g. `https://short.ly/abc123`) |
| FR-003 | Short URL ke click par user original long URL par redirect hoga |
| FR-004 | System duplicate long URL ke liye same short code return karega (agar allowed) |
| FR-005 | User custom alias choose kar sakta hai (e.g. `short.ly/my-link`) |
| FR-006 | Short URLs optional expiry date rakh sakti hain |
| FR-007 | Har click par system count increment karega |
| FR-008 | User apne URLs ki list dekh sakta hai (history) |
| FR-009 | User apne URL delete/disable kar sakta hai |
| FR-010 | Admin basic reporting (total links, total clicks) dekh sakta hai |

### 2.2 Non-Functional Requirements (NFR)
> **System ko KAISI karna chahiye** — quality attributes

- Feature nahi, balki system ki quality measure karte hain.
- Often measurable (e.g., "page load < 2 sec").
- Categories:

| NFR Category | Matlab | URL Shortener Example |
|--------------|--------|----------------------|
| **Performance** | Speed, response time | Redirect response < 200ms; API response < 500ms |
| **Scalability** | Load handle karne ki capacity | 1M+ short URLs; 10K concurrent requests/second |
| **Availability** | Uptime guarantee | 99.9% uptime (SLA) |
| **Security** | Protection | No open redirect; rate limiting; auth required |
| **Reliability** | Consistency | Short URL kabhi bhi kisi aur tak na le jaye |
| **Usability** | Easy to use | UI use karna intuitive ho; link copy ek-click |
| **Portability** | Cross-platform | Browser, mobile, APIs se access hone |
| **Maintainability** | Code easy to change | Modular code, logging, documentation |
| **Persistence** | Data survive karna | URLs aur links restart/crash ke baad bhi bane rahen |

---

## 3. Functional vs Non-Functional — Quick Difference Table

| Basis | Functional (FR) | Non-Functional (NFR) |
|-------|-----------------|----------------------|
| Answer | System **kya** karta hai | System **kaisa** / **kitna** achha karta hai |
| Nature | Behavior/feature | Quality attribute |
| Testing | "Yes"/"No" — output check | Measurable — value check |
| Example | Generate short URL | Redirect < 200ms |

---

## 4. Achi SRS Likhne ke Golden Rules

1. **Unambiguous** — har requirement ek hi interpretation ho (woo/ambiguous words: "fast", "efficient", "user-friendly" se bacho).
2. **Verifiable** — har requirement testable ho.
3. **Complete** — koi missing feature na ho.
4. **Consistent** — koi requirement doosri se conflict na kare.
5. **Traceable** — har FR/NFR unique ID ho taaki design & test cases tak track ho sake.

---

## 5. URL Shortener — SRS Structure (Ready Template)

```
1. INTRODUCTION
   1.1 Purpose
   1.2 Scope
   1.3 Definitions (short URL, alias, redirect)
   1.4 References

2. OVERALL DESCRIPTION
   2.1 Product Perspective
   2.2 User Classes (Anonymous, Registered, Admin)
   2.3 Operating Environment (Web, Mobile, API)
   2.4 Assumptions & Dependencies (unique keys, URL validation)

3. FUNCTIONAL REQUIREMENTS
   FR-001 to FR-0XX  (system op upar wale table me)

4. NON-FUNCTIONAL REQUIREMENTS
   NFR-001 Performance
   NFR-002 Scalability
   NFR-003 Security
   NFR-004 Availability/Reliability
   NFR-005 Usability/Maintainability

5. EXTERNAL INTERFACE REQUIREMENTS
   5.1 User Interfaces (Web UI)
   5.2 Software Interfaces (REST API)
   5.3 Database Interface (PostgreSQL/Redis cache)

6. CONSTRAINTS & ASSUMPTIONS
   - Tech stack: Next.js (App Router), Node.js, Postgres
   - Unique short-code generation: base62 / hash + collision handling
```

---

## 6. Next Steps (Iss PRD ko complete banane ke liye)

- [ ] Har FR ke liye acceptance criteria likho (Given/When/Then)
- [ ] NFR ke liye measurable targets fix karo (e.g., latency, uptime)
- [ ] API endpoints list karo (POST /api/url, GET /:code, DELETE /api/url/:id)
- [ ] Database schema rough draft banao (urls table, clicks table)
- [ ] Non-goals likho (kya is version me NAHI karna — e.g., analytics dashboard)
```