describe('selectpicker', function() {
  beforeEach(module('angular-bootstrap-select'));

  it('should set to scope the first selectpicker element value', function() {
    return inject(function ($compile, $rootScope) {
      var scope = $rootScope.$new();
      var html = '<select selectpicker ng-model="selected" class="">' +
                    '<option>Mustard</option>' +
                    '<option>Ketchup</option>' +
                    '<option>Relish</option>' +
                  '</select>';
      var element = $compile(html)(scope);
      expect(element.val()).toEqual('Mustard');
    });
  });

  it('should set to selectpicker element value the scope value', function() {
    return inject(function ($compile, $rootScope, $timeout) {
      var scope = $rootScope.$new();
      var html = '<select selectpicker ng-model="selected" class="">' +
                    '<option>Mustard</option>' +
                    '<option>Ketchup</option>' +
                    '<option>Relish</option>' +
                  '</select>';
      var element = $compile(html)(scope);
      scope.$apply(function () {
        scope.selected = 'Ketchup';
      });
      $timeout.flush();
      expect(element.val()).toEqual('Ketchup');
    });
  });

  it('should set selectpicker select element options with ng-options', function() {
    return inject(function ($compile, $rootScope, $timeout) {
      var scope = $rootScope.$new();
      scope.colors = [{ name: 'Red' }, { name: 'Green' }, { name: 'Blue' }];
      var html = '<select selectpicker ng-model="selected" ng-options="color.name for color in colors"></select>';
      var element = $compile(html)(scope);
      scope.$apply(function () {
        scope.selected = 1;
      });
      $timeout.flush();
      expect(element.val()).toEqual('1');
    });
  });
    
});
