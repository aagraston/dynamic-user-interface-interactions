import '../scss/app.scss'
import ClassToggle from './classtoggle'

const hamburgerButton = document.querySelector('.hamburger-icon')
const openableMenu = document.querySelector('.openable-menu')

const revealToggle = ClassToggle('revealed')

hamburgerButton.addEventListener(
  'click',
  revealToggle.toggle.bind(this, openableMenu)
)
