var appModule = angular.module('app', ['ngRoute']);

appModule.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './views/main.html',
			access: {restricted: false}
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
		// Login and Registration
		.when('/login', {
			templateUrl: './views/login.html',
			controller: 'loginController',
			access: {restricted: false}
		})
		.when('/logout', {
			controller: 'logoutController',
			access: {restricted: true}
		})
		.when('/register', {
			templateUrl: './views/register.html',
			controller: 'registerController',
			access: {restricted: false}
		})
		.otherwise({redirectTo: '/'});
});

appModule.run(function ($rootScope, $location, $route, AuthService) {
	$rootScope.$on('$routeChangeStart', function (event, next, current) {
		if (next.access.restricted && AuthService.isLoggedIn() === false) {
			$location.path('/login');
		}
	});
});