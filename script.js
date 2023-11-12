function mergeSort(arr){
    let result = [];

    if (arr.length <= 1){
        return
    }
    else{
        const left = []
        const right = []

        for (let i = 0; i < arr.length; i++) {
            if (i <(arr.length/2)){
                left.push(arr[i])
                if(left.length>1){
                    mergeSort(left)
                }
            } else{
                right.push(arr[i])
                if(right.length>1){
                    mergeSort(right)
                }
            }
        }

        console.log(`The left part is ${left}`)
        console.log(`The right part is ${right}`)

        result = [left, right]
        result.sort((a, b) => a - b)
        console.table(result)
        return result
    }
}


mergeSort([3,1])