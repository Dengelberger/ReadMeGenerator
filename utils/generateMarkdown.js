// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description ${data.description}

  ## Table of Contents
 
  ## Installation ${data.installInstructions}

  ## Usage ${data.usage}

  ## License ${data.license}

  ## Contributing ${data.contribution}

  ## Tests ${data.test}

  ## Questions 

`;
}

module.exports = generateMarkdown;
