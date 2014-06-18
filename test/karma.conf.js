basePath = '..';
autoWatch = true;
singleRun = false;
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'bower_components/jquery/jquery.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'src/angular-bootstrap-select.js',
  'test/select.js',
];
browsers = ['Chrome'];
reporters = ['progress', 'dots'];
colors = true;