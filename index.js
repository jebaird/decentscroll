console.log( 'generating..');
var myth = require('myth');
var fs = require('fs');

var css = fs.readFileSync('var.css', 'utf8');
css+= fs.readFileSync('src/source.css', 'utf8');
var converted = myth(css);

fs.writeFileSync('converted.css', converted);

console.log( "done" );