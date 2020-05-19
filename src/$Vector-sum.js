const VectorSum = (vector1, vector2) => {
    this.vc1 = vector1;
    this.vc2 = vector2;

    const x = this.vc1 [0] + this.vc2 [0];
    const y = this.vc1 [1] + this.vc2 [1];

    const coordinates = [x, y];

    return coordinates;
}


module.exports = VectorSum;