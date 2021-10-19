/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
 var addToArrayForm = function(num, k) {
  if (k === 0) {
      return num;
  }

  var result = [];
  var numAsInt = 0;
  var tensPlace = 1;

  for (var index = num.length - 1; index >= 0; index--) {
      numAsInt += num[index] * tensPlace;
      tensPlace *= 10;
  }

  var newNum = numAsInt + k;

  while (newNum > 0) {
      result.unshift(newNum % 10);
      newNum = Math.floor(newNum / 10);
  }
  return result;
};
/*
THIS PROBLEM DOES NOT WORK WITH JAVASCRIPT BECAUSE THE NUMBERS GO
UP TO THE QUINTILLIONS AND JAVASCRIPT CAN ONLY SAFELY HANDLE QUADRILLION
  if (k === 0) {
      return num;
  }

  var result = [];
  var numAsInt = 0;
  var tensPlace = 1;

  for (var index = num.length - 1; index >= 0; index--) {
      numAsInt += num[index] * tensPlace;
      tensPlace *= 10;
  }

  var newNum = numAsInt + k;

  while (newNum > 0) {
      result.unshift(newNum % 10);
      newNum = Math.floor(newNum / 10);
  }
  return result;
*/

/*
  CONVOLUTED SOLUTION USING ACTUAL ADDITION RULES
  // start from ones place
  // add first digit of k to the ones place of num
  // if it is >= 10 take the remainder from / 10
  // add 1 to the next place, set current place as remainder, repeat until < 10
  // if the index for place gets to 0 and it's >= 10 unshift the remainder
  // repeat for the rest of the digits in k
  if (k === 0) {
      return num;
  }

  var numIndex = num.length - 1;

  while (k > 0) {
    debugger;
      var digitToAdd = k % 10;
      var newNumDigit = num[numIndex] + digitToAdd;
      if (newNumDigit >= 10) {
          var remainderIndex = numIndex;
          while (newNumDigit >= 10 && remainderIndex >= 0) {
              var remainder = newNumDigit % 10;
              num[remainderIndex] = remainder;
              remainderIndex--;

              if (remainderIndex !== -1) {
                newNumDigit = num[remainderIndex] + 1;
              }
          }
          if (remainderIndex === -1) {
              num.unshift(newNumDigit / 10);
          } else {
              num[remainderIndex] = newNumDigit;
          }
      } else {
          num[numIndex] = newNumDigit;
      }
      numIndex--;
      k = Math.floor(k / 10);
  }
  return num;
*/


/*
SOLUTION WITH PARSING AN INT SEEMS TO ROUND OFF
AROUND 16 DIGITS

[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
12630717197566440000

var result = [];

  var numString = num.join('');
  var numInt = Number.parseInt(numString);
  var newNum = numInt + k;

  var quotient = newNum;

  if (quotient === 0) {
      return [0];
  }

  while (quotient > 0) {
      result.unshift(quotient % 10);
      quotient = Math.floor(quotient / 10);
  }
  return result;


*/