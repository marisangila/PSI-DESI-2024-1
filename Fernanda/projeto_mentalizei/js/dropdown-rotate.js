const offcanvas = document.getElementById('offcanvasExample');
const offcanvasToggleButton = document.querySelector('[data-bs-target="#offcanvasExample"]');
const dropdownIcon = document.querySelector('.dropdown .bi.bi-chevron-down');
const dropdownText = document.querySelector('.dropdown a');

document.addEventListener('click', function(event) {
    if (!document.querySelector('.dropdown').contains(event.target) && offcanvas.contains(event.target)) {
        document.querySelector('.dropdown').classList.remove('active');
        
        dropdownIcon.style.transform = 'rotate(0deg)';
        dropdownText.classList.remove('active');
    }
});

document.querySelector('.dropdown').addEventListener('click', function() {
    this.classList.toggle('active');

    dropdownIcon.style.transform = this.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
});