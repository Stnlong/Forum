var mongoose = require('mongoose');

var User = mongoose.model('User');

var users = {};

users.getUsers = function(req, res) {
	User.find({}, function(err, results) {
	if(err) {
		res.send('something went wrong');
	} else {
		res.json(results);
	}
	})
}

module.exports = users;