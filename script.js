let a;
let hr;
let min;
let sec;
let dt;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date(); 
    hr= a.getHours();
    min=a.getMinutes();
    sec=a.getSeconds();
    dt = a.toLocaleDateString(undefined, options);
    document.getElementById('hour').innerHTML = hr;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('date').innerHTML = dt;
}, 1000);