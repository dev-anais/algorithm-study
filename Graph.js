/**refered https://www.zerocho.com/category/Algorithm/post/584b9033580277001862f16c 
 * inTree는 아직 한 번도 사용은 안 했지만 나중에 MST나 다익스트라 알고리즘을 할 때 사용하려고 만들어둔 겁니다. 조금만 기다려주세요. capacity도 나중에 네트워크 플로우 때 할 예정입니다.
 * 
 * 
*/

class Vertex{
    constructor(key){
        this.key = key
        this.next = null
        this.arc = null
        this.inTree = null
    }
}

class Arc{
    constructor(data, to, capacity){
        this.nextArc = null
        this.destination = to
        this.data = data
        this.capacity = capacity
        this.inTree = null
    }
}

class Graph{
    constructor(){
        this.first = null
        this.count = 0
    }

    insertVertex(key){
        let v = new Vertex(key)
        let last = this.first

        if(last){
            while(last.next!==null){
                last = last.next
            }
            last.next = v
        }else{
            this.first = v
        }
        this.count++
    }
    deleteVertex(key){
        let v = this.first
        let prev = null
        while(v.key !== key){
            prev = v
            v = v.next
        }
        if(!v) return false
        if(!v.arc) return false
        if(prev){
            prev.next = v.next
        }else{
            this.first = v.next
        }
        this.count--
    }
    insertArc(data, fromKey, toKey, capacity){
        let from = this.first
        let to = this.first
        while(from && from.key !== fromKey){
            from = from.next
        }
        while(to && to.key !== toKey){
            to = to.next
        }
        if(!from || !to) return false
        let arc = new Arc(data, to, capacity)
        let fromLast = from.arc
        if(fromLast){
            while(from.arc & from.arc !==null){
                fromLast = fromLast.nextArc
            }
            fromLast.nextArc = arc
        }else{
            from.arc = arc
        }
    }
    deleteArc(fromKey, toKey){
        let from = this.first
        while(from !== null){
            if(from.key === fromKey) break
            from = from.next
        }
        if(!from) return false
        let fromArc = from.arc
        let preArc 
        while(fromArc !== null){
            if(toKey === fromArc.destination.key) break
            preArc = fromArc
            fromArc = fromArc.nextArc
        }
        if(!fromArc) return false
        if(preArc){
            preArc.nextArc = fromArc.nextArc
        }else{
            from.arc = fromArc.nextArc
        }
    }


}