angular.module('selectDemoApp', ['marked', 'angular-bootstrap-select', 'angular-bootstrap-select.extra']);

function SelectCtrl($scope, $timeout) {
  $scope.formData = {};
  $scope.formData.color = { name: 'Green' };
  
  $scope.colors = [{ name: 'Red' }, { name: 'Green' }, { name: 'Blue' }];
  
  $scope.submit = function () {
    $scope.form1.$setPristine();
    console.log($scope.form1);
  }
}


angular.module('marked', []).directive('marked', function () {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      marked.setOptions({
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
      });

      marked(element.text(), function (err, content) {
        if (err) throw err;
        element.html(content);
      });
    }
  };
});

