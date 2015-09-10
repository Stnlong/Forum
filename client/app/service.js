appModule.factory('mainFactory', function($http) {
	var subForumInfo = [
					{topics: "9542", posts: "89997", lastPoster: 'Johnny Depp', time: '1 Month Ago'},
					{topics: "6532", posts: "1253431", lastPoster: 'Serena Williams', time: '1 Week Ago'},
					{topics: "9813", posts: "198762", lastPoster: 'Marvin Gaye', time: 'Today'},
					{topics: "9513", posts: "9983", lastPoster: 'Thomas Edison', time: 'Yesterday'}
				];
	var carStyleID = [];
	var carPics = [];
	var carsToCompare = [];
	var factory = {};

	factory.getSubForumInfo = function(callback) {
			callback(subForumInfo);
			// console.log(output);
	}

	factory.getPics = function(input, callback) {
		// first get all styles for all the cars in the array
		for(var i = 0; i < input.length; i++) {
			// console.log('https://api.edmunds.com/api/vehicle/v2/{input[i].make}/{input[i].model}/2014/styles?fmt=json&api_key=dkgp2amr29shtxgrt34d5r53');
			$http.get('https://api.edmunds.com/api/vehicle/v2/'+input[i].make+'/'+input[i].model+'/2015/styles?state=new&view=full&fmt=json&api_key=dkgp2amr29shtxgrt34d5r53').success(function(output) {
				carStyleID.push(output);
				// console.log(carStyleID);
				callback(carStyleID);
				console.log(output.styles[0].id);
				$http.get('https://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?styleId='+output.styles[0].id+'&fmt=json&api_key=dkgp2amr29shtxgrt34d5r53').success(function(output1) {
					carPics.push(output1);
					// console.log(carPics);
					callback(carPics);
				})
				
			})

		}
	}
	factory.getStyles = function(callback) {
		for(var i = 0; i < carStyleID.length; i++) {
			carStyleID[i] = carStyleID[i].styles;
		}
		callback(carStyleID);
	}
	factory.resolvePics = function(input, callback) {
		for(var i = 0; i < input.length; i++) {
			console.log(i);
			console.log(input[i].styles[0].id);
			$http.get('https://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?styleId='+input[i].styles[0].id+'&fmt=json&api_key=dkgp2amr29shtxgrt34d5r53').success(function(output) {
				carPics.push(output);
				console.log(carPics);
				callback(carPics);
			})
		}
	}

	return factory
});