# Cypress Intro

## What is Cypress?

- Test Automation Tool
- Can test anything that runs on a web browser.
- uses JavaScript
- Cypress interacts with the browser directly so it is very fast
- open source
[Cypress Website](https://www.cypress.io/)

## Testing in Cypress

Cypress allows for all types of testing:
- Unit
- Integration
- End-to-end

There is also a log in the Cypress UI that allows you to view a snapshot of any point during your test run.

## Instalation Prerequisites 

- This process assumes a basic understanding of the command line. 

- To install Cypress locally, you will need to install `Node.js`.  [Link to Node.js Downloads](https://nodejs.org/en/download/)

- Once node is installed, you can use the command `node -v` in the terminal to check your node version.  Cypress requires version 12 or above.

- Now that you have Node.js installed, you have access to `npm` packages, and will be able to install Cypress to your local project via the command line.

- Install a text editor.  I reccommend VS code. [Download VS Code](https://code.visualstudio.com/download)

- Create a directory for your Cypress project.  You can open a terminal in VS code and `mkdir your-project-name` then `cd your-project-name`. 

- In your VS code terminal, once you have created and moved into your project, run the command `npm init -y`
This command will create a `package.json` file in your project to manage your dependencies and write scripts.

- Now we can install Cypress on our project. Run the command `npm i cypress` 
(this command will install the latest stable version of Cypress. If you want to specify a version, follow cypress with an @version-number)

- If you want to check your version of Cypress after install, run `npx cypress -v`

- Now run `npx cypress open`, and the cypress UI will open and some basic cypress folders will be added to your project (including some helpful examples).

## Cypress File Tree

- Integration: this is where we write our test files.

- Fixtures: this is where we can store data files for our tests.

- Pages: this is a folder we will add in the refactoring process to make an object model for our example test.
(see Refactoring)

## Login Test
- We will be utilizing a helpful, test-friendly website for this test.
[Try Testing This](https://trytestingthis.netlify.app/)

- We will start by writing this test by simply invoking cypress methods and running the test to verify that it works.

- The core concepts you will need to implement this test can be found in the Cypress Documentation.
[Cypress Docs](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress)

## Refactoring Login Test

- Goal: We want to seperate our concerns and keep our objects and methods seperate from the test itself.

- Why?  This makes our test modular and reusable.  Imagine if you were testing a whole suite of features, with multiple login components. By seperating our concerns we can run multiple login tests and only change a few lines of code. This also makes the test more maintainable if a feature were to change in an update.

- Create a folder to hold your JavaScript Class for the login page, then create a file in that folder for that class.
I made a `pages` folder and a `login-page.js` file.

- First,in your new login-page file create a LoginPage class and four methods to correspond with the cypress actions taken in the test `vistPage`, `enterUsername`, `enterPassword`, and `clickLogin`.  You can simply take the actions directly from your test and past them into the body of the corresponding methods. 

- Import your LoginPage class into your test file, then declare a variable that is a new instance of that class.

- Now you can replace your cypress methods in the test with your instance methods from your class. 

- Next you will want to pass an argument to methods in your class to represent the hard coded data. You can pass the corresponding actual URL, username, and password into your test where you invoke those methods.

- Finally, in your Class, create some variables to represent your username input, password input, and login button. You can pass these variables into their cypress methods with `this.loginPage_unsername`, etc.  This way if the components change over time you can just swap out their values. 





