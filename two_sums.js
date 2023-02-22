function two_sum(arr, target){
    let result = []
    let num

    let addNum = (index, num) => {
        if (index === arr.length){
            return result
        }
        num = arr[index] 

        for (let i = index + 1; i < arr.length; i++){
            if (num + arr[i] === target){
                result.push(index, i)
                return result
            }
        }
        addNum(index + 1, num)
    } 
    addNum(0, num) 
    return result 
}

two_sum([2,7,11,15], 9)