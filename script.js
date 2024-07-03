const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        const img = faq.querySelector('.faq-question img');
        img.style.opacity = '0';
        setTimeout(() => {
            if (faq.classList.contains('active')) {
                img.src = './assets/images/icon-minus.svg';
            } else {
                img.src = './assets/images/icon-plus.svg';
            }
            img.style.opacity = '1';
        }, 60);
        faq.classList.toggle('active');
    })
})