
const db = firebase.database();
const kontakter = db.ref("kontakter");

const skjema = document.querySelector("#skjema");
const inpNavn = document.querySelector("#inpNavn");
const inpMobil = document.querySelector("#inpMobil");
const inpEpost = document.querySelector("#inpEpost");
const secKontakter = document.querySelector("#secKontakter");



function registrerKontakt(hendelse){
  hendelse.preventDefault();
  const key = inpMobil.value;
  const data = {
    "navn": inpNavn.value,
    "epost": inpEpost.value
  };
  const kontakt = kontakter.child(key)
  kontakt.set(data);
}

skjema.addEventListener("submit",registrerKontakt);

function visKontakter(snapshot){
  const telefon = snapshot.key;
  const kontakt = snapshot.val();
  secKontakter.innerHTML = `
    <div>${telefon}</div>
    <div>${kontakt.navn}</div>
    <div>${kontakt.epost}</div>
  `;
}

kontakter.on("child_added",visKontakter);
