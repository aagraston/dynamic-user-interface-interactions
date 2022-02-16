const dropDown = () => {
  const hide = (container) => {
    container.style.height = '0px'
    container.classList.toggle('hidden')
  }

  const expand = (container) => {
    container.style.height = '100%'
    container.classList.toggle('hidden')
  }

  const toggle = (container) => {
    if (container.style.height === '0px') {
      expand(container)
    } else {
      hide(container)
    }
  }

  return { toggle }
}

export default dropDown
