const remote = require('electron').remote
const main = remote.require('./main.js')

let button = document.createElement('button')
button.textContent = "Abrir ventana"
document.body.appendChild(button)

button.addEventListener('click', () => {
	main.openWindow()
})

//
//
//
let button2 = document.createElement('button')
button2.textContent = "Abrir ventana 2"
document.body.appendChild(button2)

button2.addEventListener('click', () => {
	main.openWindow2()
})

let button3 = document.createElement('button')
button3.textContent = "Volver al inicio"
document.body.appendChild(button3)

button3.addEventListener('click', () => {
	main.win3()
})
