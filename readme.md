[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11270032&assignment_repo_type=AssignmentRepo)
# Independent Capstone Server

As our capstones are full-stack projects, we will utilize the MERN stack: 
- M: Mongoose/MongoDB
- E: Express 
- R: React
- N: Node

Of course, this needs a backend: the server.

For the Independent Capstone, the backend needs **_at least_**:
- A user schema and controller with a minimum of login and signup functionality.
- Another schema and controller with full CRUD (Create, Read, Update, Delete) functionality.

Clone the following repository to your projects folder, then `cd` into `server` folder and run `npm i` to install all of the dependencies.

After constructing all schemas and controllers, test all endpoints in Postman before beginning construction on the front end or client side of the application.

## Schemas

The schemas must have a minimum of 4 properties, not including the id automatically generated for them when created in the DB.

You may add more properties as needed to fulfill the functionality you want to build with your data.

## User Schema

Your user document in your `users` collection should resemble the following:

```json

{
    "firstName": "John",
    "lastName": "Wick",
    "email": "jwick@puppyfinder.com",
    "password": "focusCommitment1979"
}

```


> NOTE: 
> The other schema and its contents will be completely dependent on your project and the project's needs.
>
> > You are not limited to only 2 schemas, but two is the base requirement. 


## Stories

### Users

- [ ] Create user endpoint
- [ ] Login user endpoint

### App Specific Collection

- [ ] Display endpoint
- [ ] Create endpoint
- [ ] Update endpoint
- [ ] Delete endpoint

## Icebox / Stretch Goals

- [ ] Set up MongoDB Atlas cluster and utilize it to CRUD your database for this project. You must utilize .dotenv in this project to hide your username, password, and your connection string away from prying eyes of other GitHub users.

- [ ] Add `update` and `delete` endpoints to your `user` controller

> HINT
> Allowing updates on users means that collection associations need to be based on things users **CANNOT** change.

- [ ] Add isAdmin to your user collection and build middleware that only allows admins to update and delete other users or the app specific CRUD items.

<br>

# Independent Capstone Client

Congratulations! You have successfully completed the backend section of the capstone, where you utilized Postman to test your API and make sure the routes are accessible and the data flows back and forth between your server and database.

Now, it's time to build a user interface (UI) that your users will be able to interact with.

We will be using React to build out our client side or front end of the application.

## Stories

### Setup

Utilize `create-react-app` script to create a new instance of a React app within your `client` folder. Purge all unnecessary files and code until you have a fresh React blueprint. Create a `components` folder where you will store all of the components needed for this application.

### Auth Component

This component should allow the user to signup and login. It will require conditional rendering to switch between both states.

It's functional end result should update the `localStorage` token in the browser's client. 

The token functionality is best put inside `App.jsx` so that other components can freely use it as well.

### App Specific Component

The rest of the front-end build is based on your application's purpose. 

You will need to construct components that will handle or allow the user to preform all of the full CRUD capabilities of the server.

You may use a UI Library with your components, but please add enough styling so the components do not look exactly like the direct examples from the UI Library documentation. 

> NOTE:
> This application will be viewed by your potential employers. 
> It might be a good idea to utilize flex or grid and make sure it's visually simple and appealing to the eyes.
> > We expect a fair amount of styling to make the client side look presentable and polished/complete.

## Icebox

- [ ] The user should only be allowed to update or delete items that belong to them (items they created).
- [ ] Make sure the application is mobile responsive.
- [ ] Add admin functionality check which allows an admin to delete any app specific CRUD items.
- [ ] If needed: utilize an external API for additional content. 

