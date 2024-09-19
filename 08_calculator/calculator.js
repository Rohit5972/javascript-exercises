const add = function(add1,add2) {
  return add1+add2
	
};

const subtract = function(sub1,sub2) {
  return sub1-sub2
	
};

const sum = function(array) {

	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)

};

const power = function(a,b) {
  return Math.pow(a, b);

};

const factorial = function(fact1) {
  if (n === 0) return 1;
  faci=0
  for(let i=fact1;i>2;i--){
    faci*=i
    return faci

  }

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
