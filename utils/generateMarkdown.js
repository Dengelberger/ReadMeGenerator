// function to generate markdown for README
function renderLicense(license) {
  if (license == "MIT") {
    return "Click here for the MIT license: https://choosealicense.com/licenses/mit/"
  } else if (license == "APACHE 2.0") {
    return "Click here for the Apache 2.0 license: https://www.apache.org/licenses/LICENSE-2.0.txt"
  } else if (license == "GPL 3.0") {
    return "Click here for the GPL 3.0 license: https://choosealicense.com/licenses/gpl-3.0/"
  } else if (license == "BSD 3") {
    return "Click here for the BSD 3 license: https://choosealicense.com/licenses/bsd-3-clause-clear/"
  } return "No license has been selected. Please consider the use of your project and adding a license soon."
}

function renderLogo(license) {
  if (license == "MIT") {
    return "![License](https://img.shields.io/static/v1?label=MIT&message=license&color=red)"
  } else if (license == "APACHE 2.0") {
    return "![License](https://img.shields.io/static/v1?label=APACHE&message=license&color=red)"
  } else if (license == "GPL 3.0") {
    return "![License](https://img.shields.io/static/v1?label=GPL3&message=license&color=red)"
  } else if (license == "BSD 3") {
    return "![License](https://img.shields.io/static/v1?label=BSD3&message=license&color=red)"  
  } return "No license has been selected."



}

function generateMarkdown(data) {

  return `# ${data.title}

  ${renderLogo(data.license)}

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

  This project is licensed under the ${data.license} license.

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
