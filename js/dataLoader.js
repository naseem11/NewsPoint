import {Carousel} from './carousel.js';
import {Preferences} from './preferences.js';
export const DataLoader=function(){
    
    
    const apiKey='9f3a40a50d454978844ef44d9f323b71';
    const country='ie';
    
    

    function load(){
         
        
       
       
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${_setCategory()}&apiKey=${apiKey}`)
        .then(response=>{
            
            return response.json();
        })
        .then(json=> {
            
            _renderData(json);
            
            
        })
        .catch(error=>console.log(error.message));
    }

   function _setCategory(){
       let href=location.href;
       let category=href.substring((href.lastIndexOf('/')+1), href.lastIndexOf('.'));
       return  category==='index'? 'general' : category || 'general' ;
            
   }
    
    function _renderData(json){
        console.log(json);

        const carouselContainer=document.querySelector('.carousel-container');

        for(let i=0;i<3;i++){
            let title=(json.articles[i].title).slice(0,(json.articles[i].title).lastIndexOf('-'));          
            let content=((json.articles[i].content)||(json.articles[i].description)||'').substr(0,261);
            const neswDiv=document.createElement('div');
            neswDiv.classList.add('news');
            neswDiv.innerHTML=`
            <figure class="news-image">
            <img src="${(json.articles[i].urlToImage)}"  alt="">
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

        const newsCardsContainer=document.querySelector('.news-cards');
        for(let i=3;i<json.articles.length;i++){
            let title=(json.articles[i].title).slice(0,(json.articles[i].title).lastIndexOf('-'));
            let content=((json.articles[i].content)||(json.articles[i].description)||'').substr(0,261);
            const cardDiv=document.createElement('div');
            cardDiv.classList.add('card');
            cardDiv.innerHTML=`
            <figure class="card-left">
                <img src="${json.articles[i].urlToImage}" alt="">
             </figure>
            <div class="card-right">
                <h4>${title}</h4>
                <p>${content}
                <a href="${json.articles[i].url}">read more...</a></p>
                
            </div>
            
            
            `;


            newsCardsContainer.appendChild(cardDiv);
        
        }
        Preferences.setUserPreferences();
        
        
    }
    return {load};
}();


// <div class="source">
            // <span class="source-info"> Author</span>
			// 										<span class="source-info">Published on : ${json.articles[i].publishedAt}</span>
			// 										<span class="source-info">source</span>
														
			// 										</div>