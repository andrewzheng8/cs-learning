var test = require('tape'),
  BST = require('./bst'),
  Node = require('./node')

test('BST constructor', function (t) {
  const newBST = new BST()
  t.deepEqual(Object.getPrototypeOf(newBST), BST.prototype, 'The prototype object which the instance of BST and constructor point to should be the same')
  t.deepEqual(newBST.getRoot(), null, 'The new BST object should point to null')
  t.deepEqual(newBST.getSize(), 0, 'The new BST object should have a size of 0')
  t.end()
})

test('BST insertKey', function (t) {
  const newBST = new BST()
  newBST.insertKey(1)
  t.equal(newBST.getRoot().getKey(), 1, 'The root should now point to a Node created with key 1')
  t.deepEqual(newBST.getSize(), 1, 'The new BST object should have a size of 1')

  newBST.insertKey(-21)
  t.equal(newBST.getRoot().getKey(), 1, 'The root should still point to a Node created with key 1')
  t.deepEqual(newBST.getSize(), 2, 'The new BST object should have a size of 2')

  newBST.insertKey(13)
  t.deepEqual(newBST.getSize(), 3, 'The new BST object should have a size of 2')

  t.deepEqual(newBST.getRoot().getRight().getKey(), 13, 'The right child of the root has a key of 13')
  t.deepEqual(newBST.getRoot().getLeft().getKey(), -21, 'The left child of the root has a key of -21')

  t.throws(newBST.insertKey.bind(null, 1), Error('Key already exists in tree'), 'insertKey should throw if the key is found in the tree')
  t.end()
})

test('BST searchByKey', function (t) {
  const newBST = new BST()
  newBST.insertKey(1)
  newBST.insertKey(-21)
  newBST.insertKey(13)
  t.deepEqual(newBST.searchByKey(13).getKey(), 13, 'The search by key should return a node with key passed [13]')
  t.deepEqual(newBST.searchByKey(-21).getKey(), -21, 'The search by key should return a node with key passed [-21]')
  t.deepEqual(newBST.searchByKey(1).getKey(), 1, 'The search by key should return a node with key passed [1]')
  t.deepEqual(newBST.searchByKey(2), null, 'The search by key should return a null value')
  t.end()
})

test('BST deleteKey', function (t) {
  const newBST = new BST()
  newBST.insertKey(1)
  newBST.insertKey(-21)
  newBST.insertKey(13)
  newBST.insertKey(12)
  t.deepEqual(newBST.searchByKey(13).getKey(), 13, 'The search by key should return a node with key passed [13]')

  newBST.deleteKey(13)
  t.deepEqual(newBST.searchByKey(13), null, 'The search by key should return a null value')
  t.deepEqual(newBST.getSize(), 3, 'The new BST object should have a size of 2')

  t.deepEqual(newBST.getRoot().getRight().getKey(), 12, 'The right child of the root should have a ky of 12')
  t.end()
})
