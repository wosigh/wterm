enyo.kind({
	
  	name: "wTerm.tty",
  	kind: enyo.Control,
  	
	tty: null,
	tty_id: null,
	viewer: null,
	fontmap: null,
	calls: 0,
	cmdbuffer: '',
  	
  	components: [
  		{kind: "ApplicationEvents", onUnload: "killService", onKeypress: 'keyPress'},
  		{ name: 'ttyopen', kind: 'PalmService', subscribe: true,
	      service: 'palm://us.ryanhope.wterm.tty/', method: 'open',
	      onResponse: 'ttyOpenResponse' },
	    { name: 'ttyrun', kind: 'PalmService',
	      service: 'palm://us.ryanhope.wterm.tty/', method: 'run',
	      onResponse: 'ttyRunResponse' },
        { name: 'ttykill', kind: 'PalmService',
	      service: 'palm://us.ryanhope.wterm.tty/', method: 'kill',
	      onResponse: 'ttyKillResponse' },
  		{kind: enyo.Control, allowHtml: true, name: 'tty', className: 'term', content: '<div id="terminal"><canvas id="canvas" width="640" height="480"></canvas> </div>'}
  	],
	
	rendered: function() {
		/*this.tty = new Terminal({
			x: 0,
			y: 0,
			cols: 100,
			rows: 32,
			mapANSI: true,
			termDiv: this.$.tty.getId(),
			ps: '',
			crsrBlinkMode: true,
			handler: enyo.bind(this, 'termHandler'),
			initHandler: enyo.bind(this, 'initHandler'),
			exitHandler: termExitHandler
		})
		this.tty.open()
		this.tty.focus()*/
		//this.tty = new VT100(100, 24, "term")
		//this.$.ttyopen.call()
		this.fontmap = new Image();
		this.fontmap.onload = enyo.bind(this, 'fmReady')
		this.fontmap.src = "src/jsTerm/fonts/ansilove_font_pc_80x25.png";
	},
	
	fmReady: function() {
		this.viewer = new TERM.AnsiViewer(this.fontmap);
		this.viewer.displayCleared();
    	this.viewer.reposition(0, 0);
    	this.viewer.formFeed();
    	this.$.ttyopen.call()
	},

	ttyOpenResponse: function(inSender, inResponse, inRequest) {
	    if (inResponse.returnValue === true) {
			if (inResponse.data) {
				var lines = inResponse.data.split('\n')
				this.error(lines.length)
				if (lines.length == 1)
					lines = inResponse.data.split('\r')
				this.error(lines.length)
				if (lines.length == 1)
					this.viewer.readBytes(lines)
			} else if (inResponse.tty_id) {
				this.tty_id = inResponse.tty_id
				//this.$.ttyrun.call({id: this.tty_id, data: 'stty cols 100\rstty rows 30\rtop\r'})
				//this.$.ttyrun.call({id: this.tty_id, data: 'stty rows 38 cols 140\rtop\r'})
				//this.$.ttyrun.call({id: this.tty_id, data: '/colors.sh\r'})
			}
	    } else {
			this.error(inResponse.errorCode, inResponse.errorText)
	    }
	},
	
	ttyKillResponse: function(inSender, inResponse, inRequest) {
		this.error(inResponse)
	},
	
	killService: function() {
		this.$.ttyrun.call({id: this.tty_id, data: 'exit\n'})
	},
	
	keyPress: function(inSender, inEvent) {
		var c = String.fromCharCode(inEvent.charCode)
		this.cmdbuffer = this.cmdbuffer + c
		if (inEvent.charCode == 8 && this.cmdbuffer) {
			this.viewer.readBytes(c)
		} else if (inEvent.charCode == 13) {
			/*this.viewer.moveDown(1)
			this.viewer.carriageReturn()*/
			this.viewer.cursor.moveBackward(this.cmdbuffer.length-1)
			this.$.ttyrun.call({id: this.tty_id, data: this.cmdbuffer})
			this.cmdbuffer = ''
		} else {
			this.viewer.readBytes(c)
		}
	}

})
