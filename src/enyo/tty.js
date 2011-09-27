enyo.kind({
	
  	name: "wTerm.tty",
  	kind: enyo.Control,
  	
	tty: null,
	tty_id: null,
	viewer: null,
	fontmap: null,
	buffer:"",
	events: {
		onkeypress: ""
	},
  	
  	chrome: [
  		{kind: "ApplicationEvents", onUnload: "killService"},//, onKeypress: 'keyPress'},
  		{ name: 'ttyopen', kind: 'PalmService', subscribe: true,
	      service: 'palm://us.ryanhope.wterm.tty/', method: 'open',
	      onResponse: 'ttyOpenResponse' },
	    { name: 'ttyrun', kind: 'PalmService',
	      service: 'palm://us.ryanhope.wterm.tty/', method: 'run',
	      onResponse: 'ttyRunResponse' },
        { name: 'ttykill', kind: 'PalmService',
	      service: 'palm://us.ryanhope.wterm.tty/', method: 'kill',
	      onResponse: 'ttyKillResponse' },
  		{kind: enyo.Control, allowHtml: true, name: 'tty', className: 'keyboardInput', content: '<div id="terminal"><canvas id="canvas" width="640" height="400"></canvas> </div>'}
  	],
	
	rendered: function() {
		this.fontmap = new Image();
		this.fontmap.onload = enyo.bind(this, 'fmReady')
		this.fontmap.src = "src/jsTerm/fonts/ansilove_font_pc_80x25.png";
		//VKI_attach('terminal')
	},
	
	fmReady: function() {
		this.viewer = new TERM.AnsiViewer(this);
    	this.$.ttyopen.call()
	},

	lines: 0,
	ttyOpenResponse: function(inSender, inResponse, inRequest) {
	    if (inResponse.returnValue === true) {
			if (inResponse.data) {
				this.lines = this.lines + 1
				this.warn(this.lines,inResponse.data)
				this.buffer+=inResponse.data
				while(this.buffer&&this.buffer.length>0)
				{
					var msg=this.buffer.substr(0,this.buffer.indexOf(","));
					this.buffer=this.buffer.substr(0,this.buffer.indexOf(","));
					msg=msg.substr(0,msg.length-1);
					var obj=msg.split(":");
					//Completely ignoring the length check and just returning the base 64.  Like a Boss
					try{
						this.viewer.readBytes(enyo.string.fromBase64(obj[0]))
					}catch(e)
					{
						this.log(e,obj)
					}
				}
				//this.viewer.readBytes(inResponse.data)
			} else if (inResponse.tty_id) {
				this.tty_id = inResponse.tty_id
			}
	    } else {
			this.error(inResponse.errorCode, inResponse.errorText)
	    }
	},
	
	ttyKillResponse: function(inSender, inResponse, inRequest) {
		this.error(inResponse)
	},
	
	killService: function() {
		this.$.ttykill.call({id: this.tty_id})
	},
	
	keyPress: function(inSender, inEvent) {
		this.writeString(String.fromCharCode(inEvent.charCode))
	},

	writeString: function(str) {
		this.$.ttyrun.call({id: this.tty_id, data: str})
	}

})
