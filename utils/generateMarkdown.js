function generateMarkdown(data) {
    return `
    # ${data.title} \n\n
    ${data.description}\n

    `
    ;
}

module.exports = generateMarkdown;