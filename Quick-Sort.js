/**refered to https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html
 */
function quickSort(arr){
    if(arr.length <2) return arr

    const pivot = arr[0]
    let leftCursor = 1
    let rightCursor = arr.length-1

    while(leftCursor <= rightCursor){
        if(arr[leftCursor] > pivot && arr[rightCursor] < pivot){
            [arr[leftCursor], arr[rightCursor]] = [arr[rightCursor], arr[leftCursor]]
            leftCursor ++
            rightCursor --
        }
        if(arr[leftCursor] <= pivot) leftCursor++
        if(arr[rightCursor] >= pivot) rightCursor--
    }
    [arr[0], arr[leftCursor-1]] = [arr[leftCursor-1],arr[0]]
    const left = arr.splice(0, leftCursor-1)
    const mid = arr.splice(0,1)
    const right = arr
    return [
            ...quickSort(left),
            ...mid,
            ...quickSort(right)      
    ]
}