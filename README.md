# Team Builder Challenge
This application uses the inquirer module from node.js, it also uses jest for the test framework and classes to modularize the code.
## Description
This application takes in information from the command line and compiles it into an HTML file to be viewed in the browser.
## Acceptance Criteria
    GIVEN a command-line application that accepts user input

    WHEN I am prompted for my team members and their information
    THEN an HTML file is generated that displays a nicely formatted team roster based on user input

    WHEN I click on an email address in the HTML
    THEN my default email program opens and populates the TO field of the email with the address

    WHEN I click on the GitHub username
    THEN that GitHub profile opens in a new tab

    WHEN I start the application
    THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

    WHEN I enter the team manager’s name, employee ID, email address, and office number
    THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

    WHEN I select the engineer option
    THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

    WHEN I select the intern option
    THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

    WHEN I decide to finish building my team
    THEN I exit the application, and the HTML is generated

## Additional Information
### Notes
This was a relatively straightforward challenge for me. I really like the idea of Objects and the modular nature of classes it's easy to make adjustments (like "mailto:" for email). I don't love Test Driven Development aspect of jest and seeing all those errors, I also find it difficult to figure out which part is the error: "Did I write the test wrong or is it because I don't have any code to test with?"
### Video Link
Click the link for more information on how to run the app:

[Walkthrough Video](./src/teamBuilderVideo.webm)

### Access Application

* https://github.com/IsiBee/employee-challenge - Github Repo