var numbers = [66, 34, 4424, 1, 8, 56, 22];
//numbers.sort(function(a, b) { 
//  		return a - b;
//});
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
function bableSort(nums) {
	for (var i=0;i<nums.length;++i) {
		for (var j=0;j<nums.length;++j) {
			if (nums[i]<nums[j]){
				var temp=nums [j];
				nums[j]=nums[i];
				nums[i]=temp;

			}
			
		}
	}
	return nums;
}
console.log(bableSort(numbers))