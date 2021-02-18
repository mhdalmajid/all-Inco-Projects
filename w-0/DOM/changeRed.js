document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#square').addEventListener('mouseover', (e) => {
    e.target.style.background = 'red'
    console.log(e.target)
  })
})
