// Generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId

const startChangeingColor = function () {

    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangeingColor = function () {
    clearInterval(intervalId);
    intervalId = null;

}

document.querySelector('#start').addEventListener('click', startChangeingColor);

document.querySelector('#stop').addEventListener('click', stopChangeingColor);