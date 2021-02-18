/* eslint-disable no-alert */
document.addEventListener('DOMContentLoaded', (event) => {
  let ele = document.querySelector('input[type="submit"]')

  ele.addEventListener('click', (e) => {
    alert('You have submitted the form!')
  })
})

// e.preventDefault()
