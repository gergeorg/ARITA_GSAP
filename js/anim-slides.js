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
