const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const {Circle, Square, Triangle} = require('./lib/shapes');

class Logo {
    constructor() {
        this.text = textComplete;
        this.shape = shape;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg version=1.1 xmlns="https://www.w3.org/2000/svg" height="200px" width="300px">\n${this.text}\n${this.shape}</svg>>`
    }
    setText() {
        text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text-color}">${textConplete}</text>"</text>`;
    }
    setShape() {
        shape = shape.render();
    }
}

const prompts = inquirer.prompt([
        {
        type: 'input',
        message: 'Enter up to 3 letters for your logo:',
        name: 'text'
        //Check that this is 1-3 letters long, not other chars
        },
        {
        type: 'input',
        message: 'What color would you like your text to be?',
        name: 'text-color'
        //Return text color keyword or hexidecimals? / Validate entry
        },
        {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape'
        },
        {
        type: 'input',
        message: 'What color would you like your logo to be?',
        name: 'shape-color'
        }
]);


function createLogo(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully created logo.svg!");
    });
};

const writeFileAsync = util.promisify(createLogo);

// function to initialize program
async function init() {
    try{
        // Run user through prompts,send prompts to generateMarkdown module, then writeFile
        const responses = await inquirer.prompt(prompts);
        console.log('Your Responses: ', responses);

        const newLogo = new Logo(responses);

        await writeFileAsync('logo.svg', newLogo);   

    } catch  (error) {
        console.error();
    }

}

init();


