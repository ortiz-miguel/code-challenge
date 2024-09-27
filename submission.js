//Problem 1
const findSum = function(array) {
  // your code here - don't forget to return a number!
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

//Problem 2
const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  const count = {};
  for(let item of array) {
    if (count[item]) {
      count[item] = count[item] + 1;
    }
    else {
      count[item] = 1;
    }
  }
    let mostFrequent = null;
    let leastFrequent = null;
    let highestNum = -Infinity;
    let lowestNum = Infinity;

    for (let item in count) {
      const freq = count[item];
      if(freq > highestNum) {
        mostFrequent = item;
        highestNum = freq;
      }
      if(freq < lowestNum) {
        leastFrequent = item;
        lowestNum = freq;
      }
    }
    return {most: mostFrequent, least: leastFrequent};
};


//Problem 3
const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
  let reverseStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return reverseStr === reverseStr.split('').reverse().join('');
};


//Problem 4
const largestPair = function(array) {
  // your code here - don't forget to return a number!
  let largestProduct = array[0]*array[1];
  for (let i = 1; i < array.length -1; i++) {
    let product = array[i] * array[i + 1];
    if (product > largestProduct) {
      largestProduct = product;
    }
  }
  return largestProduct;
};


//Problem 5
const removeParenth = function(str) {
  // your code here - don't forget to return a string!
  return str.replace(/\(.*?\)/,'');
};


//Problem 6
const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
    const points = {
    a:1, e:1, i:1, o:1, u:1, l:1, n:1, r:1, s:1, t:1,
    d:2, g:2,
    b:3, c:3, m:3, p:3,
    f:4, h:4, v:4, w:4, y:4,
    k:5,
    j:8, x:8,
    q:10, z:10
  };
  let tempStr = str.toLowerCase();
  let score = 0;
  for (let letter of tempStr) {
    if (points[letter] !== undefined) {
      score = score + points[letter];
    }
    else{
      score += 0
    }
  }
  return score;
}
