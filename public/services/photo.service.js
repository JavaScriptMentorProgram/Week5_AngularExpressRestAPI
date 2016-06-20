(function () {

  'use strict';
  angular.module("App").factory("PhotoService", ['$resource', function($resource){

        return $resource('api/photos', null ,{get : {method : 'GET', isArray : true}});

  }]);

})();