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
      restrict: 'CA',
      require: '?ngModel',
      compile: function (tElement, tAttrs, transclude) {
        tElement.selectpicker();
        return function (scope, element, attrs, ngModel) {
          ngModel.$render = function() {
            element.val(ngModel.$viewValue || '').selectpicker('render');
          };
          ngModel.$viewValue = element.val();
        };
      }
    };
  });
