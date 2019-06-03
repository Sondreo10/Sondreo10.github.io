
//Referanse til html elementer
const secMeldinger = document.querySelector("#secMeldinger");
const uteSecMeldinger = document.querySelector("#uteSecMeldinger");
const skjema = document.querySelector("#skjema");
const inpMelding = document.querySelector("#inpMelding");
const btnSend = document.querySelector("#btnSend");
// refferanse til fire Firebase

const db = firebase.database();
const meldinger = db.ref("messengerMeldinger");

//funksjonsdefenisjoner
function sendMedlding(){
  meldinger.push(inpMelding.value);
  console.log("Melding sendt");
}
function visMelding(snapshot){
  let key = snapshot.key;
  let objekt = snapshot.val();
  secMeldinger.innerHTML += `
  <p>${objekt}</p>
  `;
}
//Hendelsesfunksjon
btnSend.onclick = sendMelding;
meldinger.on("child_added", visMelding);

function scrollToBottom() {
  uteSecMeldinger.scrollHeight = uteSecMeldinger.scrollHeight;
}

//setup/oppstart
