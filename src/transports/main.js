const frameContent = document.getElementById('main-frame');
const cardBus = document.getElementById('cardBus');
const cardTaxi = document.getElementById('cardTaxi');
const cardMoto = document.getElementById('cardMoto');
const cardBarco = document.getElementById('cardBarco');



if (sessionStorage.getItem('categoryT') == undefined){
  let rand = Math.floor(Math.random()*3)
  sessionStorage.setItem('categoryT', rand.toString());
  loadCatedoriesRandom(rand.toString());
} else {
  let category = sessionStorage.getItem('categoryT');
  loadCatedoriesRandom(category);
  
}

function loadCatedoriesRandom(category){
  switch (category){
      
    case '0': loadBuses(dataBuses);
    break;
    
    case '1': loadTaxis(dataTaxis);
    break;
    
    case '2': loadCaponeras(dataCaponeras);
    break;
    
    case '3': loadBarcos(dataBarcos);
    break;
    
    default: alert('no se encontro una categoría');
  }
}

function loadBuses() {
  sessionStorage.setItem('categoryT', 0);
  cardBus.setAttribute('style', 'background-color:  #A8F6A2;');
  cardTaxi.setAttribute('style', 'background-color: white');
  cardMoto.setAttribute('style', 'background-color: white');
  cardBarco.setAttribute('style','background-color: white');
 
 sessionStorage.setItem('driver', 'no')
  loadItemCategories(dataBuses);
}
function loadTaxis() {
 sessionStorage.setItem('categoryT', 1);
  cardBus.setAttribute('style', 'background-color:  white;');
  cardTaxi.setAttribute('style', 'background-color: #A8F6A2');
  cardMoto.setAttribute('style', 'background-color: white');
  cardBarco.setAttribute('style','background-color: white');
 
 sessionStorage.setItem('driver', 'yes');
  loadItemCategories(dataTaxis);
}
function loadCaponeras() {
  sessionStorage.setItem('categoryT', 2);
  cardBus.setAttribute('style', 'background-color:  white;');
  cardTaxi.setAttribute('style', 'background-color: white');
  cardMoto.setAttribute('style', 'background-color: #A8F6A2');
  cardBarco.setAttribute('style','background-color: white');

  sessionStorage.setItem('driver', 'yes');
  loadItemCategories(dataCaponeras);
}
function loadBarcos() {
  sessionStorage.setItem('categoryT', 3);
  cardBus.setAttribute('style', 'background-color:  white;');
  cardTaxi.setAttribute('style', 'background-color: white');
  cardMoto.setAttribute('style', 'background-color: white');
  cardBarco.setAttribute('style','background-color: #A8F6A2');
 
 sessionStorage.setItem('driver', 'no');
  loadItemCategories(dataBarcos);
}

function loadItemCategories (list){
  frameContent.innerHTML = '';
  
  list.forEach(it => {
    const figure = document.createElement('figure');
    const figureElement = `
        <div class="frame-content__foto">
          <img src="../assets/img/${it.photos[0]}.jpg" alt="Foto">
        </div>
       
        <div class="frame-content__price">
          
          <img class="icon" src="../assets/icon/pesos.png" alt="">
          <p>${it.price}</p>
        </div>
        <div class="frame-content__route">
          <img class="icon" src="../assets/icon/distance.png" alt="">
          <p>${it.route}</p>
        </div>
        <div class="frame-content__schedule">
          <img class="icon" src="../assets/icon/clock.png" alt="">
          <p>${it.schedule}</p>
        </div>
    `;
    
    figure.addEventListener('click', () => {
      sessionStorage.setItem('transport', JSON.stringify(it));
      window.location.href = './details/index.html';
    });
    figure.innerHTML = figureElement;
    frameContent.appendChild(figure);
  })
}
