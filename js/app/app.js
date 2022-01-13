angular.module("marvelModulo",['ngRoute'])
.config(function($routeProvider){
	$routeProvider.
	when("/home",{
		templateUrl:"templates/home.html",
		controller:"indexController"
	})
	.when("/foto",{
		templateUrl:"templates/foto.html",
		controller:"fotoController"
	})
	.when("/contato",{
		templateUrl:"templates/contato.html",
		controller:"contatoController"
	});

	$routeProvider.otherwise({redirectTo: "/home"})
})