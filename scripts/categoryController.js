angular.module("app").controller("categoryController", function($scope, $stateParams, service) {


    $scope.categories = service.getCategories();

    $scope.images = service.getImages();

    $scope.category = $stateParams.categoryName;

    $scope.categoryObject = $stateParams;

    $scope.myCategory = [];

    $scope.categoryGrab = function getCategory() {

        for (var i = 0; i < $scope.images.length; i++) {
            if ($scope.images[i].category === $scope.category) {
                $scope.myCategory.push($scope.images[i]);
            }
        }
        return $scope.myCategory
    }

    $scope.categoryGrab();

});
