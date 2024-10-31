document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('.section');
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Fungsi untuk menampilkan section yang sesuai
    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });

        menuLinks.forEach(link => {
            link.classList.remove('active');
        });

        document.getElementById(targetId).classList.add('active');
        document.querySelector(`.menu a[href="#${targetId}"]`).classList.add('active');
    }

    // Event listener untuk menu navigasi
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
            
            // Untuk tampilan mobile, tutup menu setelah memilih
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            }
        });
    });

    // Event listener untuk menu toggle (mobile)
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Tampilkan beranda sebagai default
    showSection('beranda');
});