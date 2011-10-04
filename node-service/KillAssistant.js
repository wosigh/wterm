var KillAssistant = function() {
};

KillAssistant.prototype.run = function(future, subscription) {
	
	var args = this.controller.args;
	//ttys[args.id][1].kill(signal='SIGKILL')
	return true;

};
