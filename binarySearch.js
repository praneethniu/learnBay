const binarySearch = (nums, param) => {
  let binary = (nums, start, end, param) => {
    if (start <= end) {
      let mid = Math.floor((start + end) / 2)
      if (nums[mid] === param) {
        return mid
      } else if (nums[mid] > param) {
        return binary(nums, start, mid, param)
      } else {
        return binary(nums, mid + 1, end, param)
      }
    }
    return -1
  }

  return binary(nums, 0, nums.length - 1, param)
}

const i = [1, 2, 4, 6, 7, 8, 9, 10, 1000]
console.log(binarySearch(i, 10))
