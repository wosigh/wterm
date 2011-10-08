var KillAssistant = function() {
};

KillAssistant.prototype.run = function(future, subscription) {
	
	logger.error('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
	
	var args = this.controller.args;

	try {
    	logger.error([ttys[args.id][1].pid, ttys[args.id][1].kill('SIGKILL'), ttys[args.id][1].pid]);
	} catch (e) {
		logger.error(e)
	}
    
    logger.error('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');

};
