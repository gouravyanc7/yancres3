document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.effect');
    cards.forEach(card => {
        card.addEventListener('click', function(event) {
            cards.forEach(c => c.classList.remove('mobile-active'));
            
            card.classList.add('mobile-active');

            event.stopPropagation();
        });
    });

    document.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('mobile-active'));
    });
});
