//https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function (nums, target) {
  const index = numInRotateArray(nums)

  const newNums = []
  let k = 0
  for (let i = index; i < nums.length; i++) {
    newNums[k] = nums[i]
    k++
  }
  for (let i = 0; i < index; i++) {
    newNums[k] = nums[i]
    k++
  }
  return binarySearch(newNums, target)
}

const numInRotateArray = (nums) => {
  const rotate = (nums, start, end) => {
    if (start <= end) {
      console.log(start, end, "=>", nums[start], nums[end])
      if (start === end) {
        return start
      }
      if (nums[start] > nums[end] && end - start === 1) {
        return end
      }

      let mid = Math.floor((start + end) / 2)

      if (nums[mid] < nums[start]) {
        return rotate(nums, start, mid)
      } else if (nums[mid] > nums[start]) {
        return rotate(nums, mid, end)
      }
    }
    return 0
  }
}

const binarySearch = (nums, param) => {
  let binary = (nums, start, end, param) => {
    if (start <= end) {
      //1
      let mid = Math.floor((start + end) / 2) //1
      if (nums[mid] === param) {
        //1
        return mid
      } else if (nums[mid] > param) {
        //1
        return binary(nums, start, mid, param) //T(n/2)
      } else {
        return binary(nums, mid + 1, end, param) //T(n/2)
      }
    }
    return -1
  }

  return binary(nums, 0, nums.length - 1, param)
}


const x = [4,5,6,7,0,1,2]
console.log(search(x, 0))