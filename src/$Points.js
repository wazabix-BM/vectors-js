/**
 * @constructor
 * @param {object} p1
 * @param {object} p2
 */

function Points (p1, p2) {
  this.p1 = p1;
  this.p2 = p2;

  if (typeof this.p1 === "undefined" || typeof this.p2 === "undefined") {
    throw new Error ('You must specify the two points');
  }

  if (typeof this.p1 !== 'object' || typeof this.p2 !== 'object') {
    throw new Error ('The coordinates of your points must be of type \'object\'');
  }

  if (this.p1.length < 2) throw new Error ('You must give an X and Y coordinate for your first point');

  if (this.p2.length < 2) throw new Error ('You must give an X and Y coordinate for your second point');

  if (this.p1.length > 2 || this.p2.length > 2) throw new Error ('This vector library works on 2D only');

  let x = this.p2 [0] - this.p1 [0];

  let y = this.p2 [1] - this.p1 [1];

  /**
   * @function
   * @name createVector
   * @param {object} "this"
   * @return vector coordinates
   */
  
  this.createVector = ({}) => {

    let response;

    response = [x, y];

    return response;
  };
}



module.exports = Points;
