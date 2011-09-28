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
	ttys[id]=TTYOpenAssistant.opencmd("/bin/login",["-f","root"]);
	future.result = { tty_id: id, pid:ttys[id].pid };
	ttys[id][1].on('data', function(data) {
		for(var i=0,j=0; i < data.length;i=j) {
			if (i+charlimit<data.length)
				j = i + charlimit
			else
				j = data.length
			subscription.get().result={data:data.toString("base64",i,j)}
		}
		subscription.get().result={doWrite:true}
		data = null
	});
	
};
TTYOpenAssistant.opencmd=function(cmd,args,callback)
{
	var env = { TERM: 'xterm', COLUMNS:125, ROWS:25 };
	  for (var k in process.env) {
	    env[k] = process.env[k];
	  }
	var fileds=binding.openpty();
	binding.setWindowSize(fileds[0],env.ROWS,env.COLUMNS);
	var streams=[];
	streams.push(net.Stream(fileds[0]));
	streams[0].readable=streams[0].writeable=true;
	streams.push(streams[0])
	streams.push(cp.spawn(cmd,args,{env:env,setsid:true,customFds:[fileds[1],fileds[1],fileds[1]]}));
	streams[0].resume();
	if(callback)
		callback(streams);
	return streams;
	
}