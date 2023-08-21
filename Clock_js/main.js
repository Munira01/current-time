let clock = document.querySelector(".clock h1");

setInterval(() => {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    clock.innerHTML = `${hour}:${minute}:${second}`;

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    let rgb = `rgb(${red}, ${green}, ${blue})`
    document.body.querySelector(".clock").style.background = rgb;
}, 1000)
