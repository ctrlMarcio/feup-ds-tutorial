const SERVER_URL = 'http://localhost:3000'

async function sendData(text) {
	const response = await fetch(`${SERVER_URL}/words`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ text }),
	})

	// updates the screen
	const json = await response.json()
	const words = json.words

	updateWords(words)
}

// gets the words from the server and displays them
async function get() {
	const response = await fetch(SERVER_URL)
	let words = await response.json()
	words = words.words
	updateWords(words)
}

function updateWords(words) {
	console.log(words)
	// shuffles the array
	words.sort(() => Math.random() - 0.5)

	words.forEach((word) => {
		const p = document.createElement('p')
		p.innerText = word.word
		// TODO: font size calculated in percentage to max count
		p.style.fontSize = `${word.count}rem`
		// TODO: do not append to body but to a div
		document.body.appendChild(p)
	})
}

///////// sends the information on submit //////////
const textField = document.getElementById('text')

// calls the function when the form is submitted
document.getElementById('form').onsubmit = (e) => {
	e.preventDefault()
	sendData(textField.value)
}

// calls the get function when the page is loaded
get()