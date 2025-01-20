import fs from 'fs';

// const formatFileName = (data) => {
//     return `${data.userName}.html`
// }
// write to file

// html string template literal

let mdString = (data) => 
`# ${data.title}

## Table of Contents - ${data.license}
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[Tests](#tests)
[License](#license)
[Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This application is covered under the ${data.license}.

## Questions
You can find my github with the folowwing handle: [${data.github}][https://github.com/${data.github}]\
Please direct questions to the following email: ${data.email}`;

export default (data) => {
    const content = mdString(data);

    fs.writeFile('README.md', content, (err) => {
        err ? console.error(err) : console.log("Written to file.")
    })
};