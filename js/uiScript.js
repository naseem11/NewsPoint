export const UserInterface = function () {
	const dateDiv = document.querySelector('.date-time');
	const menuBtn = document.getElementById('menu-btn');
	const menuPanel = document.querySelector('nav ul');
	const menuLinks = document.querySelectorAll('nav ul li a');
	const navSearchIcon=document.querySelector('.fa-search');
	const searchInput=document.querySelector('.search-input');
	const searchCloseBtn=document.getElementById('search-close-btn');
	

	
	
	

	function init() {

		_initialize();
	}


	function _initialize() {

		_setDate(dateDiv);
		_addEventListeners();

	}
	// _setDate function Start
	function _setDate(element) {
		const month = {
			0: "January",
			1: "February",
			2: "March",
			3: "April",
			4: "May",
			5: "July",
			6: "July",
			7: "August",
			8: "September",
			9: "October",
			10: "November",
			11: "December"
		}
		const day = {
			1: "Monday",
			2: "Tuesday",
			3: "Wednesday",
			4: "Thursday",
			5: "Friday",
			6: "Saturday",
			0: "Sunday"

		}
		let today = new Date();		
		const date = `${day[today.getDay()]} , ${month[today.getMonth()]} 
                    ${today.getDate()}, ${today.getFullYear()}`;
		element.textContent = date;

	}
	// End of _setDate function

	//  _addEventListeners function start

	function _addEventListeners() {

		menuBtn.addEventListener('click', _makeMenuPanelAppear);
		navSearchIcon.addEventListener('click',_makeSearchAppearOrDisappear	);
		searchCloseBtn.addEventListener('click',_makeSearchAppearOrDisappear);

		if (window.screen.width < 768) {

			menuLinks.forEach(_delayLoadingPage)
		}


	}

	function _delayLoadingPage(el) {
		el.addEventListener('click', (event) => {
			_makeMenuPanelAppear();
			event.preventDefault();
			setTimeout(() => {
				window.location.href = el.getAttribute('href');
			}, 500);
		});


	}

	function _makeMenuPanelAppear() {
		menuBtn.classList.toggle('menu-active');
		menuPanel.classList.toggle('appear');
	}

	function _makeSearchAppearOrDisappear(){
		
		searchInput.classList.toggle('search-input-active');
	}
	
	
	

	return {init};
}();