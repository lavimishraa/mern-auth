# 🔐 MERN Authentication System

A full-stack **MERN Authentication Project** that allows users to **register and login securely** using **JWT authentication**.  
The project is fully deployed with a live frontend and backend.

---

## 🚀 Live Demo

- **Frontend (Vercel):**  
  https://mern-auth-opal-one.vercel.app

- **Backend (Render):**  
  https://mern-auth-backend-upx9.onrender.com

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- HTML, CSS

### Backend
- Node.js
- Express.js
- JWT (JSON Web Token)
- bcryptjs

### Database
- MongoDB Atlas
- Mongoose

### Deployment & Tools
- Frontend: Vercel
- Backend: Render
- Version Control: Git & GitHub

---

## ✨ Features

- User Registration
- User Login
- Password hashing with bcrypt
- JWT-based authentication
- Secure REST APIs
- Client-side routing with React Router
- Fully deployed MERN application

---

## 📂 Project Structure
mern-auth/
│
├── backend/
│ ├── models/
│ │ └── User.js
│ ├── routes/
│ │ └── authRoutes.js
│ ├── server.js
│ └── package.json
│
└── frontend/
├── src/
│ ├── pages/
│ │ ├── Login.js
│ │ ├── Register.js
│ │ └── Auth.css
│ ├── App.js
│ ├── index.js
│ └── index.css
├── vercel.json
└── package.json


---

## ⚙️ Installation & Setup (Local)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/LaviMishraa/mern-auth.git
cd mern-auth
cd backend
npm install
node server.js
http://localhost:5000
```
### Frontend Setup
cd frontend
npm install
npm start
