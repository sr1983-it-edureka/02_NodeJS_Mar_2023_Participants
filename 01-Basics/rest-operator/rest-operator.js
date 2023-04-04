
function sum(a, b){

  return a + b;
}
function sum(a, b, c){
  return a + b + c;
}

function sum(...arguments){

  let sumValue = 0;
  for (let item of arguments){
    sumValue = sumValue + item;
  }
  return sumValue;
}

function f1(message1, message2, ...arguments){

  console.log(`Message 1` + message1);
  console.log(`Message 2 is ${message2}`);

  console.log(arguments);

}

let result = sum(20, 40);
console.log(result);

result = sum(20, 50, 80);
console.log(result);

result = sum(10, 20, 30, 40, 50, 90);
console.log(result);


f1("My Message 1", "My Message 2", 1, 2, "hello", 4.5, true);