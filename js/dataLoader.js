import {Carousel} from './carousel.js';
export const DataLoader=function(){
    
    
    const apiKey='9f3a40a50d454978844ef44d9f323b71';
    let country='ie';
    function load(){
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`)
        .then(response=>{
            
            return response.json();
        })
        .then(json=> {
            
            _renderData(json);
            
            
        })
        .catch(error=>console.log(error.message));
    }


    
    function _renderData(json){
        console.log(json);
        const carouselContainer=document.querySelector('.carousel-container');
        for(let i=0;i<3;i++){
            let title=(json.articles[i].title).slice(0,(json.articles[i].title).lastIndexOf('-'));
            let content=(json.articles[i].content).substr(0,261);
            const neswDiv=document.createElement('div');
            neswDiv.classList.add('news');
            neswDiv.innerHTML=`
            <figure class="news-image">
            <img src="${json.articles[i].urlToImage}" alt="">
            </figure>
         <div class="news-overlay">
            <h2>Headlines</h2>
            <div class="news-text  ">
               <h3>${title}</h3>
               <p> ${content}</p>
               <a class= "article-link" href="${json.articles[i].url}" target="_blank">Read full article</a>
            </div>
         </div>
            
            `;
            carouselContainer.childNodes[0].before(neswDiv);
        }
        
        Carousel.init();
        
        
        
        
    }
    return {load}
}();
