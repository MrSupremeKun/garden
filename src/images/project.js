const currentTime = () => {
    const element = document.querySelector('.clock__h1');

    let kun = new Date();
    let hours = kun.getHours();
    let minutes = kun.getMinutes();
    let seconds = kun.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    element.textContent = `${hours}:${minutes}:${seconds}`;
};
currentTime()
setInterval(currentTime, 1000)






