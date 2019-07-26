var $ = require('jquery');
var template = require('./template/login.html');
require('./style/bootstrap.css');
require('./style/signin.css');
var {
    plus
} = require('./tools')

console.log(plus(222, 678));
$('body').html(template);