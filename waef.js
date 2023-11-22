var twoSum = function (nums, target) {
   var array1 = [0, 0];
   var number = 0;

   for (i of nums) {
      var array2 = nums;
      if (i <= target) {
         number = target - i;
         array1[0] = nums.indexOf(i);

         for (y of array2) {
            if (y == number && nums.indexOf(i) != nums.indexOf(y)) {
               array1[1] = nums.indexOf(y);
               console.log("awe");

               if (nums.indexOf(i) == nums.indexOf(y)) {
                  console.log(nums.indexOf(i) + "     " + nums.indexOf(y));
                  array[1] = nums.indexOf(y, nums.indexOf(i) + 1);
               }
               return array1;
            }
         }
      }
   }

   return array1;
};

console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 4], 6));
// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
// console.log(array);
