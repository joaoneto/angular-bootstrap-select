module.exports = function (grunt) {
  var env = process.env.CI ? 'continuous' : 'unit';

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    readme: 'README.md',
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      options: {
        configFile: 'test/karma.conf.js'
      },
      unit: {
      },
      continuous: {
        autoWatch: false,
        singleRun: true
      }
    },
    uglify: {
      build: {
        files: {
          'build/<%= pkg.name %>.min.js': ['src/<%= pkg.name %>.js']
        }
      }
    },
    copy: {
      build: {
        files: [
          { expand: true, flatten: true, src: ['src/**'], dest: 'build/', filter: 'isFile' }
        ]
      },
      demo: {
        options: {
          processContent: (function (content) {
            return grunt.template.process(content);
          })
        },
        files: [
          { src: ['demo/**'], dest: '.tmp/' }
        ]
      }
    },
    clean: {
      build: {
        src: ['build']
      }
    },
  });

  grunt.registerTask('test', ['karma:' + env]);
  grunt.registerTask('build', ['clean:build', 'uglify', 'copy:build']);
  grunt.registerTask('default', ['test']);
};
