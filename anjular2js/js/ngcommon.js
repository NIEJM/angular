var app = angular.module('myApp', []);
app.service('heavy',function(){
	this.myFunc = function(x){
		return x.toString(16);
	}
});
app.filter('myFormat',function(heavy){
	return function(x){
		return heavy.myFunc(x);
	}
})
// app.value('defaultInput',5);
// app.factory('mathservice',function(){
// 	var factory = {};
// 	factory.multiply = function(a,b){
// 		return a*b;
// 	}
// 	return factory;
// })
// app.service('calcservice',function(mathservice){
// 	this.squre=function(a){
// 		return mathservice.multiply(a,a);
// 	}
// })

app.config(function($provide){
	$provide.provider('mathservice',function(){
		this.$get = function(){
			var factory={};
			factory.multiply = function(a,b){
				return a*b;
			}
			return factory;
		}
	})
})

app.value('defaultInput',5);

app.service('calcservice',function(mathservice){
	this.squre = function(a){
		return mathservice.multiply(a,a);
	}
})

app.controller('myctrl',function($scope,$http,calcservice,defaultInput){
	$scope.firstname = 'John';
	$scope.lastname = 'joe';
	// $scope.url = $location.absUrl();
	// $scope.names = ['google','runoob','taobao'];
	$scope.fullname=function(){
		return $scope.firstname+" "+$scope.lastname;
	}
	$scope.sites=[
		{site:'google',url:'http://www.google.com'},
		{site:'runoob',url:'http://www.runoob.com'},
		{site:'taobao',url:'http://www.taobao.com'}
	]
	$scope.cars={
		car01:{brand:'ford',model:'mustang',color:'red'},
		car02:{brand:'fiat',model:'500',color:'white'},
		car03:{brand:'volvo',model:'XC90',color:'black'},
	}
	$http.get("../php/sites.php").then(
		function (response) {$scope.Names = response.data.records;}
		);
	 $scope.person = {
        firstname: "John",
        lastname: "Doe"
    };
	$scope.myVar = true;
	$scope.toggle = function(){
		$scope.myVar = !$scope.myVar;
	}
	$scope.master={Firstname:'john',Lastname:"doe"};
	$scope.reset=function(){
		$scope.user = angular.copy($scope.master);
	}
	$scope.reset();
	$scope.edit=true;
	$scope.error = false;
	$scope.incomplete = true;
	$scope.users=[{id:0,fName:'hege',lName:'pege'},
					{id:1,fName:'kim',lName:'pim'},
					{id:2,fName:'sal',lName:'smith'},
					{id:3,fName:'jack',lName:'jones'},
					{id:4,fName:'john',lName:'doe'},
					{id:5,fName:'peter',lName:'pan'}]
	$scope.editUser=function(str){
		console.log(str);
		if(angular.isNumber(str)){
			$scope.edit=false;
			$scope.incomplete = false;
			$scope.fName=$scope.users[str].fName;
			$scope.lName=$scope.users[str].lName;
		}else{
			$scope.incomplete = true;
			$scope.edit=true;
			$scope.fName='';
			$scope.lName='';
		}
	}
	// $scope.number = defaultInput;
	// $scope.result = calcservice.squre($scope.number);
	// $scope.squre = function(){
	// 	$scope.result = calcservice.squre($scope.number);
	// }
	$scope.number=5;

	$scope.squre = function(num){
		console.log(num);
		$scope.result = num*num;
	}

	$scope.result = $scope.number*$scope.number;
})










