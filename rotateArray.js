const rotateArray = (nums, k) => {
    if(nums.length === 1){
        return nums
    }
    const len = nums.length
    const delta = k > nums.length ? nums.length : k
    for (let i = len-1; i>=0; i--) {
      nums[i+delta] = nums[i]
      console.log(nums)
    }


    for(let i=0; i<delta;i++){
        nums[i] = nums[len+i]
    }

    for(let i=0; i<delta ;i++){
        nums.pop()
    }
  return nums
}

const i = [1,2]
console.log("sol: ",rotateArray(i, 3))
