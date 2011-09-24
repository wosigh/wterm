/**
 * @author Ryan Hope
 */

TERM.ControlSequencer = function (viewer){
	
	var viewer = viewer;
	var telnet;
	
	var _customCommand;
	var _currentCustomCommand = {};
	
	this.actionCharacterLib = [];
	
	this.init = function() {
		this.actionCharacterLib[ LATIN_CAPITAL_LETTER_H ] = this.backspace;			
	};
	
	this.executeCommand = function(command) {
		try {
			this.actionCharacterLib[ command[command.length-1] ]( command );
		} catch(error) {
			console.log(error);
		}
	};
	
	this.checkCommandAction = function(position, character) {
		if( this.actionCharacterLib[character] != undefined )
			return true;

		return false;
	};
	
	this.backspace = function(params) {
		viewer.moveBackward(1, true);
	};

	this.init();

};