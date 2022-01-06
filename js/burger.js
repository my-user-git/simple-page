document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header-container__burger').addEventListener('click', function () {
    document.querySelector('.nav-burger').classList.add('nav-burger-list__active')
    let hone = document.querySelector('.section-slider').querySelector('.swiper-container').clientHeight
    let htwo = document.querySelector('.header').clientHeight
    let h = hone + htwo
    document.querySelector('.nav-burger').style.height = h + 'px'
  })
  console.log(document.querySelector('.header').clientHeight)
  document.querySelector('.header-container__burger_x').addEventListener('click', function () {
    document.querySelector('.nav-burger').classList.remove('nav-burger-list__active')
  })
})
