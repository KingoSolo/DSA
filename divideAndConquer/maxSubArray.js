//[2,3,4,5,-2,-4,-8,1]
function maxSubArray(nums){
    return findMaxSubArray(nums,0,length-1)
}

function findMaxSubArray(nums,left,right){
    if (left === right){
        return nums[left]
    }
    const mid = Math.floor((left+right)/2)

    const leftMax = findMaxSubArray(nums,left,mid)
    const rightMax = findMaxSubArray(nums,mid+1,right)

    const crossMax = maxCrossingSubArray(nums,left,mid,right)

    return Math.max(leftMax,rightMax,crossMax)
}

function maxCrossingSubArray(nums,left,right,mid) {
    let leftSum = -Infinity
    let sum = 0;
     for(let i = mid; i >= left ; i--){
        sum+= nums[i]
        leftSum = Math.max(leftSum,sum)
     }

     let rightSum = -Infinity
      sum = 0;
     for(let i = mid + 1; i <= right ; i++){
        sum+= nums[i]
        rightSum = Math.max(rightSum,sum)
     }

     return left +rightSum
}