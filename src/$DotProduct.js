const DotProduct = (vc1, vc2) => {
  this.vc1 = vc1;
  this.vc2 = vc2;

  const formula = (this.vc1 [0] * this.vc2 [0]) + (this.vc1 [1] * this.vc2 [1]);

  return Math.round (formula);
}


module.exports = DotProduct;