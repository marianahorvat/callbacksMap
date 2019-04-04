var words = ["ground", "control", "to", "major", "tom"];

function map(myarray, afunction) {
  const mapArray = [];

  for (var i = 0; i < myarray.length; i++) {
    const result = afunction(myarray[i]);
    mapArray.push(result);
  }
console.log(mapArray);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

/* 
Implement your own version of the built-in array map function.
Yours will take in two arguments. 
The first will be an array to map and the second will be a callback function. 
The function will return a new array based on the results of the callback function.

It should return, in order:

[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ] */