/**refered to https://jeongw00.tistory.com/172 [Write and Remember] */

class Heap{
    
    constructor(){
        this.heap = [30, 20, 10, 7, 9, 5]
    }
    insert(item){
        this.heap.push(item)
        this.bubbleDown()
    }
    
    bubbleDown(){
        let idx = this.heap.length -1
        while(idx >0){
            let element = this.heap[idx]
            let parentIdx = Math.floor( (idx-1) /2)
            let parentEl = this.heap[parentIdx]
            if(element <= parentEl) break 
            this.heap[parentIdx] = element
            this.heap[idx] = parentEl
            idx = parentIdx
        }
    }

    extractMax(){
        let max = this.heap.pop[0]
        this.heap[0] = this.heap.pop()
        this.sinkDown(0)
        return max
    }

    sinkDown(idx){
        let left = idx *2 +1, right = idx *2 +2, largest = idx
        const legnth = this.heap.length
        if(left <= length && this.heap[largest] < this. heap[left]) largest = left
        if(right <= length && this.heap[largest] < this. heap[right]) largest = right
        if(idx != largest){
            [this.heap[largest], this.heap[idx]] = [this.heap[idx],this.heap[largest]]
            this.sinkDown(largest)
        }
    }

}