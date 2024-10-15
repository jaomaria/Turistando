let count = 0;
let maxSelections = 0;
const maxSeats = 48; 

const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const seatsContainer = document.getElementById('seatsContainer');


function updateCounter() {
    counterDisplay.innerText = count;
    maxSelections = count;
    updateSeatSelection();
}


increaseBtn.addEventListener('click', function() {
    count++;
    updateCounter();
});


decreaseBtn.addEventListener('click', function() {
    if (count > 0) {
        count--;
    }
    updateCounter();
});


function generateSeats() {
    for (let i = 1; i <= maxSeats; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.innerText = i;
        seat.addEventListener('click', () => toggleSeatSelection(seat));
        seatsContainer.appendChild(seat);
    }
}


function toggleSeatSelection(seat) {
    const selectedSeats = document.querySelectorAll('.seat.selected').length;

   
    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
    } else {
        
        if (selectedSeats < maxSelections) {
            seat.classList.add('selected');
        }
    }
}

// Atualiza os assentos disponíveis de acordo com o contador
function updateSeatSelection() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    // Remover seleções extras se o contador diminuir
    if (selectedSeats.length > maxSelections) {
        selectedSeats.forEach((seat, index) => {
            if (index >= maxSelections) {
                seat.classList.remove('selected');
            }
        });
    }
}

// Inicializar os assentos
generateSeats();

