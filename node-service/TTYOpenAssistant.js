var TTYOpenAssistant = function() {
};

TTYOpenAssistant.uniqid = function() {
    var newDate = new Date;
    return newDate.getTime();
};

TTYOpenAssistant.prototype.run = function(future, subscription) {

    var args = this.controller.args;

	process.chdir('/')

	var id = TTYOpenAssistant.uniqid();
	ttys[id] = tty.open('/media/cryptofs/apps/usr/palm/applications/us.ryanhope.wterm/bin/sh', ['-l']);

    future.result = { tty_id: id };

	ttys[id][0].on('data', function(data) {
		var s = subscription.get();
		s.result = { data: data.toString() };
	});
	
};
