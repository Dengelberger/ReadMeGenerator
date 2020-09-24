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
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license == "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license == "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license == "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"  
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
