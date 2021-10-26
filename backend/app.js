const express = require('express')
const app = express()
const port = 3000
const db = require('./database')

// create application/json parser
app.use(express.json())

// CORS
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
})

db.connect()

// endpoints
app.get('/', async (req, res) => {
	const words = await db.get()
	res.send(JSON.stringify({ words }))
})

app.post('/words', async (req, res) => {
	console.log(req.body)

	const { text } = req.body

	// splits the text into words
	const words = text.split(' ')

	// adds each word to the database
	words.forEach(async word => {
		db.add(word)
	})

	const allWords = await db.get()
	res.send(JSON.stringify({ words: allWords }))
})

// start application
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

