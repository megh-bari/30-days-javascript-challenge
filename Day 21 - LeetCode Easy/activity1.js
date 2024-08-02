// ! Two Sum

function twoSum(num, target) {
    const numMap = {}

    for (let i = 0; i < num.length; i++) {
        const complement = target - num[i]

        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i]

            
        }
        numMap[num[i]]=i
    }
    return []
}

console.log(twoSum([2, 7, 11, 15], 9)); //* Output: index: [0,1]
console.log(twoSum([3,2,4],6)) //* Output : index: [1,2]
console.log(twoSum([2,3,5,7,8],15)) //* Output: index[3,4]