const header = document.querySelector('.header');
const slideimg = document.querySelectorAll('.slideshow img')
const slideshow = document.querySelector('.slideshow')
const imgnumber = slideimg.length
const btnleft = document.querySelector('.btnleft')
const btnright = document.querySelector('.btnright')
const timkiem = document.querySelector('.timkiem')
const btntimkiem = document.querySelector('.btntimkiem')
const body = document.querySelector('body')
const btnclose = document.querySelector('.close')
const btnclosegiohang = document.querySelector('.closegiohang')
const bg = document.querySelector('.backgroundmo')
const  btngiohang = document.querySelector('.btngiohang')
const giohang = document.querySelector('.giohang')


let index = 0 

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 50) {
        header.style.backgroundColor = 'rgb(255, 255, 255)'; 
        header.style.transition = 'background-color 0.3s ease'; 
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});



btntimkiem.addEventListener('click',()=>{
    timkiem.classList.add('active')
    body.classList.add('active2')
    bg.classList.add('active3')
})


btnclose.addEventListener('click',()=>{
    timkiem.classList.remove('active')
    giohang.classList.remove('active')
    body.classList.remove('active2')
    bg.classList.remove('active3')
})
btngiohang.addEventListener('click',()=>{
    giohang.classList.add('active')
    body.classList.add('active2')
    bg.classList.add('active3')
})
btnclosegiohang.addEventListener('click',()=>{
    giohang.classList.remove('active')
    body.classList.remove('active2')
    bg.classList.remove('active3')
})