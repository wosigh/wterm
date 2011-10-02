/**
 * @author Ryan Hope
 */

TERM.AnsiParser = function (viewer){
	
	var viewer = viewer;
	var escapeCommand = [];
	var bufferEscapeCommand = 0;
	
	this.escapeCommands = new TERM.EscapeSequencer(viewer);
	this._bytes;
	
	this.parse = function (bytes) {
		
		if( bytes != null ) this._bytes = new jsTerm.ByteArray(bytes);
		
		while (this._bytes.bytesAvailable() > 0) {
			var result = this._bytes.readUnsignedByte();

			if( result == SUBSTITUTE) {			
				break;
			} else {
				this.readByte( result );
			}
		}

		this._bytes.position = 0;
	};
	
	this.readByte = function (b) {
		if(b == ESCAPE) {
			escapeCommand = [];
			escapeCommand.push(b);
			bufferEscapeCommand = 1;
		} else {
			if(bufferEscapeCommand == 1) {
				escapeCommand.push(b);
				if (b == LEFT_SQUARE_BRACKET)
					bufferEscapeCommand = 3;
				else {
					bufferEscapeCommand = 2;
					if (b>=DIGIT_ZERO && b<=TILDE) {
						this.escapeCommands.executeESC(
							null,
							String.fromCharCode(escapeCommand[1])
						);
						bufferEscapeCommand = 0;
					}
				}
			} else if(bufferEscapeCommand == 2) {
				escapeCommand.push(b);
				if (b>=DIGIT_ZERO && b<=TILDE) {
					if (escapeCommand.length==3) {
						this.escapeCommands.executeESC(
							String.fromCharCode(escapeCommand[1]),
							String.fromCharCode(escapeCommand[2])
						);
					}
					bufferEscapeCommand = 0;
				}
			} else if(bufferEscapeCommand == 3) {
				escapeCommand.push(b);
				if (b>=COMMERCIAL_AT && b<=TILDE) {
					this.escapeCommands.executeCSI(
						String.fromCharCode(escapeCommand[escapeCommand.length-1]),
						String.fromCharCode.apply(null, escapeCommand.slice(2,escapeCommand.length-1))
					);
					bufferEscapeCommand = 0;
				}
			} else if(b >= SPACE) {
				viewer.drawCharacter(b);
			} else {
				switch(b) {
					case BACKSPACE:
						viewer.moveBackward(1);
						break;

					case VERTICAL_TABULATION:
					case FORM_FEED:
					case LINE_FEED:
						viewer.moveDown(1);
						if (viewer.control.modes['newline'])
							viewer.carriageReturn();
						break;

					case CARRIAGE_RETURN:
						viewer.carriageReturn();
						break;

					case SHIFT_OUT:
						viewer.control.modes['charset'] = 1
						break;

					case SHIFT_IN:
						viewer.control.modes['charset'] = 0
						break;

					case HORIZONTAL_TABULATION:
						var newX = -1
						for (var k in viewer.tabs) {
							if (k>viewer.cursor.x/viewer.cursor.columnWidth) {
								newX = (k-1)*viewer.cursor.columnWidth
								break;
							}
						}
						if (newX == -1)
							newX = (viewer.cursor.maxColumnWidth-1)*viewer.cursor.columnWidth
						viewer.cursor.x = newX
						break;

					default:
						enyo.warn('CTRL',b);
				}
			}
		}
	};
	
};
