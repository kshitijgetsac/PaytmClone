
# PaytmClone

A clone of India's leading UPI payment app.

## Prerequisites

- MongoDB (set up either locally or on a cloud cluster).
- Node.js installed on your machine.
- MongoDB Compass (for connection string retrieval, if needed).

## Steps to Run the Project

### 1. Set up MongoDB

- Ensure you have a MongoDB cluster running, either locally or remotely.
- Find the connection string from MongoDB Compass (it will appear when you open the GUI).
- Update the connection string in `backend/routes/config.js` to connect to your MongoDB cluster.

### 2. Configure JWT Secret Key

- In the `config.js` file, set the `JWT_SECRET` to any secure string of your choice. This will be used to sign and verify JWT tokens.

### 3. Run the Frontend

- Navigate to the `frontend` folder:
  ```bash
  cd frontend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the frontend:
  ```bash
  npm run dev
  ```
  > **Note**: The frontend is built with Vite and runs on port `5173` by default. If this port is unavailable, ensure to check the running port.

### 4. Run the Backend

- Navigate to the `backend` folder:
  ```bash
  cd ../backend
  ```
  Or, if you're in the home directory:
  ```bash
  cd backend && npm install
  ```
- Start the backend using Nodemon:
  ```bash
  nodemon index.js
  ```

### 5. Access the App

Once both the frontend and backend are running, you can access the application from your browser at the configured frontend port (default: `http://localhost:5173`).
