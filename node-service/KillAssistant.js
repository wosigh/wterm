var KillAssistant = function() {
};

KillAssistant.prototype.run = function(future, subscription) {
	
	var args = this.controller.args;	
	ttys[args.id][0][2].kill(signal='SIGKILL')
	return true;

};
