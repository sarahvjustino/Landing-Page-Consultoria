document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o ícone do menu e o elemento nav
    const menuOpener = document.querySelector('.menu-opener');
    const nav = document.querySelector('nav');

    // Adiciona um evento de clique ao ícone do menu
    menuOpener.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão
        e.stopPropagation(); // Evita a propagação do evento

        // Alterna a classe 'active' no nav para mostrar/esconder o menu
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    });

    // Fecha o menu quando se clica em qualquer lugar fora dele
    document.addEventListener('click', function (e) {
        if (nav.style.display === 'block' && !e.target.closest('nav') && !e.target.closest('.menu-opener')) {
            nav.style.display = 'none';
        }
    });

    // Fecha o menu quando um item do menu é clicado (opcional)
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            if (window.innerWidth <= 800) { // Só fecha se estiver em mobile
                nav.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section'); // Todas as seções
    const navLinks = document.querySelectorAll('.menu li a'); // Todos os links do menu

    // Observa a rolagem da página
    window.addEventListener('scroll', function () {
        let current = '';

        // Verifica qual seção está visível
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 150)) { // Ajuste o "150" para o offset desejado
                current = section.getAttribute('id');
            }
        });

        // Atualiza a classe 'active' nos links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});