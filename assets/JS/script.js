document.addEventListener('DOMContentLoaded', function () {
    let previewMenu = document.querySelector('.menu-preview');
    let previewBoxes = previewMenu.querySelectorAll('.preview');
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.querySelector('.menu').addEventListener('click', function () {
            let target = card.getAttribute('data-target');
            previewBoxes.forEach(previewBox => {
                let previewTarget = previewBox.getAttribute('data-target');
                if (target === previewTarget) {
                    previewBox.classList.add('active');
                }
            });
            previewMenu.style.display = 'flex';
            
            // Disable hover effect on cards
            cards.forEach(card => {
                card.style.pointerEvents = 'none';
            });
        });
    });
    previewBoxes.forEach(previewBox => {
        previewBox.querySelector('.fa-times').addEventListener('click', function () {
            previewBox.classList.remove('active');
            previewMenu.style.display = 'none';
            
            // Enable hover effect on cards
            cards.forEach(card => {
                card.style.pointerEvents = 'auto';
            });
        });
    });
});

function playAudio() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}
