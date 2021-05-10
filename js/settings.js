const bgItems = document.querySelectorAll('.slide-bg__link')
const imgSlides = document.querySelectorAll('.slide-bg__inner')
const slideBg = document.querySelector('.slide-bg')
const shapes = document.querySelectorAll('.shapes__content')
const shapesSlides = document.querySelectorAll('.shapes__item')
const mainSection = document.querySelector('.main-section')
const mouse = document.querySelector('.mouse')
const helperInput = document.querySelector('#helper-input')
const links = document.querySelectorAll('a')
const preloader = document.querySelector('.preloader')

const slideCount = 5
let slideCounter = 1

const easing = BezierEasing(0.770, 0.125, 0.265, 1.040)

const startComplete = () => {
  imgSlides.forEach(el => {el.style.opacity = 1})
  shapesSlides.forEach(el => {el.style.opacity = 1})
}

const startingTl = gsap.timeline({defaults: {ease: easing}, onComplete: startComplete})



