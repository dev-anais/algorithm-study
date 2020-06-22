/** refered to https://jeong-pro.tistory.com/131 */
class Node{
    constructor(data, left, right){
        this.data = data
        this.left = left
        this.right = right
    }
    show(){
        return this.data
    }
}
class BST{
    
    constructor(){
        this.root = null
    }

    getRoot(){
        return this.root
    }    
    insert(data){
        let n = new Node(data, null, null)
        if(this.root == null) this.root = n
        else{
            let current = this.root
            let parent
            while(true){
                parent = current
                if(current.data >= data){
                    current = current.left
                    if(current == null){
                        parent.left = n
                        break
                    }
                }else{
                    current = current.right
                    if(current == null){
                        parent.right = n
                        break
                    }
                }
            }
        }
    }
    inOrder(node){
        if(!(node == null)){
            this.inOrder(node.left)
            console.log(node.show())
            this.inOrder(node.right)
        }
    }
    find(data){
        let current = this.root
        while(current.data != data){
            if(data <= current.data){
                current = current.left
            }else{
                current = current.right
            }
            if(current == null) return null
        }
        return current
    }
    remove(data){
        this.root = this.removeNode(this.root, data)
    }
    removeNode(node, data){
        if(node == null) return null
        if(node.data == data){
            if(node.left == null && node.right == null) return null
            if(node.left == null) return node.right
            if(node.right == null) return node.left
            let tempNode = this.smallestNode(node.right)
            node.data = tempNode.data
            node.right = this.removeNode(node.right, tempNode.data)
        }else if(data < node.data){
            node.left = this.removeNode(node.lef, data)
            return node
        }else{
            node.right = this.removeNode(node.right, data)
            return node
        }
    }
    smallestNode(node){
        let current = node
        while(!(current.left == null)){
            current = current.left
        }
        return current
    }
}