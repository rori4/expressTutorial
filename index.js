const express = require('express')
let app = express()
const exphbs = require('express-handlebars')
const port = 3000

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

const users = [
	{name: 'Peter', age: 24},
	{name: 'John', age: 50},
]

app.get('/', (req, res, next) => {
	res.render('home')
})


app.listen(port, () => console.log(`Express is running on port ${port}`))
