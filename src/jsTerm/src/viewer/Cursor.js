/**
 * @author Peter Nitsch
 */

TERM.Cursor = function (){
	
	this.defaultForegroundColor = WHITE_NORMAL;
	this.defaultBackgroundColor = BLACK_NORMAL;
	this.foregroundColor = WHITE_NORMAL;
	this.backgroundColor = BLACK_NORMAL;
	this.bold = false;
	this.blink = false;
	this.underline = false;
	this.reverse = false;
	
	this.position = new jsTerm.Point();
	this.maxColumnWidth = 127;
	this.maxLineHeight = 25;
	this.columnWidth = 8;
	this.lineHeight = 16;
	this.maxColumns = 127;
	this.infiniteWidth = false;
	this.infiniteHeight = false;
	this.visible = false;
	this.enabled = true;
	this.cursorBackup = [];
	
	this.reset = function() {
		this.underline = false;
		this.bold = false;
		this.reverse = false;
		this.blink = false;
		this.visible = false;
		this.foregroundColor = this.defaultForegroundColor
		this.backgroundColor = this.defaultBackgroundColor
	};
	
	this.save = function(g0, g1, g) {
		this.cursorBackup = [
			this.x,this.y,this.foregroundColor,this.backgroundColor,
			this.bold,this.blink,this.underline,this.reverse,g0,g1,g
		]
	};
	
	this.restore = function() {
		this.x = this.cursorBackup[0]
		this.y = this.cursorBackup[1]
		this.foregroundColor = this.cursorBackup[2]
		this.backgroundColor = this.cursorBackup[3]
		this.bold = this.cursorBackup[4]
		this.blink = this.cursorBackup[5]
		this.underline = this.cursorBackup[6]
		this.reverse = this.cursorBackup[7]
		return [this.cursorBackup[8],this.cursorBackup[9],this.cursorBackup[10]]
	};
		
	this.moveForward = function (columns) {
		this.position.x += columns*this.columnWidth
		if (this.position.x > (this.maxColumns-1) * this.columnWidth)
			this.position.x = (this.maxColumns-1) * this.columnWidth
	};	
		
	this.moveBackward = function (columns) {
        this.position.x -= columns*this.columnWidth
		if (this.position.x < 0)
			this.position.x = 0
	};

	this.moveDown = function (lines) {
		this.position.y += lines * this.lineHeight;
		if (this.position.y > (this.maxLineHeight-1) * this.lineHeight)
			this.position.y = (this.maxLineHeight-1) * this.lineHeight
	};

	this.moveUp = function (lines) {
		this.position.y -= lines * this.lineHeight;
		if (this.position.y < 0)
			this.position.y = 0
	};

	this.carriageReturn = function () {
		this.position.x = 0;
	};
	
	this.save('US','US',0);
	
};

TERM.Cursor.prototype = {
	
	get x (){
		return this.position.x;
	},
	set x (val){
		this.position.x = val;
	},
	
	get y (){
		return this.position.y;
	},
	set y (val){
		this.position.y = val;
	}
	
};
