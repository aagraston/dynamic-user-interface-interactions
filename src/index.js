import DropDown from './js/drop-down'
import './scss/app.scss'

const menus = document.querySelectorAll('.drop-down')
const dropDown = DropDown()

menus.forEach((element) => {
  const menuToShow = element.querySelector('.drop-down-items')
  const clickable = element.querySelector('.drop-down-button')

  // here is how to bind the element
  clickable.addEventListener('click', dropDown.toggle.bind(element, menuToShow))
})
