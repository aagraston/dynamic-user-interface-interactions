import '../scss/app.scss'

import '../imgs/insta_01.png'
import '../imgs/insta_02.png'
import '../imgs/insta_03.png'
import '../imgs/insta_04.png'
import '../imgs/insta_05.png'

const sliderContainer = document.querySelector('.image-slider-container')
const slider = document.querySelector('.image-slider')
let clonesWidth
let sliderWidth

const clones = []

const disableScroll = false

let scrollPos

const items = [...document.querySelectorAll('.image-slider-item')]

const images = [...document.querySelectorAll('.image-container')]

images.forEach((image, index) => {
  image.style.backgroundImage = `url(./insta_0${index + 1}.png)`
})

items.forEach((item) => {
  const clone = item.cloneNode(true)
  clone.classList.add('clone')
  slider.appendChild(clone)
  clones.push(clone)
})

// looping through clones, getting the width and adding it, returning total width of clones
function getClonesWidth() {
  let width = 0
  clones.forEach((clone) => {
    width += clone.offsetWidth
  })
  return width
}

function getScrollPos() {
  return window.scrollY
}

function scrollUpdate() {
  scrollPos = getScrollPos()
  if (clonesWidth + scrollPos >= sliderWidth) {
    window.scrollTo({ top: 1 })
  } else if (scrollPos <= 0) {
    window.scrollTo({ top: sliderWidth - clonesWidth - 1 })
  }

  slider.style.transform = `translateX(${-window.scrollY}px)`

  requestAnimationFrame(scrollUpdate)
}

function calculateDimensions() {
  sliderWidth = slider.getBoundingClientRect().width
  clonesWidth = getClonesWidth()
}

function onLoad() {
  calculateDimensions()
  document.body.style.height = `${sliderWidth}px`
  window.scrollTo({ top: 1 })
  scrollUpdate()
}

onLoad()
