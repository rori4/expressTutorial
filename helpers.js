const Handlebars = require('handlebars');

module.exports = {
	link: function (text, url) {
		const linkUrl = Handlebars.escapeExpression(url)
		const linkText = Handlebars.escapeExpression(text)
		return new Handlebars.SafeString(`<a href="${linkUrl}">${linkText}</a>`)
	}
}