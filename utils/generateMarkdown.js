function generateMarkdown(data) {
    return `# ${data.title} \n\n
    ${data.description}\n
    *****
    ->###Table of Contents<-\n
    *****
    ####Installation        ${data.installation}\n
    ####Usage              ${data.usage}\n
    ####License\n
    ####Contributing\n
    ####Tests\n
    ####Technologies used\n
    ####Author             @${data.GithubUsername}\n
    ####Github URL           ${data.GithubURL}\n
    ####Acknowledgements

    `
    ;
}

module.exports = generateMarkdown;