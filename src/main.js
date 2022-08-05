const changeSection = document.getElementById('changeSection');
const changeSectionImg = document.querySelector('#changeSection img');
const HomeSection = document.getElementById('home-frame');
const LoginSection = document.getElementById('login-frame');

let section = 0;

function irLocal() {
  window.location.href ='./locals/index.html';
}
function irTransport(){
  window.location.href = './transports/index.html'
}
changeSection.addEventListener('click', ()=> {
  if (section === 0) {
    HomeSection.classList = 'hide';
    LoginSection.classList = 'background-river';
    changeSectionImg.src = './assets/icon/back.png';
    changeSectionImg.setAttribute('style', 'padding: 8px')
    section = 1;
  } else if (section === 1) {
    HomeSection.classList = 'background-river';
    LoginSection.classList = 'hide';
    changeSectionImg.src = './assets/icon/circle-user.png';
    changeSectionImg.setAttribute('style', 'padding: 0')
    section = 0;
  }
});
