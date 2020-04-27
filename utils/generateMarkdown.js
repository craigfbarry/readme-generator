function generateMarkdown(data) {
    return `
# <div align="center">${data.title}</div>\n
\n ${data.description}\n
*****
## <div align="center">Table of Contents</div>\n
* [Installation](https://github.com/craigfbarry/readme-generator#installation)\n
* [Usage](https://github.com/craigfbarry/readme-generator#usage)\n
* [LIcense](https://github.com/craigfbarry/readme-generator#license)\n
* [Contributing](https://github.com/craigfbarry/readme-generator#contributing)\n
* [Tests](https://github.com/craigfbarry/readme-generator#tests)\n
*****
![${data.pictureDescription}](${data.picturePath})\n
#### Installation\n
        ${data.installation}\n
#### Usage\n
${data.usage}\n
#### License        ${data.license}\n 
#### Contributing\n
#### Tests\n
        ${data.testing}\n
#### Technologies used\n
        ${data.technologies}\n
#### Author              @${data.GithubUsername}\n
#### Github URL          ${data.GithubURL}\n
#### Acknowledgements

    `
    ;
}

module.exports = generateMarkdown;