function generateMarkdown(data) {
    return `
# ${data.title}\n
\n ${data.description}\n
*****
## <div align="center">Table of Contents</div>\n
*****
#### Installation\n
        ${data.installation}\n
#### Usage\n
        ${data.usage}\n
#### License\n      
        ${data.license}\n 
#### Contributing\n
#### Tests\n
#### Technologies used\n
#### Author              @${data.GithubUsername}\n
#### Github URL          ${data.GithubURL}\n
#### Acknowledgements

    `
    ;
}

module.exports = generateMarkdown;