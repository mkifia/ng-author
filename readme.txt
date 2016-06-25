démarche :

1) mise en place du projet

créer votre repertoire projet et installer angular et bootstrap à l'aide de bower

bower install angular bootstrap

inclure les fichiers bootstrap.min.js angular.min.js dans votre index.php

2) structure du projet

index.php
app
	images
	scripts
		app.js
		controllers
			controller.js
	styles
		author.css
	views
		authors.html
		author.html
		edit_author.html
		home.html
bower_components

3) install angular-route et configuration des routes

bower install angular-route
inclure angular-route.min.js dans index.php
