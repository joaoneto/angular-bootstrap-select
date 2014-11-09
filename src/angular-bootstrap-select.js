// supply open and close without load bootstrap.js
angular.module('angular-bootstrap-select.extra', [])
  .directive('dropdownToggle', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var hideFn = function (e) {
          angular.element('.bootstrap-select').removeClass('open');
        };

        var toggleFn = function (e) {
          hideFn();
          e.stopPropagation();
          angular.element(this).toggleClass('open');
        };

        var doc = angular.element(document);

        doc.on('click.bootstrapSelect', '.bootstrap-select', toggleFn);
        doc.on('click.bootstrapSelect', hideFn);

        scope.$on('$destroy', function () {
          doc.off('.bootstrapSelect');
        });
      }
    };
  });

angular.module('angular-bootstrap-select', [])
  .directive('selectpicker', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.selectpicker($parse(attrs.selectpicker)());
        element.selectpicker('refresh');

        scope.$watch(attrs.ngModel, function (newVal, oldVal) {
          scope.$parent[attrs.ngModel] = newVal;
          scope.$evalAsync(function () {
            if (!attrs.ngOptions || /track by/.test(attrs.ngOptions)) element.val(newVal);
            element.selectpicker('refresh');
          });
        });

        scope.$on('$destroy', function () {
          scope.$evalAsync(function () {
            element.selectpicker('destroy');
          });
        });
      }
    };
  }]);




