var _CURSOR_FROM_TOP = 0;
var _CURSOR_FROM_LEFT = 1;
var _TEXT = 2;
var _CARRIAGE_RETURN = 4;
var _CURSOR_POSITION = 5;
var _CURSOR_UP = 6;
var _CURSOR_DOWN = 7;
var _CURSOR_BACKWARD = 8;
var _CURSOR_FORWARD = 9;
var _ERASE_START_OF_LINE = 10;
var _ERASE_LINE = 11;
var _ERASE_END_OF_LINE = 12;
var _ERASE_UP = 13;
var _ERASE_SCREEN = 14;
var _ERASE_DOWN = 15;
var _RESET = 16;
var _GRAPHICS_MODE_BOLD = 17;
var _GRAPHICS_MODE_BLINK = 18;
var _GRAPHICS_MODE_UNDERLINE = 19;
var _GRAPHICS_MODE_REVERSE = 20;
var _GRAPHICS_MODE_FG = 21;
var _GRAPHICS_MODE_BG = 22;
var _SHOW_CURSOR = 23;
var _HIDE_CURSOR = 24;

enyo.kind({
	
	name: "tty",
  	kind: enyo.Control,
  	
	tty: null,
	tty_id: null,
	viewer: null,
	fontmap: null,
	buffer: '',

	vkb: null,
	
	_boldColors: [BLACK_BOLD, RED_BOLD, GREEN_BOLD, YELLOW_BOLD, BLUE_BOLD, MAGENTA_BOLD, CYAN_BOLD, WHITE_BOLD],
	_normalColors: [BLACK_NORMAL, RED_NORMAL, GREEN_NORMAL, YELLOW_NORMAL, BLUE_NORMAL, MAGENTA_NORMAL, CYAN_NORMAL, WHITE_NORMAL],

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
				switch (inResponse.type) {
					case _HIDE_CURSOR:
						if (this.viewer.cursor.visible)
							this.viewer.cursorHide()
						break;
					case _SHOW_CURSOR:
						if (this.viewer.cursor.enabled && !this.viewer.cursor.visible)
							this.viewer.cursorShow()
						break;
					case _CURSOR_FROM_TOP:
						this.viewer.cursor.position.y = viewer.cursor.lineHeight*inResponse.params;
						break
					case _CURSOR_FROM_LEFT:
						this.viewer.cursor.position.x = viewer.cursor.lineHeight*inResponse.params;
						break;
					case _TEXT:
						this.viewer.writeText(inResponse.params)
						break;
					case _CARRIAGE_RETURN:
						this.viewer.carriageReturn()
						break;
					case _CURSOR_POSITION:
						this.viewer.reposition(inResponse.params[1]-1,inResponse.params[0]-1)
						break;
					case _CURSOR_UP:
						this.viewer.moveUp(inResponse.params)
						break;
					case _CURSOR_DOWN:
						this.viewer.moveDown(inResponse.params)
						break;
					case _CURSOR_BACKWARD:
						this.viewer.moveBackward(inResponse.params)
						break;
					case _CURSOR_FORWARD:
						this.viewer.moveForward(inResponse.params)
						break;
					case _ERASE_START_OF_LINE:
						this.viewer.eraseStartOfLine();
						break;
					case _ERASE_LINE:
						this.viewer.eraseLine();
						break;
					case _ERASE_END_OF_LINE:
						this.viewer.eraseEndOfLine();
						break;
					case _ERASE_UP:
						this.viewer.eraseUp();
						break;
					case _ERASE_SCREEN:
						this.viewer.eraseScreen();
						break;
					case _ERASE_DOWN:
						this.viewer.eraseDown();
						break;
					case _RESET:
						this.viewer.reset();
						break;
					case _GRAPHICS_MODE_BOLD:
						this.viewer.cursor.bold = inResponse.params
						if (this.viewer.cursor.bold) {
							for (var j=0; j<this._normalColors.length; j++) {
								if (this.viewer.cursor.foregroundColor == this._normalColors[j])
									this.viewer.cursor.foregroundColor = this._boldColors[j];
							}
						} else {
							for (var j=0; j<this._normalColors.length; j++) {
								if (this.viewer.cursor.foregroundColor == this._boldColors[j])
									this.viewer.cursor.foregroundColor = this._normalColors[j];
							}
						}
						break;
					case _GRAPHICS_MODE_REVERSE:
						this.viewer.cursor.reverse = inResponse.params
						break;
					case _GRAPHICS_MODE_UNDERLINE:
						this.viewer.cursor.underline = inResponse.params
						break;
					case _GRAPHICS_MODE_BLINK:
						break;
					case _GRAPHICS_MODE_FG:
						if (inResponse.params==-1)
							this.viewer.cursor.foregroundColor = this.viewer.cursor.defaultForegroundColor
						else
							if (this.viewer.cursor.reverse)
								this.viewer.cursor.backgroundColor = this._normalColors[inResponse.params];
							else
								this.viewer.cursor.foregroundColor = (this.viewer.cursor.bold) ? this._boldColors[inResponse.params] : this._normalColors[inResponse.params];									
						break;
					case _GRAPHICS_MODE_BG:
						if (inResponse.params==-1)
							this.viewer.cursor.backgroundColor = this.viewer.cursor.defaultBackgroundColor
						else
							if (this.viewer.cursor.reverse)
								this.viewer.cursor.foregroundColor = (this.viewer.cursor.bold) ? this._boldColors[inResponse.params] : this._normalColors[inResponse.params];
							else
								this.viewer.cursor.backgroundColor = this._normalColors[inResponse.params]; 
						break;
				}
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
