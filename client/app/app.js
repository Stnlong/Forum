var appModule = angular.module('app', ['ngRoute']);

appModule.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './views/main.html'
		})
		.when('/general', {
			templateUrl: './views/general.html'
		})
		.when('/search', {
			templateUrl: './views/search.html'
		})
		.when('/newTopic', {
			templateUrl: './views/newTopic.html',
			controller: 'PostController'
		})
})