const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer.prompt([
        {   
            type:       "input",
            name:       "Title",
            message:    "Enter the title of the project"
        },
        {   
            type:       "input",
            name:       "Description",
            message:    "Please give a brief description of the project"
        },
        {   
            type:       "input",
            name:       "Contents",
            message:    "Add a table of contents"
        },
        {
            type:       "input",
            name:       "Installation",
            message:    "Provide the installation details"
        }




]).then(console.log(Name +" " + Title + " " + Description));