function containsDuplicate(nums) {

    const uniqueNums = new Set(nums);

    return uniqueNums.size !== nums.length;
}
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
