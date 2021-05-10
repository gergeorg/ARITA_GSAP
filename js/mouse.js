function moveMouse(e) {
  if (e.clientX < 10 || e.clientY < 10 || e.clientY > (window.innerHeight -10) || e.clientX > (window.innerWidth -10)) {
    mouse.style.opacity = 0
  } else {
    mouse.style.opacity = 1
    mouse.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`
  }
}

if (window.innerWidth >= 768) {
  document.addEventListener('mousemove', moveMouse)

  slideBg.addEventListener('mousemove', () => {mouse.classList.add('view-visible')})
  slideBg.addEventListener('mouseleave', () => {mouse.classList.remove('view-visible')})

  links.forEach(link => link.addEventListener('mousemove', () => {mouse.classList.add('links-visible')}))
  links.forEach(link => link.addEventListener('mouseleave', () => {mouse.classList.remove('links-visible')}))
}
