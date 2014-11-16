angular.module('selectDemoApp', [
  'angular-bootstrap-select',
  'angular-bootstrap-select.extra'
])

.controller('ExtrasCtrl', function ($scope, $timeout) {
  $scope.model = 'Mustard';
})

.controller('SimpleUsageCtrl', function ($scope, $timeout) {
  $scope.model = '';
  $scope.colors = ['Mustard', 'Ketchup', 'Relish'];
  $scope.repeater = [
    { title: 'one' },
    { title: 'two' },
    { title: 'three' }
  ];
  $scope.selectWithOptionsIsVisible = true;
})