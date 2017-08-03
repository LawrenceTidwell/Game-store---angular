var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'If you buy 2 games get a 10% discount!';
  $scope.products = [
    {
      name: 'Call of Duty: Infinite Warfare',
      price: 59.99,
      pubdate: new Date('2016', '10', '04'),
      cover: 'http://www.lawrencetidwell.com/images/call of duty inifinite warfare.jpg',
      likes: 6937,
      dislikes: 173,
			url: 'http://www.lawrencetidwell.com/images/cod bg.jpg'
    },
    {
      name: 'Uncharted 4: A Thief\'s End',
      price: 59.99,
      pubdate: new Date('2016', '05', '10'),
      cover: 'http://www.lawrencetidwell.com/images/uncharted 4.jpg',
      likes: 5641, 
      dislikes: 94,
			imageUrl: 'http://www.lawrencetidwell.com/images/cod bg.jpg'
    },
    {
      name: 'For Honor',
      price: 59.99,
      pubdate: new Date('2017', '01', '14'),
      cover: 'http://www.lawrencetidwell.com/images/for honor.jpg',
      likes: 1243,
      dislikes: 101,
			url: 'http://www.lawrencetidwell.com/images/cod bg.jpg'
    },
    {
      name: 'Star Wars: Battle Front',
      price: 49.99,
      pubdate: new Date('2015', '10', '17'),
      cover: 'http://www.lawrencetidwell.com/images/star wars battle front.jpg',
      likes: 973,
      dislikes: 183,
			url: 'http://www.lawrencetidwell.com/images/cod bg.jpg'
    }
  ]
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);
