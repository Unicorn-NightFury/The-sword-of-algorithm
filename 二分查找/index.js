const arr = [10,11,15,17,20,27,66,100,102],
      target = 102;

let count = 0;

function binarySearch(arr) {
    let left = 0,
        right = arr.length - 1,
        ans = false;
    
    while (left <= right) {
        count++;
        const mid = Math.floor(left + (right - left)/2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    
    return ans;
}

console.log(binarySearch(arr));

console.log(count);