var app = angular.module('routingDemoapp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{template:'这是首页页面'})
	.when('/computers',{template:'这是电脑页面'})
	.when('/printers',{template:'这是打印机页面'})
	.otherwise({redirectTo:'/'});
}])

// var app = angular.module('routingDemoapp',['ngRoute']);
app.controller('Homecontroller',function($scope,$route){
	$scope.$route = $route;
})
.controller('Aboutcontroller',function($scope,$route){
	$scope.$route = $route;
})
.config(function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl:'embedded.home.html',
		controller:'Homecontroller'
	}).
	when('/about',{
		templateUrl:'embedded.about.html',
		controller:'Aboutcontroller'
	}).
	otherwise({
		redirectTo:'/home'
	})
})
app.controller('showtext',function($scope){
	$scope.message = '';
	$scope.save=function(){
		alert('note saved')
	}
	$scope.clear = function(){
		$scope.message = "";
	}
	$scope.left = function(){
		return 100 - $scope.message.length;
	}
})





