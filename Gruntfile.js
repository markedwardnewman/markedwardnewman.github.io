//Gruntfile.js for ultrapolite.com

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    
    //SASS to CSS compiler
		sass: {
			dist: {
				files: {
					'assets/css/main.css' : 'src/assets/css/main.scss'
				}
			}
		},
    
    //A generalized task with specialized components
    postcss: {
      options: {
        processors: [
        
          //Standardizes the order of css rules
          //require('postcss-sorting'),
          
          //Assigns browser specific pre-fixes
          //require('autoprefixer')(),

          //Adds hexadecimal fallback colors when rgba colors are specified 
          require('postcss-color-rgba-fallback')(),
          
          //Minify css       
          //require('cssnano')()
        ]
      },
      dist: {
        src: 'assets/css/main.css'
      }
    },
    
    //Removes unused CSS
    uncss: { 
      dist: {
        files: {
          'assets/css/main.css':'index.html'
        }
      }
    },
    
    //Performs specified tasks based upon file changes
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
		},
    
    //Reports w3c validation errors
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
    }
	});
  
	grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-uncss');;  
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-w3c-html-validation');
	grunt.registerTask('default',['watch']);
  grunt.registerTask('test',['validation']);
  //grunt.registerTask('all',['sass','postcss','uncss','validation']);
  grunt.registerTask('all',['sass','postcss','validation']);
}
