import { UserInterface } from './uiScript.js';

export const Preferences=function(){
    
    let preferences;
    let changesSaved = false;
    let changesMade = false;
    const theme=document.getElementById('theme');
    const linksFont=document.getElementById('linksfontsize');
    const paraFont=document.getElementById('parafontsize');
    const paraColor=document.getElementById('paracolor');
    const headingFont=document.getElementById('newsheadingfontsize');
    const saveBtn=document.getElementById('save');
    const resetBtn=document.getElementById('reset');
    const paraLabel=document.getElementById('paralabel');
    
    function init(){
        UserInterface.init(); 
        _addEventListeners();
    }
    
    
    function _addEventListeners(){
        
        theme.addEventListener('change',setTheme);
        linksFont.addEventListener('change',setLinksFontSize);
        paraFont.addEventListener('change',setParagraphFontSize);
        paraColor.addEventListener('change',setParaColor);
        headingFont.addEventListener('change',setHeadingSize);
        saveBtn.addEventListener('click',savePreferences);
        resetBtn.addEventListener('click',reset);

    }
    
    window.onbeforeunload = function(e){
        
        
        if(changesMade == true && changesSaved == false){
            document.getElementById("message").innerHTML = "Changes have not been saved!";
            return true;
        }
    }
    
    // if(preferences === undefined){
    //     preferences = new Object();
        
    // }

     if(localStorage.getItem("usersettings") === null ) {

        preferences=new Object();

    }else{ 

        preferences=JSON.parse(localStorage.getItem("usersettings")) ; 
    }
    
    function setTheme(event){
        const value=event.srcElement.value;
        const head = document.getElementsByTagName('head')[0];        
        const styleSheetsCount=document.querySelectorAll('head .theme').length;        
        if(styleSheetsCount>1 ){            
            head.removeChild(head.lastChild);
            _addTheme(head,value);
            
        }else{
            
            _addTheme(head,value);
        }

        preferences.theme=value;
       changesMade=true;
    }         
        
    function _addTheme(head,value){
        if(value==='Red'){           
            const style = document.createElement('link');
            style.href = './css/redtheme.css';
            style.type = 'text/css';
            style.rel = 'stylesheet';
            style.classList.add('theme');
            head.append(style);
        }else if(value==='Yellow'){
            const style = document.createElement('link');
            style.href = './css/yellowtheme.css';
            style.type = 'text/css';
            style.rel = 'stylesheet';          
            style.classList.add('theme');
            head.append(style);
    }
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
    paraLabel.textContent=value+'px';
    paragraphs.forEach((p)=>{
        
        p.style.fontSize=value+'px';
    });
    preferences.paraSize=value+'px';
    changesMade=true;
    
}

function setParaColor(){    
    const ptags =  document.querySelectorAll('.card-right p');
    const color = paraColor.value;    
    preferences.paracolor = color;   
    for (let index = 0; index < ptags.length; index++) {        
        ptags[index].style.color = paracolor;        
    }      
    changesMade = true;    
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
    
      
    const settings = JSON.stringify(preferences);    
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
    paragraphs.forEach((p)=>{          
        p.style.color="";
    });
    
    
    const navLinks=document.querySelectorAll('nav ul li a');              
    navLinks.forEach((link)=>{
        
        link.style.fontSize="";
    });

    const head = document.getElementsByTagName('head')[0];        
    const styleSheetsCount=document.querySelectorAll('head .theme').length;        
    if(styleSheetsCount>1 ){            
            head.removeChild(head.lastChild);
               }
     alert("Preferences have been  reset to default! ")          
    
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
          
            if(settings.paracolor !== 'undefined' ){                    
                paragraphs.forEach((p)=>{          
                    p.style.color=settings.paracolor;
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

            if(settings.theme!=='undefined'){

                const head = document.getElementsByTagName('head')[0];   
                _addTheme(head,settings.theme);
            }
        }
        
        
    }
}

return{ setUserPreferences , init}
}();






















