const enterBtn=document.querySelector('#user-name-input button');
    const userName=document.getElementById('username');
	const userNameSection=document.getElementById('user-name-input');
	const welcomeDiv=document.getElementById('welcome');
    const nameSpan=document.getElementById('name');
    const locSpan=document.getElementById('location');
    

    // Check Local Storage for username

   
    setUsername();
    getLocation();
    enterBtn.addEventListener('click', saveUsername);

    function saveUsername(){

		const nameObject={};
		nameObject.name=userName.value.toLowerCase();
		localStorage.setItem('userName', JSON.stringify(nameObject));
        userNameSection.style.display='none';
        setUsername();
        
		
	
    }
    
    function setUsername(){

        if(localStorage.getItem('userName')===null){

            userNameSection.style.display='block';
        }else{
    
            welcomeDiv.style.display='block';
            nameSpan.textContent=(JSON.parse(localStorage.getItem('userName')).name).toUpperCase();
    
        }
    }

        function getLocation(){

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(displayLocation);
              } else {
               locSpan.textContent = "Geolocation is not supported by this browser.";
              }
        }

        function displayLocation(location){

            locSpan.innerHTML="Latitude: " +  location.coords.latitude.toFixed(2) + 
                              "<br>Longitude: " + location.coords.longitude.toFixed(2); 
        }
    
   
