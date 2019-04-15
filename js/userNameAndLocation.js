const enterBtn=document.querySelector('#user-name-input button');
    const userName=document.getElementById('username');
	const userNameSection=document.getElementById('user-name-input');
	const welcomeDiv=document.getElementById('welcome');
    const nameSpan=document.getElementById('name');
    

    // Check Local Storage for username

    if(localStorage.getItem('userName')===null){

        userNameSection.style.display='block';
    }else{

        welcomeDiv.style.display='block';
        nameSpan.textContent=(JSON.parse(localStorage.getItem('userName')).name).toUpperCase();

    }

    enterBtn.addEventListener('click', saveUsername);

    function saveUsername(){

		const nameObject={};
		nameObject.name=userName.value.toLowerCase();
		localStorage.setItem('userName', JSON.stringify(nameObject));
		userNameSection.style.display='none';
		
	
	}
   
