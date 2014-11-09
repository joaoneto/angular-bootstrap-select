basePath = '..';
autoWatch = true;
singleRun = false;
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'bower_components/jquery/dist/jquery.js',
  'bower_components/angular/angular.js',
  'bower_components/bootstrap-select/dist/js/bootstrap-select.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'src/angular-bootstrap-select.js',
  'test/select.js',
];
browsers = ['Chrome'];
reporters = ['progress', 'dots'];
colors = true;