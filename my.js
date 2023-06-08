class List {
    
    constructor(){
        this._head = null
        this._tail = null
        this._size = 0
    }

    get size(){
        return this._size
    }

    get head(){
        return this._head
    }

    get tail(){
        return this._tail
    }

    append(val){
        let myNode = new Node(val)

        if(this._head == null){
            this._head = myNode
            this._tail = myNode
        } else{
            this._tail.next = myNode
            this._tail = myNode
        }

        this._size += 1
    }

    prepend(val){
        let myNode = new Node(val)

        if(this._head == null){
            this._head = myNode
            this._tail = myNode
        } else{
            myNode.next = this._head
            this._head = myNode
        }

        this._size += 1
    }

    at(index){
        if(index <= 0 | index == null){
            return null
        }

        let temp = this._head

        while(index > 1){
            if(temp.next == null){
                return null
            }
            temp = temp.next
            index -= 1
        }

        return temp
    }

    pop(){
        let temp = this._head

        if(temp == null){
            return
        } 

        if(temp.next == null){
            this._head = null
        }

        while(temp.next.next != null){
            temp = temp.next
        }

        temp.next = temp.next.next
    }

    contains(val){
        let temp = this._head

        while(temp != null){
            if(temp.val == val){
                return true
            }
            temp = temp.next
        }

        return false
    }

    find(val){
        let temp = this._head
        let index = 1

        while(temp != null){
            if(temp.val == val){
                return index
            }
            temp = temp.next
            index += 1
        }

        return null
    }

    insertAt(val, index){
        if(val == null | !Number.isInteger(index)){
            return "Please provide both value and index (integer) arguments"
        }
        if(index <= 0){
            return "Error, index out of bounds (too small)"
        }

        if(index == 1){
            this.prepend(val)
            return
        }

        let temp = this._head
        let count = 2

        while(temp != null){
            if(count == index){
                break;
            }

            temp = temp.next
            count += 1
        }

        if(temp == null){
            return "Error, index out of bounds (too big)"
        }

        else{
            let myNode = new Node(val)
            myNode.next = temp.next
            temp.next = myNode
        }

        return
    }

    removeAt(index){
        if(!Number.isInteger(index)){
            return "Error, enter integer index"
        }
        if(index <= 0){
            return "Error, index out of bounds (too small)"
        }

        let temp = this._head

        if(index == 1){
            this._head = temp.next
            return
        }

        let count = 2
        
        while(temp.next != null){
            if(count == index){
                break;
            }

            temp = temp.next
            count += 1
        }

        if(temp.next == null){
            return "Error, index out of bounds (too big)"
        } else{
            temp.next = temp.next.next
        }

    }

    toString(){
        let temp = this._head
        let string = ""

        console.log(this._head)

        while(temp != null){
            string = string.concat((temp.val).toString())
            string = string.concat(" -> ")
            temp = temp.next
        }

        string = string.concat("null")

        console.log(string)
    }
}

class Node {
    constructor(val){
        this._val = val
        this._next = null
    }

    get val(){
        return this._val
    }

    get next(){
        return this._next
    }

    set next(node){
        this._next = node
    }
}

let myList = new List()
myList.prepend(5)
myList.prepend(6)
console.log(myList)



