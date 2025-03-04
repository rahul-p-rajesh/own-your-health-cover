// document.addEventListener("scroll", function() {
//     let cards = document.querySelectorAll(".scroll-card");

//     cards.forEach((card, index) => {
//         let scrollTop = window.scrollY;
//         let cardPosition = card.offsetTop;
        
//         if (scrollTop >= cardPosition - 50) {
//             card.style.zIndex = index + 10; // Higher z-index as we scroll
//         }
//     });
// });


document.addEventListener('scroll', () => {
    const fixedBtn = document.getElementById('fixedBtn');
    const section1 = document.getElementById('card1');
    const sectionBtns = document.querySelectorAll('.section-btn');

    // Calculate if we're past the first section
    const section1Bottom = section1.getBoundingClientRect().bottom;
    const isPastFirstSection = section1Bottom < window.innerHeight;

    // Check if any section button is visible on the screen
    let isAnyButtonVisible = Array.from(sectionBtns).some(btn => {
        const rect = btn.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });

    // Show fixed button only if past section 1 and no other button is visible
    if (isPastFirstSection && !isAnyButtonVisible) {
        fixedBtn.style.display = 'block';
    } else {
        fixedBtn.style.display = 'none';
    }
});
