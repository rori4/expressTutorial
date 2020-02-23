const express = require('express')
let app = express()
const exphbs = require('express-handlebars')
const port = 3000

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

const users = [
	{name: 'Peter', age: 24, display: true},
	{name: 'John', age: 50},
	{name: 'Alexa', age: 35, display: true},
	{name: 'George', age: 25, display: true},
	{name: 'Rangel', age: 29},
]

app.get('/', (req, res, next) => {
	res.render('home', { users: users})
})


app.listen(port, () => console.log(`Express is running on port ${port}`))
