/**refered to https://hokeydokey.tistory.com/30 */
function Stack(maxSize){
    
    const size = maxSize
    let top = 0
    const array = []

    return {
        pop(){
            if(top == 0){
                console.log("empty stack")
            }else{
                let temp = array[top]
                top --
                return temp
            }
        },
        push(item){
            if(size > top){
                array.push(item)
                top ++
                return array[top] = item
            }else{
                console.log("stack is full")
            }  
        },
        peek(){
            return array[top]
        }

    }
}

/**
 * class로 stack 구현 방법
 * refered to https://helloworldjavascript.net/pages/282-data-structures.html
 * class Stack{
        constructor(){
            this._arr = []
        }
        push(item){
            this._arr.push(item)
        }
        pop(){
            this._arr.pop()
        }
        peek(){
            this._arr[this._arr.length-1]
        }
    }

 */