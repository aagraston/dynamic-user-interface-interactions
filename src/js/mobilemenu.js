import '../scss/app.scss'
import ClassToggle from './classtoggle'

const hamburgerButton = document.querySelector('.hamburger-icon')
const openableMenu = document.querySelector('.openable-menu')
const subMenus = document.querySelectorAll('.sub-menu')

const revealToggle = ClassToggle('revealed')

subMenus.forEach((element) => {
  console.log(element)
  const clickable = element.children[0]
  const revealable = element.children[1]

  console.log(`${clickable} ${revealable}`)

  clickable.addEventListener(
    'click',
    revealToggle.toggle.bind(element, revealable)
  )
})

hamburgerButton.addEventListener(
  'click',
  revealToggle.toggle.bind(this, openableMenu)
)
