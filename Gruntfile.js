
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
          // hacer que todo salga dentro de una funcion
          banner: '/* Compilado: <%= grunt.template.today("yyyy-mm-dd") %> */\n' + '(function(){\n',
          footer: '\n})();'
      },
      dist: {
        src: ['src/core.js', 'src/linear_graph.js'],
        dest: 'build/grafik.js',
      },
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Default task(s).
  grunt.registerTask('default', ['concat','uglify']);

};
