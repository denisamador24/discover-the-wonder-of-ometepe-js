const cMap = document.querySelector('.content .map');
const cSchedule = document.querySelector('.content .content__schedule');
const cPrice = document.querySelector('.content .content__price');
const cMaxP = document.querySelector('.content__max-passenger');
const cLicense = document.querySelector('.content__license');
const cFoto = document.querySelector('.content__photo');
const cDescription = document.querySelector('.content__description');
const vName = document.querySelector('header h1');
const vFoto = document.querySelector('.content__photo img')
const vRoute = document.querySelector('.map .map__route p');
const vSchedule = document.querySelector('.content__schedule p');
const vPrice = document.querySelector('.content__price p');
const vMaxP = document.querySelector('.content__max-passenger p');
const vLicense = document.querySelector('.content__license p');
const vDescription = document.querySelector('.content__description p');

const {name, route, schedule, price, maxP, license, photos, description} = JSON.parse(sessionStorage.getItem('transport'));

vName.innerHTML = name;
vFoto.src = `../../assets/img/${photos[0]}.jpg`;
vRoute.innerHTML = route;
vSchedule.innerHTML = schedule;
vPrice.innerHTML = price;
vMaxP.innerHTML = maxP;
vLicense.innerHTML = license;
vDescription.innerHTML = description;

if (route == '') cMap.style.display = 'none';
if (schedule == '') cSchedule.style.display = 'none';
if (price == '') cPrice.style.display = 'none';
if (maxP == '') cMaxP.style.display = 'none';
if (license == '') cLicense.style.display = 'none';
if (description == '') cDescription.style.display = 'none';
