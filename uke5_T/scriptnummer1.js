console.log("Scriptet er lastet");


const db = firebase.database();
const bloggere = db.ref("bloggere");


const tomVegar = bloggere.child("tomVegar");
tomVegar.set({
  "navn":"Tom Vegar Moen",
  "folgere":"Haha.HA.HA.ha"
})

const tommy = bloggere.child("tommy");
tommy.set({
  "navn":"Tommay",
  "følgere": -2000
});



const thomasWb = bloggere.child("tommy");
thomasWb.set({
  "navn":"Thomas Winterbourne",
  "folgere":"300"
});

console.log(tommy);
