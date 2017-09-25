var Node = require('./node')

// console.log(Node)

var first = new Node(1)

function RBTree (rootNode) {
  if (rootNode === undefined) {
    throw new Error('Must pass rootNode to constructor')
  }
  if (Object.getPrototypeOf(rootNode) !== Node.prototype) {
    throw new Error('The rootNode must have a protype of Node')
  }

  this.root = rootNode
  this.size = 1
}

RBTree.prototype.setRoot = function (rootNode) {
  if (rootNode === undefined) {
    throw new Error('Must pass rootNode to setRoot')
  }
  if (Object.getPrototypeOf(rootNode) !== Node.prototype) {
    throw new Error('The rootNode must have a protype of Node')
  }

  this.root = rootNode
}

RBTree.prototype.getRoot = function () {
  return this.root
}

RBTree.prototype.search = function (key) {
  if (!key) {
    throw new Error('Must provide key to be searched on')
  }

  return recursiveSearch(key, this.root)

}


static function recursiveSearch (key, node) {
  if (node === null || key === node.key) {
    return node
  } else {
    return key < node.key ? recursiveSearch(key, node.left) : recursiveSearch(node.right)
  }

  throw new Error('something went wrong')
}

static function leftRotation (parent) {
  let grandParent = parent.parent
  let originalParent = parent
  let originalRight = parent.right
  originalParent.right = orignalRight.left
  originalRight.left = originalParent
  originalParent.parent = originalRight
  originalRight.parent = grandParent

  if (grandParent.key < originalRight.key) {
    grandParent.right = originalRight
  } else {
    grandParent.left = orginalRight
  }

}

static function rightRotation (parent) {
  let grandParent = parent.parent
  let originalParent = parent
  let originalLeft = parent.left
  originalParent.left = orignalLeft.right
  originalLeft.right = originalParent
  originalParent.parent = originalLeft
  originalLeft.parent = grandParent

  if (grandParent.key < originalLeft.key) {
    grandParent.right = originalLeft
  } else {
    grandParent.left = orginalLeft
  }

}
