/** refered to https://www.zerocho.com/category/Algorithm/post/57f728c85141fc5fe4f4ca89*/
function selectionSort(arr){
    let temp, minIndex
    for(let i = 0; i<arr.length-1; i++){
        minIndex = i
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }

    return arr
}