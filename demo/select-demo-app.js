angular.module('selectDemoApp', [
  'angular-bootstrap-select',
  'angular-bootstrap-select.extra'
])

.controller('ExtrasCtrl', function ($scope, $timeout) {
  $scope.model = 'Mustard';
})

.controller('SimpleUsageCtrl', function ($scope, $timeout) {
  $scope.model = 'Mustard';
  $scope.colors = ['Mustard', 'Ketchup', 'Relish'];

  $scope.repeater = [
    { title: 'one' },
    { title: 'two' },
    { title: 'three' }
  ];
  $scope.selectWithOptionsIsVisible = true;
})

.controller('StyleCtrl', function ($scope, $timeout) {
  $scope.color = 'success';
  $scope.icons = [
    { id: 0, icon: 'glyphicon glyphicon-search', title: 'Search' },
    { id: 1, icon: 'glyphicon glyphicon-headphones', title: 'Headphones' },
    { id: 2, icon: 'glyphicon glyphicon-ok', title: 'Ok' },
    { id: 3, icon: 'glyphicon glyphicon-user', title: 'User' }
  ];
})
