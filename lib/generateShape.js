const {Circle, Square, Triangle} = require('./shapes');

//Generate file for logo
function generateShape(responses) {
    //Render shape with color specified
    if (responses.shape === 'Circle') {
        var newShape = new Circle(responses.shapeColor);
        console.log('newShape rendered');
    } else if (responses.shape === 'Square') {
        var newShape = new Square(responses.shapeColor);
        console.log('newShape rendered');
    } else if (responses.shape === 'Triangle') {
        var newShape = new Triangle(responses.shapeColor);
        console.log('newShape rendered');
    } else {
        return 'ERROR rendering shape';
    }

    return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${newShape.render()} 
        <text x="50%" y="50%" text-anchor="middle" fill="${responses.textColor}" font-size="48px">${responses.text}</text>
        </svg>`;
}

module.exports = generateShape;