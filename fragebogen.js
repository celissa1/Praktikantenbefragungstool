document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Hilfsfunktion für Umlaute
        function convertUmlauts(text) {
            return (text || "")
                .replace(/ä/g, "ae")
                .replace(/ö/g, "oe")
                .replace(/ü/g, "ue")
                .replace(/Ä/g, "Ae")
                .replace(/Ö/g, "Oe")
                .replace(/Ü/g, "Ue")
                .replace(/ß/g, "ss");
        }

        // Felder auslesen (alle IDs stimmen mit HTML überein)
        const vorname = convertUmlauts(document.getElementById("vorname")?.value || "");
        const nachname = convertUmlauts(document.getElementById("nachname")?.value || "");
        const antwort1 = convertUmlauts(document.getElementById("Antwort1")?.value || "");
        const antwort2 = convertUmlauts(document.getElementById("Antwort2")?.value || "");
        const antwort3 = convertUmlauts(document.getElementById("Antwort3")?.value || "");
        const antwort4 = convertUmlauts(document.getElementById("Antwort4")?.value || "");
        const antwort5 = convertUmlauts(document.getElementById("Antwort5")?.value || "");

        // Radio-Buttons sicher auslesen (Namen angepasst an HTML!)
        const option1 = convertUmlauts(document.querySelector('input[name="option1"]:checked')?.value || "");
        const option2 = convertUmlauts(document.querySelector('input[name="option2"]:checked')?.value || "");
        const option3 = convertUmlauts(document.querySelector('input[name="option3"]:checked')?.value || "");
        const option4 = convertUmlauts(document.querySelector('input[name="option4"]:checked')?.value || "");

        // Mailto-Body bauen
        const subject = encodeURIComponent("Praktikantenbefragung von " + vorname + " " + nachname);
        let body = "Vorname: " + encodeURIComponent(vorname) + "%0A";
        body += "Nachname: " + encodeURIComponent(nachname) + "%0A";
        body += "Antwort 1: " + encodeURIComponent(antwort1) + "%0A";
        body += "Antwort 2: " + encodeURIComponent(antwort2) + "%0A";
        body += "Antwort 3: " + encodeURIComponent(antwort3) + "%0A";
        body += "Antwort 4: " + encodeURIComponent(antwort4) + "%0A";
        body += "Antwort 5: " + encodeURIComponent(antwort5) + "%0A";
        body += "Kennst du schon den BTC-Hamster? " + encodeURIComponent(option1) + "%0A";
        body += "Willst du nach dem Praktikum wenn es dir gefallen hat, bei BTC arbeiten?" + encodeURIComponent(option2) + "%0A";
        body += "Hast du bereits Erfahrungen in der Programmiersprache Java? " + encodeURIComponent(option3) + "%0A";
        body += "Kannst du dich schnell in neue Aufgaben und Themengebiete einarbeiten? " + encodeURIComponent(option4) + "%0A";

        const mailtoLink = `mailto:empfaenger@example.de?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    });
});


