/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerCaseStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let start = 0;
  let end = lowerCaseStr.length - 1;

  while (start < end) {
    if (lowerCaseStr[start] !== lowerCaseStr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
