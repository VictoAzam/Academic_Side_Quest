/* 
 * Header Template JavaScript
 * Funcionalidades básicas para o template do header
 */

// Função para destacar o item de menu ativo (se houver navegação)
function setActiveMenuItem(menuItem) {
    // Remove a classe active de todos os itens
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    
    // Adiciona a classe active ao item selecionado
    if (menuItem) {
        menuItem.classList.add('active');
    }
}

// Função para mostrar/ocultar informações do usuário (para mobile)
function toggleUserInfo() {
    const userInfo = document.querySelector('.user-info');
    userInfo.classList.toggle('show-mobile');
}

// Função para scroll suave (caso haja âncoras na página)
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona eventos de clique se necessário
    console.log('Header template carregado com sucesso!');
    
    // Exemplo: se houver links de navegação
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });
});

// Função utilitária para responsividade
function handleResize() {
    const header = document.querySelector('header');
    const mainCard = document.querySelector('.main-card');
    
    if (window.innerWidth <= 480) {
        // Ajustes para mobile
        header.classList.add('mobile-header');
    } else {
        header.classList.remove('mobile-header');
    }
}

// Listener para mudanças no tamanho da tela
window.addEventListener('resize', handleResize);

// Executa uma vez na inicialização
handleResize();
