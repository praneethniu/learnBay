const binarySearch = (nums, param) => {
  let binary = (nums, start, end, param) => {
    if (start <= end) {   //1
      let mid = Math.floor((start + end) / 2)//1
      if (nums[mid] === param) {//1
        return mid
      } else if (nums[mid] > param) { //1
        return binary(nums, start, mid, param)//T(n/2)
      } else {
        return binary(nums, mid + 1, end, param)//T(n/2)
      }
    }
    return -1
  }

  return binary(nums, 0, nums.length - 1, param)
}

const i = [1, 2, 4, 6, 7, 8, 9, 10, 1000]
console.log(binarySearch(i, 10))
