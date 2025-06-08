const karten = [
    { frage: "Du wachst auf. Was tust du zuerst?", antworten: ["A: Kaffee", "B: Kalt duschen", "C: Handy checken"] },
    { frage: "Ein Kollege nervt. Wie reagierst du?", antworten: ["A: Lächeln", "B: Ignorieren", "C: Konfrontieren"] },
];

let index = 0;
function naechsteKarte() {
    if (index < karten.length) {
        const karte = karten[index];
        document.getElementById("karte").innerHTML = 
            `<h2>${karte.frage}</h2>` +
            karte.antworten.map(a => `<p>${a}</p>`).join("");
        index++;
    } else {
        document.getElementById("karte").innerHTML = "<p>Spiel beendet. Danke!</p>";
    }
}
