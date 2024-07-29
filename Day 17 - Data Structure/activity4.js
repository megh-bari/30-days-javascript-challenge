// ! Activity 4: Binary Tree

// * Task 7

class TreeNode {
    constructor( value ) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const TreeNodeOne = new TreeNode( 2 );
const TreeNodeTwo = new TreeNode( 3 );
const TreeNodeThree = new TreeNode( 4 );

TreeNodeOne.right = TreeNodeTwo
TreeNodeOne.left = TreeNodeThree

console.log( TreeNodeOne )


// * Task 8

class BinaryTree {

    constructor() {
        this.root = null;
    }

    insert( value ) {
        const newNode = new TreeNode( value );

        if ( this.root === null ) {
            this.root = newNode;
        }
        else {
            this.insertNode( this.root, newNode )
        }
    }

    insertNode( root , newNode ) {
        if ( newNode.value < root.value ) {
            if ( root.left !== null ) {
                this.insertNode(root.left, newNode)
            }
            else {
                root.left = newNode
            }
        }
        else {
            if ( root.right !== null ) {
                this.insertNode( root.right , newNode )
            }
            else {
                root.right = newNode
            }
        }
    }

    inOrder( node ) {
        if ( node ) {
            this.inOrder( node.left )
            console.log( node.value )
            this.inOrder( node.right )
        }
    }
}

const tree = new BinaryTree();
tree.insert( 15 );
tree.insert( 7 );
tree.insert( 19 );
tree.insert( 4 );
tree.insert( 9 ) ;
tree.insert( 27 );


tree.inOrder( tree.root );