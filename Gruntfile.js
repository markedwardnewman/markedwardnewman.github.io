//Gruntfile.js for marknewman.me
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

		//CSS: A generalized task with specialized components
		postcss: {
		    options: {
			    processors: [      
			        //Standardizes the order of css rules
			        require('postcss-sorting'),
			  
			        //Assigns browser specific pre-fixes
			        require('autoprefixer')()
			    ]
		    },
		    dist: {
			    src: 'assets/css/main.css'
		    }
		},
		
		//WATCH: Performs specified tasks based upon file changes
		watch: {
			css: {
				files: 'src/assets/css/main.scss',
				//tasks: ['sass']
				tasks: ['sass','postcss']
			}
		}
    });
  
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-reload');
	grunt.registerTask('default',['watch']);
}
