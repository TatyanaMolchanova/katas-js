let search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    console.log('end', end)

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        let guess = nums[mid];

        console.log('mid', mid);
        console.log('guess', guess);

        if (guess === target) {
            return mid
        }

        if (guess > target) {
            end = mid - 1
            
            console.log('end', end)

        } else {
            start = mid + 1
            
            console.log('start', start)
        }
    }
    return -1;
};

console.log('search', search([-1,0,3,5,9,12], 9))