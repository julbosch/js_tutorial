let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function productReduce (elements) {
  return elements.reduce((total, n) => {return total *= n});
}
 
console.log(productReduce([1,2,3,4]));
// console.log(functionalLengths(states));

function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths; }, {});
}
console.log(functionalLengths(states));