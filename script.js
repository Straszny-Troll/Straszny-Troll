document.addEventListener('DOMContentLoaded', function () {
    const startScreen = document.getElementById('start-screen');
    const intersectContainer = document.querySelector('.intersect-container');
    const trollInput = document.getElementById('troll-input');
    const errorMessage = document.getElementById('error-message');
    const trollTextElement = document.getElementById('troll-text');
    const videoElement = document.getElementById('error-video');

    const trollText = "Straszny troll podnosi swój miecz";
    let currentIndex = 0;

    // Funkcja do animacji tekstu
    function animateText() {
        if (currentIndex < trollText.length) {
            trollTextElement.textContent += trollText.charAt(currentIndex);
            currentIndex++;
            setTimeout(animateText, 250); // Zmieniono czas na 250 ms (0,25 sekundy)
        }
    }

    // Rozpocznij animację tekstu
    animateText();

    // Funkcja sprawdzająca odpowiedź
    function checkAnswer() {
        const userInput = trollInput.value.trim();
        const correctAnswer = "Zaatakuj trolla paskudnym nożem";

        if (userInput === correctAnswer) {
            // Ukryj ekran startowy i pokaż Intersect, jeśli odpowiedź jest poprawna
            startScreen.classList.add('hidden');
            intersectContainer.classList.remove('hidden');
            errorMessage.style.display = 'none'; // Ukryj komunikat o błędzie
            videoElement.pause(); // Zatrzymaj wideo, jeśli wcześniej odtwarzane
            videoElement.style.display = 'none'; // Ukryj wideo, jeśli było wcześniej widoczne
        } else {
            // Pokaż wideo zamiast komunikatu o błędnej odpowiedzi
            errorMessage.style.display = 'none'; // Ukryj czerwony tekst
            videoElement.style.display = 'block'; // Pokaż wideo
            videoElement.play(); // Odtwarzaj wideo
        }
    }

    // Nasłuchuj naciśnięcia klawisza Enter w polu tekstowym
    trollInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });
});
