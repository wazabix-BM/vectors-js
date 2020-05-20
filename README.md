## vectors-js

[![Discord](https://img.shields.io/discord/519837781866840122?color=7289DA&label=WaZaBiX%27s%20guild&logo=Discord)](https://discord.gg/ES52WDg)
[![npm](https://img.shields.io/npm/v/vectors-js)](https://www.npmjs.com/package/vectors-js)
[![NPM](https://img.shields.io/npm/l/vectors-js?color=green&label=LICENSE)](https://github.com/wazabix-BM/vectors-js/blob/master/LICENSE.md)

> A simple javascript library to work with vectors in a two-dimensional space

# Install

```bat
npm i vectors-js
```
-------------------------------------------------------------------

# API

* __*Constructors*__

<a href= "#points"><code><b>Points</b></code></a>
<a href= "#vector"><code><b>Vector</b></code></a>


--------------------------------------------------------------------------------------------

* <a href = "#name"><code>.name</code></a> **=>** *type* ***"object"*** *return => type* ***"string"***
* <a href = "#displayvector"><code>.display ()</code></a> **=>** *type* ***"function"*** *return => type* ***"string"***
* <a href = "#magnitude"><code>.magnitude</code></a> **=>** *type* ***"object"*** *return => type* ***"number"***
* <a href = "#orientation"><code>.orientation</code></a> **=>** *type* ***"object"*** *return => type* ***"string"***
* <a href = "#normalize"><code>.normalize ()</code></a> **=>** *type* ***"function"*** *return => type* ***"array"***
* <a href = "#dotproduct"><code>.dotProduct ()</code></a> **=>** *type* ***"function"*** *return => type* ***"number"***
* <a href = "#vectorsum"><code>.add ()</code></a> **=>** *type* ***"function"*** *return => type* ***"array"***


# Construtors - Usage

> This library includes two types of constructor, one where you can create a vector starting from points and the other where you can instantiate your vector and apply certain functions to it.

<a name= "points">

* <code>Points</code>
Creating a vector from points

```js
const {
    Points
} = require ('vectors-js');

const A = [2, 8];
const B = [-2, -8];

const vector = new Points (A, B).createVector (this);
console.log (vector);
// OUTPUT: [-4, -16]
```

<a name= "vector">

* <code>Vector</code>
Constructor allowing the implementation of the various functionalities of this library

```js
const {
    Vector
} = require ('vectors-js');

// You can create a vector without using the "Points" constructor

/* * "Points" constructor
* This method is just used to create a vector from two points and it does not require
*/

new Vector ({
    name: "u", // Optional
    components: [2, 8]

}).then (vector => {
    console.log (vector);

}).catch (error => {
    console.log (error);
});

/* * OUTPUT:
{
  name: 'u',
  display: [Function (anonymous)],
  magnitude: 8,
  orientation: '76deg',
  normalize: [Function (anonymous)],
  dotProduct: [Function (anonymous)],
  add: [Function (anonymous)]
}
*/
```

-----------------------------------------------------------------------------------------

<a name= "dotproduct"></a>

# dotProduct

> In mathematics, and more precisely in algebra and vector geometry, the scalar product is an algebraic operation in addition to the laws applying to vectors. It is a bilinear, symmetric and positively defined form. With two vectors, it associates a scalar, i.e. a number such as those defining this vector space - real for a real vector space, and complex for a complex vector space.

* Usage

```js
const {
  Points,
  Vector
} = require ('vectors-js');

let A = [2, 8];
let B = [-2, -8];

let C = [8, 2];
let D = [-8, -2];

const vector1 = new Points (A, B).createVector (this);
const vector2 = new Points (C, D).createVector (this);

new Vector ({
  name: 'c',
  components: vector1

}).then (vector => {
  console.log (vector.dotProduct (vector2));

}).catch (error => {
  console.log (error);
});

// OUTPUT: 128
```

--------------------------------------------------------------------------------------

<a name= "displayvector"></a>

# display

> Allows you to display the vector

* Usage

```js
const {
  Vector
} = require ('vectors-js');

new Vector ({
  components: [8, 2]

}).then (vector => {
  console.log (vector.display (this));

}).catch (error => {
  console.log (error);
});

// OUTPUT: "v = [8, 2]"
```

------------------------------------------------------------------------------------------

<a name= "magnitude"></a>

# magnitude

> In geometry, the magnitude is an extension of the absolute value of numbers to vectors. It measures the length common to all representations of a vector in affine space, but also defines a distance between two vectors that is invariant by translation and compatible with external multiplication.

* Usage

```js
const {
  Vector
} = require ('vectors-js');

new Vector ({
  components: [2, 8]

}).then (vector => {
  console.log (vector.magnitude);
});

// OUTPUT: 8
```
----------------------------------------------------------------------------------------------

The other methods are also included in the Promise returned by the builder. (Same operation)

<a name= "orientation"></a>

# orientation

> In mathematics, an orientation is a convention to be set for the object under study, the formulation of which depends on the nature of that object. It is necessary, for example, to solve sign problems. If the space Rn has a canonical orientation, the orientation of vector spaces or geometric figures in general is an arbitrary convention. Not all objects concerned admit an orientation: if this is the case, they are said to be orientable.

* Usage 

```js
.then (vector => {
  console.log (vector.orientation);
});
```

----------------------------------------------------------------------------------------------------

<a name= "name"></a>

# name

> Returns the name of the vector

* Usage

```js
.then (vector => {
  console.log (vector.name);
});
```

-----------------------------------------------------------------------------------------------------

<a name= "normalize"></a>

# normalize

This method makes it possible to obtain a unit vector

> In a normalized (real or complex) vector space E, a unit vector is a vector whose norm is equal to 1.

* Usage

```js
.then (vector => {
  console.log (vector.normalize (this));
});
```

------------------------------------------------------------------------------------------------------------

<a name= "vectorsum"></a>

# add

> The vector sum, or more simply the sum, of two vectors is the vector where D is the only point such that A, B, D and C form a parallelogram

* Usage

```js
const {
  Vector
} = require ('vectors-js');

const vector1 = [1, 8];
const vector2 = [2, 12];

new Vector ({
  components: vector1

}).then (vector => {
  console.log (vector.add (vector2));

}).catch (error => {
  console.log (error);
});
```
