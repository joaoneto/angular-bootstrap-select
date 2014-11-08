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
    return inject(function ($compile, $rootScope) {
      var scope = $rootScope.$new();
      var html = '<select selectpicker ng-model="selected" class="">' +
                    '<option>Mustard</option>' +
                    '<option>Ketchup</option>' +
                    '<option>Relish</option>' +
                  '</select>';
      var element = $compile(html)(scope);
      scope.$digest();
      scope.$apply(function () {
        scope.selected = 'Ketchup';
      });
      expect(element.val()).toEqual('Ketchup');
    });
  });

  it('should set selectpicker selected option element, changing the model value', function() {
    return inject(function ($compile, $rootScope) {
      var scope = $rootScope.$new();
      scope.colors = [{ id: 10, name: 'Red' }, { id: 20, name: 'Green' }, { id: 30, name: 'Blue' }];
      var html = '<select selectpicker ng-model="selected" ng-options="c.name as c.name for c in colors"></select>';
      var element = $compile(html)(scope);
      scope.$apply(function () {
        scope.selected = 'Green';
      });
      expect(element.val()).toEqual('1');
    });
  });

  it('should set selectpicker selected option element, changing the model value with options tracked by name', function() {
    return inject(function ($compile, $rootScope) {
      var scope = $rootScope.$new();
      scope.colors = [{ id: 10, name: 'Red' }, { id: 20, name: 'Green' }, { id: 30, name: 'Blue' }];
      var html = '<select selectpicker ng-model="selected" ng-options="c.name as c.name for c in colors track by c.name"></select>';
      var element = $compile(html)(scope);
      scope.$apply(function () {
        scope.selected = 'Green';
      });
      expect(element.val()).toEqual('Green');
    });
  });

  it('should set model value, changing selectpicker selected element tracked by id', function() {
    return inject(function ($compile, $rootScope) {
      var scope = $rootScope.$new();
      scope.colors = [{ id: 10, name: 'Red' }, { id: 20, name: 'Green' }, { id: 30, name: 'Blue' }];
      var html = '<select selectpicker ng-model="selected" ng-options="c.name as c.name for c in colors track by c.id"></select>';
      var element = $compile(html)(scope);
      scope.$digest();
      element.selectpicker('val', '20');
      expect(scope.selected).toEqual('Green');
    });
  });

  it('should set model value, changing selectpicker selected element tracked by name', function() {
    return inject(function ($compile, $rootScope) {
      var scope = $rootScope.$new();
      scope.colors = [{ id: 10, name: 'Red' }, { id: 20, name: 'Green' }, { id: 30, name: 'Blue' }];
      var html = '<select selectpicker ng-model="selected" ng-options="c.name as c.name for c in colors track by c.name"></select>';
      var element = $compile(html)(scope);
      scope.$digest();
      element.selectpicker('val', 'Green');
      expect(scope.selected).toEqual('Green');
    });
  });
    
});
