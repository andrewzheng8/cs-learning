var Node = require('./node')

function BST () {
  this.root = null
  this.size = 0
}

BST.prototype.getRoot = function () {
  return this.root
}

BST.prototype.getSize = function () {
  return this.size
}

BST.prototype.searchByKey = function (key) {
  if (!key) {
    throw new Error('Must provide key to be searched on')
  }

  return recursiveSearch(key, this.getRoot())
}

function recursiveSearch (key, node) {
  if (node === null || key === node.getKey()) {
    return node
  } else {
    return key < node.getKey() ? recursiveSearch(key, node.getLeft()) : recursiveSearch(key, node.getRight())
  }

  throw new Error('something went wrong')
}

BST.prototype.insertKey = function (key) {
  if (!key) {
    throw new Error('Must provide key to be searched on')
  }

  if (this.root === null) {
    this.root = new Node(key)
    this.size += 1
    return true
  } else if (recursiveInsertKey(key, this.root)) {
    this.size += 1
    return true
  } else {
    return false
  }

  throw new Error('Something went wrong, should not reach this point')
}

function recursiveInsertKey (key, node) {
  if (key === node.getKey()) {
    throw new Error('Key already exists in tree')
  } else {
    return insertKey(key, node)
  }
}

function insertKey (key, node) {
  if (key < node.getKey()) {
    return insertKeyLeft(key, node)
  } else {
    return insertKeyRight(key, node)
  }
}

function insertKeyLeft (key, node) {
  if (node.getLeft() === null) {
    const insertedNode = new Node(key)
    node.setLeft(insertedNode)
    insertedNode.setParent(node)
    return true
  } else {
    return recursiveInsertKey(key, node.getLeft())
  }
}

function insertKeyRight (key, node) {
  if (node.getRight() === null) {
    const insertedNode = new Node(key)
    node.setRight(insertedNode)
    insertedNode.setParent(node)
    return true
  } else {
    return recursiveInsertKey(key, node.getRight())
  }
}

BST.prototype.deleteKey = function (key) {
  const nodeToDelete = this.searchByKey(key)
  if (nodeToDelete === null) {
    throw new Error('This key is not in the tree')
  } else if (nodeToDelete === this.root) {
    this.deleteRoot()
  } else {
    deleteHelper(nodeToDelete)
    this.size -= 1
  }
  return true
  throw new Error('Should not get out of if loop')
}

BST.prototype.deleteRoot = function () {
  if (!this.getRoot()) {
    throw new Error('No root to delete')
  }

  this.root = deleteRootAndReturnNew(this.getRoot())
  this.size -= 1
}

function deleteRootAndReturnNew (rootNode) {
  const leftChild = rootNode.getLeft(),
    rightChild = rootNode.getRight()
  if (leftChild === null && rightChild === null) {
    return null
  } else if (leftChild === null) {
    rightChild.setParent(null)
    return rightChild
  } else if (rightChild === null) {
    leftChild.setParent(null)
    return leftChild
  } else {
    rightChild.setParent(null)
    const leftMostFromRight = getLeftMost(rightChild)
    leftMostFromRight.setLeft(leftChild)
    leftChild.setParent(leftMostFromRight)
    return rightChild
  }
}

function deleteHelper (node) {
  const parent = node.getParent()
  if (parent.getKey() < node.getKey()) {
    deleteRightChild(parent, node)
  } else {
    deleteLeftChild(parent, node)
  }
}

function deleteRightChild (parent, rightChild) {
  const leftGrandChild = rightChild.getLeft(),
    rightGrandChild = rightChild.getRight()
  if (leftGrandChild === null && rightGrandChild === null) {
    parent.setRight(null)
  } else if (leftGrandChild === null) {
    parent.setRight(rightGrandChild)
    rightGrandChild.setParent(parent)
  } else if (rightGrandChild === null) {
    parent.setRight(leftGrandChild)
    leftGrandChild.setParent(parent)
  } else {
    parent.setRight(rightGrandChild)
    rightGrandChild.setParent(parent)
    const leftMostFromRight = getLeftMost(rightGrandChild)
    leftMostFromRight.setLeft(leftGrandChild)
    leftGrandChild.setParent(leftMostFromRight)
  }
}

function deleteLeftChild (parent, leftChild) {
  const leftGrandChild = leftChild.getLeft(),
    rightGrandChild = leftChild.getRight()
  if (leftGrandChild === null && rightGrandChild === null) {
    parent.setLeft(null)
  } else if (leftGrandChild === null) {
    parent.setLeft(rightGrandChild)
    rightGrandChild.setParent(parent)
  } else if (rightGrandChild === null) {
    parent.setLeft(leftGrandChild)
    leftGrandChild.setParent(parent)
  } else {
    parent.setLeft(rightGrandChild)
    rightGrandChild.setParent(parent)
    const leftMostFromRight = getLeftMost(rightGrandChild)
    leftMostFromRight.setLeft(leftGrandChild)
    leftGrandChild.setParent(leftMostFromRight)
  }
}

function getLeftMost (node) {
  let current = node
  while (current.getLeft() !== null) {
    current = current.getLeft()
  }
  return current
}



module.exports = BST

// function getRightMost (node) {
//   let current = node
//   while (current.getRight() !== null) {
//     current = current.getRight()
//   }
//   return current
// }
