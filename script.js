function mergeSort(arr){
    if (arr.length <= 1){
        return arr
    }

    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(leftArr, rightArr){
    const result = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            result.push(leftArr.shift())
        } else {
            result.push(rightArr.shift())
        }
    }

    return [...result, ...leftArr, ...rightArr]
}


console.log(mergeSort([10,6,8,3,4,2,1]))