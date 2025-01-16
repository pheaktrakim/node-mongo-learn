Here's the complete `README.md` file combining all the instructions:

```markdown
# **Project Name**

An API application for managing users and posts with features like CRUD operations, authentication, image uploads, and API documentation using Swagger.

---

## **Features**
- User Authentication (Login/Logout)
- CRUD Operations for Users and Posts
- Image Upload for Post Cover Images
- Pagination for Posts
- MVC Architecture for Clean Code Structure
- Comprehensive API Documentation with Swagger

---

## **Prerequisites**
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community)

---

## **Getting Started**

Follow these steps to set up the project locally:

### 1. **Clone the Repository**
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Set Up Environment Variables**
Create a `.env` file in the project root and add the following environment variables:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/<your-database-name>
JWT_SECRET=<your-secret-key>
```

### 4. **Run MongoDB**
Start MongoDB on your local machine. For example:
```bash
mongod
```

### 5. **Start the Server**
```bash
npm start
```
The server will run on `http://localhost:3000`.

---

## **API Documentation**
Access the API documentation using Swagger at:
```
http://localhost:3000/api-docs
```

---

## **Project Structure**

```
├── docs/               # API documentation files (Swagger)
├── models/             # Mongoose models
├── controllers/        # Controller logic
├── routes/             # API route definitions
├── middleware/         # Custom middleware
├── uploads/            # Folder for uploaded files (e.g., images)
├── .env                # Environment variables
├── README.md           # Project documentation
├── package.json        # Project dependencies and scripts
└── server.js           # Entry point of the application
```

---

## **Available Scripts**

### **Start Development Server**
```bash
npm start
```

### **Linting**
```bash
npm run lint
```

---

## **Usage**

### **User Endpoints**
1. **Register User**
   - Method: `POST`
   - URL: `/users`
   - Body:
     ```json
     {
       "name": "Jane Doe",
       "email": "jane.doe@example.com",
       "password": "password123"
     }
     ```

2. **Login**
   - Method: `POST`
   - URL: `/users/login`
   - Body:
     ```json
     {
       "email": "jane.doe@example.com",
       "password": "password123"
     }
     ```

3. **Get All Users**
   - Method: `GET`
   - URL: `/users`

### **Post Endpoints**
1. **Create Post**
   - Method: `POST`
   - URL: `/posts`
   - Body (Form Data):
     ```
     title: "My First Post"
     content: "This is the content of the post."
     coverImage: <file>
     ```

2. **Get All Posts**
   - Method: `GET`
   - URL: `/posts?page=1&limit=10`

3. **Update Post**
   - Method: `PUT`
   - URL: `/posts/{id}`
   - Body:
     ```json
     {
       "title": "Updated Title",
       "content": "Updated content.",
       "coverImage": "https://example.com/new-image.jpg"
     }
     ```

4. **Delete Post**
   - Method: `DELETE`
   - URL: `/posts/{id}`

---

## **Contributing**

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---
Let me know if you need further assistance! 😊
