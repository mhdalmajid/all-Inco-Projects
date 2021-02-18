document.addEventListener('DOMContentLoaded', () => {
  let square = document.querySelector('#square')
  document.querySelector('body').addEventListener('mouseover', (e) => {
    square.style.background = e.target.id
  })
})
