var twoSum = function (nums, target) {
   var array = [0, 0];
   for (i of nums) {
      for (let y = nums.indexOf(i) + 1; y < nums.length; y++) {
         if (i + nums[y] === target) {
            array[0] = nums.indexOf(i);
            array[1] = y;
            return array;
         }
      }
   }
   return array;
};
//try hashmap later
console.log(twoSum([3, 2, 4], 6));
