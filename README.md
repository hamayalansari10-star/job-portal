<div align="center">

# 💼 JobConnect — Job Portal & Freelance Marketplace

### A full-stack platform connecting job seekers with employers, built on the MERN stack.

<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

<br/>

![Status](https://img.shields.io/badge/status-in%20development-yellow?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Made with Love](https://img.shields.io/badge/made%20with-%E2%9D%A4-red?style=flat-square)

</div>

---

## 📖 About The Project

**JobConnect** is a full-stack job portal that connects **Job Seekers** with **Employers** — think of it as a lightweight LinkedIn Jobs / Rozee.pk clone. Employers can post job listings and manage applicants, while job seekers can browse listings, apply with a resume, and track their application status — all in real time.

This project was built to demonstrate practical, end-to-end full-stack development skills: authentication, role-based access control, file handling, RESTful API design, and a responsive, modern UI.

> 🚧 **This project is actively under development.** Features and sections below will be updated as progress continues.

---

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🔐 | **Authentication** | Secure JWT-based login/register with role-based access (Job Seeker / Employer) |
| 📋 | **Job Listings** | Employers can create, update, and delete job postings |
| 🔍 | **Search & Filter** | Find jobs by title, location, category, and salary range |
| 📎 | **Resume Upload** | Seekers apply with resumes uploaded via Cloudinary |
| 📊 | **Dashboards** | Separate dashboards for Employers (manage applicants) and Seekers (track applications) |
| 🔔 | **Real-Time Notifications** | Live updates via Socket.io when application status changes |
| 📱 | **Responsive Design** | Fully responsive UI built with Tailwind CSS |

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|:---:|:---:|
| **Frontend** | React.js, Tailwind CSS, React Router, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Authentication** | JWT, bcrypt.js |
| **File Storage** | Cloudinary |
| **Real-Time** | Socket.io |
| **Deployment** | Vercel (Frontend) · Render (Backend) · MongoDB Atlas (Database) |

</div>

---

## 🗂️ Project Structure

```
job-portal/
│
├── frontend/                  # React application
│   ├── src/
│   │   ├── pages/              # Home, Jobs, JobDetails, Apply, Dashboards
│   │   ├── components/         # Reusable UI components
│   │   ├── context/             # Auth context
│   │   └── api/                  # Axios instance & API calls
│   └── ...
│
├── backend/                   # Node.js + Express server
│   ├── models/                 # User, Job, Application schemas
│   ├── routes/                  # Auth, User, Job, Application routes
│   ├── controllers/            # Business logic
│   ├── middleware/             # JWT auth middleware
│   └── config/                   # Database connection
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (free tier)
- Cloudinary account (free tier)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/job-portal.git
cd job-portal

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Run Locally

```bash
# Run backend (from /backend)
npm run dev

# Run frontend (from /frontend, in a new terminal)
npm run dev
```

The app will be available at `http://localhost:5173` 🎉

---

## 📸 Screenshots

> _Coming soon — will be added as UI development progresses._

---

## 🌐 Live Demo

> 🔗 _Live link coming soon after deployment._

---

## 🗺️ Roadmap

- [x] Project planning & architecture
- [ ] Backend authentication APIs
- [ ] Job & Application APIs
- [ ] Frontend UI (public pages)
- [ ] Employer & Seeker dashboards
- [ ] Real-time notifications
- [ ] Deployment

---

## 🤝 Contributing

This is currently a solo learning/portfolio project, but suggestions and feedback are always welcome! Feel free to open an issue.

---

## 📬 Contact

**Your Name**
📧 your.email@example.com · 🔗 [LinkedIn])  https://www.linkedin.com/in/hamayal-ansari-a12b10371/?skipRedirect=true· 💻 [GitHub]https://github.com/hamayalansari10-star

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

</div>
