const express = require('express')
let app = express()
const port = 3000


app.route('/redirectMe')
	.get((req, res) => {
		res.redirect('/redirected')
	})

app.get('/redirected', (req, res) => {
	res.send('You have been redirected')
})


app.listen(port, () => console.log(`Express is running on port ${port}`))

