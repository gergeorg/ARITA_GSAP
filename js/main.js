// 1. Обработка курсора
// 2. Стартовая анимация
// 3. Анимация фона
// 4. Анимация текста
// 5. Анимация фона справа
// 6. Анимация шейпов
// 7. Глобальные настройки
// 8. Запуск скролла


const init = () => {

  window.onload = () => {
    preloader.classList.add('preloader-animation')

    setTimeout(() => {
      preloader.classList.remove('preloader-animation')
      preloader.classList.add('preloader-hidden')
    }, 3000)

    setTimeout(() => {
      startAnimation()
      preloader.classList.add('preloader-none')
    }, 3200)
  }


  const showNextSlide = () => {
    bgSlides('down')
    imagesSlides('down')
    shapeSlides('down')
    textSlides('down')
    console.log('next');
  }

  const showPrevSlide = () => {
    bgSlides('up')
    imagesSlides('up')
    shapeSlides('up')
    textSlides('up')
    console.log('prev');
  }

  if(window.innerWidth >= 768) { //скролл на десктопе не чаще чем 1,5 сек
    window.addEventListener('wheel', (e) => {

      let delta = -e.deltaY

      if (delta > 0) {
        if (helperInput.value == '1') {
          console.log('scroll up');
          helperInput.value = 0
          showPrevSlide()
          setTimeout(() => {
            helperInput.value = 1
          }, 1500)
        }
      } else {
        if (helperInput.value == '1') {
          console.log('scroll down');
          helperInput.value = 0
          showNextSlide()
          setTimeout(() => {
            helperInput.value = 1
          }, 1500)
        }
      }
    })
  } else { //скролл на мобилке
    document.addEventListener('swiped-left', () => {
      showNextSlide()
    })

    document.addEventListener('swiped-right', () => {
      showPrevSlide()
    })
  }
}

init()
