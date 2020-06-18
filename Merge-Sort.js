/** refered to https://www.zerocho.com/category/Algorithm/post/57ee1fc107c0b40015045cb4 */
function mergeSort(arr){
    if(arr.length <= 1) return arr
    let pivot = Math.floor(arr.length / 2)
    let left = arr.slice(0, pivot)
    let right = arr.slice(pivot, arr.length)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    let result = []
    while(left.length && right.length){
        if(left[0] > right[0]){
            result.push(right.shift())
        }else{
            result.push(left.shift())
        }
    }
    while(left.length) result.push(left.shift())
    while(right.length) result.push(right.shift())
    return result
}