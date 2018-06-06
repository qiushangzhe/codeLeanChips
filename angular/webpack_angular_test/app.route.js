angular.module('myApp').config(function($routeProvider){
  $routeProvider.when('/mainPage', {
		templateUrl: 'view/mainPage.html',
    controller: 'mainPageCtrl'
	});
  $routeProvider.otherwise({
		redirectTo: '/'
	});
});
