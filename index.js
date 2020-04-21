//Declaration of all Node modules required including the created module generateMarkdown
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

//WriteFile being set up as a promise.
const writeFileAsync = util.promisify(fs.writeFile);

//All "inquirer" prompts to be held in this function to gather user inputs
function userPrompt(){
    return inquirer.prompt([
        {   
            type:       "input",
            name:       "title",
            message:    "Enter the title of the project"
        },
        {   
            type:       "input",
            name:       "description",
            message:    "Please give a brief description of the project"
        },
        {   
            type:       "input",
            name:       "contents",
            message:    "Add a table of contents"
        },
        {
            type:       "input",
            name:       "installation",
            message:    "Provide the installation details"
        }

]);
}



//Asynchronous function created, as the code will need to wait for inputs and for file to be written
async function init() {
    try {
        const data = await userPrompt();
        console.log(data);
        const txt = generateMarkdown(data);
        console.log(txt);
        await writeFileAsync("readme.md", txt);
    }
    catch(err){
        console.log(err);
    }
}

init();