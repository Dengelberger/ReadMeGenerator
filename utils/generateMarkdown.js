// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ![License](https://img.shields.io/static/v1?label=${data.license}&message=license&color=red)

  ## Description 
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage) 
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 

  ## Installation 
  
  ${data.installInstructions}

  ## Usage 
  
  ${data.usage}

  ## License 
  
  ${data.license}

  ## Contributing 
  
  ${data.contribution}

  ## Tests 
  
  ${data.test}

  ## Questions 

  Questions or comments about this README.md file? Contact me at ${data.email} or visit my GitHub at https://github.com/${data.gitHubName}.

`;
}

module.exports = generateMarkdown;
