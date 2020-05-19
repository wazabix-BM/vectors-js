module.exports = {
  Points: require ('./src/$Points.js')
}

// * Import extern functions
const DotProduct = require ('./src/$DotProduct.js');
const Orientation = require ('./src/$Orientation.js');
const VectorSum = require ('./src/$Vector-sum.js');
const Magnitude = require ('./src/$Magnitude.js');
const Normalize = require ('./src/$Normalize.js');

/**
 * @constructor
 * @param name type string
 * @param components type object
 * @return Promise
 */


function Vector ({name, components}) {
  this.components = components;
  this.name = name;

  // * return of the Vector function (Promise)
  return new Promise ((resolve, reject) => {

    if (this.components === undefined) reject (new Error ('You must give the coordinates for ur vector'));

    if (typeof this.components !== 'object') reject (new Error ('The coordinates of your vector must be given in table form'));

    if (this.components.length < 2) reject (new Error ('You must give an X and Y coordinate for your vector'));

    if (this.components.length > 2) reject (new Error ('This vector library works on 2D only'));

    if (this.name === undefined) this.name = 'v';

    if (this.name.length !== 1) reject (new Error ('This method accepts only one letter as a vector name'));

    // * resolved objects of the Promise
    const functions = {};
    functions.name = this.name;
    
    functions.display = ({}) => {
      return `${this.name} = [${this.components}]`
    };

    functions.magnitude = Magnitude (this.components);
    functions.orientation = Orientation (this.components);

    functions.normalize = ({}) => {
      return Normalize (this.components);
    }

    functions.dotProduct = (vector) => {
      this.vector = vector;

      if (this.vector === undefined) throw new Error ('ScalarProduct is a function and it takes as parameter a vector');

      return DotProduct (this.components, this.vector);
    }

    functions.add = (vector) => {
      this.vector = vector;

      if (this.vector === undefined) throw new Error ('VectorialSum is a function and it takes as parameter a vector');

      return VectorSum (this.components, this.vector);
    }

    // * resolve {Object}
    resolve (functions);
  });
}


module.exports.Vector = Vector;