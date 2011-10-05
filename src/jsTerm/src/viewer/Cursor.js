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
		
	this.moveForward = function (columns) {
		if (this.position.x + (columns*this.columnWidth) <= this.maxColumns * this.columnWidth)
			this.position.x = this.position.x + (columns*this.columnWidth);
		else
			this.position.x = (this.maxColumns * this.columnWidth) - this.columnWidth;
	};	
		
	this.moveBackward = function (columns) {
        var newpos = this.position.x - (columns*this.columnWidth);
        this.position.x = newpos >= 0 ? newpos : 0;
	};

	this.moveDown = function (lines) {
		this.position.y += lines * this.lineHeight;
	};

	this.moveUp = function (lines) {
        var newpos = this.position.y - (lines * this.lineHeight);
        this.position.y = newpos >= 0 ? newpos : 0;
	};

	this.carriageReturn = function () {
		this.position.x = 0;
	};
	
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
