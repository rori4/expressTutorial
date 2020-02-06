const express = require('express')
let app = express()
const port = 3000

const users = [
	{name: 'Peter', age: 24},
	{name: 'John', age: 50},
]

app.get('/', (req, res, next) => {
	req.user = users.find(u => u.name === 'Peter')
	next()
}, (req, res) => {
	const user = req.user || {}
	res.send(`Welcome Home,${user.name}`)
})


app.listen(port, () => console.log(`Express is running on port ${port}`))
