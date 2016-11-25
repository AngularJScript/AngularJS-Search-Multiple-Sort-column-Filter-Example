var angularApp = angular.module('chinuApp', []);
angularApp.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.search   = {};     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.chinu = [
    { name: 'Chinmay Sahu', email: 'chinmay235@gmail.com', address: 'Bhubaneswar, Odisha', age:24 },
    { name: 'Sanjib Pradhan', email: 'psanjib.tutu@gmail.com', address: 'Cuttack, Odisha', age:26 },
    { name: 'Debasish Das', email: 'das.debasis@gmail.com', address: 'Digha, West Bengal', age:28 },
    { name: 'Sradhanjali Behera', email: 'sradha@gmail.com', address: 'Bangalore, Karnataka', age:23 },
    { name: 'Pradeepta Khatoi', email: 'pradeepata408@gmail.com', address: 'Puri, Odisha', age:23 }
  ];
  
  $scope.clearFilter = function(){
      $scope.search = {};
  };
  
});

angularApp.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=10; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});