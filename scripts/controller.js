angular.module("app").controller("controller", function($scope, $state, $stateParams, service) {

  $scope.categories = service.getCategories();

  $scope.images = service.getImages();

  $scope.addLike = function(image) {
    image.likes++;
  };

  $scope.image = $stateParams.imageName;

});
