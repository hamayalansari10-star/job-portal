# 💼 JobConnect — Job Portal & Freelance Marketplace

<div align="center">

### 🚀 Connecting Talent with Opportunity

**A modern full-stack job marketplace built with the MERN stack, designed to connect job seekers with employers through a secure, scalable, and user-friendly platform.**

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-5-000000?style=for-the-badge\&logo=express\&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)

<br/>

**🔐 JWT Authentication · 👥 Role-Based Access · 📎 Resume Upload · 🔍 Advanced Search · 🔔 Real-Time Updates**

</div>

---

## 📖 About The Project

**JobConnect** is a full-stack job portal and freelance marketplace designed to bridge the gap between **job seekers and employers**.

The platform allows employers to publish job opportunities, manage listings, review applications, and communicate application updates. Job seekers can create profiles, upload resumes, discover relevant opportunities, apply for positions, and track their applications from a personalized dashboard.

The project is inspired by real-world platforms such as **LinkedIn Jobs, Rozee.pk, Fiverr, and Upwork**, while keeping the architecture focused enough to demonstrate the core concepts of modern full-stack development.

> 🚧 **Project Status:** Actively under development. New features and improvements are being added as development progresses.

---

# 🎯 Project Goals

JobConnect was built with the following goals:

* Build a production-style MERN stack application
* Implement secure authentication and authorization
* Practice RESTful API architecture
* Work with relational concepts using MongoDB references
* Handle file uploads and cloud storage
* Build role-specific dashboards
* Implement search and filtering
* Add real-time application notifications
* Create a responsive and accessible UI
* Deploy a complete full-stack application

---

# 👥 User Roles

JobConnect provides two primary user experiences.

### 👨‍💻 Job Seeker

Job seekers can:

* Create an account
* Build and manage their profile
* Add skills and professional information
* Upload their resume
* Browse available jobs
* Search and filter opportunities
* View detailed job descriptions
* Apply for jobs
* Track submitted applications
* Monitor application status
* Receive real-time status notifications

### 🏢 Employer

Employers can:

* Create an employer account
* Create and manage company information
* Post new job opportunities
* Edit existing job postings
* Delete job postings
* View applicants
* Review candidate profiles
* Access submitted resumes
* Update application status
* Manage active and closed positions

---

# ✨ Core Features

| Feature                        | Description                                                       |
| ------------------------------ | ----------------------------------------------------------------- |
| 🔐 **JWT Authentication**      | Secure registration and login using JSON Web Tokens               |
| 👥 **Role-Based Access**       | Separate permissions and dashboards for Job Seekers and Employers |
| 📋 **Job Management**          | Create, update, delete and manage job postings                    |
| 🔍 **Search & Filtering**      | Search jobs by title, location, category and salary               |
| 📎 **Resume Upload**           | Upload and manage resumes using Cloudinary                        |
| 📊 **Interactive Dashboards**  | Personalized dashboards for both user roles                       |
| 📝 **Job Applications**        | Apply to jobs and track application progress                      |
| 🔔 **Real-Time Notifications** | Application status updates through Socket.io                      |
| 🛡️ **Protected Routes**       | Secure frontend and backend routes                                |
| 📱 **Responsive UI**           | Mobile, tablet and desktop friendly interface                     |
| ☁️ **Cloud Storage**           | Resume files stored securely using Cloudinary                     |
| 🌐 **Deployment Ready**        | Frontend, backend and database configured for cloud deployment    |

---

# 🧠 How It Works

```text
                         JOBCONNECT
                             │
              ┌──────────────┴──────────────┐
              │                             │
        👨‍💻 JOB SEEKER                🏢 EMPLOYER
              │                             │
        Register/Login                Register/Login
              │                             │
        Create Profile                Create Company Profile
              │                             │
        Browse Jobs                   Post Jobs
              │                             │
        Search & Filter               Manage Jobs
              │                             │
        Upload Resume                 View Applicants
              │                             │
        Apply for Job                 Review Applications
              │                             │
        Track Status                  Update Status
              │                             │
              └──────────────┬──────────────┘
                             │
                       🔔 Real-Time
                       Notifications
```

---

# 🏗️ Application Architecture

```text
┌──────────────────────────────────────────┐
│              React Frontend              │
│                                          │
│  Pages · Components · Context · Axios   │
└────────────────────┬─────────────────────┘
                     │
                     │ REST API
                     ▼
┌──────────────────────────────────────────┐
│          Node.js + Express Backend       │
│                                          │
│ Routes → Controllers → Middleware       │
└────────────────────┬─────────────────────┘
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
┌──────────────────┐    ┌──────────────────┐
│ MongoDB Atlas    │    │   Cloudinary     │
│                  │    │                  │
│ Users            │    │ Resume Storage   │
│ Jobs             │    │ File Management  │
│ Applications     │    │                  │
└──────────────────┘    └──────────────────┘
                     │
                     ▼
              🔔 Socket.io
           Real-Time Events
```

---

# 🛠️ Tech Stack

## Frontend

* **React.js** — Component-based UI
* **Tailwind CSS** — Responsive styling
* **React Router** — Client-side routing
* **Axios** — API communication
* **Context API** — Authentication/state management

## Backend

* **Node.js** — JavaScript runtime
* **Express.js** — REST API framework
* **Mongoose** — MongoDB ODM
* **JWT** — Authentication
* **bcrypt.js** — Password hashing
* **Socket.io** — Real-time communication

## Database & Storage

* **MongoDB Atlas** — Cloud database
* **Cloudinary** — Resume/file storage

## Deployment

* **Vercel** — Frontend
* **Render** — Backend
* **MongoDB Atlas** — Database
* **Cloudinary** — File storage

---

# 🗂️ Project Structure

```text
jobconnect/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── JobCard/
│   │   │   ├── SearchBar/
│   │   │   └── ProtectedRoute/
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Jobs.jsx
│   │   │   ├── JobDetails.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Apply.jsx
│   │   │   ├── SeekerDashboard.jsx
│   │   │   └── EmployerDashboard.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── api/
│   │   │   └── axios.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Job.js
│   │   └── Application.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── jobRoutes.js
│   │   └── applicationRoutes.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── jobController.js
│   │   └── applicationController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── utils/
│   │   └── generateToken.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🔐 Authentication & Security

Security is an important part of JobConnect.

The application uses:

* JWT-based authentication
* Password hashing with bcrypt.js
* Protected API endpoints
* Role-based authorization
* Protected frontend routes
* Environment variables for sensitive credentials
* Server-side validation
* Duplicate application prevention

### Authentication Flow

```text
Register
   ↓
Password → bcrypt hashing
   ↓
User saved in MongoDB
   ↓
Login
   ↓
Credentials verified
   ↓
JWT generated
   ↓
Token sent to client
   ↓
Protected API requests
   ↓
Backend verifies JWT
   ↓
Access granted
```

---

# 📡 API Modules

The backend follows a RESTful API structure.

### 🔐 Authentication

```text
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/me
```

### 💼 Jobs

```text
GET    /api/jobs
GET    /api/jobs/:id
POST   /api/jobs
PUT    /api/jobs/:id
DELETE /api/jobs/:id
```

### 📝 Applications

```text
POST   /api/applications
GET    /api/applications/my
GET    /api/applications/job/:jobId
PATCH  /api/applications/:id/status
```

### 👤 Users

```text
GET    /api/users/profile
PUT    /api/users/profile
```

> API routes may change as development progresses.

---

# 🗄️ Database Design

The application currently revolves around three core entities:

```text
┌──────────────┐
│    USER      │
├──────────────┤
│ _id          │
│ name         │
│ email        │
│ password     │
│ role         │
│ skills[]     │
│ resume       │
└──────┬───────┘
       │
       │
       ├──────────────────┐
       │                  │
       ▼                  ▼
┌──────────────┐    ┌────────────────┐
│     JOB      │    │  APPLICATION   │
├──────────────┤    ├────────────────┤
│ _id          │    │ _id            │
│ title        │    │ job            │
│ description  │    │ applicant      │
│ company      │    │ resume         │
│ location     │    │ status         │
│ salary       │    │ appliedAt      │
│ employer     │    └────────────────┘
└──────────────┘
```

MongoDB references connect users, jobs and applications while keeping the data model flexible.

---

# 📎 Resume Upload Flow

```text
Job Seeker
    │
    ▼
Select Resume
    │
    ▼
Frontend
    │
    ▼
Express API
    │
    ▼
Cloudinary
    │
    ▼
Resume URL
    │
    ▼
MongoDB Application
```

The application stores the resume reference rather than storing the actual file directly inside MongoDB.

---

# 🔔 Real-Time Notifications

JobConnect uses **Socket.io** to provide real-time application updates.

Example:

```text
Employer
   │
   │ Changes application status
   ▼
Backend
   │
   │ Socket Event
   ▼
Socket.io
   │
   ▼
Job Seeker
   │
   ▼
🔔 "Your application status has been updated."
```

This allows users to receive important updates without manually refreshing the page.

---

# 🔎 Search & Filtering

Job seekers can discover relevant opportunities using:

* 🔍 Keyword search
* 📍 Location
* 💼 Job category
* 💰 Salary range
* 🏠 Remote / On-site
* 🕐 Full-time / Part-time

The search system is designed to make finding relevant opportunities fast and convenient.

---

# 📊 Dashboard Experience

### Job Seeker Dashboard

```text
┌─────────────────────────────────┐
│        JOB SEEKER DASHBOARD     │
├─────────────────────────────────┤
│ Applied Jobs        12          │
│ Pending             05          │
│ Shortlisted         03          │
│                                 │
│ Recent Applications             │
│ ─────────────────────────────   │
│ Frontend Developer   Pending    │
│ React Developer      Reviewed   │
│ UI Developer         Shortlist  │
└─────────────────────────────────┘
```

### Employer Dashboard

```text
┌─────────────────────────────────┐
│        EMPLOYER DASHBOARD       │
├─────────────────────────────────┤
│ Active Jobs          08         │
│ Total Applicants     42         │
│ Shortlisted          10         │
│                                 │
│ Recent Applications             │
│ ─────────────────────────────   │
│ Ali Khan             Pending    │
│ Sara Ahmed            Reviewed  │
│ Hamza Malik           Shortlist │
└─────────────────────────────────┘
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

* Node.js **v18+**
* npm
* Git
* MongoDB Atlas account
* Cloudinary account

---

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/jobconnect.git

cd jobconnect
```

---

## 2️⃣ Install Backend

```bash
cd backend
npm install
```

---

## 3️⃣ Install Frontend

```bash
cd ../frontend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secure_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> ⚠️ Never commit your `.env` file or expose your secret credentials publicly.

---

# ▶️ Run Locally

### Start Backend

```bash
cd backend

npm run dev
```

### Start Frontend

Open another terminal:

```bash
cd frontend

npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

---

# 📸 Screenshots

> 🚧 Screenshots will be added as the UI development progresses.

Planned screenshots:

* Home Page
* Job Listings
* Job Details
* Login / Register
* Job Seeker Dashboard
* Employer Dashboard
* Application Management
* Mobile Responsive Views

---

# 🌐 Live Demo

🚧 **Coming Soon**

The production application will be deployed using:

```text
Frontend → Vercel
Backend  → Render
Database → MongoDB Atlas
Storage  → Cloudinary
```

---

# 🗺️ Development Roadmap

### Phase 1 — Planning & Setup

* [x] Project idea finalized
* [x] MERN architecture planned
* [x] Database structure planned
* [x] Folder structure created

### Phase 2 — Backend

* [ ] Express server setup
* [ ] MongoDB connection
* [ ] User model
* [ ] JWT authentication
* [ ] Password hashing
* [ ] Role-based authorization
* [ ] Job APIs
* [ ] Application APIs
* [ ] Resume upload
* [ ] API validation

### Phase 3 — Frontend

* [ ] React setup
* [ ] Responsive navigation
* [ ] Authentication pages
* [ ] Job listing page
* [ ] Job details page
* [ ] Search & filtering
* [ ] Application page
* [ ] Job Seeker dashboard
* [ ] Employer dashboard

### Phase 4 — Advanced Features

* [ ] Socket.io notifications
* [ ] Application status system
* [ ] Advanced filtering
* [ ] Profile management
* [ ] Employer company profiles
* [ ] Pagination
* [ ] Loading states
* [ ] Error handling

### Phase 5 — Deployment

* [ ] Production environment variables
* [ ] Deploy backend
* [ ] Deploy frontend
* [ ] Connect MongoDB Atlas
* [ ] Configure Cloudinary
* [ ] Test production APIs
* [ ] Final UI optimization

---

# 🔮 Future Improvements

After completing the core version, the platform can be extended with:

* 💬 Employer ↔ Job Seeker messaging
* 🤖 AI-powered job recommendations
* 📄 AI resume analysis
* ⭐ Employer reviews
* ❤️ Saved jobs
* 🔔 Email notifications
* 💳 Freelance project payments
* 🧑‍💼 Company verification
* 📈 Employer analytics
* 🧠 Skill-based job matching
* 🌙 Dark mode
* 🌍 Multi-language support

> These features are planned for future iterations and are not part of the initial MVP.

---

# 🎓 What This Project Demonstrates

JobConnect demonstrates practical experience with:

```text
Frontend Development
        +
Backend Development
        +
Database Design
        +
Authentication
        +
Authorization
        +
REST APIs
        +
File Upload
        +
Cloud Services
        +
Real-Time Communication
        +
Deployment
```

This makes the project suitable as a **full-stack development portfolio project** and a practical demonstration of modern web development concepts.

---

# 🤝 Contributing

This is currently a solo learning and portfolio project.

Suggestions, feedback, and improvements are welcome.

If you find a bug or have an idea for improvement, feel free to open an issue.

---

# 👨‍💻 Author

<div align="center">

### Hamayal Ansari

**BS Computer Science Student · Full-Stack Developer · Graphic Designer**

Building projects, learning modern technologies, and continuously improving as a developer.

[LinkedIn] https://www.linkedin.com/in/hamayal-ansari-a12b10371/?skipRedirect=true · [GitHub] https://github.com/hamayalansari10-star

</div>

---

# ⭐ Support

If you find **JobConnect** useful or interesting, consider giving the repository a ⭐.

Your support helps motivate further development!

---

<div align="center">

### 💼 JobConnect

**Find Opportunities. Discover Talent. Build Careers.**

Made with ❤️ using the MERN Stack.

</div>
