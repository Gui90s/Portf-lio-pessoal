document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        
        // Mensagem de confirmação
        confirmationMessage.textContent = "Mensagem enviada com sucesso!";
        confirmationMessage.style.display = "block";

        // Limpar os campos do formulário (opcional)
        contactForm.reset();
    });
});
