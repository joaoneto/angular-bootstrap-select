angular.module('angular-bootstrap-select.extra', [])
  .directive('toggle', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        //prevent directive from attaching itself to everything that defines a toggle attribute
        if (!element.hasClass('selectPicker')) {
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
  .directive('selectpicker', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      compile: function (tElement, tAttrs, transclude) {
        tElement.selectpicker();
        return function (scope, element, attrs, ngModel) {
          if(angular.isUndefined(ngModel)){
            return;
          }
          scope.$watch(attrs.ngModel, function() {
            $timeout(function() {
              element.selectpicker('val', element.val());
            });
          });
          ngModel.$render = function() {
            element.selectpicker('val', ngModel.$viewValue || '');
          };
          ngModel.$viewValue = element.val();
        };
      }
    };
  });
