const event = document.querySelector('#colorButton');

function selectRandomColor() {
    const values = '0123456789ABCDEF';
    let pick = '#';

    for (let i = 0; i < 6; i++) {
        pick += values[Math.floor(Math.random() * values.length)];
    }
    return pick;
}

event.addEventListener('click', function changeBackgroundColor() {
    document.body.style.backgroundColor = selectRandomColor();
});