'use strict';

/**
 * @ngdoc module
 * @name angular-bootstrap-select.extra
 * @description
 * Angular bootstrap-select extra.
 */

angular.module('angular-bootstrap-select.extra', [])
  .directive('dropdownToggle', [dropdownToggleDirective]);

/**
 * @ngdoc directive
 * @name dropdownToggle
 * @restrict ACE
 *
 * @description
 * This extra directive provide dropdown toggle specifically to bootstrap-select without loading bootstrap.js.
 *
 * @usage
 * ```html
 * <div class="dropdown-toggle">
 *   <select class="selectpicker">
 *      <option value="">Select one</option>
 *      <option>Mustard</option>
 *      <option>Ketchup</option>
 *      <option>Relish</option>
 *   </select>
 * </div>
 *
 * <div dropdown-toggle>
 *   <select class="selectpicker">
 *      <option value="">Select one</option>
 *      <option>Mustard</option>
 *      <option>Ketchup</option>
 *      <option>Relish</option>
 *   </select>
 * </div>
 *
 * <dropdown-toggle>
 *   <select class="selectpicker">
 *      <option value="">Select one</option>
 *      <option>Mustard</option>
 *      <option>Ketchup</option>
 *      <option>Relish</option>
 *   </select>
 * </dropdown-toggle>
 * ```
 */

function dropdownToggleDirective() {
  return {
    restrict: 'ACE',
    link: function (scope, element, attrs) {
      var hideFn = function (e) {
        angular.element('.bootstrap-select', element).removeClass('open');
      };

      var toggleFn = function (e) {
        hideFn();
        e.stopPropagation();
        angular.element(this).toggleClass('open');
      };

      var doc = angular.element(document);

      element.on('click.bootstrapSelect', '.bootstrap-select', toggleFn);
      doc.on('click.bootstrapSelect', hideFn);

      scope.$on('$destroy', function () {
        element.off();
        doc.off('.bootstrapSelect');
      });
    }
  };
}

/**
 * @ngdoc module
 * @name angular-bootstrap-select
 * @description
 * Angular bootstrap-select.
 */

angular.module('angular-bootstrap-select', [])
  .directive('selectpicker', ['$parse', selectpickerDirective]);

/**
 * @ngdoc directive
 * @name selectpicker
 * @restrict A
 *
 * @param {object} selectpicker Directive attribute to configure bootstrap-select, full configurable params can be found in [bootstrap-select docs](http://silviomoreto.github.io/bootstrap-select/).
 * @param {string} ngModel Assignable angular expression to data-bind to.
 *
 * @description
 * The selectpicker directive is used to wrap bootstrap-select.
 *
 * @usage
 * ```html
 * <select selectpicker ng-model="model">
 *   <option value="">Select one</option>
 *   <option>Mustard</option>
 *   <option>Ketchup</option>
 *   <option>Relish</option>
 * </select>
 *
 * <select selectpicker="{dropupAuto:false}" ng-model="model">
 *   <option value="">Select one</option>
 *   <option>Mustard</option>
 *   <option>Ketchup</option>
 *   <option>Relish</option>
 * </select>
 * ```
 */

function selectpickerDirective($parse) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      if (element.hasClass('selectpicker')) return;

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
}


