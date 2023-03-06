# CPS493_Web_Server_Programming_Project
## On this repository we will be storing all files for the assignments and final project.

STEP 1
    Run int the root folder the "npm init" command, to setup the package.json file and be able to later manage all dependencies. 

STEP 2
    Created a "client" and "server" folders in the root 

STEP 3
    Add the following dependencies to the "package.json"

    "dependencies": {
    "express": "^4.18.2"
    },

    "devDependencies": {
    "nodemon": "^2.0.20"
    }

    -Express: Is a NODE.js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application

    -Nodemon: This dependencie will be watching your folder, and when there's a change it restarts the server to see changes. Valid use only for Development purposes, NOT for production. 

    IMPORTANT REMINDER: DONT'T use EJS, DON'T use Express for server side rendering or template.