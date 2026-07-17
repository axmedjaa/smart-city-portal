# Smart City Complaint & Service Portal

A full-stack web application built with **Spring Boot**, **React.js**, and **PostgreSQL** that enables citizens to report city issues, allows department officers to manage complaints, and provides administrators with system management, analytics, and complaint tracking.

---

# Project Overview

The Smart City Complaint & Service Portal provides an online platform where citizens can report public issues, monitor complaint status, and communicate with local authorities.

The application implements secure JWT authentication, role-based authorization, complaint management, analytics, and SLA monitoring.

---

# Technologies Used

## Backend

- Java 23
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven
- Lombok
- Bean Validation

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Shadcn UI
- React Hook Form
- Zod
- Sonner

---

# Features

## Public

- Home
- About
- Contact
- Register
- Login

## Citizen

- Submit Complaints
- View My Complaints
- Track Complaint Status
- Profile Management

## Officer

- View Assigned Complaints
- Update Complaint Status
- Manage Complaint Priority

## Administrator

- Dashboard
- Manage Users
- Manage Categories
- Manage Departments
- View All Complaints
- Delete Complaints
- Analytics Dashboard
- SLA Monitoring

---

# Authentication & Security

- JWT Authentication
- BCrypt Password Encryption
- Spring Security
- Role-Based Authorization
- Protected Routes
- Axios JWT Interceptor

---

# User Roles

- ADMIN
- OFFICER
- CITIZEN

---

# Backend Structure

```text
backend/
│
├── config
├── controller
├── dto
├── entity
├── enums
├── exception
├── repository
├── security
├── service
└── BackendApplication.java
```

---

# Frontend Structure

```text
frontend/
│
├── public/
│
├── src/
│   │
│   ├── api/
│   │   └── api.js
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── dashboard/
│   │   ├── home/
│   │   ├── ui/
│   │   ├── AuthContext.jsx
│   │   ├── AuthProvider.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── PublicOnlyRoute.jsx
│   │   ├── theme-provider.jsx
│   │   ├── mode-toggle.jsx
│   │   └── useAuth.js
│   │
│   ├── lib/
│   │
│   ├── pages/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

---

# Database Tables

- users
- categories
- departments
- complaints
---
# REST API
## Authentication

```
POST   /api/auth/register
POST   /api/auth/login
```
## Profile

```
POST   /api/profile
put   /api/profile
```

## Users

```
GET
GET/{id}
POST
PUT
DELETE
```

## Categories

```
GET
GET/{id}
POST
PUT
DELETE
```

## Departments

```
GET
GET/{id}
POST
PUT
DELETE
```

## Complaints

```
GET
GET/{id}
GET/my
GET/officer
POST
PATCH/{id}/status
DELETE/{id}
```

## Dashboard

```
GET /api/dashboard
GET /api/dashboard/sla
```
# Installation

## Clone Repository

```bash
git clone https://github.com/axmedjaa/smart-city-portal.git
```

---

## Backend

```bash
cd backend
```
Run the backend

```bash
mvn spring-boot:run
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend URL

```
http://localhost:5173
```

Backend URL

```
http://localhost:8080
```

---

# Application Workflow

1. User registers an account.
2. User logs in and receives a JWT token.
3. Axios automatically attaches the JWT token to every protected request.
4. Citizens submit complaints.
5. Complaints are assigned to the responsible department.
6. Officers update complaint status and priority.
7. Administrators manage users, departments, and categories while monitoring analytics and SLA performance.
8. Citizens track the progress of their submitted complaints.

---

# Security Features

- JWT Authentication
- Stateless Session Management
- BCrypt Password Hashing
- Protected REST APIs
- Role-Based Authorization
- Global Exception Handling
- Request Validation

---

## Authors

- Ahmed Mohamed Ibrahim
- Abdiwasac Abdulkadir Omar
- Mohamed Muse Ahmed
- Zakarie Mohamed Abdi
- Hamdi Abdi Adan

Developed as a Full-Stack Group Project using Spring Boot, React.js, and PostgreSQL.

---

# Repository Structure

```text
smart-city-portal/
│
├── backend/
├── frontend/
├── README.md
├── ERD.png
├── REPORT.pdf
└── PRESENTATION.pptx
```
