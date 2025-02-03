let step = '';
let winner = '';
const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cell = document.querySelectorAll('.cell');
const whoGo = document.getElementById('whoGo');
const whoWin = document.getElementById('whoWin');
const newGame = document.querySelector('.new');
const bla = document.querySelector('.info');


const who = () => {
    if (step === 'cross') {
        step = 'circle';
        whoGo.innerText = 'Nuliukai';
    } else {
        step = 'cross';
        whoGo.innerText = 'Kryziukai';
    }
};


who();


cell.forEach((item, index) => {
    item.addEventListener('click', () => {

        if (!item.classList.contains('circle') && !item.classList.contains('cross') && !winner) {
            item.classList.add(step);
            item.innerText = step === 'cross' ? 'x' : 'o';


            checkWin();


            if (!winner) who();
        }
    });
});

const checkWin = () => {
    for (let i = 0; i < winComb.length; i++) {
        const [a, b, c] = winComb[i];
        if (
            cell[a].classList.contains(step) &&
            cell[b].classList.contains(step) &&
            cell[c].classList.contains(step)
        ) {

            cell[a].classList.add('winColor');
            cell[b].classList.add('winColor');
            cell[c].classList.add('winColor');

            winner = step;
            whoWin.innerText = `${winner === 'cross' ? 'Kryziukai' : 'Nuliukai'}`;
            whoGo.innerText = '';
            bla.style.opacity = 0;
            return;
        }
    }


    if ([...cell].every(item => item.classList.contains('circle') || item.classList.contains('cross'))) {
        whoWin.innerText = 'Lygiosios!';
        winner = 'draw';
        bla.style.opacity = 0;
       
    }
};

newGame.addEventListener('click', () => {

    cell.forEach(item => {
        item.classList.remove('circle', 'cross', 'winColor');
        item.innerText = '';
    });

    winner = '';
    step = '';
    who();
    whoGo.innerText = step === 'cross' ? 'Kryziukai' : 'Nuliukai';
    whoWin.innerText = ``;
    bla.style.opacity = 1;
});
