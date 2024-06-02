// DOM --> Document Object Model

let titleElement= document.getElementById("title");
console.log(titleElement);
console.log(titleElement.innerHTML);
titleElement.innerHTML="Changed";

let paragrph = document.getElementsByClassName("pargraph");
console.log(paragrph);

let textList =document.getElementsByTagName("p");
console.log(textList);