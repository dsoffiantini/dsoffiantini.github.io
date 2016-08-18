angular.module("app", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'controller'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'categories.html',
      controller: 'categoryController'
    })
    .state('category', {
      url: '/categories/:categoryName',
      templateUrl: 'categoryPage.html',
      controller: 'categoryController'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about.html'
    })
    .state('image', {
      url: '/image/:imageName',
      templateUrl: 'image.html',
      controller: 'imageController'
    })
});
