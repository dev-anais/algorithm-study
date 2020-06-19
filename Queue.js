/** refered to https://helloworldjavascript.net/pages/282-data-structures.html */
class Queue{
    constructor(){
        this._arr = []
    }
    enqueue(item){
        this._arr.push(item)
    }
    dequeue(){
        this._arr.shift()
    }
}