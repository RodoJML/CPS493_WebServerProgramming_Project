# CPS493 Web Server Programming Project
## Below all steps I've been following to create this project
Project developed at State University of New York on 2023, course CPS493 Web Server Programming.

Full Stack website developed using:

        Vue for the front-end
        Bulma for styling
        Node JS and Express JS for the backend
        MongoDB for the database
        Authorization implemented using JWToken and Google API.


**Web application main objective is to count and keep track of your calories, meals and friends activity.**

Hosted here https://cps493-web-server-programming-project-fs.onrender.com/


Below some of the steps followed to prepare the "boilerplate" I used this as reference for future projects:

**STEP 1**

        Run "git init" if you are created git locally
        Otherwise create your remote repo from GitHub.com and run the "clone" command.
        Run "npm init" command, to setup the package.json file and be able to later manage all dependencies. 

**STEP 2**
        
        Created a "client" and "server" folders in the root 

**STEP 3**

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

**STEP 4**

        Run the command "npm i" to install all dependencies.
        Make sure you are in the correct folder!!!! In this case, is the "root"


**STEP 5**

        Add "index.js" in the server folder. With the following code:
        
        const http = require('http');

        const hostname = '127.0.0.1';             
        const port = process.env.PORT || 3000;

        const server = http.createServer((req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Enter any text here to display on browser');
        });

        server.listen(port, () => {

        console.log(`Server running at http://${hostname}:${port}/`);
        });



**STEP 6**

        In the "root" run the command "npm init vue@latest"
        This will create the "client" folder and all files and folders. (boilerplate)

        REMINDER
        Package.json       || 
        Package-lock.json  || Keeps track of the version packaging and dependencies version, always keep on GIT.
        
        Create the gitignore using this website
        https://www.toptal.com/developers/gitignore


**STEP 7**

        Running "npm run build"
        Creates the app for production 

**STEP 8**

        Check folder structure, making sure I have the following:
                -assets
                -components     (Here store each individual component that made the page)
                -model          (Logic happens here, for example the session valindation, user info )
                -router         (Routes to other components) (Secureroute is coded here)
                -views          
        Delete all VUE default (Hellow World) files, as these are not neeed.

**STEP 9** 

        Add Bulma into your project

        First add depencies into the correct "Package.json" this is the one within "client" folder

        "dependencies": {
        "@fortawesome/fontawesome-free": "^6.3.0",
        "bulma": "^0.9.4",
        "vue": "^3.2.47",
        "vue-router": "^4.1.6"
        },

        Then import bulma...
        This can be done by importing the "main.ts" or "main.css"
        For better organization we will impor it from "main.css"

        REMINDER
        Using "@" import from "Modules" (Recommended)
        Using "." imports from local folder

**STEP 10**

        Create the required "views" and "components"

        Add .json files into the "data" folder as mock or dummy data.
        If you are connected to a database this is not required...

**STEP 11**

------------------------------------------------------------------------


**STEPS TO IMPLEMENT GOOGLE APIs**

**STEP 1**

        Go to https://console.cloud.google.com/apis/library
        Select or create a new project if you dont have one.

**STEP 2**

        Lookup the API you need in the API library and "enable" it

**STEP 3**

        Setup the API and you should get a secret.json file from Google

**STEP 3**

        Go to "API and Services" >> "Credentials" and generate an API KEY 

**STEP 4**

        On your client workspace/folder include the following into your 
        ".env.development file."
        VITE_GOOGLE_CLIENT_ID="youridherethiscomesfromthesecretjsonfile"
        VITE_GOOGLE_API_KEY="thiskeyisgeneratedfromcredentialspaneinapi&srvs"

**STEP 5**

        In order for your VSCode to have typecheck for your google functions
        add these into your "devdependencies" of the "package.json" in BOTH root and client
        "@types/gapi.client": "1.0.5",
        "@types/google.accounts": "0.0.7",
        "@types/google.maps": "^3.52.6"

        In your "client" file "ts.config" include the following under "include":
        "../node_modules/**/*.d.ts"

**STEP 6** 

        On the "myFetch.ts" add the following function

        export function loadScript(url: string, id: string){
                return new Promise((resolve, reject) => {
                if(document.getElementById(id)) return resolve(true);
        
                const script = document.createElement('script');
                script.src = url;
                script.id = id;
                script.onload = () => resolve(true);
                script.onerror = () => reject(false);
                document.body.appendChild(script);
                });
        }

**IMPORTANT NOTE**

        Implementing the API this way allows us to have the API and script together in the same component
        we are using it. So it's easier later for debugging, also by adding "async" we can use "await" to
        make sure the script is loaded before we use it and avoid errors.

**STEP 7**

        Make sure you have the URL of your website in the "Authorized JavaScript origins" in the Google API
        console. This is to avoid CORS errors. 


        






        
