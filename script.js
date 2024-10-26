document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const nomeRegex = /^[a-zA-Z\s]{1,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+55 \(\d{2}\) \d{5}-\d{4}$/;

    let isValid = true;

    if (!nomeRegex.test(nome)) {
        alert('Por favor, insira um nome válido (máximo de 50 letras).');
        isValid = false;
    }

    if (!emailRegex.test(email) || email.length > 100) {
        alert('Por favor, insira um e-mail válido com até 100 caracteres.');
        isValid = false;
    }

    if (!phoneRegex.test(phone)) {
        alert('Por favor, insira um telefone no formato: +55 (xx) xxxxx-xxxx.');
        isValid = false;
    }

    if (isValid) {
        alert('Formulário enviado com sucesso!');
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value
})