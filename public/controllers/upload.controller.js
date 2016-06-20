(function(){
  'use strict';

  angular
  .module('App')
  .controller('UploadController', UploadController);

  UploadController.$inject = ['$scope', "photoResolve", "$http", '$window'];

  function UploadController($scope, photoResolve, $http, $window) {

    $scope.photo = photoResolve;
    $scope.pho = undefined;

    $scope.upload = function(){
      var files = document.getElementById("file").files;
      var file = files[0];
      if(file && (file.type == 'image/jpg' || "image/jpeg" || "image/png") && file.size <= 2097152){
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            var img = this.result;
            var name = file.name;
            $http({
              method: 'POST',
              url: 'http://localhost:8080/api/photos',
              data: { url : img, name : name }
            }).then(function successCallback(response) {

              $window.location.reload();
              console.log("image upload succeeded");

            }, function errorCallback(response) {

              console.log("image upload failed");

            });
        }
      }
    }
    $scope.display = function(){

      document.getElementById("img").src = $scope.pho.url;
    }
  }
})()