
let businessBtn = document.getElementById("business");
let sportsBtn = document.getElementById("sport");
let technologyBtn = document.getElementById("technology");
const API_KEY = '8608a35cba1d4e6d9efc682a9a3390c8';
const BUSINESS_NEWS = `https://newsapi.org/v2/top-headlines?country=in&language=&category=business&apiKey=`;
const SPORTS_NEWS = `https://newsapi.org/v2/top-headlines?country=in&language=&category=sports&apiKey=`;
const TECHNOLOGY_NEWS = `https://newsapi.org/v2/top-headlines?country=in&language=&category=technology&pageSize=8&apiKey=`;

businessBtn.addEventListener("click",function(){
    news.innerHTML="<center><h1 style='color:BROWN'>TODAY'S BUSSINESS NEWS</h1></center>";
    fetchBusinessNews();
});
const fetchBusinessNews  = async () =>{
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=150 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        return;
    }
    displayNews();
}
sportsBtn.addEventListener("click",function(){
    news.innerHTML="<center><h1 style='color:BROWN'>TODAY'S SPORTS NEWS</h1></center>";
    fetchSportsNews();
});
const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        return;
    }
displayNews();
}
technologyBtn.addEventListener("click",function(){
    news.innerHTML="<center><h1 style='color:BROWN'>TODAY'S TECHNOLOGY NEWS</h1></center>";
    fetchTechnologyNews();
});
const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        return;
    }
    displayNews();
}
function displayNews() {
    newsdetails.innerHTML = "";


     newsDataArr.forEach(news => {
            var date = news.publishedAt.split("T");
            var col = document.createElement('div');
            col.className="col-sm-3  col-md-5 col-lg-8 p-2 card";
            var card = document.createElement('div');
            card.className = "p-2";
            var image = document.createElement('img');
            image.setAttribute("height","matchparent");
            image.setAttribute("width","100%");
            image.src=news.urlToImage;
            var cardBody = document.createElement('div');
            var newsHeading = document.createElement('h5');
            newsHeading.className = "card-title";
            newsHeading.innerHTML = news.title;
            var dateHeading = document.createElement('h6');
            dateHeading.className = "text-primary";
            dateHeading.innerHTML = date[0];
            var discription = document.createElement('p');
            discription.className="text-muted";
            discription.innerHTML = news.description;
            var link = document.createElement('a');
            link.className="btn btn-dark";
            link.setAttribute("target", "_blank");
            link.href = news.url;
            link.innerHTML="Read more";
            cardBody.appendChild(newsHeading);
            cardBody.appendChild(dateHeading);
            cardBody.appendChild(discription);
            cardBody.appendChild(link);
            card.appendChild(image);
            card.appendChild(cardBody);
            col.appendChild(card);
            newsdetails.appendChild(col);
       });
    
    
}

const url = 'https://newsapi.org/v2/top-headlines?country=in&language=&category=business&apiKey=' +
          'q=platformer&' +
          'apiKey= a59a56bdff1a408bbc47eeab4a5b9bc3';

async function getNews() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getNews()
 