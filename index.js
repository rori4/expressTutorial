const express = require('express')
let app = express()
const exphbs = require('express-handlebars')
const helpers = require('./helpers')
const port = 3000

const hbs = exphbs.create({
	helpers,
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

const users = [
	{ name: 'Peter', age: 24, display: true },
	{ name: 'John', age: 50 },
	{ name: 'Alexa', age: 35, display: true },
	{ name: 'George', age: 25, display: true },
	{ name: 'Rangel', age: 29 },
]

const websites = [
	{ text: 'Google', url: 'https://google.com' },
	{ text: 'Yahoo', url: 'https://yahoo.com' },
	{ text: 'Gmail', url: 'https://gmail.com'}
]

app.get('/', (req, res, next) => {
	res.render('home', { websites })
})

app.listen(port, () => console.log(`Express is running on port ${port}`))
