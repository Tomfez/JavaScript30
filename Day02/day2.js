function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsInDeg = ((seconds / 60) * 360) + 90;
    const secondHand = document.querySelector(".second-hand");
    secondHand.style.transform = `rotate(${secondsInDeg}deg)`;

    const min = now.getMinutes();
    const minInDeg = ((min / 60) * 360) + 90;
    const minHand = document.querySelector(".min-hand");
    minHand.style.transform = `rotate(${minInDeg}deg)`;

    const hours = now.getHours();
    const hoursInDeg = ((hours / 12) * 360) + 90;
    const hourHand = document.querySelector(".hour-hand");
    hourHand.style.transform = `rotate(${hoursInDeg}deg)`;
}

setInterval(setDate, 1000);