
const form = document.getElementById("contactForm");
const response = document.getElementById("response");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        response.style.color = "red";
        response.textContent = "Please fill all fields.";
        return;
    }

    response.style.color = "green";
    response.textContent = "Thank you! Your message is ready.";

    form.reset();

});
