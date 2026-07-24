# Smart City Complaint & Service Portal

A modern full-stack web application built with **Spring Boot**, **React.js**, and **PostgreSQL** that enables citizens to report city issues, department officers to manage complaints, and administrators to monitor the entire system through a secure role-based dashboard.

---

# Project Overview

The Smart City Complaint & Service Portal digitizes the complaint management process by providing a centralized platform for citizens and government departments.

Citizens can submit complaints regarding public services such as roads, sanitation, water supply, and utilities. Department officers receive and manage assigned complaints, while administrators oversee users, departments, categories, and overall system statistics.

The application uses JWT authentication, Spring Security, and role-based authorization to ensure secure access to resources.

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
- Jakarta Bean Validation

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
- EmailJS used for contact


---

# Project Architecture

```text
                   React.js Frontend
                           │
                           │
                  Axios + JWT Token
                           │
                           ▼
               Spring Boot REST API
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   Controllers         Service Layer      Spring Security
        │                  │                  │
        └──────────────► Repository ◄─────────┘
                           │
                           ▼
                    PostgreSQL Database
```

## Architecture Layers

- Presentation Layer (React.js)
- REST API Layer (Spring Boot Controllers)
- Business Logic Layer (Services)
- Data Access Layer (Repositories)
- Database Layer (PostgreSQL)

---

# Features

## Public

- Home Page
- About Page
- Contact Page
- User Registration
- User Login

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

- Dashboard Overview
- Manage Users
- Manage Departments
- Manage Categories
- View All Complaints
- Delete Complaints
- Complaint Statistics

---

# Authentication & Security

- JWT Authentication
- Spring Security
- BCrypt Password Encryption
- Stateless Authentication
- Role-Based Authorization
- Protected React Routes
- Axios JWT Interceptor
- Global Exception Handling
- Request Validation

---

# User Roles

| Role | Permissions |
|------|-------------|
| ADMIN | Full system access |
| OFFICER | Manage assigned complaints |
| CITIZEN | Submit and track complaints |

---

# Backend Structure

```text
backend/
│
├── controller/
├── dto/
├── entity/
├── enums/
├── exception/
├── repository/
├── security/
├── service/
├── BackendApplication.java
│
├── pom.xml
└── application.properties
```

---

# Frontend Structure

```text
frontend/
│
├── public/
│
├── src/
│
├── api/
│   └── api.js
│
├── assets/
│
├── components/
│   ├── dashboard/
│   ├── home/
│   ├── ui/
│   ├── Footer.jsx
│   ├── Navigation.jsx
│   ├── ProtectedRoute.jsx
│   ├── PublicOnlyRoute.jsx
│   ├── mode-toggle.jsx
│   └── theme-provider.jsx
│
├── context/
│   ├── AuthContext.jsx
│   └── AuthProvider.jsx
│
├── hooks/
│   └── useAuth.js
│
├── lib/
│
├── pages/
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
│
├── package.json
├── .env
├── vite.config.js
└── jsconfig.json
```

---

# Database Tables

- users
- departments
- categories
- complaints

---
# Database Relationships

```text
                     Department
                   ┌─────────────┐
                   │ id          │
                   │ name        │
                   └──────┬──────┘
                          │ 1
                          │
                    has many
                          │
                          ▼
                    ┌─────────────┐
                    │    User     │
                    ├─────────────┤
                    │ id          │
                    │ fullName    │
                    │ email       │
                    │ password    │
                    │ role        │
                    │department_id│
                    └──────┬──────┘
                           │ 1
                           │
                    submits many
                           │
                           ▼
                   ┌────────────────┐
                   │   Complaint    │
                   ├────────────────┤
                   │ id             │
                   │ title          │
                   │ description    │
                   │ location       │
                   │ priority       │
                   │ status         │
                   │ createdAt      │
                   │ user_id        │
                   │ category_id    │
                   │ department_id  │
                   └──────┬─────────┘
                          │
                          │
                  belongs to
                          │
                          ▼
                 ┌─────────────┐
                 │  Category   │
                 ├─────────────┤
                 │ id          │
                 │ name        │
                 └─────────────┘
```
### Entity Relationships
- One **Department** has many **Users**.
- One **Department** manages many **Complaints**.
- One **User** can submit many **Complaints**.
- One **Category** contains many **Complaints**.
- Every **Complaint** belongs to one **User**, one **Department**, and one **Category**.
---
# REST API

## Authentication

```http
POST   /api/auth/register
POST   /api/auth/login
```

## Profile

```http
GET    /api/profile
PUT    /api/profile
```

## Users

```http
GET    /api/users
GET    /api/users/{id}
POST   /api/users
PUT    /api/users/{id}
DELETE /api/users/{id}
```

## Departments

```http
GET    /api/departments
GET    /api/departments/{id}
POST   /api/departments
PUT    /api/departments/{id}
DELETE /api/departments/{id}
```

## Categories

```http
GET    /api/categories
GET    /api/categories/{id}
POST   /api/categories
PUT    /api/categories/{id}
DELETE /api/categories/{id}
```

## Complaints

```http
GET     /api/complaints
GET     /api/complaints/{id}
GET     /api/complaints/my
GET     /api/complaints/officer
POST    /api/complaints
PATCH   /api/complaints/{id}/status
DELETE  /api/complaints/{id}
```

## Dashboard

```http
GET /api/dashboard
GET /api/dashboard/sla
```

---

# Environment Variables

## Backend

Configure the following properties inside `application.properties`.

```properties
spring.datasource.url=
spring.datasource.username=
spring.datasource.password=

jwt.secret=
jwt.expiration=86400000
```

## Frontend

Create a `.env` file.

```env
API_URL=http://localhost:8080/api
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/axmedjaa/smart-city-portal.git
```

Move into the project directory.

```bash
cd smart-city-portal
```

---

## Backend Setup

Navigate to the backend.

```bash
cd backend
```

Install dependencies.

```bash
mvn clean install
```

Run the application.

```bash
mvn spring-boot:run
```

Backend URL

```
http://localhost:8080
```

---

## Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# Application Workflow

1. User registers a new account.
2. User logs into the system.
3. Server generates a JWT token.
4. React stores the token.
5. Axios automatically sends the JWT with protected requests.
6. Citizens submit complaints.
7. Complaints are assigned to departments.
8. Officers manage complaint status.
9. Administrators monitor the entire system.

---

# Security Features

- JWT Authentication
- Stateless Authentication
- BCrypt Password Encryption
- Spring Security
- Role-Based Authorization
- Protected REST Endpoints
- Protected React Routes
- Request Validation
- Global Exception Handling

---

# Live Demo

| Service | URL |
|----------|-----|
| Frontend | https://smartcity11.netlify.app/ |
| Backend | https://smart-city-portal-production.up.railway.app/api |

---
# Future Improvements

- Email Notifications
- Complaint Comments
- Complaint Attachments
- Interactive City Map
- Real-time Notifications
- Analytics Charts
- Mobile Application
- SMS Notifications

---

# Authors

- Ahmed Mohamed Ibrahim
- Abdiwasac Abdulkadir Omar
- Mohamed Muse Ahmed
- Zakarie Mohamed Abdi
- Hamdi Abdi Adan

Developed as a Full-Stack Group Project using Spring Boot, React.js, and PostgreSQL.

---

# License

This project was developed for educational purposes as part of a university Full-Stack Software Engineering project.

---

# Repository Structure

```text
smart-city-portal/
│
├── backend/
├── frontend/
├── screenshots/
├── README.md
├── ERD.png
├── smart_city_project_report_v4.pdf
└── PRESENTATION.pptx
```