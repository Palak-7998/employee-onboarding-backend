# Employee Onboarding Workflow Manager (Backend)

This project is a backend application built using Node.js, Express.js, and MongoDB to manage employee onboarding workflows.

## Features
- Create onboarding workflow templates
- Assign tasks to roles such as HR, IT, and Manager
- Track task progress using status (pending / completed)
- In-app notifications for newly assigned tasks
- REST APIs for workflows, tasks, users, and notifications
- MongoDB integration using Mongoose

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose

## API Endpoints
- POST /api/workflows – Create workflow template
- GET /api/workflows – Get all workflows
- POST /api/tasks – Create and assign task
- GET /api/tasks – Get all tasks
- GET /api/notifications – Get notifications

## How to Run Locally
1. Clone the repository
2. Install dependencies  
   `npm install`
3. Start the server  
   `node index.js`
4. Server runs on  
   `http://localhost:5000`

## Testing
APIs were tested using Thunder Client and database records were verified using MongoDB Compass.

## Note
This submission focuses on backend functionality as per the task requirements.
