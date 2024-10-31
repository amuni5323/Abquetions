function how (arr){
    const countMap = {};
    for( let num of arr){
        countMap[num] = (   countMap[num] || 0 ) + 1
    }

return countMap;
}
const arr = [ 2, 2, 2, 4, 4, 1, 5]
console.log( how (arr));


//  second question
function reverseString(input){
    const chars = input.split( '');
    let left = 0;
    let right = chars.length - 1;
    while(left < right){
        if (chars[left] === '') {
        left++
    } 
    else if (chars[right] === ' ') {
    right--;
    }
    else {
        [chars[left], chars[right] = chars[right], chars[left]]
        left++;
        right--;
    }
}
    return chars.join(' ');

    }





