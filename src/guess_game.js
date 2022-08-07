// Rules:
// 1. Użytkownik podaje zakres liczb ✅
// 2. Losujemy liczbę z zakresu
// 3. Użytkownik zgaduje
// 4. Mówimy, że za mało lub za dużo
// 5. Jak zgadnie, mówimy, za którym razem

const formRangeRef = document.querySelector('#rangeForm');
const minRef = document.querySelector("#min");
const maxRef = document.querySelector("#max");
const confirmationRef = document.querySelector("#confirmation");

const guessFormRef = document.querySelector('#guessForm');
const guessDigitRef = guessFormRef.querySelector('#guessDigit');
const guessBtnRef = guessFormRef.querySelector('#guessBtn');
const messageRef = guessFormRef.querySelector('#message');

const isNotEmpty = (value) => value !== '';
const isNotEmptyRange = (a, b) => a < b;
const drawDigit = (min, max) => Math.round(Math.random() * (max - min) + min);
const checkHit = (userDigit, drawnDigit) => {
    if (userDigit < drawnDigit) {
        return 'Za mało';
    } else if (userDigit > drawnDigit) {
        return 'Za dużo';
    } else {
        return 'Zgadłeś';
    }
}

let drawnDigit;

confirmationRef.addEventListener('click', (evt) => {
    evt.preventDefault();

    const userMin = minRef.value;
    const userMax = maxRef.value;

    if (isNotEmpty(userMin) && isNotEmpty(userMax) && isNotEmptyRange(userMin, userMax)){
        formRangeRef.classList.add('hide');
        guessFormRef.classList.remove('hide');
        drawnDigit = drawDigit(userMin, userMax);
    }

})

guessBtnRef.addEventListener('click', (event) => {
    event.preventDefault();
    const hit = guessDigitRef.value;

    messageRef.innerText = checkHit(hit, drawnDigit);
})