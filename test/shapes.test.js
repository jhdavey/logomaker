//Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
const {Circle, Square, Triangle} = require('../lib/shapes');

describe('Validate', () => {
//Test Circles
describe('Circle test:', () => {
    it('Should render correctly.', () => {
        const shape = new Circle();
        shape.color = 'blue';
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="${shape.color}"/>`);
    });
});

//Test Squares
describe('Square test:', () => {
    it('Should render correctly.', () => {
        const shape = new Square();
        shape.color = 'blue';
        expect(shape.render()).toEqual(`<rect x="0" y="0" width="100%" height="100%" fill="${shape.color}"/>`);
    });
});

//Test triangles
describe('Triangle test:', () => {
    it('Should render correctly.', () => {
        const shape = new Triangle();
        shape.color = 'blue';
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0, 200 300, 200 150, 0" fill="${shape.color}"/>`);
    });
})
});