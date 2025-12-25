# 🛒 MERN E-Commerce Platform

A full-stack **E-Commerce Web Application** built using the **MERN Stack (MongoDB, Express, React, Node.js)** with **JWT Authentication**, **Admin Panel**, **Order Management**, and **Secure APIs**.

---

## 🚀 Features

### 👤 User Features
- User Registration & Login
- JWT-based Authentication
- Product Listing
- Add to Cart
- Place Orders
- Order Success Page

### 🔐 Admin Features
- Admin-only Protected Routes
- View All Orders
- Manage Products (Add / Edit / Delete)
- Mark Orders as Delivered

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

## 📁 Project Structure

ecommerce-mern/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── screens/
│ │ │ ├── LoginScreen.js
│ │ │ ├── RegisterScreen.js
│ │ │ ├── HomeScreen.js
│ │ │ ├── CartScreen.js
│ │ │ ├── PlaceOrderScreen.js
│ │ │ └── OrderSuccessScreen.js
│ │ ├── services/
│ │ ├── utils/
│ │ ├── App.js
│ │ └── index.js
│
└── README.md

yaml
Copy code

---

## 🔐 Environment Variables

Create a `.env` file inside **backend/**

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
▶️ Run Project Locally
1️⃣ Clone Repository
bash
Copy code
git clone https://github.com/your-username/ecommerce-mern.git
cd ecommerce-mern
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
npm start
Backend runs on
👉 http://localhost:5000

3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
Frontend runs on
👉 http://localhost:3000

🔑 Authentication Flow
JWT token stored in localStorage

Token sent in headers as:

makefile
Copy code
Authorization: Bearer <token>
Protected routes for users & admins

🧾 API Endpoints
Auth
POST /api/users/register

POST /api/users/login

Orders
POST /api/orders

GET /api/orders/myorders

Admin
GET /api/admin/orders

PUT /api/admin/orders/:id/deliver

🔮 Upcoming Features
Product Image Upload (Cloudinary)

Payment Gateway Integration

Admin Dashboard Analytics

Product Reviews & Ratings

👨‍💻 Author
Lakshita Sharma
MERN Stack Developer

⭐ Support
If you like this project, give it a star ⭐ on GitHub!

yaml
Copy code

---

### ✅ What this fixes
✔ Clean Markdown  
✔ Proper headings  
✔ GitHub-friendly  
✔ Matches VS Code preview  
✔ Resume & portfolio ready  

---

Next logical step 🔥  
👉 **Admin Orders Panel (UI + API)**  

Say **“Admin step 🚀”** and we’ll build it properly.






