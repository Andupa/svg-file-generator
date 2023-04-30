 // TODO: Include packages needed for this application
const inquirer = require('inquirer');
 const {Square, Triangle, Circle} = require('./lib/shapes');
 
class ScalableVectorGraphics{
       constructor (){
        this.textElemet = ' ';
        this.shapeElement = ' ';
       }
       render(){
              return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
       }
       setTextElement(text, color){
        this.textElemet = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
       }
       setShapeElement(polygon){
              this.shapeElemet = polygon.render()
       }
}
 
// TODO: Create an array of questions for user input
const questions =  [
       {
              type : 'input',
              name: 'text',
              message: 'Enter up to 3 characters',
       },

       {
              type : 'input',
              name: 'text',
              message: 'enter a color keyword (OR a hexadecimal number)',
       },
       {
              type : 'input',
              name: 'shape',
              message: 'choose the list of shape you like',
       },

];
 