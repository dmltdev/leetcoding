/* 
645. Set Mismatch

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]
 

Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 104
*/

function findErrorNums(nums: number[]): number[] {
  let duplicate: number = -1,
    missing: number = -1;
  const storage = new Array(nums.length + 1).fill(0);

  for (const num of nums) {
    storage[num]++;
  }

  for (let i = 1; i < storage.length; i++) {
    if (storage[i] === 0) missing = i;
    if (storage[i] > 1) duplicate = i;
  }

  return [duplicate, missing];
}

findErrorNums([2, 2]); //?
