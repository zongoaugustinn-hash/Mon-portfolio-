document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche l’envoi automatique

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const result = document.getElementById("result");

    if (!name || !email || !message) {
        result.style.color = "red";
        result.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    if (!email.includes("@")) {
        result.style.color = "red";
        result.textContent = "Veuillez saisir un email valide.";
        return;
    }