/* eslint-disable no-alert */
// Write a file `firstPage.js` to be included in the `first_page.html` file joined to the mission.
// Your JavaScript code will change the current title to "My first (dynamic) webpage".
// You will also add 2 events handlers:
// - when the user clicks on "Then", an alert should display "The Beatles (January 13, 1969)"
// - when the user clicks on "Now", an alert should display "Carly Rae Jepsen (March 1, 2012)"

document.addEventListener('DOMContentLoaded', (event) => {
  document.title = 'My first (dynamic) webpage'
  let arr = document.getElementsByTagName('h2')

  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', (e) => {
      if (e.target.innerHTML === 'Then') alert('The Beatles (January 13, 1969)')
      else alert('Carly Rae Jepsen (March 1, 2012)')
    })
  }
})
