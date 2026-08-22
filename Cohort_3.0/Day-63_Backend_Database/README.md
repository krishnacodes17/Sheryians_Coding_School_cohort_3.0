# Day-63 : Backend Database

---

# 1. Introduction to Database

- A **Database** is an organized collection of data stored electronically, which can be easily accessed, managed and updated.
- Think of it like a **digital filing cabinet** — data is stored in a structured way so we can find it quickly.

### Why do we need a Database?
- **Storage** → Store large amount of data permanently (data survives server restart).
- **Fast Access** → Searching/reading data is very fast (indexes).
- **CRUD Operations** → Easy Create, Read, Update, Delete.
- **Security** → Authentication (username/password) & Authorization (roles/permissions).
- **Concurrency** → Multiple users can read/write at the same time safely.
- **Data Integrity** → Rules keep data correct and consistent.

### Example (Real life vs Database)

| Real Life | Database |
|---|---|
| School register book | Students table/collection |
| One student entry | One row / document |
| Name, Class, Roll no columns | Fields / keys |

### Without Database vs With Database
```js
// ❌ Without DB -> data lost when server restarts
let users = [{ name: "Aman", age: 21 }]; // stored in RAM only

// ✅ With DB -> data saved permanently on disk
// await db.collection("users").insertOne({ name: "Aman", age: 21 });
```

---

# 2. Types of Database (Explained in detail)

## (a) Relational Database (SQL / RDBMS)
- Data is stored in **Tables** (rows & columns).
- Uses **SQL** (Structured Query Language) to query data.
- Has **fixed schema** (structure decided before storing).
- Supports **relationships** between tables using keys:
  - **Primary Key** → unique id of a row.
  - **Foreign Key** → connects one table to another.
- Best for: Banking, E-commerce orders, Inventory (data that must be consistent).

### Example Table: `students`

| id (PK) | name | class | age |
|---|---|---|---|
| 1 | Aman | 10 | 15 |
| 2 | Riya | 10 | 16 |

### SQL Query Example
```sql
SELECT * FROM students WHERE age > 15;

INSERT INTO students (id, name, class, age) VALUES (3, "Karan", 10, 15);
```

### Popular Relational Databases (names)
1. **MySQL** – most popular open-source SQL DB (used by WordPress, YouTube early days).
2. **PostgreSQL** – advanced open-source SQL DB.
3. **Oracle Database** – enterprise level, paid.
4. **Microsoft SQL Server** – by Microsoft, used in big companies.
5. **SQLite** – lightweight, file-based DB (used in mobile apps).

---

## (b) Non-Relational Database (NoSQL)
- Data is NOT stored in tables. It can be stored as **documents, key-value pairs, graphs or wide-columns**.
- **Flexible schema** → structure can change anytime.
- Horizontally scalable (easy to add more servers).
- Best for: Real-time apps, chat apps, big data, rapidly changing projects.

### Types of NoSQL Databases:

#### 1. Document-Based → stores data as documents (JSON/BSON)
Example: **MongoDB**, CouchDB, Firebase Firestore

```json
// One document in "students" collection
{
  "_id": 1,
  "name": "Aman",
  "class": 10,
  "skills": ["html", "css"]   // arrays allowed easily!
}
```

#### 2. Key-Value Based → stores data as key-value pair (like a dictionary/map)
Example: **Redis**, DynamoDB, Memcached
```js
SET name "Aman"      // key = name, value = Aman
GET name             // returns "Aman"
```
Used for: caching, sessions, leaderboards (super fast).

#### 3. Graph-Based → stores data as nodes & edges (relationships)
Example: **Neo4j**, Amazon Neptune
Used for: social networks (friends of friends), recommendation engines.
```
(Aman) ---[friend]---> (Riya) ---[friend]---> (Karan)
```

#### 4. Wide-Column Based → stores data in columns, good for huge data
Example: **Cassandra**, HBase
Used for: IoT data, time-series data, Netflix/Facebook scale systems.

---

## SQL vs NoSQL Comparison (Important ⭐)

| Feature | SQL (Relational) | NoSQL (Non-Relational) |
|---|---|---|
| Storage | Tables (rows/columns) | Documents / Key-value / Graphs |
| Schema | Fixed (predefined) | Flexible/Dynamic |
| Query Language | SQL | Varies (MQL, etc.) |
| Scalability | Vertical (bigger server) | Horizontal (more servers) |
| Relationships | Joins + Foreign Keys | Embedded docs / references |
| Best For | Banking, Billing | Chat apps, Social media, Big data |
| Examples | MySQL, PostgreSQL, Oracle | MongoDB, Redis, Cassandra |

---

# 3. Database Providers (Who hosts/manages the database for you)

- **Database Provider** = company that gives you database as a service (**DBaaS**) — they handle servers, backup, security; you just use it.

| Provider | Service Name | Supports |
|---|---|---|
| **MongoDB (Atlas)** | MongoDB Atlas | MongoDB |
| Amazon (AWS) | RDS, DynamoDB | SQL + NoSQL |
| Google Cloud | Firestore, Cloud SQL | SQL + NoSQL |
| Microsoft Azure | Azure Cosmos DB, SQL DB | SQL + NoSQL |
| Firebase (Google) | Firebase Realtime DB | NoSQL |
| Supabase | Supabase | PostgreSQL |
| Railway / Render | Managed DB hosting | MySQL, Postgres |

### Example flow:
```
You (developer) --> MongoDB Atlas (provider) --> your data stored in cloud
```

---

# 4. Introduction of MongoDB

- **MongoDB is a company** which provides database services to the users.
- MongoDB is a popular **NoSQL, document-based, open-source database**.
- Data is stored in **JSON-like documents** (actually BSON - Binary JSON).

### Important Terminology ⭐
- **DB** means **Database** → container of all your collections.
- **Atlas** means **storage provider** → MongoDB's cloud platform where our database lives (no need to install/manage servers).
- **GUI** means **Graphical User Interface (visualization)** → tool to SEE and manage data visually instead of commands. Example: **MongoDB Compass** & Atlas web UI.

### MongoDB Structure (hierarchy)
```
Cluster (server group in Atlas)
 └── Database          e.g. schoolDB
      └── Collection   e.g. students   (like a table)
           └── Document { "name": "Aman" }  (like a row)
                └── Field "name"            (like a column)
```

### SQL vs MongoDB Terms

| SQL | MongoDB |
|---|---|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |
| Primary Key | `_id` (auto generated) |
| JOIN | $lookup / embed |

### Example Document (JSON-like)
```json
{
  "_id": "665f1a2b3c4d5e6f7a8b9c0d",
  "name": "Aman",
  "age": 21,
  "skills": ["HTML", "CSS", "JS"],
  "address": { "city": "Delhi", "pin": 110001 }
}
```

### Why MongoDB is popular?
- JSON-like data → easy for JS developers (`{ }` objects everywhere).
- Flexible schema → add new fields anytime without migration.
- Fast development with Node.js/Express (MEAN/MERN stack).
- Free tier available on **MongoDB Atlas**.

---

# 5. Installation of MongoDB

There are 2 ways to use MongoDB:
1. **Locally** → install MongoDB Community Server on your PC.
2. **Cloud** → use **MongoDB Atlas** (recommended, free tier available).

## Step 1: Download & Install (Local)
- Go to official site → https://www.mongodb.com/try/download/community
- Choose your OS (Windows/Mac) → download **MSI installer** → Install.
- During installation you can also install **MongoDB Compass** (GUI) by checking the checkbox.

## Step 2: Checking Version ✅

Open terminal (CMD / PowerShell / Git Bash):

```bash
mongod --version     # checks MongoDB Server version
```
or
```bash
mongosh --version    # checks MongoDB Shell version
```

Output example:
```
Build Info: {
    "version": "7.0.14",
    ...
}
```

If version prints → installation successful ✔️
(If `'mongod' is not recognized` error → add MongoDB `bin` folder to system PATH environment variable.)

Connect to local server:
```bash
mongosh
```

Quick test inside shell:
```js
show dbs                          // list all databases
use school                        // create/switch to database "school"
db.students.insertOne({name:"Aman", age:21})   // insert document
db.students.find()                // read all documents
```

## Step 3: Creating Account on MongoDB Atlas + Setup Cluster & Database ☁️

### (a) Create Account
1. Go to → https://www.mongodb.com/cloud/atlas
2. Click **Try Free / Sign Up**
3. Register with Google / Email.

### (b) Create a Cluster
1. After login → click **Build a Database** (Create Deployment).
2. Choose plan → **M0 FREE tier** (512MB, free forever).
3. Choose region (nearest to you, e.g. Mumbai `ap-south-1`) → **Create**.
4. Cluster gets created in 1–3 minutes.

> 📌 Cluster = group of servers where MongoDB runs your database.

### (c) Setup Database User (Authentication)
1. Popup asks → **Username & Password** → set them (save these! needed for connection string).
   - Example: username `myuser`, password `mypassword123`.

### (d) Network Access (Allow your IP)
1. Left sidebar → **Network Access** → **Add IP Address**.
2. Click **ALLOW ACCESS FROM ANYWHERE** (`0.0.0.0/0`) → Confirm (easy for learning).
   - (For production, allow only your own IP.)

### (e) Connect Cluster to Your App
1. Cluster → click **Connect**.
2. Choose **Drivers** (Node.js).
3. Copy the **Connection String**:
```
mongodb+srv://myuser:<db_password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```
Replace `<db_password>` with your real password.

### (f) Connect using Node.js (example)
```bash
npm install mongoose
```
```js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://myuser:mypassword123@cluster0.xxxxx.mongodb.net/schoolDB")
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.log("❌ Connection failed", err));
```

### (g) Connect using Compass (GUI Visualization)
1. In Atlas → **Connect** → **Compass** → copy URI.
2. Open **MongoDB Compass** → paste URI → **Connect**.
3. Now you can visually see databases, collections & documents 🎉

### (h) Create Database & Collection in Atlas
- In Atlas dashboard → **Browse Collections** → **Add My Own Data**
- Enter Database name → `schoolDB`, Collection name → `students` → **Create**.

Done! 🎯 Your cloud database is ready to store data.

---
