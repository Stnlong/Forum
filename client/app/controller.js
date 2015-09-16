appModule.controller('MainController', function ($scope, mainFactory) {
	$scope.subForumInfo = [];
	$scope.generalPosts = [];
	mainFactory.getSubForumInfo(function (data) {
		console.log("got to the controller, getting info from factory");
		$scope.subForumInfo = data;
		console.log($scope.subForumInfo);
	})
	mainFactory.getGeneralPosts(function (data) {
		console.log("got to the controller, getting info from factory");
		$scope.generalPosts = data;
		console.log($scope.generalPosts);
	})

})
appModule.controller('PostController', function ($scope, postFactory) {
	$scope.addPost = function (input) {
		postFactory.addPost(input, function (data) {
			console.log("session");
			// $scope.todaysData = data;
			// updateData();
		})
	}
})