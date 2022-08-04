
const local = JSON.parse(sessionStorage.getItem('local'));
const {name, phone, schedule, email, address, photos, description} = local;


// vistas para cambiar valores
const vName = document.getElementById('local-name');
const sliderPhotos = document.getElementById('main-slides')
const vPhone = document.getElementById('local-phone');
const vEmail = document.getElementById('local-email');
const vAddress = document.getElementById('local-address');
const vSchedule = document.getElementById('local-schedule');
const vDescription = document.getElementById('local-description');
const vDescriptionImg = document.querySelector('.content__description--img');

vName.innerText = name;
vAddress.innerText = address;
vEmail.innerText = email;
vPhone.innerText = phone;
vSchedule.innerText = schedule;
vDescription.innerText = description.text;
description.img.forEach(it => {
  const imgDescription = document.createElement('img');
  imgDescription.src = `../../assets/img/${it}.jpg`;
  vDescriptionImg.appendChild(imgDescription);
});

const cPhone = document.getElementById('cPhone');
const cEmail = document.getElementById('cEmail');
const cAddress = document.getElementById('cAddress');
const cSchedule = document.getElementById('cSchedule');
const cDescription = document.getElementById('cDescription');
createSlider2();

if (phone == '') {
  cPhone.style.display = 'none';
}
if (email == ''){
  cEmail.style.display = 'none';
}
if (address == ''){
  cAddress.style.display = 'none';
}
if (schedule == ''){
  cSchedule.style.display = 'none';
}
if (description.text == '' && description.img.length == 0){
  cDescription.style.display = 'none';
}
function createSlider() {
  /*
  const inputRadios = [];
  const divSlides = [];
  const divAutoBtn = [];
  const labelManualBtn = [];
  */
  let slides = ``;
  
  let inputRadios = ``;
  let divSlides = ``;
  let divAutoBtn = ``;
  let labelManualBtn = ``;
  
  let navigationAuto = ``;
  let navigationManual = ``;
  
  for (it in local.photos){
    inputRadios += `
      <input type="radio" name="radio-btn" id="radio${it}">
    `;
    if (it == 0){
      divSlides += `
      <div class="slide first">
        <img src="../../assets/img/${local.photos[it]}.jpg">
      </div>
      `;
    } else {
      divSlides += `
        <div class="slide">
          <img src="../../assets/img/${local.photos[it]}.jpg">
        </div>
      `;
    }
    divAutoBtn += `
      <div class="auto-btn${it}"></div>
    `;
    labelManualBtn += `
      <label for="radio${it}" class="manual-btn"></label>
    `;
    
    
    /*
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'radio-btn');
    input.setAttribute('id', `radio${it}`);
    
    const slide = document.createElement('div');
    slide.setAttribute('class', 'slide');
    const imgSlide = document.createElement('img');
    imgSlide.src = local.photos[it];
    slide.appendChild(imgSlide);
    
    const 
    */
  }
  
  navigationAuto = `
    <div class="navigation-auto">
      ${divAutoBtn}
    </div>
  `;
  navigationManual = `
    <div class="navigation-manual">
      ${labelManualBtn}
    </div>
  `;
  
  slides = `
    <div class="slides">
      ${inputRadios}
      ${divSlides}
      ${navigationAuto}
    </div>
  `;
  sliderPhotos.innerHTML = `
    ${slides}
    ${navigationManual}
  `;
  console.log(slides, navigationManual);
}

function createSlider2(){
  let slideImages = ``;
  let slideButtons = ``;
  
  
  for (it in photos){
    slideImages += `
      <img src="../../assets/img/${photos[it]}.jpg">
    `;
    slideButtons += `
        <div onclick="transitionSlider(${it})" class="slideButton"></div>
    `;
  }
  sliderPhotos.innerHTML = `
    <div class="slides">
      ${slideImages}
    </div>
    <div class="buttons">
      ${slideButtons}
    </div>
  `;
}
function transitionSlider(position = positionSlide) {
  console.log(position);
  const slideContent = document.querySelector('#main-slides .slides');
  const ButtonSlide = document.querySelectorAll('#main-slides .slideButton');
  console.log(ButtonSlide.length);
  let size = sliderPhotos.clientWidth;
  slideContent.style.transition = 'transform 0.6s ease-in-out'
  slideContent.style.transform = `translateX(-${size * position}px)`;
  for (it in ButtonSlide){
    if(it == position){
      ButtonSlide[position].setAttribute('style','background-color: #A8F6A2');
    } else {
      ButtonSlide[it].setAttribute('style', 'background-color: transparent');
    }
  }
}
