var TTYOpenAssistant = function() {
};

TTYOpenAssistant.uniqid = function() {
    var newDate = new Date;
    return newDate.getTime();
};

TTYOpenAssistant.prototype.run = function(future, subscription) {

    var args = this.controller.args;
 
	var id = TTYOpenAssistant.uniqid();
	ttys[id] = tty.open('/bin/login',['-f','root']);
	//tty.setWindowSize(ttys[id][0], 30, 100)

    future.result = { tty_id: id };

	ttys[id][0].on('data', function(data) {
		var i = 0;
		var s = subscription.get();
		while (i+1000<data.length) {
			s.result = { data: data.toString(start=i,end=i+1000) };
			i = i + 1000;
		}
		s.result = { data: data.toString(start=i) };
	});
	
};
