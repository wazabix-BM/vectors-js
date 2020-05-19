const Orientation = (vector) => {
    this.vector = vector;

    const TanTeta = this.vector [1] / this.vector [0];

    const Teta = Math.atan (TanTeta);
    
    const deg = (Teta * 360) / (2 * Math.PI);

    return (`${Math.round (deg)}deg`);
}



module.exports = Orientation;