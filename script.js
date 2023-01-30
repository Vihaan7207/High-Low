let countEl = document.querySelector('#tries');
let num = Math.floor(Math.random() * 100);
let guesses = []
let count = 0;
countEl.innerHTML = count;
const guess = () => {
    const input = document.querySelector('#guess').value;
    const result = document.querySelector('#result');
    let countEl = document.querySelector('#tries');
    if (input in guesses){
        result.innerHTML = 'You already guessed this!'
    } else {
        count++;
    if(parseInt(input) > num){
        guesses.push(input)
        console.log('Too high');
        result.innerHTML = 'Too High!';
    } else if (parseInt(input) < num) {
        console.log('Too low');
        result.innerHTML = 'Too Low!';
        
    } else if (parseInt(input) === num) {
        console.log('You got it!');
        result.innerHTML = 'You got it! Reload the page to play again!';
    }
    countEl.innerHTML = count;
}
    input = '';
}