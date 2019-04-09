import {UserInterface} from './uiScript.js';
UserInterface.init();
export const Preferences=function(){

    let preferences;
    let changesSaved = false;
    let changesMade = false;
    const theme=document.getElementById('theme');
    const linksFont=document.getElementById('linksfontsize');
    const paraFont=document.getElementById('parafontsize');
    const headingFont=document.getElementById('newsheadingfontsize');
    const saveBtn=document.getElementById('save');
    const resetBtn=document.getElementById('reset');

    function init(){

        _addEventListeners();
    }


    function _addEventListeners(){

        theme.addEventListener('change',setTheme);
        linksFont.addEventListener('change',setLinksFontSize);
        paraFont.addEventListener('change',setParagraphFontSize);
        headingFont.addEventListener('change',setHeadingSize);
        saveBtn.addEventListener('click',savePreferences);
        resetBtn.addEventListener('click',reset);
    }

    window.onbeforeunload = function(e){

       
        if(changesMade == true && changesSaved == false){
            document.getElementById("message").innerHTML = "Changes have not been saved!";
            return true;
        }
    };

    if(preferences === undefined){
        preferences = new Object();
       
    }

    function setTheme(event){
        const value=event.srcElement.value;
        const head = document.getElementsByTagName('head')[0];
     
        if(value==='Red'){
           
            const style = document.createElement('link');
            style.href = './css/redtheme.css';
            style.type = 'text/css';
            style.rel = 'stylesheet';
            head.append(style);
        }else{
    
            head.removeChild(head.lastChild);
        }
       
        preferences.theme=value;
        changesMade=true;
    }
    function setLinksFontSize(){  
        const navLinks=document.querySelectorAll('nav ul li a');
        const value=event.srcElement.value;   
        navLinks.forEach((link)=>{
            link.style.fontSize=value;
        });
        preferences.linksSize=value;
        changesMade=true;
    
    }
    function setParagraphFontSize(){

        const paragraphs=document.querySelectorAll('.card-right p');
        const value=event.srcElement.value;  
        paragraphs.forEach((p)=>{
          
            p.style.fontSize=value;
        });
        preferences.paraSize=value;
        changesMade=true;
    
    }
    function setHeadingSize(){

        const headings=document.querySelectorAll('.card-right h4');
        
        const value=event.srcElement.value;  
       headings.forEach((heading)=>{
          
            heading.style.fontSize=value;
        });
        preferences.headingSize=value;
        changesMade=true;
    
    }
    function savePreferences(){

   
        var settings = JSON.stringify(preferences);    
        localStorage.setItem("usersettings",settings);     
        alert("Preferences have been saved!");    
        changesSaved = true; 
        resetUnsavedChangesWarning();
    
    }
    function resetUnsavedChangesWarning(){  
        document.getElementById("message").innerHTML = "";
    }

    function reset(){
        localStorage.clear();    
    
        const headings=document.querySelectorAll('.card-right h4');       
       headings.forEach((heading)=>{          
            heading.style.fontSize="" ;
        });
        
        const paragraphs=document.querySelectorAll('.card-right p');        
        paragraphs.forEach((p)=>{          
            p.style.fontSize="";
        });
        
        const navLinks=document.querySelectorAll('nav ul li a');              
        navLinks.forEach((link)=>{
    
            link.style.fontSize="";
        });
   
}

function setUserPreferences(){
  

   
    if(typeof(Storage) === undefined){

       alert("Local storage is not available");
    }
    else
    {                   
        
        if(localStorage.getItem("usersettings") !== null ) {
           
           const usersettings = localStorage.getItem("usersettings");

            const settings = JSON.parse(usersettings);        
           

          
                  
            const paragraphs=document.querySelectorAll('.card-right p');  
            if(settings.paraSize !== 'undefined' ){                    
                paragraphs.forEach((p)=>{          
                    p.style.fontSize=settings.paraSize;
                });
            }
           
            const headings=document.querySelectorAll('.card-right h4');              
            if(settings.headingSize !== 'undefined'){
                headings.forEach((heading)=>{          
                    heading.style.fontSize=settings.headingSize ;
                });
                
            }
            const navLinks=document.querySelectorAll('nav ul li a');    
           
            
            if(settings.linksSize !== 'undefined'){
                navLinks.forEach((link)=>{

                    link.style.fontSize=settings.linksSize;
                    });
            }
        }


    }
}

return{ setUserPreferences , init}
}();



    
   

















 