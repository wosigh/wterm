var ResizeAssistant = function() {
};

ResizeAssistant.prototype.run = function(future, subscription) {

    var args = this.controller.args;
    
	return {
		result: binding.setWindowSize(ttys[args.id][0].fd, args.rows, args.cols),
		size: binding.getWindowSize(ttys[args.id][0].fd),
	}

};
