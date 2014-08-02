// supply open and close without load bootstrap.js
angular.module('angular-bootstrap-select.extra', [])
  .directive('toggle', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        // prevent directive from attaching itself to everything that defines a toggle attribute
        if (!element.hasClass('selectpicker')) {
          return;
        }
        
        var target = element.parent();
        var toggleFn = function (e) {
          target.toggleClass('open');
          e.stopPropagation();
        };

        element.bind('click', toggleFn);
        element.next().find('li').bind('click', toggleFn);

        scope.$on('$destroy', function () {
          console.log('lalal');
          element.unbind('click', toggleFn);
        });
      }
    };
  });

angular.module('angular-bootstrap-select', [])
.directive('selectpicker', ['$timeout', '$parse', function ($timeout, $parse) {
    return {
      restrict: 'A',
      require: '?ngModel',
      priority: 10,
      compile: function (tElement, tAttrs, transclude) {
        tElement.selectpicker($parse(tAttrs.selectpicker)());
        // tElement.selectpicker('refresh');
        return function (scope, element, attrs, ngModel) {
          if (!ngModel) return;

          scope.$watch(attrs.ngModel, function (newVal, oldVal) {
            scope.$evalAsync(function () {
              if (newVal !== oldVal) {
                console.log('watch --->', newVal, oldVal)
                if (!attrs.ngOptions) element.val(newVal);
                element.selectpicker('refresh');
              }
            });
          });

          ngModel.$render = function () {
            scope.$evalAsync(function () {
              console.log('render --->', element.val());
              element.selectpicker('refresh');
            });
          }

          // element.selectpicker('refresh');
        };
      }
        
    };
  }]);
