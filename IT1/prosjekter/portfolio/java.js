const main = document.querySelector(".random");

function randomTall() {
  main.innerHTML += `
    <p id="nullTilTi">${Math.floor(Math.random()*10)+1}</p>
  `;
}

function farge() {
  var a = Math.floor(Math.random() * 4) + 1;
  if (a === 1) {
    document.getElementById('fargeTull').style.backgroundColor = "blue";
  } else if (a === 2) {
    document.getElementById('fargeTull').style.backgroundColor = "yellow";
  } else if (a === 3) {
    document.getElementById('fargeTull').style.backgroundColor = "green";
  } else if (a === 4) {
    document.getElementById('fargeTull').style.backgroundColor = "red";
  }
}

function terning() {
  var a = Math.floor(Math.random() * 6)+1;
  if (a === 1) {
    document.getElementById('terningShit').style.background = "url('dice1.png')no-repeat";
  } else if (a === 2) {
    document.getElementById('terningShit').style.background = "url('dice2.png')no-repeat";
  } else if (a === 3) {
    document.getElementById('terningShit').style.background = "url('dice3.png')no-repeat";
  } else if (a === 4) {
    document.getElementById('terningShit').style.background = "url('dice4.png')no-repeat";
  } else if (a === 5) {
    document.getElementById('terningShit').style.background = "url('dice5.png')no-repeat";
  } else if (a === 6) {
    document.getElementById('terningShit').style.background = "url('dice6.png')no-repeat";
  }
}
