document.addEventListener('DOMContentLoaded', () => {
    // Código para el cambio de tema
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-theme') {
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
        } else {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
            localStorage.setItem('theme', '');
        }
    });

    // Código para el formulario de consulta de producto
    const inquiryForm = document.querySelector('.inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('¡Tu consulta ha sido enviada con éxito! Nos pondremos en contacto contigo pronto.');
            inquiryForm.reset();
        });
    }
});