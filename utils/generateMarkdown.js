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
* [Technologies Used](https://github.com/craigfbarry/readme-generator#technologies-used)\n
* [Author](https://github.com/craigfbarry/readme-generator#author)\n
* [Github URL](https://github.com/craigfbarry/readme-generator#github)\n
* [Acknowledgements](https://github.com/craigfbarry/readme-generator#acknowledgements)\n


*****
![${data.pictureDescription}](${data.picturePath})\n
#### Installation\n
        ${data.installation}\n
#### Usage\n
${data.usage}\n
#### License    :${data.license}\n
[License Badge](https://img.shields.io/badge/Licence-${data.license}-green)\n
#### Contributing\n
#### Tests\n
        ${data.testing}\n
#### Technologies used\n
        ${data.technologies}\n
#### Author\n
[@${data.GithubUsername}](https://github.com/${data.GithubUsername}/)\n
#### Github URL\n
${data.GithubURL}\n
#### Acknowledgements\n
${data.acknowledgements}\n

    `
    ;
}

module.exports = generateMarkdown;