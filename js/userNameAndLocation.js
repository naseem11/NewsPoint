const enterBtn = document.querySelector('#user-name-input button');
const userName = document.getElementById('username');
const userNameSection = document.getElementById('user-name-input');
const welcomeDiv = document.getElementById('welcome');
const nameSpan = document.getElementById('name');
const locSpan = document.getElementById('location');
const smNameSpan=document.getElementById('sm-name');


// Check Local Storage for username


setUsername();
getLocation();
if(enterBtn){
    
    enterBtn.addEventListener('click', saveUsername);
}


function saveUsername() {

    const nameObject = {};
    nameObject.name = userName.value.toLowerCase();
    localStorage.setItem('userName', JSON.stringify(nameObject));
    userNameSection.style.display = 'none';
    setUsername();



}

function setUsername() {

    if (localStorage.getItem('userName') === null) {

        userNameSection.style.display = 'block';
    } else {
        let name=(JSON.parse(localStorage.getItem('userName')).name).toUpperCase();
        if(welcomeDiv && nameSpan){
            welcomeDiv.style.display = 'block';       
            nameSpan.textContent = name;
        }
      
        smNameSpan.textContent=name;
    }
}

function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
    } else {
        locSpan.textContent = "Geolocation is not supported by this browser.";
    }
}

function displayLocation(location) {

    if(locSpan){

        locSpan.innerHTML = "Lat: " + location.coords.latitude.toFixed(2) +
        " , Lng: " + location.coords.longitude.toFixed(2);
    }
   
}