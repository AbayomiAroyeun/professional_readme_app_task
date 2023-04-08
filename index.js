// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./lib/generateMarkdown.js')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = ([
    {
        type: 'input',
        name: 'title',
        message: 'what is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instruction'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project Usage?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'for questions (email)'
    },
    {
        type: 'input',
        name: 'github',
        message: 'for questions (github)'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(vol) {
            return vol.toLowerCase();
        }
    },

]);

//run query function
async function answers() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const readmeText = generateReadme(answers)

            fs.writeFile("README.md", readmeText, function (err) {
                if (err) {
                    console.log('saving fail!', err)
                } else {
                    console.log('success!')
                }
            })

            return answers
        })
        .catch((error) => {
            console.log(error)
        })
}

answers()



// TODO: Create a function to write README file




// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//         .then(function (unserInput) {
//             console.log(userInput)
//             writeToFile("README.md", generateMarkdown(userInput));
//         });
// };

// // Function call to initialize app
// init();
