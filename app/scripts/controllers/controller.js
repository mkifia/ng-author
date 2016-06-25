app.controller('authorsCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('services/api.php', 
	{
		params : {method: 'getAuthors'}

	}).then(function(result) {
		$scope.authors = result.data;
	})
}])