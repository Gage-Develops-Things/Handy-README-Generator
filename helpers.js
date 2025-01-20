import fs from 'fs';

// const formatFileName = (data) => {
//     return `${data.userName}.html`
// }
// write to file

// html string template literal

let mdString = (data) => 
`# ${data.title}

## Table of Contents

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
${data.license}

## Questions
You can find my github with the folowwing handle: ${data.github}
Please direct questions to the following email: ${data.email}`;

export default (data) => {
    const fileName = formatFileName(data);
    const content = mdString(data);

    fs.writeFile('README.md', content, (err) => {
        err ? console.error(err) : console.log("Written to file.")
    })
};