

function renderLicenseBadge(license) {
  const badges = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]',
    gnuplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]'
  }
  return badges[license]
}

function renderLicenseLink(license) {
  const licenseLinks = {
    mit: '[MIT](https://choosealicense.com/license/mit/)',
    isc: '[ISC](https://choosealicense.com/license/isc/)',
    gnuplv3: '[GNUGPLv3](https://choosealicense.com/license/gpl-3.0/)'
  }

  return licenseLinks[license]
}

function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}
    
    Licensed under the ${license} license`
  } else {
    return ''
  }
}

function generateReadme(answers) {
  return `# ${answers.title}

${renderLicenseBadge(answers.license)}

  ## Table of Content 
  - [Project description](#Description)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Installation](#Installation)
  - [Questions](#Questions)
  - [License](#License)

  ## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Questions
${answers.email}
${answers.github}

## License
${renderLicenseSection(answers.license)}
`
}




// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = generateReadme
