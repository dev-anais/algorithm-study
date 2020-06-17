/** refered to https://www.zerocho.com/category/Algorithm/post/57e39fca76a7850015e6944a*/
function insertionSort(arr){
    let j, temp 
    for(let i = 1; i<arr.length; i++){
        j = i-1
        temp = arr[i]
        while(j >=0 && temp <arr[j] ){ 
            //swap
            arr[j+1] =arr[j]
            j--
        }
        arr[j+1] = temp
    }
    return arr
}