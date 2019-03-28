const dateDiv=document.querySelector('header .date-time');
const month=
{
    0:"January",
    1: "February", 
    2: "March",
    3: "April",
    4:"May", 
    5:"July", 
    6:"July", 
    7:"August", 
    8:"September", 
    9:"October", 
    10:"November", 
    11:"December"
}
const day=
{
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday",
    7:"Sunday"

}
let today=new Date();
const date=`${day[today.getDay()]} , ${month[today.getMonth()]} 
            ${today.getDate()}, ${today.getFullYear()}`;
dateDiv.textContent=date;            