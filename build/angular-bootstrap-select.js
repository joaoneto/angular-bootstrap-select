// supply open and close without load bootstrap.js
angular.module('angular-bootstrap-select.extra', [])
  .directive('toggle', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        //prevent directive from attaching itself to everything that defines a toggle attribute
        if (!element.hasClass('selectpicker')) {
          return;
        }
        
        var target = element.parent();

        element.bind('click', function () {
          target.toggleClass('open')
        });

        element.next().find('li').bind('click', function () {
          target.toggleClass('open')
        })
      }
    };
  });

angular.module('angular-bootstrap-select', [])
.directive('selectpicker', ['$timeout', '$parse', function ($timeout, $parse) {
    return {
      restrict: 'A',
      require: '?ngModel',
      priority: 1001,
      compile: function (tElement, tAttrs, transclude) {
        tElement.selectpicker($parse(tAttrs.selectpicker)());
        return function (scope, element, attrs, ngModel) {
          if (angular.isUndefined(ngModel)){
            return;
          }

          scope.$watch(attrs.ngModel, function () {
            $timeout(function () {
              element.selectpicker('val', element.val());
              element.selectpicker('refresh');
            });
          });

          ngModel.$render = function () {
            $timeout(function () {
              element.selectpicker('val', ngModel.$viewValue || '');
              element.selectpicker('refresh');
            });
          };

          ngModel.$viewValue = element.val();
        };
      }
        
    };
  }]);
