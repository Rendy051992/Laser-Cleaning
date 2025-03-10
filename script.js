// Prepínač hamburger menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// HOME - scroll hore
function goHome() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// CONTACT US - scroll na kontakt formulár
function showContact() {
    document.querySelector('.contact-section').scrollIntoView({
        behavior: 'smooth'
    });
}

// SERVICES submenu
function toggleServices() {
    const submenu = document.getElementById('services-menu');
    const dropdown = document.querySelector('.dropdown');
    submenu.classList.toggle('active');
    dropdown.classList.toggle('open');
}

// Zatvoriť submenu kliknutím mimo
document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.dropdown');
    const submenu = document.getElementById('services-menu');

    if (!dropdown.contains(e.target) && submenu.classList.contains('active')) {
        submenu.classList.remove('active');
        dropdown.classList.remove('open');
    }
});

// Validácia formulára
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    if (name === '' || email === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all fields.';
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    formMessage.style.color = 'green';
    formMessage.textContent = 'Message sent successfully! (This is a demo.)';

    return false;
}
