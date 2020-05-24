const rotateArray = (nums, k) => {
    const a = []
    for (let i = 0; i < nums.length; i++) {
      a[(i + k) % nums.length] = nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
      nums[i] = a[i];
    }
  }
}

const i = [1,2]
console.log("sol: ",rotateArray(i, 3))
