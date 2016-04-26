/*
    decentscroll
    normalize scrollbar css for chrome and ie. Sorry does firefox support css styled scrollbars
    https://github.com/jebaird/decentscroll
    @author Jesse Baird <jebaird@gmail.com>
    @license MIT

 */
console.log( 'generating decentscroll-converted.css ..');
var myth = require('myth');
var fs = require('fs');

var css = fs.readFileSync('var.css', 'utf8');
css+= fs.readFileSync('src/source.css', 'utf8');
var converted = myth(css);

fs.writeFileSync('decentscroll-converted.css', converted);

console.log( "done" );