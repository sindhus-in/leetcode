/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs
    // first find the smallest string in the array
    // then check against other strings the most common 
    // reduce the string if you find first few common and then nothing else
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));