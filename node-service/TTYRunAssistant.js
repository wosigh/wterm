var TTYRunAssistant = function() {
};

TTYRunAssistant.prototype.run = function(future, subscription) {

    var args = this.controller.args;
    
	return {result: ttys[args.id][0][1].write(args.data)}

};
