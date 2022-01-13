angular.module("marvelModulo")
.controller("indexController", function($scope){
	$scope.titulo = "Home";
})
.controller("contatoController", function($scope){
	$scope.titulo = "Contato";
})
.controller("fotoController", function($scope){
	$scope.titulo = "Fotos";
	$scope.fotosHeroi= [
		{id:3, src: "img/hulk.jpg", nome:"Hulk"},
		{id:2, src: "img/deadpool.jpg", nome:"Dead Pool"},
		{id:1, src: "img/marvel.jpg", nome:"Homem de Ferro"}
		
	];

	$scope.detalharHeroi = function(id){
		var heroi = {id:1, src: "img/marvel.jpg", nome:"Homem de Ferro"};
		return heroi;
	};
})