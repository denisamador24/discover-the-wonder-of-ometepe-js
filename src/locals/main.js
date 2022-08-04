// Contenedor de vistas categoría
const frameContent = document.getElementById('frame-content');
const cardRest = document.getElementById('cardRest');
const cardBar = document.getElementById('cardBar');
const cardHotel = document.getElementById('cardHotel');
const cardBeach = document.getElementById('cardBeach');
const cardPark = document.getElementById('cardPark');

const pathImage = '../assets/img/';
if (sessionStorage.getItem('categoryL') == undefined){
  let rand = Math.floor(Math.random()*4)
  sessionStorage.setItem('categoryL', rand.toString());
  loadCatedoriesRandom(rand.toString());
} else {
  let category = sessionStorage.getItem('categoryL');
  console.log(category);
  loadCatedoriesRandom(category);
  
}

function loadCatedoriesRandom(category){
  console.log(category);
  switch (category){
    case '0': loadRestaurants(dataRestaurants);
      break;
      
    case '1': loadBares(dataBars);
    break;
    
    case '2': loadHoteles(dataHotels);
    break;
    
    case '3': loadBeach(dataBeach);
    break;
    
    case '4': loadParks(dataParks);
    break;
    
    default: alert('no se encontro una categoría');
  }
}

function loadRestaurants() {
  sessionStorage.setItem('categoryL', 0);
  cardRest.setAttribute('style', 'background-color:  #A8F6A2;');
  cardBar.setAttribute('style', 'background-color: white');
  cardHotel.setAttribute('style', 'background-color: white');
  cardBeach.setAttribute('style','background-color: white');
  cardPark.setAttribute('style', 'background-color: white');
  loadItemCategories(dataRestaurants);
}
function loadBares() {
  sessionStorage.setItem('categoryL', 1);
  cardRest.setAttribute('style', 'background-color: white;');
  cardBar.setAttribute('style', 'background-color: #A8F6A2');
  cardHotel.setAttribute('style', 'background-color: white');
  cardBeach.setAttribute('style','background-color: white');
  cardPark.setAttribute('style', 'background-color: white');
  loadItemCategories(dataRestaurants);
}
function loadHoteles() {
  sessionStorage.setItem('categoryL', 2);
  cardRest.setAttribute('style', 'background-color:  white;');
  cardBar.setAttribute('style', 'background-color: white');
  cardHotel.setAttribute('style', 'background-color: #A8F6A2');
  cardBeach.setAttribute('style', 'background-color: white');
  cardPark.setAttribute('style', 'background-color: white');
  loadItemCategories(dataHotels);
}
function loadBeach() {
  sessionStorage.setItem('categoryL', 3);
  cardRest.setAttribute('style', 'background-color:  white;');
  cardBar.setAttribute('style', 'background-color: white');
  cardHotel.setAttribute('style', 'background-color: white');
  cardBeach.setAttribute('style', 'background-color: #A8F6A2');
  cardPark.setAttribute('style', 'background-color: white');
  loadItemCategories(dataBeach);
}
function loadParks() {
  sessionStorage.setItem('categoryL', 4);
  cardRest.setAttribute('style', 'background-color:  white;');
  cardBar.setAttribute('style', 'background-color: white');
  cardHotel.setAttribute('style', 'background-color: white');
  cardBeach.setAttribute('style', 'background-color: white');
  cardPark.setAttribute('style', 'background-color: #A8F6A2');
  loadItemCategories(dataBeach);
}
function loadItemCategories (list){
  frameContent.innerHTML = '';
  let positionItem = 0;
  list.forEach(it => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const name = document.createElement('p');
    
    img.setAttribute('alt', 'Foto');
    img.src = pathImage + it.photos[0] + '.jpg';
    name.innerText = it.name;
    
    figure.appendChild(img);
    figure.appendChild(name);
    
    figure.addEventListener('click', () => {
      sessionStorage.setItem('local', JSON.stringify(it));
      window.location.href = './details/index.html';
    });
    positionItem++;
    
    frameContent.appendChild(figure);
  })
}
