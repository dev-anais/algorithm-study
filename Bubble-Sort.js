/** refered to https://www.zerocho.com/category/Algorithm/post/57f67519799d150015511c38*/
function bubbleSort(arr){
    let temp
    for(let i = 0; i < arr.length-1; i++){
        temp = arr[i]
        for(let j = 0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp 
            }
        }
    }
    return arr
}