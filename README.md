# decentscroll

Author: Jesse Baird <jebaird@gmail.com>

Styled scrollbars using only css. Uses myth.io as a postprocessor to generate a stylesheet that "normalizes" supported scrollbar styles across chrome and IE. Sadly Firefox doesn't support styling the native scrollbar via css.


## Getting Started

Run the following 

* `nmp install`
* `node index.js`

Now include the generated stylesheet in your project:

	<link rel="stylesheet" type="text/css" href="decentscroll-converted.css">  
 
Or check out `test.html`


Note: Unless your browser supports css custom properties every time you make a change to `var.css` you will have to rerun `index.js`

<iframe src="http://caniuse.com/css-variables/embed" width="100%" height="360px" seamless frameboarder="0"></iframe> 



