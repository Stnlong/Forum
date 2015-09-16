appModule.factory('mainFactory', function($http) {
	var subForumInfo = [
					{topics: "9542", posts: "89997", lastPoster: 'Johnny Depp', time: '1 Month Ago'},
					{topics: "6532", posts: "1253431", lastPoster: 'Serena Williams', time: '1 Week Ago'},
					{topics: "9813", posts: "198762", lastPoster: 'Marvin Gaye', time: 'Today'},
					{topics: "9513", posts: "9983", lastPoster: 'Thomas Edison', time: 'Yesterday'}
				];

	var dummyData = [
					{sticky: true, url: '/#', title: '[How to] Display an image based on forum ID in forums index page.', replies: 0, views: 544, timePosted: '10-11-2014 08:48', lastPoster: 'Support Team', originalPoster: 'Support Team'},
					{sticky: true, url: '/#', title: 'Upgrade eeBootstrap Theme', replies: 0, views: 323, timePosted: '05-11-2014 14:58', lastPoster: 'Support Team', originalPoster: 'Support Team'},
					{sticky: true, url: '/#', title: 'Install eeBootstrap Theme', replies: 0, views: 1128, timePosted: '02-11-2014 16:01', lastPoster: 'Support Team', originalPoster: 'Support Team'},
					{sticky: false, url: '/#', title: 'Drivetrain malfunction!!!!!', replies: 142, views: 39237, timePosted: '09-14-2015 12:26', lastPoster: 'Straight6Driver', originalPoster: 'NightWriter'},
					{sticky: false, url: '/#', title: '328i Highway MPG', replies: 27, views: 851, timePosted: '09-14-2015 12:26', lastPoster: 'justinnum1', originalPoster: 'DirksLV'},
					{sticky: false, url: '/#', title: 'Holy Mackerel...our entire car has been recalled!', replies: 11, views: 345, timePosted: '09-14-2015 12:13', lastPoster: 'Usser555', originalPoster: 'Beowulf65'},
					{sticky: false, url: '/#', title: 'BMW Drivers', replies: 72, views: 2246, timePosted: '09-14-2015 11:54', lastPoster: 'Blubaron79', originalPoster: 'N55Nick'},
					{sticky: false, url: '/#', title: 'Use BMW as Daily Driver?', replies: 72, views: 1906, timePosted: '09-14-2015 11:19', lastPoster: 'cmplaya', originalPoster: 'Austinm1021'},
					{sticky: false, url: '/#', title: "New Tranny '13 335 6spd", replies: 28, views: 2354, timePosted: '09-14-2015 10:17', lastPoster: 'dr335is', originalPoster: 'kyoko'},
					{sticky: false, url: '/#', title: 'F30 M-Performance Brakes color code?', replies: 1, views: 192, timePosted: '09-14-2015 10:02', lastPoster: 'jtuds', originalPoster: 'CedarZ4'},
					{sticky: false, url: '/#', title: 'Spacer suggestions', replies: 5, views: 269, timePosted: '09-14-2015 8:46', lastPoster: 'iconoclast', originalPoster: 'jtuds'},
					{sticky: false, url: '/#', title: 'Torque on 435i', replies: 9, views: 513, timePosted: '09-14-2015 8:19', lastPoster: 'raqautle', originalPoster: 'shadowyman'},
					{sticky: false, url: '/#', title: 'Dinan Shockware: The Skinny......', replies: 7, views: 577, timePosted: '09-14-2015 4:55', lastPoster: 'arenbesu', originalPoster: 'EvenKeel'},
					{sticky: false, url: '/#', title: 'I love my 335i.', replies: 95, views: 7781, timePosted: '09-14-2015 3:02', lastPoster: '///js', originalPoster: 'tony176000'},
					{sticky: false, url: '/#', title: 'Some pictures from Cobble beach Auto Show', replies: 3, views: 150, timePosted: '09-13-2015 9:42', lastPoster: 'Ali Shiralian', originalPoster: 'imyopusha'},
					{sticky: false, url: '/#', title: '2014 328i M Sport Suspension adaptive?', replies: 2, views: 188, timePosted: '09-12-2015 10:12', lastPoster: 'tturedraider', originalPoster: 'Hasek9339'},
					{sticky: false, url: '/#', title: 'Dynamic Braking Lights-', replies: 9, views: 431, timePosted: '09-12-2015 6:15', lastPoster: 'BavarianFanatic', originalPoster: 'BMWforLife'},
					{sticky: false, url: '/#', title: 'Shift Lights?', replies: 4, views: 336, timePosted: '09-12-2015 1:14', lastPoster: 'Heel328', originalPoster: 'DanHazelrigg'}
				];
	var carStyleID = [];
	var carPics = [];
	var carsToCompare = [];
	var factory = {};

	factory.getSubForumInfo = function(callback) {
			callback(subForumInfo);
			// console.log(output);
	}
	factory.getGeneralPosts = function(callback) {
		callback(dummyData);
	}

	return factory
});

appModule.factory('postFactory', function($http) {
	var factory = {};
	factory.addPost = function(data) {
		console.log(data);
	}
	return factory
})