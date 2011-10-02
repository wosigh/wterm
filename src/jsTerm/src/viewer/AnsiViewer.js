/**
 * @author Peter Nitsch
 */

TERM.AnsiViewer = function (control){
	
	this.control = control;
	this.cursor = new TERM.Cursor();
	this.parser = new TERM.AnsiParser(this);

	this.underline = false;

	this.canvas = document.getElementById('canvas');

	var fontmap = this.control.fontmap;
	var font = new jsTerm.Font();
	var topMargin = 1;
	var botMargin = 25;
	var ctx = canvas.getContext("2d");
	var scroll = true;
	var _savedPosition = new jsTerm.Point();
	this.tabs = [];

	this.cursorHide = function() {
		this.revertArea(this.cursor.x,this.cursor.y,this.cursor.columnWidth,this.cursor.lineHeight,3/2)
		this.cursor.visible = false
	};

	this.cursorShow = function() {
		this.invertArea(this.cursor.x,this.cursor.y,this.cursor.columnWidth,this.cursor.lineHeight,2/3)
		this.cursor.visible = true
	};

	this.readBytes = function (bytes) {
		if (this.cursor.visible)
			this.cursorHide()
		this.parser.parse(bytes);
		if (this.cursor.enabled && !this.cursor.visible)
			this.cursorShow()
	};

	this.clearCanvas = function(){
		ctx.fillStyle = BLACK_NORMAL;
		ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	};

	var special = [4,177,24,25,26,27,248,241,30,31,217,191,218,192,197,7,8,196,10,1,195,180,193,194,179, 243, 242, 227, 246, 156, 249,2];
	this.testChars = function() {
		this.eraseScreen();
		this.home();
		var c = 0
		for (var i=0;i<8;i++) {
			for (var j=0;j<32;j++) {
				this.drawCharacter(c++)
				this.moveForward(1)
			}
			this.carriageReturn()
			this.moveDown(2)
		}
		this.moveDown(3)
		for (var i=0; i<special.length;i++) {
			this.drawCharacter(special[i])
			this.moveForward(1)
		}
	};

	this.colorTable = function(val) {
		switch(val) {
			case BLACK_NORMAL: return 0; break;
			case BLUE_NORMAL: return 1; break;
			case GREEN_NORMAL: return 2; break;
			case CYAN_NORMAL: return 3; break;
			case RED_NORMAL: return 4; break;
			case MAGENTA_NORMAL: return 5; break;
			case YELLOW_NORMAL: return 6; break;
			case WHITE_NORMAL: return 7; break;
			case BLACK_BOLD: return 8; break;
			case BLUE_BOLD: return 9; break;
			case GREEN_BOLD: return 10; break;
			case CYAN_BOLD: return 11; break;
			case RED_BOLD: return 12; break;
			case MAGENTA_BOLD: return 13; break;
			case YELLOW_BOLD: return 14; break;
			case WHITE_BOLD: return 15; break;
		}
		return 0;
	};

	this.drawCharacter = function(character) {
		
		this.draw(character);
		if (this.underline)
			this.drawUnderline();
		this.moveForward(1);

		if(this.control.modes['wrap'] && !this.cursor.infiniteWidth && this.cursor.x + this.cursor.columnWidth > this.cursor.maxColumnWidth * this.cursor.columnWidth) {
			this.moveDown(1);
			this.carriageReturn();
		}

	};
	
	this.invertArea = function(x,y,w,h,f) {
		var imageData = ctx.getImageData(x,y,w,h);
		for (var i = 0, n = imageData.data.length; i < n; i += 4) {
		    imageData.data[i] = Math.ceil((255 - imageData.data[i]) * f); // red
		    imageData.data[i + 1] = Math.ceil((255 - imageData.data[i + 1]) * f); // green
		    imageData.data[i + 2] = Math.ceil((255 - imageData.data[i + 2]) * f); // blue
		    // i+3 is alpha (the fourth element)
		}
		ctx.putImageData(imageData, x, y);
	},
	
	this.revertArea = function(x,y,w,h,f) {
		var imageData = ctx.getImageData(x,y,w,h);
		for (var i = 0, n = imageData.data.length; i < n; i += 4) {
		    imageData.data[i] = 255 - Math.ceil(imageData.data[i]*f); // red
		    imageData.data[i + 1] = 255 - Math.ceil(imageData.data[i + 1]*f); // green
		    imageData.data[i + 2] = 255 - Math.ceil(imageData.data[i + 2]*f); // blue
		    // i+3 is alpha (the fourth element)
		}
		ctx.putImageData(imageData, x, y);
	},
	
	this.draw = function(charCode) {
		if ((this.control.modes['charsetG0'] == 'Special' && this.control.modes['charset'] == 0) || 
			(this.control.modes['charsetG1'] == 'Special' && this.control.modes['charset'] == 1)) {
			if (charCode >= GRAVE_ACCENT && charCode <= DELETE)
				charCode = special[charCode-96]
		}
		
		ctx.fillStyle = this.cursor.backgroundColor;
		ctx.fillRect(this.cursor.x, this.cursor.y, font.width, font.height);

		ctx.drawImage(fontmap, 
			charCode*(font.width+1), this.colorTable(this.cursor.foregroundColor)*font.height, font.width, font.height,
			this.cursor.x, this.cursor.y, font.width, font.height);
	};

	this.drawUnderline = function() {
		ctx.drawImage(fontmap,
			LOW_LINE*(font.width+1), this.colorTable(this.cursor.foregroundColor)*font.height, font.width, font.height,
			this.cursor.x, this.cursor.y, font.width, font.height);
	};

	this.carriageReturn = function() {
		this.cursor.carriageReturn();
	};
	
	this.formFeed = function() {
		this.cursor.x = 0;
		this.cursor.y = 0;
	};

	this.moveBackward = function(val) {
		var movements = val;

		while( movements > 0 ) {
			this.cursor.moveBackward(1);
			movements--;
		}
	};

	this.moveDown = function(val) {
		if(this.cursor.y >= this.cursor.lineHeight*(botMargin-1) && scroll){
			this.scrollUp(1);
		} else {
			this.cursor.moveDown(val);
		}
	};

	this.moveForward = function(val) {
		this.cursor.moveForward(val);
	};

	this.moveUp = function(val) {
		this.cursor.moveUp(val);
	};

	this.reposition = function(x, y) {
		this.cursor.x = x * this.cursor.columnWidth;
		this.cursor.y = y * this.cursor.lineHeight;
	};

	this.restorePosition = function() {
		this.cursor.x = _savedPosition.x;
		this.cursor.y = _savedPosition.y;
	};

	this.savePosition = function() {
		_savedPosition.x = this.cursor.x;
		_savedPosition.y = this.cursor.y;
	};

	this.displayCleared = function() {
		ctx.fillStyle = BLACK_NORMAL;
		ctx.fillRect(0, 0, this.cursor.maxColumnWidth * this.cursor.columnWidth, this.cursor.maxLineHeight * this.cursor.lineHeight);
	};
	
	this.eraseUp = function() {
		ctx.fillStyle = BLACK_NORMAL;
		ctx.fillRect(0, this.cursor.y, this.cursor.x+this.cursor.columnWidth, this.cursor.lineHeight);
		ctx.fillRect(0, 0, this.cursor.maxColumnWidth * this.cursor.columnWidth, this.cursor.y);
	};

	this.eraseScreen = function() {
		ctx.fillStyle = this.cursor.backgroundColor;
		ctx.fillRect(0, 0, this.cursor.maxColumnWidth * this.cursor.columnWidth, this.cursor.maxLineHeight * this.cursor.lineHeight);
	};

	this.eraseDown = function() {
		ctx.fillStyle = BLACK_NORMAL;
		var w = (this.cursor.maxColumnWidth * this.cursor.columnWidth) - (this.cursor.x - this.cursor.columnWidth);
		ctx.fillRect(this.cursor.x, this.cursor.y, w, this.cursor.lineHeight);
		ctx.fillRect(0, this.cursor.y+this.cursor.lineHeight, this.cursor.maxColumnWidth * this.cursor.columnWidth, (this.cursor.maxLineHeight * this.cursor.lineHeight) - this.cursor.y);
	};

	this.eraseScrollRegion = function() {
		ctx.fillStyle = BLACK_NORMAL;
		ctx.fillRect(0, topMargin*this.cursor.lineHeight, this.cursor.maxColumnWidth * this.cursor.columnWidth, (this.cursor.maxLineHeight * this.cursor.lineHeight) - (botMargin-topMargin)*this.cursor.lineHeight);
	};

	this.eraseEndOfLine = function() {
		ctx.fillStyle = BLACK_NORMAL;
		var w = (this.cursor.maxColumnWidth * this.cursor.columnWidth) - (this.cursor.x - this.cursor.columnWidth);
		ctx.fillRect(this.cursor.x, this.cursor.y, w, this.cursor.lineHeight);
	};

	this.eraseStartOfLine = function() {
		ctx.fillStyle = BLACK_NORMAL;
		ctx.fillRect(0, this.cursor.y, this.cursor.x+this.cursor.columnWidth, this.cursor.lineHeight);
	};

	this.eraseLine = function() {
		ctx.fillStyle = BLACK_NORMAL;
		ctx.fillRect(0, this.cursor.y, this.cursor.maxColumnWidth * this.cursor.columnWidth, this.cursor.lineHeight);
	};
	
	this.backgroundColorChanged = function(color) {
		this.cursor.backgroundColor = color;
	};

	this.foregroundColorChanged = function(color) {
		this.cursor.foregroundColor = color;
	};

	this.home = function() {
		this.cursor.x = 0;
		if (this.control.modes['origin'])
			this.cursor.y = (topMargin-1) * this.cursor.maxLineHeight;
		else
			this.cursor.y = 0
	};

	this.scrollScreen = function(start, end) {
		topMargin = start;
		botMargin = end;
		this.home();
	};
			
	this.scrollUp = function(val) {
		var canvasData = ctx.getImageData(0, topMargin * this.cursor.lineHeight, this.cursor.maxColumnWidth*this.cursor.columnWidth, this.cursor.lineHeight * (botMargin-topMargin));
		this.eraseScrollRegion();
		ctx.putImageData(canvasData, 0, this.cursor.lineHeight*(topMargin-1));
	};

	this.setCursorEnabled = function(state) {
		this.cursor.enabled = state
	};
	
	this.resize= function(rows,cols) {
		this.control.resize(rows,cols)
		this.cursor.maxColumns = this.cursor.maxColumnWidth = cols
		this.scrollScreen(1,rows)
		this.displayCleared()
	};

	this.deleteLines = function(val) {
		var canvasData = null
		for (var i=0; i<val; i++) {
			canvasData = ctx.getImageData(0, this.cursor.position.y+this.cursor.lineHeight, this.cursor.maxColumnWidth*this.cursor.columnWidth, this.cursor.lineHeight * botMargin-this.cursor.position.y);
			this.eraseScrollRegion();
			ctx.putImageData(canvasData, 0, this.cursor.position.y);
		}
	};

	this.reset = function() {
		this.resize(25,127)
		this.control.modes['charsetG0'] = 'US'
		this.control.modes['charsetG1'] = 'US'
		this.control.modes['charset'] = 0
		this.parser.escapeCommands._bold = false;
		this.parser.escapeCommands._reverse = false;
		this.parser.escapeCommands._currentForegroundColor = this.parser.escapeCommands._defaultForgroundColor;
		this.parser.escapeCommands._currentBackgroundColor = this.parser.escapeCommands._defaultBackgroundColor;
		this.foregroundColorChanged(this.parser.escapeCommands._currentForegroundColor);
		this.backgroundColorChanged(this.parser.escapeCommands._currentBackgroundColor);
		this.underline = false;
		this.parser.escapeCommands.cursorSave()
		this.tabs = [];
		this.eraseScreen();
		this.home();
	};

	this.clearCanvas();

};
