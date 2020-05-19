const Magnitude = (vector) => {
  this.vc = vector;

  const norm = Math.sqrt ((this.vc [0]**2) + (this.vc [1]**2));

  return Math.round (norm);
}


module.exports = Magnitude;