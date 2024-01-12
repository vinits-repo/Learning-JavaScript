// generate random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let startInterval;

const startChangingColor = function () {
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }

    if (!startInterval) {
        startInterval = setInterval(changeBgColor, 1000)
    }
};

const stopChangingColor = function () {
    clearInterval(startInterval);
    startInterval = null
    // document.body.style.backgroundColor = '#212121';
};

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor)