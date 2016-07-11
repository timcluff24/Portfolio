var app = angular.module('portfolio', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/index.html'
		})
		.when('/mainPage' , {
			templateUrl: '/mainPage.hmtl'
		})
});