//enable strict mode
/**
 * if you disable strict mode by commenting line 5...
 * ...the error on line 13 will not be shown and js will fail silently.
 * Strict mode is also used to throw an error when you use a variable name...
 * ..that js has reserved for future use
 */
'use strict';

let hasDriversLicense = false;
const passed = true;

if (passed) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive 🚗');

//future use reserved key word example
const interface = 'hello world';