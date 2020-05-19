const Magnitude = require ('./$Magnitude.js');

const Normalize = (vector) => {
    this.vc = vector;

    const magnitude = Magnitude (this.vc);

    const x = this.vc [0] / magnitude;
    const y = this.vc [1] / magnitude;

    return [x, y];
}


module.exports = Normalize;