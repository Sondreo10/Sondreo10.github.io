// Definerer user globalt, siden vi skal hente verdier fra den innloggede brukeren
let user;

// Her kommer det et par funksjoner
// function lagreMelding(evt) {}
// function visMelding() {}

// Sjekker om vi er logget inn
firebase.auth().onAuthStateChanged( newuser => {
    if (newuser) {
        // Setter user til den innloggede brukeren
        user = newuser;
        // Event Listeners
        skjema.addEventListener("submit", lagreMelding);
        meldinger.on("child_added", visMelding);
    } else {
        document.body.innerHTML = `
            <main class="notloggedin>
                <h1>Du er ikke logget inn</h1>
                <a href="login.html">Logg inn her</a>
            </main>
        `;
    }
});
 @Sondreo10
