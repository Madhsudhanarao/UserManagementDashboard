# User Management Dashboard

## Introduction

  The User Management Dashboard is a web application designed to allow users to view, add, edit, and delete user details using a mock backend API (JSONPlaceholder).
  It provides a clean and user-friendly interface to interact with user data while implementing core CRUD (Create, Read, Update, Delete) operations. 
  This project is bundled with Parcel and deployed on GitHub Pages.


# Backend Interaction

	•	Fetch user data from the /users endpoint of JSONPlaceholder.
	•	Perform CRUD operations:
	•	GET: Retrieve the user list.
	•	POST: Simulate adding a new user.
	•	PUT: Simulate updating an existing user’s data.
	•	DELETE: Simulate deleting a user.

# Adding a User

	1.	Click the Add User button.
	2.	Fill out the form with the user details.
	3.	Submit the form to simulate sending a POST request to the API.
	4.	Check the Network tab in your browser’s developer tools. You should see a 200 or 202 status code indicating the request was successfully processed.

# Editing a User

	1.	Click the Edit button next to a user you want to modify.
	2.	Update the fields in the form with the new user details.
	3.	Submit the form to simulate sending a PUT request to the API.
	4.	Check the Network tab in your browser’s developer tools. You should see a 200 or 202 status code indicating the request was successfully processed.

# Deleting a User

	1.	Click the Delete button next to the user you want to remove.
	2.	Confirm the deletion.
	3.	The system will simulate sending a DELETE request to the API.
	4.	A confirmation message will appear indicating success (status 200 or 202).

## Getting Started

### Prerequisites
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Install npm or yarn for dependency management.

### Installation
1. Clone the repository:
   bash
   git clone https://github.com/Madhsudhanarao/UserManagementDashboard/tree/gh-pages
   cd user-management-dashboard
   
2. Install dependencies:
   bash
   npm install
   
3. Start the development server:
   bash
   npm start
   

---

## Deployment with GitHub Pages

### Prerequisites
1. Ensure you have a GitHub repository for the project.
2. Install the gh-pages package:
   bash
   npm install gh-pages --save-dev
### Steps
1. Add the following scripts to your package.json:
   json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   
2. Configure your GitHub repository in package.json:
   json
   "homepage": "https://madhsudhanarao.github.io/UserManagementDashboard/"
   
3. Build and deploy the project:
   bash
   npm run deploy
