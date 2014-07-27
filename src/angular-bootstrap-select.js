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
      compile: function() {
                    return {
                        post: function postLink(scope, iElement, iAttrs, ngModel) {
                            iElement.selectpicker($parse(iAttrs.selectpicker));

                            if (angular.isUndefined(ngModel)) {
                                return;
                            }

                            scope.$watch(iAttrs.ngModel, function() {
                                $timeout(function() {
                                    iElement.selectpicker('val', iElement.val());
                                    iElement.selectpicker('refresh');
                                });
                            });

                            ngModel.$viewValue = iElement.val();
                        }
                    }
                }
        
    };
  }]);
