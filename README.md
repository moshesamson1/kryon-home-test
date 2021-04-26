# Kryonsystems FrontEnd Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Instructions
This test application is a skeleton.  
On one hand you need to fill the missing functionality.

We have made a mock server using json-server (for more information https://github.com/typicode/json-server),  
after running the mock server you can Users resources.

####IMPORTANT: You should be using ngrx to save the data

####Show us your best and use every best practices you know.

### How to run:
1. Run npm run start-server to start a mock server using json-server,
   for more information https://github.com/typicode/json-server
2. Run ng serve to run the application
3. You are good to go!

## What should I do?
1. Fetch users functionality and display them in a list, with following properties:
    1. full name
    2. age
2. Implement the search functionality
   please refer to https://github.com/typicode/json-server
   to understand how to filter.
3. Implement animation color change on mouse hover each user in the list,
   (each user have a color property)
4. Implement delete user, "delete icon" should be shown on mouse hover the user.
5. alongside the age of the user, calculate his fibonacci age (example: age:8 -> fibonacci(8) = 21). should be calculated in UI and not extend the user model.

### bonus:
1. Implement user details card, should open/close when clicking on +/- icon on right side of user.
    1. should display avatar image depending on gender
    2. should display all other user properties.
2. Highlight the search text in the user list.
