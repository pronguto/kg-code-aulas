let nossoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < nossoArray.length; i++) {
  if (nossoArray[i] === 0) {
    console.log(nossoArray[i] + " e par e o seu indice e " + i);
  } else {
    console.log(nossoArray[i] + " e impar");
  }
}
