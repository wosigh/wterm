enyo.kind({
	
  	name: "wTerm.tty",
  	kind: enyo.Control,
  	
	tty: null,
	tty_id: null,
	viewer: null,
	fontmap: null,
	buffer: '',
	
	events: {
		onkeypress: ""
	},
  	
  	chrome: [
  		{kind: "ApplicationEvents", onUnload: "killService"},//, onKeypress: 'keyPress'},
  		{ name: 'ttyopen', kind: 'PalmService', subscribe: true,
	      service: 'palm://us.ryanhope.wterm.tty.service/', method: 'open',
	      onResponse: 'ttyOpenResponse' },
	    { name: 'ttyrun', kind: 'PalmService',
	      service: 'palm://us.ryanhope.wterm.tty.service/', method: 'run',
	      onResponse: 'ttyRunResponse' },
        { name: 'ttykill', kind: 'PalmService',
	      service: 'palm://us.ryanhope.wterm.tty.service/', method: 'kill',
	      onResponse: 'ttyKillResponse' },
  		{kind: enyo.Control, allowHtml: true, name: 'tty', className: 'keyboardInput', content: '<div id="terminal"><canvas id="canvas" width="640" height="400"></canvas> </div>'}
  	],
	
	rendered: function() {
		this.fontmap = new Image();
		this.fontmap.onload = enyo.bind(this, 'fmReady')
		this.fontmap.src = "src/jsTerm/fonts/ansilove_font_pc_80x25.png";
	},
	
	fmReady: function() {
		this.viewer = new TERM.AnsiViewer(this);
    	this.$.ttyopen.call()
	},

	ttyOpenResponse: function(inSender, inResponse, inRequest) {
	    if (inResponse.returnValue === true) {
			if (inResponse.doWrite) {
				this.viewer.readBytes(this.buffer)
				this.buffer = ''
			} else if (inResponse.data) {
				this.buffer += enyo.string.fromBase64(inResponse.data)
			} else if (inResponse.tty_id) {
				this.tty_id = inResponse.tty_id
			}
			inResponse.data = null
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
