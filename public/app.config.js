angular.module('App', ['ngRoute', 'ngResource']);

angular.
  module('App').
  config(['$routeProvider',
    function config($routeProvider) {

      $routeProvider.
        when('/', {
          templateUrl: './public/views/upload.html',
          controller: "UploadController",
          resolve: {
              photoResolve : function(PhotoService){

                return PhotoService.get().$promise;

              }
          }
        })
        .otherwise({redirectTo : "/"});
    }
  ]);