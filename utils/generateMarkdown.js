// function to generate markdown for README
function renderLicense(license) {
  if (license == "MIT") {
    return "https://choosealicense.com/licenses/mit/"
  } else if (license == "APACHE 2.0") {
    return "https://www.apache.org/licenses/LICENSE-2.0.txt"
  } else if (license == "GPL 3.0") {
    return "link to GPLhttps://choosealicense.com/licenses/gpl-3.0/ goes here"
  } else if (license == "BSD 3") {
    return "link to BSDhttps://choosealicense.com/licenses/bsd-3-clause-clear/ goes here"
  } return "No license has been selected."
}

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
  
  ${renderLicense(data.license)}

  ## Contributing 
  
  ${data.contribution}

  ## Tests 
  
  ${data.test}

  ## Questions 

  Questions or comments about this README.md file? Contact me at ${data.email} or visit my GitHub at https://github.com/${data.gitHubName}.

`;
}

module.exports = generateMarkdown;
