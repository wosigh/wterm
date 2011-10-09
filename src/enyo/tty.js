const _CURSOR_FROM_TOP = 0;
const _CURSOR_FROM_LEFT = 1;
const _TEXT = 2;
const _CARRIAGE_RETURN = 4;
const _CURSOR_POSITION = 5;
const _CURSOR_UP = 6;
const _CURSOR_DOWN = 7;
const _CURSOR_BACKWARD = 8;
const _CURSOR_FORWARD = 9;
const _ERASE_START_OF_LINE = 10;
const _ERASE_LINE = 11;
const _ERASE_END_OF_LINE = 12;
const _ERASE_UP = 13;
const _ERASE_SCREEN = 14;
const _ERASE_DOWN = 15;
const _RESET = 16;
const _GRAPHICS_MODE_BOLD = 17;
const _GRAPHICS_MODE_BLINK = 18;
const _GRAPHICS_MODE_UNDERLINE = 19;
const _GRAPHICS_MODE_REVERSE = 20;
const _GRAPHICS_MODE_FG = 21;
const _GRAPHICS_MODE_BG = 22;
const _SHOW_CURSOR = 23;
const _HIDE_CURSOR = 24;
const _SCROLL_SCREEN = 25;
const _ERASE_CHAR = 26;
const _SCROLL_UP = 27;
const _SCROLL_DOWN = 28;
const _ENABLE_CURSOR = 29;
const _DISABLE_CURSOR = 30;
const _APP_CURSOR_KEYS = 31;
const _DEC_CALIBRATE = 32;
const _CURSOR_SAVE = 33;
const _CURSOR_RESTORE = 34;
const _BUFFER_SAVE = 35;
const _BUFFER_RESTORE = 36;
const _SET_G0 = 37;
const _SET_G1 = 38;
const _SET_CHARSET = 39;
const _NEXT_LINE = 40;
const _HTAB = 41;
const _SET_TAB_STOP = 42;
const _CLEAR_TAB_STOP = 43;
const _AUTO_WRAP = 44;
const _SET_COLS = 45;
const _SET_ORIGIN = 46;
const _CURSOR_REPORT = 47;

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
			wrap: true,
			newline: false,
			reverse: false,
			charset: 0,
			charsetG0: 'US',
			charsetG1: 'US',
			origin: 0,
			insert: false,
			appkeys: false,
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
    	this.$.ttyopen.call({rows:25, cols: 127})
	},

	ttyOpenResponse: function(inSender, inResponse, inRequest) {
		if (inResponse.returnValue === true) {
			if (inResponse.tty_id) {
				this.tty_id = inResponse.tty_id
				this.viewer.resize(25,127)
				this.viewer.clearCanvas()
			} else {
				if (inResponse.type == _TEXT) {
					this.viewer.writeText(inResponse.params)
				} else {
					this.needsWrap = false
					switch (inResponse.type) {
						case _CURSOR_REPORT:
							var col = "" + this.viewer.cursor.x / this.viewer.cursor.columnWidth + 1;
							var row = "" + this.viewer.cursor.y / this.viewer.cursor.lineHeight + 1;
							this.writeString('\033['+row+';'+col+'R')
							break;
						case _SET_ORIGIN:
							this.modes['origin'] = inResponse.params
							this.viewer.home()
							break;
						case _SET_COLS:
							this.viewer.resize(25,inResponse.params)
							break;
						case _AUTO_WRAP:
							this.modes['wrap'] = inResponse.params
						case _SET_TAB_STOP:
							this.viewer.tabs[this.viewer.cursor.position.x/this.viewer.cursor.columnWidth+1] = true
							break;
						case _CLEAR_TAB_STOP:
							var s = parseInt(inResponse.params[0],10)
							if (!s)
								delete this.viewer.tabs[this.viewer.cursor.position.x/this.viewer.cursor.columnWidth+1]
							else if (s==3)
								this.viewer.tabs = []
							break;
						case _HTAB:
							var newX = -1
							for (var k in this.viewer.tabs) {
								if (k>this.viewer.cursor.x/this.viewer.cursor.columnWidth) {
									newX = (k-1)*this.viewer.cursor.columnWidth
									break;
								}
							}
							if (newX == -1)
								newX = (this.viewer.cursor.maxColumnWidth-1)*this.viewer.cursor.columnWidth
							this.viewer.cursor.x = newX
							break;
						case _NEXT_LINE:
							this.viewer.moveDown(1)
							this.viewer.carriageReturn()
							break;
						case _ERASE_CHAR:
							this.viewer.eraseChar(inResponse.params)
							break;
						case _DEC_CALIBRATE:
							this.viewer.decCalibrate()
							break;
						case _SET_CHARSET:
							this.modes['charset'] = inResponse.params
							break;
						case _SET_G0:	
							this.modes['charsetG0'] = inResponse.params
							break;
						case _SET_G1:	
							this.modes['charsetG1'] = inResponse.params
							break;
						case _CURSOR_SAVE:
							this.viewer.cursor.save(this.modes['charsetG0'],this.modes['charsetG1'],this.modes['charset'])
							break;
						case _CURSOR_RESTORE:
							var charset = this.viewer.cursor.restore()
							this.modes['charsetG0'] = charset[0]
							this.modes['charsetG1'] = charset[1]
							this.modes['charset'] = charset[2]
							break;
						case _BUFFER_SAVE:
							this.viewer.bufferSave(inResponse.params)
							break;
						case _BUFFER_RESTORE:
							this.viewer.bufferRestore(inResponse.params)
							break;
						case _APP_CURSOR_KEYS:
							this.modes['appkeys'] = inResponse.params
							break;
						case _SCROLL_UP:
							this.viewer.scrollUp(inResponse.params) // NEEDS WORK
							break;
						case _SCROLL_DOWN:
							this.viewer.scrollDown(inResponse.params) // NEEDS WORK
							break;
						case _SCROLL_SCREEN:
							if (inResponse.params)
								this.viewer.scrollScreen(inResponse.params[0],inResponse.params[1])
							else
								this.viewer.scrollScreen(1,this.viewer.cursor.maxLineHeight)
							break;
						case _ENABLE_CURSOR:
							this.viewer.cursor.enabled = true
							break;
						case _DISABLE_CURSOR:
							if (this.viewer.cursor.visible)
								this.viewer.cursorHide()
							this.viewer.cursor.enabled = false
							break;
						case _HIDE_CURSOR:
							if (this.viewer.cursor.visible)
								this.viewer.cursorHide()
							break;
						case _SHOW_CURSOR:
							if (this.viewer.cursor.enabled && !this.viewer.cursor.visible)
								this.viewer.cursorShow()
							break;
						case _CURSOR_FROM_TOP:
							this.viewer.cursor.position.y = this.viewer.cursor.lineHeight*(inResponse.params-1);
							break
						case _CURSOR_FROM_LEFT:
							this.viewer.cursor.position.x = this.viewer.cursor.lineHeight*(inResponse.params-1);
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
							var tmp = this.viewer.cursor.foregroundColor
							this.viewer.cursor.foregroundColor = this.viewer.cursor.backgroundColor
							this.viewer.cursor.backgroundColor = tmp
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
