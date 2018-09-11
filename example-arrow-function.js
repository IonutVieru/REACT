// var names = ['Ionut', 'few', 'friends'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name +'!';
// console.log(returnMe('Ionut'));

// var person = {
//   name: 'Ionut',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to' +name);
//     });
//   }
// }
// person.greet();

function add(a, b) {
  return a+b;
}
console.log(add(1,3), add(9,0));
var addStatement =(a,b)=>{
  return a+b;
}

var addExpression
var addExpression = (a,b) => a+b;
console.log(addExpression(3,3));
// console.log(addStatement(4,7));
