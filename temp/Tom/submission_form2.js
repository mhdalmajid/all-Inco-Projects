const myForm = document.forms[0] // get the form from DOM

let modal = document.getElementById('simpleModal')
let formValues = {}

document.getElementById('closeBtn').addEventListener('click', (e) => {
  modal.style.display = 'none'
})

myForm.addEventListener('submit', (e) => {
  e.preventDefault()

  for (let i = 0; i < myForm.length - 1; i++) {
    console.log(`${myForm[i].name}: ${myForm[i].value}`)
    if (
      myForm[i].value !== '' &&
      myForm[i].value !== null &&
      i === myForm.length - 2
    )
      modal.style.display = 'block'
  }
})
