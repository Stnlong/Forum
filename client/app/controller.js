appModule.controller('mainController', function ($scope, mainFactory) {
	$scope.subForumInfo = [];
	$scope.carsToShow = [];
	$scope.compare = [];
	$scope.carPics = [];
	$scope.visibileLinks = [];
	mainFactory.getSubForumInfo(function (data) {
		console.log("got to the controller, getting info from factory");
		$scope.subForumInfo = data;
		console.log($scope.subForumInfo);
	})

})