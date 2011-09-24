/**
 * @author Peter Nitsch
 */

TERM.AnsiParser = function (viewer){
	
	var viewer = viewer;
	var escapeCommand = [];
	var bufferEscapeCommand = false;
	var controlCommand = [];
	var bufferControlCommand = false;
	
	this.escapeCommands = new TERM.EscapeSequencer(viewer);
	this.controlCommands = new TERM.ControlSequencer(viewer);
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
	
	this._exceptionsLib = [];
	this._exceptions = [];
	
	this.hasException = function( code ) {
		if( this._exceptions.indexOf(code) != -1 )
			return true;
		return false;
	};
	
	this.writeException = function( code, callback ) {
		if( !this.hasException(code) ){
			this._exceptionsLib[code] = callback;
			this._exceptions.push(code);
		}
	};
	
	this.readByte = function (b) {
		if(b == ESCAPE) {
			escapeCommand = [];
			escapeCommand.push(b);
			bufferEscapeCommand = true;
		} else if (b == CIRCUMFLEX_ACCENT) {
			controlCommand = [];
			controlCommand.push(b);
			bufferControlCommand = true;
		} else {
			if(bufferEscapeCommand){
				escapeCommand.push(b);
				if( this.escapeCommands.checkCommandAction(escapeCommand.length, b) ) {
					this.escapeCommands.executeCommand(escapeCommand);
					bufferEscapeCommand = false;
				}
			} else if (bufferControlCommand) {
				controlCommand.push(b);
				if( this.controlCommands.checkCommandAction(controlCommand.length, b) ) {
					this.controlCommands.executeCommand(controlCommand);
					bufferControlCommand = false;
				}
			} else if( this.hasException(b) ) {
				this._exceptionsLib[b]( b, this._bytes );
			} else if(b >= SPACE) {
				viewer.drawCharacter(b);
			} else {
				switch(b) {
					case BACKSPACE:
						viewer.moveBackward(1, true);
					break;

					case LINE_FEED:
						viewer.carriageReturn();
						viewer.moveDown(1);
						viewer.eraseEndOfLine();
					break;

					case CARRIAGE_RETURN:
						viewer.carriageReturn();
					break;

					case FORM_FEED:
						viewer.eraseScreen();
						viewer.reposition(0, 0);
					break;
				}
			}
		}
	};
	
};
