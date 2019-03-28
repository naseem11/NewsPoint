export const userInterface=function(){
    const dateDiv=document.querySelector('header .date-time');
    const menuBtn=document.getElementById('menu-btn');
    const menuPanel=document.querySelector('.menu-panel');
    const menuCloseBtn=document.getElementById('menu-close-btn');
    console.log(menuPanel);

    function init(){
         
        _initialize();
    }


    function _initialize(){

        _setDate(dateDiv);
        _addEventListeners();

    }
// _setDate function Start
    function _setDate(element){
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
        element.textContent=date;         

    }
// End of _setDate function

//  _addEventListeners function start

    function _addEventListeners(){

        menuBtn.addEventListener('click',_makeMenuPanelAppear);
        menuCloseBtn.addEventListener('click', _closeMenuPanel)
    }

   function _makeMenuPanelAppear(){

        menuPanel.classList.add('appear');
    }

    function _closeMenuPanel(){

        menuPanel.classList.remove('appear');
    }
    return {init};
}();








           