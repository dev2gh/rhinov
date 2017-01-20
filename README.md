# rhinov
frontend test

## Technos
Pour la gestion des sources, Gulp avec comme dependances :
* pour le développement Angular (v1.5.0),
Angular-ui-router (v0.3.2), et Bootstrap-sass (v3.3.7)
* pour le projet gulp-autoprefixer, gulp-concat, gulp-rename, gulp-sass, gulp-sourcemaps, et gulp-uglify


## Contraintes
* Les icones des onglets sont ceux qui ont pu être découpés à partir des visuels
* les tailles des textes et des élements dans les visuels png ne sont pas identiques donc les mesures sont basées sur les deux semblables (Profil-User--Agence et Profil-User--Facturation).


## Particularités
* la taille d'écran minimum pour le responsive peut descendre jusqu'à 155px de large (...)


## Ameliorations possibles
* les selects n'ont pas encore été stylisés (donc ils sont nativement un peu moches)
* les formulaires sont testées toutes à chaque fois alors qu'on ne submitte que le formulaire de l'onglet actuel (erreur repertoriée dans les issues de Angular et en recherche de solution correcte pour ma part sans en arriver à mettre un controller unique pour chaque formulaire [issue #169](https://github.com/json-schema-form/angular-schema-form/issues/169))
* je ne sais absolument pas comment le test s'affiche sur un mac car je n'en ai pas sous la main


## Compatibilité
* Chrome (dernière version),
* Firefox (dernière version),
* Edge 14+,
* IE 10+
