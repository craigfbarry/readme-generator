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
* [Tests](https://github.com/craigfbarry/readme-generator#testing-framework)\n
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
#### License\n
![License Badge](https://img.shields.io/badge/Licence-${data.license}-green)\n
#### Contributing\n
${data.contributors}\n
#### Testing framework\n
        ${data.testing}\n
#### Technologies used\n
        ${data.technologies}\n
#### Author\n
<img src="https://avatars0.githubusercontent.com/u/59948059?v=4" alt="avatar" width="100" height="100">\n
[@${data.GithubUsername}](https://github.com/${data.GithubUsername}/)\n
#### Github URL\n
${data.GithubURL}\n
#### Acknowledgements\n
${data.acknowledgements}\n

    `
    ;
}

module.exports = generateMarkdown;