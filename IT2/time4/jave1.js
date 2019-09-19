var i = 1;
var c = 8;
const main = document.getElementById('jo');
while(i <= 50){
  var a = i * c + 1;
  main.innerHTML +=
  `
  <p>${i}*${c}+1=${a}</p>
  `;
  i = i + 1;
}
