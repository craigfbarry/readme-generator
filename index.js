const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

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

function generateFile(inputData){
    return `# ${inputData.title} '\n\n' 

    ${inputData.description} '\n'
    
    `;
}
async function readmeGenerator() {
    try {
        const inputData = await userPrompt();
        console.log(inputData);
        const txt = generateFile(inputData);
        console.log(txt);
        await writeFileAsync("readme.md", txt);
    }
    catch(err){
        console.log(err);
    }
}

readmeGenerator();