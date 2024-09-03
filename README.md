# Bestieverse

## Description

Bestieverse is a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. Built using Express.js for routing, MongoDB as the database, and the Mongoose ODM, this application allows for full CRUD operations. You can use Insomnia to create, update, and delete users and thoughts, as well as add and remove friends and reactions. 
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To get started with Bestieverse, follow these steps:

1. **Ensure Node.js is Installed:** Make sure Node.js is installed on your system. If not, download and install it from the official [Node.js](https://nodejs.org/en) website.
   
2. **Clone the Repository:**  Clone or fork this repository to your local machine.
   
3. **Install Dependencies:** Navigate to the project directory and run the following command to install all necessary dependencies: **npm install.**


## Usage

After completing the installation steps, follow these instructions to start using Bestieverse:

1. **Start the Server:**  Launch the server to start the application by running: **npm run start.**

2. **Interacting with the API:** Use Insomnia, Postman, or any other API client to test the API routes.
- Create, update, delete users and thoughts.
- Add or remove friends and reactions.

3. **Seed Data:** You can create your own seed data using the CRUD operations mentioned below.

**API Routes**

Here are the available API routes for interacting with Bestieverse:

- **/api/users** POST to create a new user, GET to retrieve all users.
- **/api/users/:userId** PUT to update user information by ID, GET to retrieve a single user by ID, DELETE to remove a user by ID.
- **/api/users/:userId/friends/:friendId** POST to add a new friend to a user's friend list, DELETE to remove a friend from user's friend list.
- **/api/thoughts** POST to create a new thought, GET to retrieve all thoughts.
- **/api/thoughts/:thoughtId** GET to retrieve a single thought by ID, PUT to update a thought by ID, DELETE to remove a thought by ID.
- **/api/thoughts/:thoughtId/reactions** POST to add a reaction to a thought, DELETE to remove a reaction by its ID.


**Please click [here](https://www.loom.com/share/bf2bab7f3bd243e59789b29e81c40638?sid=06ae940f-1177-4c53-84c0-f50cb16c25f7) to view a demo on how to use this application.**


![screenshot of CRUD testing in Insomnia](https://github.com/savannahmarshall/Bestieverse/blob/main/assets/challenge-18.png)



## Contributing
If you are interesting in contributing to this project, please contact me directly. 

## License
This project is licensed under the [MIT License](https://opensource.org/license/MIT).

## Tests
There are no tests for this application.

## Questions
If you have any questions about this project, feel free to reach out:

**GitHub:** https://github.com/savannahmarshall  

**Email:** savvymarshall@gmail.com
