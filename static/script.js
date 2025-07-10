function toggleSubcategorias(element) {
    const subList = element.nextElementSibling;
    if (subList.classList.contains('open')) {
        subList.style.transition = 'max-height 0.4s cubic-bezier(0.4,0,0.4,0.4)';
        void subList.offsetHeight;
        subList.classList.remove('open');
    } else {
        subList.style.transition = 'max-height 0.6s cubic-bezier(0.4,0,0.4,0.4)';
        void subList.offsetHeight;
        subList.classList.add('open');
    }
}

function toggleSubcategoriaContent(element) {
    const content = element.nextElementSibling;
    if (content.classList.contains('open')) {
        content.style.transition = 'max-height 0.4s cubic-bezier(0.4,0,0.4,0.4)';
        void content.offsetHeight;
        content.classList.remove('open');
    } else {
        content.style.transition = 'max-height 0.6s cubic-bezier(0.4,0,0.4,0.4)';
        void content.offsetHeight;
        content.classList.add('open');
    }
}