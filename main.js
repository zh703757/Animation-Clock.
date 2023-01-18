setInterval(() =>{
    const time = document.querySelector("#time");
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    let day_night = "AM";

    if(hours > 12)
    {
        hours = hours - 12;
        day_night = "PM";
    }
    if(hours > 12)
    {
        hours = "0" + hours;
    }
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if(seconds < 10)
    {
        seconds = "0" + seconds;
    }
    time.textContent = hours + ':' + minutes + ':' + seconds + day_night;
});