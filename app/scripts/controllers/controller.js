app.controller('authorsCtrl', ['$scope', '$http', '$route', function($scope, $http, $route){
	$http.get('services/api.php', 
	{
		params : {method: 'getAuthors'}

	}).then(function(result) {
		$scope.authors = result.data;
	})

	$scope.delete = function(author) {

		$http.delete('services/api.php',
		{
			params : {method: 'deleteAuthor', id_auteur: author.id_auteur}
		}).then(function(result) {
			$route.reload();
		})
	}
}]);

app.controller('authorCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('services/api.php', 
	{
		params : {method: 'getAuthorById', id_auteur:$routeParams.id}

	}).then(function(result) {
		$scope.author = result.data[0];
	})
}])