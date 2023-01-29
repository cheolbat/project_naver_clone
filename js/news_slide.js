const newsViewBox = document.querySelector('.news_view_box');
const newsList = document.querySelector('.news_list');
const news = document.querySelector('.news')
const newsAll = document.querySelectorAll('.news')
const newsHeight = news.offsetHeight
let currentIndex = 0;

makeClone()

function makeClone(){
  let firstNewsClone = newsAll[0].cloneNode(true)
  newsList.append(firstNewsClone);
}

function moveNewsList(){
  if(currentIndex <= newsAll.length - 2){
    newsList.style.top = - newsHeight * (currentIndex + 1) + 'px';
    newsList.style.transition = `${0.5}s ease-out`;
  }
  if(currentIndex === newsAll.length - 2){
    setTimeout(()=>{
      newsList.style.top = - 0 + 'px'
      newsList.style.transition = `${0}s ease-out`;
    },500)
    currentIndex = -1
  }
  currentIndex += 1
}

function slidingNews(){
  setInterval(moveNewsList, 3000)
}
slidingNews()