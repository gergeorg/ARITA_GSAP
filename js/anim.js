shapes.forEach(el => {el.style.backgroundColor = `${el.dataset.bg}`})
bgItems.forEach(el => {el.style.backgroundImage = `url(${el.dataset.bg})`})

//функция смены фона
const bgSlides = (direction) => {
  let itemClass = `slide-${slideCounter}`
  if (direction == 'down') {
    if (slideCounter < slideCount) {
      mainSection.classList.remove(itemClass)
      slideCounter++

      itemClass = `slide-${slideCounter}`
      mainSection.classList.add(itemClass)
    }
  } else if (direction == 'up') {
    if (slideCounter > 1) {
      mainSection.classList.remove(itemClass)
      slideCounter--

      itemClass = `slide-${slideCounter}`
      mainSection.classList.add(itemClass)
    }
  }
}


const imagesSlides = (direction) => {
  let currentSlide = document.querySelector('.slide-bg__inner--current')
  let nextSlide

  direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling

  if (nextSlide) {
    imgSlides.forEach(el => {el.classList.remove('index')})

    currentSlide.classList.add('index')

    const tl = gsap.timeline ({
      default: {ease: easing},
      onComlete: function() {
        currentSlide.classList.remove('index')
      }
    })

    tl.from(nextSlide, 0.5, {
      xPercent: 100
    })

    .from(nextSlide.querySelector('.slide-bg__link'), 0.5, {
      xPercent: -100,
      delay: -0.5,
    })

    currentSlide.classList.remove('slide-bg__inner--current')
    nextSlide.classList.add('slide-bg__inner--current')
  }
}

const shapeSlides = (direction) => {
  let currentSlide = document.querySelector('.shapes__item--current')
  let nextSlide

  direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling

  if (nextSlide) {
    shapesSlides.forEach(el => {el.classList.remove('index')})

    currentSlide.classList.add('index')

    const tl = gsap.timeline ({
      default: {ease: easing},
      onComlete: function() {
        currentSlide.classList.remove('index')
      }
    })

    tl.from(nextSlide, 0.5, {
      xPercent: 100,
      delay: 0.5
    })

    .from(nextSlide.querySelector('.shapes__content'), 0.5, {
      xPercent: -100,
      delay: -1,
    })

    currentSlide.classList.remove('shapes__item--current')
    nextSlide.classList.add('shapes__item--current')
  }
}


const textSlides = (direction) => {
  let currentSlide = document.querySelector('.slides-container__slide--active')
  let nextSlide

  direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling

  if (nextSlide && !nextSlide.classList.contains('main-section__explore')) {

    const tl = gsap.timeline ({
      default: {ease: easing},
    })

    tl.to(currentSlide.querySelector('.slides-container__title'), 0.6, {
      opacity: 0,
      y: 100,
    })

    .to(currentSlide.querySelector('.designers-info'), 0.6, {
      opacity: 0,
      y: 100,
    }, '-=0.6')

    tl.to(nextSlide.querySelector('.slides-container__title'), 0.6, {
      opacity: 1,
      y: 0,
    }, '-=0.1')

    .to(nextSlide.querySelector('.designers-info'), 0.6, {
      opacity: 1,
      y: 0,
    }, '-=0.5')

    currentSlide.classList.remove('slides-container__slide--active')
    nextSlide.classList.add('slides-container__slide--active')
  }
}
