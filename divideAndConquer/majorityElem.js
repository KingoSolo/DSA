// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
var majorityElement = function(nums) {
    return findMajorityElement(nums,0,nums.length-1)
};
function findMajorityElement(nums,left,right){
    if(left === right){
        return nums[left]
    }
    const mid = Math.floor((left+right) / 2)

    const leftMajority = findMajorityElement(nums,left,mid)
    const rightMajority = findMajorityElement(nums,mid+1,right)

    if(leftMajority === rightMajority){
        return leftMajority
    }

    const leftMajorityOccurence = findMajorityElementOccurence(nums,left,right,leftMajority)
    const rightMajorityOccurence = findMajorityElementOccurence(nums,left,right,rightMajority)
    
    return leftMajorityOccurence > rightMajorityOccurence ? leftMajority : rightMajority
}

function findMajorityElementOccurence(nums,left,right,target){
    let count = 0

    for (let i = left; i <= right ;i++){
        if (nums[i] === target) count++
    }
    return count
}
