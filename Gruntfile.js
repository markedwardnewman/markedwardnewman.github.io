//Gruntfile.js for markedwardnewman.com

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    //CSS: SASS to CSS compiler
		sass: {
			dist: {
				files: {
					'assets/css/main.css' : 'src/assets/css/main.scss'
				}
			}
		},

    //FILE: combines content source files into one file
    concat: {
      css: {
        //Concatenate all of the files in the cssResources configuration property
        src: [ 'src/assets/css/vendor/jquery-ui/jquery-ui.css','src/assets/css/main.css' ],
        dest: 'assets/css/bundled.css',
        options: {
          separator: '\n\n\n\n\n\n\n\n\n\n/*concatenated from new sourcefile. see Grunfile.js*/\n'
        }
      },

      js: {
        src: ['src/assets/js/vendor/jquery/jquery.js',
              'src/assets/js/vendor/jquery-ui/jquery-ui.js',
              'src/assets/js/vendor/parallax/parallax.js',
              'src/assets/js/src.main.js'],
        dest: 'src/assets/js/bundled.js',
        options: {
          separator: '\n\n\n\n\n\n\n\n\n\n/*concatenated from new sourcefile. see Grunfile.js*/\n'
        }
      }
    },


    //CSS: A generalized task with specialized components
    postcss: {
      options: {
        processors: [
        
          //Standardizes the order of css rules
          require('postcss-sorting'),
          
          //Assigns browser specific pre-fixes
          require('autoprefixer')(),

          //Adds hexadecimal fallback colors when rgba colors are specified 
          require('postcss-color-rgba-fallback')()

          //Minify css       
          //require('cssnano')()
        ]
      },
      dist: {
        src: 'assets/css/main.css'
      }
    },


    //JS: mangles, minifies, and concatenates all js files into one file
    uglify: {
      options: {
        mangle: true, //this does alot, but mainly it replaces long variable names with single letters when possible.
        beautify: false, //turn this on and mangle off to see full source code
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n' +
                '/*! mangled, minified, and concatenated using grunt-contrib-uglify */\n\n'
      },
      my_target: {
        files: {
          //dest file:
          'assets/js/bundled.js':

          //src files:
          [  'src/assets/js/vendor/jquery/jquery.js',
             'src/assets/js/vendor/jquery-ui/jquery-ui.js',
             'src/assets/js/vendor/parallax/parallax.js',
             'src/assets/js/src.main.js']
        }
      }
    },

    
    //HTML: Reports w3c validation errors
    validation: { 
      options: {
          reset: grunt.option('reset') || true,
          reportpath: 'log/html-w3c-error-log/validation-report.json',
          path: 'log/html-w3c-error-log/validation-status.json',
          stoponerror: false,
          generateReport: true,
          //errorHTMLRootDir: 'dist/html-w3c-error-log',
          errorHTMLRootDir: 'log/html-w3c-error-log',
          useTimeStamp: true
      },
      files: {
          src: 'index.html'
      }
    },


    //WATCH: Performs specified tasks based upon file changes
		watch: {
      css: {
        files: 'src/assets/css/main.scss',
        tasks: ['sass']
        //tasks: ['sass','postcss']
      }/* ,
      html: {
        files: 'index.html',
        tasks: ['validation']
      } */
		}
	});
  
  grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-w3c-html-validation');

	grunt.registerTask('default',['watch']);
  //grunt.registerTask('all',['sass','postcss','validation']);
  grunt.registerTask('test1',['sass','concat','postcss','uglify']);
}
