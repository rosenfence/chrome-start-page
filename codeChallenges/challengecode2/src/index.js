// Math.random() * 기입숫자
// 기입숫자 미만까지 나옴
// Math.random()이 0이상 1미만으로 나오기때문임 -> 즉, 숫자를 곱하면 0부터 그 숫자 미만 소숫점 포함 숫자 랜덤


// 1. Math.round() : 반올림
// 2. Math.ceil() : 올림
// 3. Math.floor() : 내림
// 즉, 0부터 입력 숫자까지 나타나게 하려면 round를 사용하면 된다


// console.log(Math.round(Math.random()*1));


const rangeNum = document.querySelector('#range-num');
const guesseform = document.querySelector('#gamble-form');
const guessNum = guesseform.querySelector('#guess-num');
const betting = document.querySelector('#betting-print');
const result = document.querySelector('#result-print');


function guessingGame(event) {
    event.preventDefault()
    const randomNum = Math.round(Math.random()*rangeNum.value);
    const selecetedNum = parseInt(guessNum.value);

    console.log(typeof(randomNum));
    console.log(typeof(selecetedNum));

    betting.innerText = `You chose: ${selecetedNum}, the machine chose: ${randomNum}`;
    result.innerText = ''
    if (randomNum === selecetedNum) {
        result.innerText = 'You won!'
    } else {
        result.innerText = 'You lost!'
    }
}


guesseform.addEventListener('submit',guessingGame);