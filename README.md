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
2. **Clone the Repository:**  Clone this repository to your local machine using the following command:
   git clone https://github.com/savannahmarshall/Bestieverse.git




## Usage

To use this application, follow these steps:

**Ensure Node.js is Installed:** Confirm that you have Node.js installed. If not, download and install it from the official Node.js website which can be found in the installation section above.

**Clone the Repository:** Clone the project repository to your local machine.

**Install Dependencies:** Navigate to the project directory and run the following command: **npm install** to install the necessary dependencies.

**Start Server:** Launch the server to start the application using the command: **npm run start**

The following API Routes are features of this application:
**/api/users** POST to create a new user, GET to show all users.
**/api/users/:userId** PUT to update user information by ID and GET to find a single user by ID.
**/api/users/:userId** DELETE to delete a user by ID.
**/api/users/:userId/friends/:friendId** POST to add a new friend to a user's friend list, DELETE to remove a friend from user's friend list.
**/api/thoughts** GET to see all thoughts, POST to create a thought.
**/api/thoughts/:thoughtId** GET to see thoughts by ID, PUT to update thought by ID and DELETE to delelete thought by ID.
**/api/thoughts/:thoughtId/reactions** POST to create a reaction stored with a thought, DELETE to pull and remove a reaction by the reaction's ID value.


**Please click [here]() to view a demo on how to use this application.**


![screenshot of CRUD testing in Insomnia](https://github.com/savannahmarshall/Bestieverse/blob/main/assets/challenge-18.png)



## Contributing
* [JavaScript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en)
* [MongoDB](https://www.mongodb.com/)
* [Insomnia](https://insomnia.rest/)

## License
This project was created using the [MIT License](https://opensource.org/license/MIT).

## Tests
There are no tests for this application.

## Questions
Please contact me directly with any questions. My information is below:  

**GitHub:** https://github.com/savannahmarshall  

**Email:** savvymarshall@gmail.com
