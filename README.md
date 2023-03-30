# Virtual Shopper: E-commerce Application
Link to Github Repo: 
```
https://github.com/chrisgom113/virtual-shopper
```
Walkthru Video link:
``` 
TODO
```
# Description

This app functions as the backend coding portion of what 'would-be' an e-commerce web application. Whereas the frontend would have UI/UX functionality with polished aesthetic and smooth navigation, this app provides the background language that holds the databases APIs, route controllers, and seeds and maintains the communication pathways between them.

Student is prompted to demonstrate an understanding the file/folder structure, the purpose of each file/folder, and the coding therein. Student draws on class lecture content around writing code models that incorporate the use of mysql abd creating routes with various endpoints to allow data to be transmitted depending on user activity. Altogether, this allows student to learn how to align these various facets of express routing and model building. 

Functionality is tested and demonstrated below through the use of Insomnia. 

See User Story for details

## User Story:

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
# Installation
## Tech

```
Node.js

NPM
```
## Use 'npm i' to download the below dependency packages:
```
mysql2
dotenv
express
sequelize
```

# Usage

- User is able to add database name, MySQL username, and MySQL password to a .env file to connect to a database using Sequelize
- Using CLI, user can create schema from the MySQL shell then run node command 'node seeds' to seed the database with test data
- User can then initialize the server using 'npm start'
- User can then use Insomnia to test the following:
    - GET routes for all categories, all products, and all tags
    - GET routes for a single cateogory, single product, and single tag
    - POST, PUT, and DELETE, routes for categories, products, and tags
- A walkthrough video is also available for more detailed account of the usage, using this link: 
    - 

- The below screenshots provides a brief visual of the folder structures and visualized JSON data in Insomnia

## VS Code File/Folders

## Insomnia Testing


# License

None