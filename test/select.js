describe('selectpicker', function() {
  beforeEach(module('angular-bootstrap-select'));

  it('should set to scope the first selectpicker element value', function() {
    return inject(function ($compile, $rootScope) {
      var scope = $rootScope.$new();
      var html = '<select ng-model="selected" class="selectpicker">' +
                    '<option>Mustard</option>' +
                    '<option>Ketchup</option>' +
                    '<option>Relish</option>' +
                  '</select>';
      var element = $compile(html)(scope);
      return expect(element.val()).toEqual('Mustard');
    });
  });

  it('should set to selectpicker element value the scope value', function() {
    return inject(function ($compile, $rootScope) {
      var scope = $rootScope.$new();
      var html = '<select ng-model="selected" class="selectpicker">' +
                    '<option>Mustard</option>' +
                    '<option>Ketchup</option>' +
                    '<option>Relish</option>' +
                  '</select>';
      var element = $compile(html)(scope);
      scope.$apply(function () {
        scope.selected = 'Ketchup';
      });
      return expect(element.val()).toEqual('Ketchup');
    });
  });

  /*
  @todo make it real
  it('should set selectpicker select element options with ng-options', function() {
    return inject(function ($compile, $rootScope) {
      var scope = $rootScope.$new();
      scope.colors = [{ name: 'Red' }, { name: 'Green' }, { name: 'Blue' }];
      var html = '<select ng-model="selected" class="selectpicker" ng-options="color.name for color in colors"></select>';
      var element = $compile(html)(scope);
      scope.$apply(function () {
        scope.selected = 'Green';
      });
      return expect(element.val()).toEqual('Green');
    });
  });
  */
    
});
