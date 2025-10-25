# 📰 MERN Blog Application

A full-stack **MERN (MongoDB, Express, React, Node.js)** blog platform with **authentication (Clerk)**, **TailwindCSS styling**, and a fully functional **RESTful API**.  
Users can create, edit, and delete blog posts, add featured images, and comment on articles.  

---

## 🚀 Project Overview

This project demonstrates a complete MERN integration — from backend API design to a dynamic frontend UI.

### 🔧 Tech Stack
- **Frontend:** React + Vite + TailwindCSS + Axios  
- **Backend:** Node.js + Express.js + MongoDB (Mongoose)  
- **Auth:** Clerk Authentication  
- **State Management:** React Context + Hooks  
- **Deployment Ready:** Configurable with `.env` variables  

---

## ⚙️ Setup Instructions

### 🧩 Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) v18+  
- [MongoDB](https://www.mongodb.com/try/download/community) (local or Atlas cloud)
- A [Clerk account](https://clerk.com/) for authentication keys

---

### 📦 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/mern-stack-integration-Ngaukon.git
cd mern-stack-integration-Ngaukon
````

---

### 🖥️ 2. Backend Setup (server)

```bash
cd server
npm install
```

#### Create `.env` file in `/server`:

```bash
PORT=5000
MONGODB_URI=mongodb+srv://<your-db-uri>
JWT_SECRET=your-secret
NODE_ENV=development
```

#### Run the server:

```bash
npm start
```

> The backend will run on `http://localhost:5000`

---

### 💻 3. Frontend Setup (client)

```bash
cd ../client
npm install
```

#### Create `.env` file in `/client`:

```bash
VITE_API_URL=http://localhost:5000/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
```

#### Run the frontend:

```bash
npm run dev
```

> The app will be available on `http://localhost:5173`

---

## 🧠 API Documentation

### 🔹 Posts

| Method   | Endpoint                  | Description                                         |
| -------- | ------------------------- | --------------------------------------------------- |
| `GET`    | `/api/posts`              | Get all posts (supports pagination, search, filter) |
| `GET`    | `/api/posts/:id`          | Get a single post by ID                             |
| `POST`   | `/api/posts`              | Create a new post                                   |
| `PUT`    | `/api/posts/:id`          | Update an existing post                             |
| `DELETE` | `/api/posts/:id`          | Delete a post                                       |
| `POST`   | `/api/posts/:id/comments` | Add a comment to a post                             |

### 🔹 Categories

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| `GET`  | `/api/categories` | Get all categories    |
| `POST` | `/api/categories` | Create a new category |

### 🔹 Auth (via Clerk)

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| `POST` | `/auth/register` | Register a user       |
| `POST` | `/auth/login`    | Login and get a token |

---

## ✨ Features Implemented

### 🖥️ Backend

* ✅ RESTful API architecture
* ✅ CRUD operations for posts and categories
* ✅ MongoDB with Mongoose models
* ✅ Error handling middleware
* ✅ File upload support for featured images
* ✅ Input validation with express-validator or Joi
* ✅ Environment variable management with dotenv

### 💻 Frontend

* ✅ React + Vite setup
* ✅ TailwindCSS styling
* ✅ Axios API service with interceptors
* ✅ React Router for navigation
* ✅ React Context for state management
* ✅ Create/edit post form with validation
* ✅ Search, filter, and pagination
* ✅ Optimistic UI updates
* ✅ Commenting system
* ✅ Authentication with Clerk

---

## 📁 Project Structure

```
mern-stack-integration-Ngaukon/
│
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── main.jsx
│   └── package.json
│
├── server/                 # Backend (Express + MongoDB)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

---

## 🧩 Possible Improvements

* 🧠 Implement role-based access (admin/user)
* 🖼️ Integrate Cloudinary for image storage
* 💬 Real-time comment updates with Socket.io
* 🚀 Deploy to Render (backend) and Vercel/Netlify (frontend)

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Ngaukon [Joseph Ngaukon]**
📧 [[josephlucia100@gmail.com](mailto:josephlucia100@gmail.com)]

---
