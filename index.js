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
        choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Artistic License 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'BSD 4-clause "Original" or "Old" license', 'BSD Zero-Clause license', 'Creative Commons license family', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution ShareAlike 4.0', 'Do What The F*ck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License family', 'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC', 'LaTeX Project Public License v1.3c', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'PostgreSQL License', 'SIL Open Font License 1.1', 'University of Illinois/NCSA Open Source License', 'The Unlicense', 'zLib License']
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