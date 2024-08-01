// Efecto de pulsación al hacer clic
function pulsate(button) {
    button.classList.add('pulse');
    setTimeout(() => {
        button.classList.remove('pulse');
    }, 500);
}

// Desplazamiento suave (si fuera necesario, por ejemplo, si tienes secciones adicionales)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function navigateToNumeroBot() {
    window.location.href = 'numbers_bot.html';
}

function openWhatsApp(phoneNumber) {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
}