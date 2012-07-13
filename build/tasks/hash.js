// Generated by CoffeeScript 1.3.3

/*global module, require
*/


(function() {

  module.exports = function(grunt) {
    var crypto;
    crypto = require('crypto');
    return grunt.registerMultiTask('hash', 'Hash a file', function() {
      var dest, hash, source, src;
      src = this.file.src;
      dest = this.file.dest;
      source = grunt.file.read(src);
      hash = crypto.createHash('sha1').update(source).digest('hex');
      return grunt.file.write(dest, hash);
    });
  };

}).call(this);
