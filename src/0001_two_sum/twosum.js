/*
1. Two Sum

Source: https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/


// Time complexity: O(n)
// Space complexity: O(n)
//

const twoSum = (nums, target) => {
	const record = {}
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i]
		const complementKey = complement.toString()
		const exist = record[complementKey]
		if (exist !== undefined){
			return [exist, i]
		}

		record[nums[i]] = i
	}

	return []
}

const twoSumBf = (nums, target) => {
	for (let i; i < nums.length; i ++ ) {
		const j = nums[i]
		for (let k= i+1; k < nums.length-1; k ++) {
			if(nums[k] + j === target){
				return [i, k]
			}
		}
	}
	return []
}

module.exports = {
	twoSum,
	twoSumBf
}

/*

// brute force
// Time complexity: O(n^2)
// Space complexity: O(1)
func twoSum1(nums []int, target int) []int {
	for i, j := range nums {
		for k := i + 1; k < len(nums); k++ {
			if nums[k]+j == target {
				return []int{i, k}
			}
		}
	}
	return []int{}
}

*/
