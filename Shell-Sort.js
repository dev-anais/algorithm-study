/** refered to https://velog.io/@yujo/JS%EC%89%98-%EC%A0%95%EB%A0%ACShell-Sort */
function shellSort(arr){
    let gap = Math.floor(arr.length / 2) 
    while(gap > 0){
        for(let i = 0; i<arr.length-gap; i++){
            let currentIdx = i
            let compareIdx = i + gap
            while(currentIdx >= 0){
                if(arr[currentIdx] > arr[compareIdx]){
                    //swap
                    const temp = arr[currentIdx]
                    arr[currentIdx] = arr[compareIdx]
                    arr[compareIdx] = temp
                }
                compareIdx = currentIdx
                currentIdx -= gap
            }
        }
        gap = Math.floor( gap /2)
    }
    return arr
}