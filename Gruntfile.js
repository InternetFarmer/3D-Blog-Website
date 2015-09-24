module.exports = function(grunt) {

    grunt.initConfig({
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/mincss/',
        ext: '.min.css'
      },
      combine: {
        files: {
          'css/3dBlog.min.css': ['css/mincss/layout.min.css','css/mincss/grid.min.css','css/mincss/portfolio.min.css',
          'css/mincss/blog.min.css','css/mincss/MatrixThumbnails.min.css','css/mincss/about.min.css',
          'css/mincss/contact.min.css','css/mincss/post.min.css','css/mincss/3DCube.min.css','css/mincss/post.min.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin:minify','cssmin:combine']);

};