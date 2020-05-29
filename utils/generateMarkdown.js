function generateMarkdown(data) {
    return `
# <div align="center">${data.title}</div>\n
\n ${data.description}\n
*****
## <div align="center">Table of Contents</div>\n
* [Installation](${data.GithubURL}#installation)\n
* [Usage](${data.GithubURL}#usage)\n
* [LIcense](${data.GithubURL}r#license)\n
* [Contributing](${data.GithubURL}#contributing)\n
* [Tests](${data.GithubURL}#testing-framework)\n
* [Technologies Used](${data.GithubURL}#technologies-used)\n
* [Author](${data.GithubURL}#author)\n
* [Github URL](${data.GithubURL}#github)\n
* [Acknowledgements](${data.GithubURL}r#acknowledgements)\n


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
<img src="${data.githubThumbnail}" alt="avatar" width="100" height="100">\n
[@${data.GithubUsername}](https://github.com/${data.GithubUsername}/)\n
#### Github URL\n
${data.GithubURL}\n
#### Acknowledgements\n
${data.acknowledgements}\n

    `
    ;
}

module.exports = generateMarkdown;