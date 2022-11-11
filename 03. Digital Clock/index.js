
//attaching js's manipulated data with html page
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
// const milliEl = document.getElementById("milli");
const ampmEl = document.getElementById("am-pm");

//using inbuilt function date to get dynamically updated date
function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    // let ms = new Date().getMilliseconds();

    let ampm = "AM";

    //changing am to pm if time goes beyond 12 and changing it to 12 hrs format
    if(h>12){
        h = h - 12;
        ampm = "PM";
    }

    //to show 0 before the hr, min and secs if they are less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    // ms = ms < 10 ? "0"+ ms : ms;
    // ms = ms < 100 ? "00"+ ms : ms;

    //connecting two different functions in js file
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    // milliEl.innerText = ms;
    ampmEl.innerText = ampm;

    setTimeout(()=>{
        updateClock();
    }, 1000)
    // every 1000 millisecond the function will work again and time will get updated
}
//calling the above function to get it work 
updateClock();