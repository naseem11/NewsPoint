export const Carousel=function(){
    
    let slideIndex=1;
    let flag=false;
    const slides=document.querySelectorAll('.news');
    const nextPreviousLinks=document.querySelectorAll('.carousel-container a');
    const navigationDots=document.querySelectorAll('.dot');
    function init(){
        
        _initialize();
    }
    
    function _initialize(){
        _showSlide(slideIndex);
        _addEventListeners();
        
        
    }
    
    function _addEventListeners(){
        
        nextPreviousLinks.forEach((el)=>{
            el.addEventListener('click',_nextSlide);
        });
        navigationDots.forEach((el)=>{
            
            el.addEventListener('click',_currentSlide)
        });
    }
    
    function _currentSlide(event){
        flag=true;
        if(event.srcElement==navigationDots[0]){
            
            _showSlide(slideIndex=1);
        }else if(event.srcElement==navigationDots[1]){
            _showSlide(slideIndex=2);
        }else{
            
            _showSlide(slideIndex=3);
        }
        
    }
    function _nextSlide(event){  
        flag=true;
        if(event.srcElement.classList.contains('prev')){            
            _showSlide(slideIndex+=-1);            
        }else{
            _showSlide(slideIndex+=1);
            
        }
    }
    
    function _showSlide(n=1){                 
        
        if (n > slides.length || slideIndex>3) {
            
            slideIndex = 1;
        } 
        if (n < 1) {
            
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        
        for (let i = 0; i < navigationDots.length; i++) {
            navigationDots[i].className =  navigationDots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block"; 
        navigationDots[slideIndex-1].className += " active";
        
        if(!flag){
            slideIndex++;
            setTimeout(_showSlide,2000);
        }
        
        
    }
    
    return {init}
}();