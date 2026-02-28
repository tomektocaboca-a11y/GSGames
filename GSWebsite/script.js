// Prosty licznik odwiedzin (zapisuje w localStorage)
document.addEventListener('DOMContentLoaded', function() {
    // Licznik odwiedzin
    let visits = localStorage.getItem('totalVisits') || 45;
    document.querySelector('.stat-item:first-child .stat-number').textContent = visits;
    
    // Podświetlanie aktywnej zakładki
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});