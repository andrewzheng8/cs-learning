function Node (key) {
  if (!key) {
    throw new Error('A node must have a key')
  }
  this.parent = null
  this.right = null
  this.left = null
  this.key = key
  this.data = null
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

Node.prototype.getKey = function () {
  return this.key
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
  if (leftChild !== null && Object.getPrototypeOf(leftChild) !== Node.prototype) {
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
  if (rightChild !== null && Object.getPrototypeOf(rightChild) !== Node.prototype) {
    throw new Error('The prototype of a child must also be Node or null')
  }
  this.right = rightChild
}

Node.prototype.getRight = function () {
  return this.right
}

module.exports = Node
