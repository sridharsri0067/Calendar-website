let showhours = document.getElementById("hour")
let showminutes = document.getElementById("mint")
let showseconds = document.getElementById("secd")
let showampm = document.getElementById("ampm")
let showdate = document.getElementById("date")
let showday = document.getElementById("day")
let showmonth = document.getElementById("month")
let showyear = document.getElementById("year")


setInterval(()=>{
    var datemeth = new Date();

    // Seconds
    let sec = datemeth.getSeconds();
    showseconds.textContent = sec;
    if(sec < 10){
        showseconds.textContent = "0" + sec;
    }

    // Minutes
    let mint = datemeth.getMinutes();
    showminutes.textContent = mint;

    if(mint < 10){
        showminutes.textContent = "0" + mint;
    }

    // Hours
    let hour = datemeth.getHours();
    if(hour > 12){
        showhours.textContent = hour - 12;
    }
    else{
        showhours.textContent = hour;
    }

    if(hour < 10){
        showhours.textContent = "0" + hour;
    }

    // AMPM
    if(hour < 12){
        showampm.textContent = 'AM'
    }
    else{
        showampm.textContent = 'PM'
    }

    // Date
    let date = datemeth.getDate();
    showdate.textContent = date;
    if(date < 10){
        showdate.textContent = "0" + date;
    }

    // Day
    var dayarr = ['sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thuresday' , 'Friday' , 'Saturday']
    let day = datemeth.getDay();
    showday.textContent = dayarr[day];

    // Month
    var montharr = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']
    let month = datemeth.getMonth();
    showmonth.textContent = montharr[month]

    // Year
    let year = datemeth.getFullYear();
    showyear.textContent = year

},1000)