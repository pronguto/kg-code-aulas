let matriz = [w, w, w];
for (let i = 0; i < 11; i++) {
  matriz.push([]);
  for (let j = 0; j < 11; j++) {
    matriz[i].push(j * i);
  }
}
console.table(matriz);

const colors = ["blue", "white", "purple"];
let width = 50;
const container = document.getElementsByTagName("div");
const paragraph = document.createElement("div");
const textParagraph = document.createTextNode("Hello World");
paragraph.style.width = "50px";
paragraph.style.height = "50px";
paragraph.style.background = "red";

paragraph.appendChild(textParagraph);
document.body.appendChild(paragraph);

for (let i = 0; i < 3; i++) {
  const paragraph = document.createElement("div");
  paragraph.style.width = `${width}px`;
  paragraph.style.height = "50px";
  paragraph.style.background = colors[i];
  document.body.appendChild(paragraph);
  width += 20;
}
