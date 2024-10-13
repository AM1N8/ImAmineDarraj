function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// Afficher la section "À propos" par défaut
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});
