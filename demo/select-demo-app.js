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
})
