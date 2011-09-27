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
		ttys[id][0].on('data', function(data) {
			//Simple and quick/dirty messagequeue for now
			var tmp=data.toString();
			while(tmp && tmp.length>0)
			{
				var str=null;
				if(tmp.length>1000)
				{
					str=tmp.substr(0,1000);
				}
				else
				{
					str=tmp.substr(0,tmp.length);
				}
				var output=new Buffer(str);
				output=output.toString("base64");
				output+=":"+output.length+",";
				subscription.get().result={data:output}
			}
			//Old non queued way
			var s = subscription.get();
			s.result = { data: data.toString() };
		});
		//var s = subscription.get();
		//s.result = { data: data.toString() };
	});
	
};
