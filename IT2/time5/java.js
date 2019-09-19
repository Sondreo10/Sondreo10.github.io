var minArray=["Kari","Fredik", "Oscar", "Mats", "Helene", "Marcus"];
var lengde=minArray.lenght;
var teller=0;
for (var i=1;i<=lengde;i++){
  var navn = minArray[i]
  teller=teller+1;
  document.write(`<p id="navn">${teller}. ${navn}</p><br>`)
}
