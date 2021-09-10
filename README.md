
 
  # Note Taker
  []()

  ## Table of Contents
  * [Description](#description)
  * [Install](#install)
  * [Use](#use)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  Note taker creates a server that stores notes by title and text. Notes are stored and may be retrieved by clicking on the title. Users have the option to add new notes and delete existing ones by clicking the correlating add and delete buttons.

  ## Install
  Ensure that you have the latest working version of Node.js installed. To install the needed node packages, use the command "npm init" and "npm install express" in the terminal. To initiate the server, use the command "node server".
  
  ## Use
  Use the command "node server". This should initiate the server on PORT 3001. Use a web browser to navigate to http://localhost:3001/ and you should land on a start page. Click the "Get Started" button to begin using Note Taker. After the user  makes an entry in both the Note Title and Note Text section they will be prompted with an option to save the note via a save disk button. Clicking on previous Note Titles will bring up previous notes. Clicking on the trash bin icon will delete previous notes. In order to add a new note, users can click on the add button to regenerate the prompt area.
  
  ## License
  No license.

  ## Contributing
   [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

  ## Tests
  Install jest with the command "npm install jest". In the package.json file make sure that under the script property, the test property is set to "jest" as follows:
  ```
  "scripts": {
    "test": "jest"
  },
  ```
  Run the command "npm test" to run the tests.

  ## Questions
  - [Github for mattersievers](http://www.github.com/mattersievers)
  - For further questions, contact me through email at mattersievers@gmail.com

