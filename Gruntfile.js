//Gruntfile.js for marknewman.me
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        //SERVER: local dev server
        //  - default setting only runs as long as a grunt task is running. It's used here in conjunction with 'grunt-contrib-watch' for development purposes.
        //  - Otherwise use your own local server, like npm's '$http-server' on windows (must be installed) or '$python -m http.server' on a Mac
        connect: {
            server: {
                options: {
                    port: 8888,
                    base: '.',
                    open: true,
                }
            }
        },

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
            options: {
                livereload: true,
            },
			css: {
				files: 'src/assets/css/main.scss',
				//tasks: ['connect','sass','postcss'],
				tasks: ['sass','postcss'],
		    }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('start',['connect','watch']); //starts a local server, opens the index.html in the default browser, reloads the index.html page after any watched file has been modified and saved.
}
