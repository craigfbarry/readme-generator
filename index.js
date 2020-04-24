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
            name:       "GithubUsername",
            message:    "Please enter your Github username"      

        },
        {   
            type:       "input",
            name:       "GithubURL",
            message:    "Please enter your Github Project URL"      

        },
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
            name:       "installation",
            message:    "Provide the installation details"
        },
        {   
            type:       "input",
            name:       "usage",
            message:    "Please advise the usage details"
        },
        {   
            type:       "input",
            name:       "license",
            message:    "Please advise any license details"
        }
]);
}



//Asynchronous function created, as the code will need to wait for inputs and for file to be written
async function init() {
    try {
        const data = await userPrompt();
        console.log(data);
        const text = generateMarkdown(data);
        console.log(text);
        

        await writeFileAsync("readme.md",text);
    }
    catch(err){
        console.log(err);
    }
}

init();