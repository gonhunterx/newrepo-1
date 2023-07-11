let clicks = 0;
let button = document.querySelector('button');

function add(){
    clicks++;
    button.textContent = clicks;
}