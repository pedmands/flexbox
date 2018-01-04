module.exports = function(grunt) {
  grunt.initConfig({

    concat : {
			options: {
				separator: '\n\n//-----------------------------------\n',
				banner: '\n\n//------------------[ SCRIPT ]-----------------\n'
			}, //options
			dist : {
				src: ['components/scripts/*.js'],
				dest: 'js/script.js'
			} //dist
    }, // :concat:

    sass : {
      dist : {
        options : {
          style: 'expanded'
        },
        files: [{
          src: 'components/sass/style.scss',
          dest: 'css/style.css'
        }]
      }
    },// sass

    connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					base: '/',
					livereload: true
				} // server options
			} // connect server
    }, // connect

    watch: {
			options: {
				spawn: false,
				livereload: true
			}, // watch options
			scripts: {
				files: ['*/*.html',
							'*/*.js',
							'*/*.scss'],
				tasks: ['concat', 'sass']
			} // watch scripts
    } // watch

  }); // init
}; // wrap
