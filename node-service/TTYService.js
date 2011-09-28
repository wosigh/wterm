var tty = require('tty');
var cp = require('child_process');
var net=require('net');
var binding=process.binding("stdio");
var charlimit=2000;
var ttys = [];

function TTYService() {
}

TTYService.prototype = {
};
