document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const birthdate = new Date(document.getElementById('birthdate').value);
    const ageError = document.getElementById('ageError');
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    ageError.textContent = '';

    if (age < 18) {
        ageError.textContent = 'Vous devez avoir au moins 18 ans pour vous inscrire.';
        return;
    }

    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
    }

    // Si tout est valide, rediriger vers la sélection des événements
    window.location.href = 'Home.html';
});