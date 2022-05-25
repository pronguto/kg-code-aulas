let nossoArray = soma(1, 11);

for (let i = 0; i < 10; i++) {
  nossoArray.push(i);
}
// novaFuncao();
// console.log(nossoArray);

function soma(init, x) {
  const output = [];
  for (let i = init; i < x; i++) {
    output.push(i);
    // if (i % 2 === 0) {
    //   return output;
    // }
  }
  return output;
}

// console.log(soma(3, 6));

const arrowSoma = (a, b) => a + b;
const arrowConstructArray = (init, x) => {
  const output = [];
  for (let i = init; i < x; i++) {
    output.push(i);
  }
  return output;
};

// console.log(arrowSoma(3, 6));
const array2 = arrowConstructArray(3, 6);

const doubles = array2.map((e) => e * 2);
const filter = array2.filter((element) => {
  element === 4;
});

console.log(array2);
console.log(doubles);
console.log(filter);
