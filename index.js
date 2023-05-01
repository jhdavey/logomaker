const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateShape = require('./lib/generateShape');
const {
    isValidColorName,
    isValidRGB,
  } = require('is-valid-css-color');

//Inquirer questions array
const prompts =
    [
        {
        type: 'input',
        message: 'Enter up to 3 letters for your logo:',
        name: 'text',
        //Check that this is 1-3 letters long, not other chars
        validate: function (text) {
            if (text.length == 0 || text.length > 3) {
              throw new Error("Logo text must be 1 to 3 characters long");
            }
            return true;
          }
        },
        {
        type: 'input',
        message: 'What color would you like your text to be? (Enter a color keyword OR a hexadecimal number)',
        name: 'textColor',
        // Validate entry exists
        validate: function (input) {
            if (!input) {
                throw new Error("Input cannot be empty");
            }
            return true;
        },
        //Validate entry is color keyword or hexidecimal code
        validate: function (input) {         
            //Change all css named color to lowercase
            input = input.toLowerCase();
            if (isValidColorName(input) || isValidRGB(input)) {
                return true;
            }
            throw new Error("Input cannot be empty");
        }
        },
        {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape'
        },
        {
        type: 'input',
        message: 'What color would you like your logo to be? (Enter a color keyword OR a hexadecimal number)',
        name: 'shapeColor',
        //Validate entry exists
        validate: function (shapeColor) {
            if (!shapeColor) {
                throw new Error("Input cannot be empty");
            }
            return true;
        },
        //Validate color keyword or hexidecimal code
        validate: function (input) {         
            //Change all css named color to lowercase
            input = input.toLowerCase();
            if (isValidColorName(input) || isValidRGB(input)) {
                return true;
            }
            throw new Error("Please enter a vaild css color keyword or hex code")
        }
        }
];

//function to write logo.svg file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!")
    });
}
const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
    try{
        // Run user through prompts,send prompts to generateShape module, then writeFile
        const responses = await inquirer.prompt(prompts);
        console.log('Your Response: ', responses);
        console.log('Rendering logo...');
        //shapeFile undefined currently
        const shapeFile = generateShape(responses);
        await writeFileAsync('logo.svg', shapeFile);   
    } catch  (error) {
        console.error();
    }

}

// function call to initialize program
init();