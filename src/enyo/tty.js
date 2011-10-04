enyo.kind({
	
	name: "tty",
  	kind: enyo.Control,
  	
	tty: null,
	tty_id: null,
	viewer: null,
	fontmap: null,
	buffer: '',

	vkb: null,

	published: {
		modes: {
			wrap: false,
			newline: false,
			reverse: false,
			charset: 0,
			charsetG0: 'US',
			charsetG1: 'US',
			origin: 0,
			insert: false,
		}
	},
	
	prefs: null,

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
        { name: 'ttyresize', kind: 'PalmService',
	      service: 'palm://us.ryanhope.wterm.tty.service/', method: 'resize',
	      onResponse: 'ttyResizeResponse' },
		{kind: enyo.Control, allowHtml: true, name: 'tty', className: 'keyboardInput', content: '<canvas id="canvas" width="1016" height="400"></canvas>'}
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
			if (inResponse.tty_id) {
				this.tty_id = inResponse.tty_id
			} else {
				enyo.log(inResponse)
				if (this.viewer.cursor.visible)
					this.viewer.cursorHide()
				switch (inResponse.type) {
					case 'text':
						this.viewer.writeText(inResponse.params)
						break;
					case 'carriageReturn':
						this.viewer.carriageReturn()
						break;
					case 'cursorUp':
						this.viewer.moveUp(inResponse.params)
						break;
					case 'cursorDown':
						this.viewer.moveDown(inResponse.params)
						break;
					case 'cursorBackward':
						this.viewer.moveBackward(inResponse.params)
						break;
					case 'cursorForward':
						this.viewer.moveForward(inResponse.params)
						break;
					case 'eraseStartOfLine':
						this.viewer.eraseStartOfLine();
						break;
					case 'eraseLine':
						this.viewer.eraseLine();
						break;
					case 'eraseEndOfLine':
						this.viewer.eraseEndOfLine();
						break;
					case 'eraseUp':
						this.viewer.eraseUp();
						break;
					case 'eraseScreen':
						this.viewer.eraseScreen();
						break;
					case 'eraseDown':
						this.viewer.eraseDown();
						break;
					case 'reset':
						this.viewer.reset();
						break;
				}
				if (this.viewer.cursor.enabled && !this.viewer.cursor.visible)
					this.viewer.cursorShow()
			}
		} else {
			this.error(inResponse.errorCode, inResponse.errorText)
		}
	},
	
	ttyKillResponse: function(inSender, inResponse, inRequest) {
		//this.error(inResponse)
	},
	
	ttyResizeResponse: function(inSender, inResponse, inRequest) {
		//this.error(inResponse)
	},
	
	killService: function() {
		this.$.ttykill.call({id: this.tty_id})
	},
	
	keyPress: function(inSender, inEvent) {
		this.writeString(String.fromCharCode(inEvent.charCode))
	},

	writeString: function(str) {
		enyo.log({id: this.tty_id, data: str})
		this.$.ttyrun.call({id: this.tty_id, data: str})
	},
	
	resize: function(rows, cols) {
		this.$.tty.applyStyle('width',cols*8)
		this.$.tty.applyStyle('height',rows*16)
		this.viewer.canvas.width = cols*8
		this.viewer.canvas.height = rows*16
		this.$.ttyresize.call({id: this.tty_id, rows: rows, cols: cols})
	}

})
