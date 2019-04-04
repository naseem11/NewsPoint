export const DataLoader=function(){

    const apiKey='9f3a40a50d454978844ef44d9f323b71';
    let country='ie';
    function load(){
        fetch(`https://newsapi.org/v2/top-headlines?q=modi&apiKey=${apiKey}`)
        .then(response=>{
            console.log(response);
            return response.json();
        })
        .then(response=> {
            console.log(response);
           
        })
        .catch(error=>console.log(error.message));
    }
    return {load}
}();
