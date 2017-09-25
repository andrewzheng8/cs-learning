function Node (key) {
  if (!key) {
    throw new Error('A node must have a key')
  }
  this.parent = null
  this.right = null
  this.left = null
  this.key = key
  this.data = null
  this.color = null
}

Node.prototype.setData = function (data) {
  if (data === undefined) {
    throw new Error('Must pass data')
  }
  this.data = data
}

Node.prototype.getData = function () {
  return this.data
}

Node.prototype.setParent = function (parent) {
  if (parent === undefined) {
    throw new Error('Must pass parent')
  }
  if (Object.getPrototypeOf(parent) !== Node.prototype && parent !== null) {
    throw new Error('The prototype of the parent must also be Node or null')
  }
  this.parent = parent
}

Node.prototype.getParent = function () {
  return this.parent
}

Node.prototype.setLeft = function (leftChild) {
  if (leftChild === undefined) {
    throw new Error('Must pass leftChild')
  }
  if (Object.getPrototypeOf(leftChild) !== Node.prototype && leftChild !== nul) {
    throw new Error('The prototype of a child must also be Node or null')
  }
  this.left = leftChild
}

Node.prototype.getLeft = function () {
  return this.left
}

Node.prototype.setRight = function (rightChild) {
  if (rightChild === undefined) {
    throw new Error('Must pass data')
  }
  if (Object.getPrototypeOf(rightChild) !== Node.prototype && rightChild !== null) {
    throw new Error('The prototype of a child must also be Node or null')
  }
  this.right = rightChild
}

Node.prototype.getRight = function () {
  return this.right
}

Node.prototype.setColor = function (color) {
  if (color !== 'red' && color !=='black' && color !== null) {
    throw new Error('The color must be red, black, or null')
  }

  this.color = color
}

Node.prototype.getColor = function () {
  return this.color
}

module.exports = Node
