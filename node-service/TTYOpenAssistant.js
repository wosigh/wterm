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
	ttys[id] = tty.open('/bin/login', ['-f','root']);

    future.result = { tty_id: id };

	ttys[id][0].on('data', function(data) {
		for(var i=0,j=0; i < data.length;i=j) {
			if (i+1000<data.length)
				j = i + 1000
			else
				j = data.length
			subscription.get().result={data:data.toString("base64",i,j)}
		}
		subscription.get().result={doWrite:true}
		data = null
	});
	
};