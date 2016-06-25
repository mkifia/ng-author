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