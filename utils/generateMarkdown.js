// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Project title
  ${data.project_title}

## Description   
  ${data.description}
  
## Table of Contents
  * The project title
  * Description 
  * Installation 
  * Usage 
  * License 
  * Contributing 
  * Tests 
  * Questions
  
## Installation
  Run the following command in order to install necessary dependencies:
  ${data.installation}

## Usage
  ${data.usage}

## Contributing 
  ${data.contributing}

## Tests 
  ${data.tests}

## Questions
  If you have additional questions:
  ${data.additional_questions}

## License 
  ![License badge](https://img.shields.io/badge/license-${data.license}-blue.svg)

## User name
  ${data.username}


## User email
  ${data.email}


`;
}

module.exports = generateMarkdown;
