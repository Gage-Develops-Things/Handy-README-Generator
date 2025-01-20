import inquirer from 'inquirer';

import writeToFile from './helpers.js'

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'State if you are open to contributions and what your requirements are for accepting them.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What were the test parameters of this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license option from the following list:',
        choices: ''
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
])
.then(writeToFile);