var Treenode = require('./TreeNode')
class Tree {
    constructor() {
        this.node = null
    }

    insert(value) {
        let currentNode = new Treenode(value);
        let root = this.node

        if (root === null) {
            this.node = currentNode
            return;
        }
        while (true) {

            if (root.root < value) {

                if (root.right === null) {
                    root.right = currentNode
                    break;
                }
                root = root.right
            } else {
                if (root.left === null) {
                    root.left = currentNode
                    break;
                }
                root = root.left
            }

        }

    }

    preorder(node) {

        if (node.root !== null) {
            console.log(node.root)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    postorder(node) {

        if (node.root !== null) {
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.root)

        }
    }

    inorder(node) {

        if (node.root !== null) {
            this.inorder(node.left)
            console.log(node.root)
            this.inorder(node.right)

        }
    }

    getRootNode() {
        return this.node
    }


    search(node, value) {
        if (node.root !== null) {
            if (node.root == value) {
                console.log(node)
                return node;
            }
            this.search(node.left, value)
            this.search(node.right, value)
        }
    }

    getMinNode() {
        while (this.node.left.root != null) {
            this.node = this.node.left
        }
        console.log(this.node)
    }

    height(node) {

        if (node === null) {
            return -1;
        }
        if (node.left === null && node.right === null) {
            return 0;
        }


        return 1 + Math.max(this.height(node.left), this.height(node.right))
    }

    nodeAtK(node, distance) {
        if (distance === 0) {
            console.log(node.root)
            return node;
        }

        if (node === null) {
            return null
        }

        this.nodeAtK(node.left, distance - 1)
        this.nodeAtK(node.right, distance - 1)
    }



    minValue(node) {
        if (node === null) {
            return Infinity;
        }
        if (node.left === null && node.right === null) {
            return node.root
        }

        let left = this.minValue(node.left)
        let right = this.minValue(node.right)

        return Math.min(Math.min(left, right), node.root)
    }


    equality(node1, node2) {

        if (node1 == null && node2 === null) {
            return true
        }


        console.log({
            node1,
            node2
        })
        if ((node1.left === null && node2.left != null) || (node1.left !== null && node2.left === null)) {
            return false
        }

        if ((node1.right === null && node2.right != null) || (node1.right !== null && node2.right === null)) {
            return false
        }

        if (node1.left === null && node2.left === null && node1.right === null && node2.right === null) {
            if (node1.root === node2.root) {
                return true
            }
        }

        let left = this.equality(node1.left, node2.left)
        let right = this.equality(node1.right, node2.right)


        return left && right
    }

    isBinaryTree(node, min, max) {
        if (node === null) {
            return true
        }

        if (node.root > max || node.root < min) {
            return false;
        }

        return this.isBinaryTree(node.left, min, node.root - 1) && this.isBinaryTree(node.right, node.root + 1, max)
    }




}

let tree1 = new Tree();
tree1.insert(20)
tree1.insert(4)
tree1.insert(70)
tree1.insert(1)
tree1.insert(100)
tree1.insert(90)
tree1.insert(60)


//tree.search(tree.getRootNode(),4)
tree1.nodeAtK(tree1.node, 1)
//console.log(tree.getRootNode())