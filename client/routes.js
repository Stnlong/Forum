var users = require('../controllers/users');
var mongoose = require('mongoose');

module.exports = function(app) {
	app.get('/getUsers', function(req, res) {
	console.log('Getting list of users');
	users.getUsers(req,res);
	})
}