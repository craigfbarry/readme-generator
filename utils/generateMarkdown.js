function generateMarkdown(data) {
    return `
    # ${data.title} \n\n
    ${data.description}\n
    
    ###Table of Contents\n
    ####Installation\n
    ####Usage\n
    ####License\n
    ####Contributing\n
    ####Tests\n
    ####Technologies used\n
    ####Author\n @${data.GithubUsername}\n
    ####Github URL \n
    ####Acknowledgements

    `
    ;
}

module.exports = generateMarkdown;