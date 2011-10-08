/**
 * @author Peter Nitsch
 */

TERM.Session = function (fontMapURL){
	
	var viewer;
	var commands;

    const KEYBOARD_LEFT = 37;
    const KEYBOARD_RIGHT = 39;
    const KEYBOARD_UP = 38;
    const KEYBOARD_DOWN = 40;
    const KEYBOARD_PAGE_UP = 33;
    const KEYBOARD_PAGE_DOWN = 34;
    const KEYBOARD_HOME = 36;

	function initKeyboard() {
		document.addEventListener("keydown", function(e) {
			var key = e.keyCode;		
			
			switch (key) {
				case KEYBOARD_LEFT :
					TERM.socket.writeByte(ESCAPE);
					TERM.socket.writeByte(LEFT_SQUARE_BRACKET);
					TERM.socket.writeByte(LATIN_CAPITAL_LETTER_D);
				break;

				case KEYBOARD_RIGHT :
					TERM.socket.writeByte(ESCAPE);
					TERM.socket.writeByte(LEFT_SQUARE_BRACKET);
					TERM.socket.writeByte(LATIN_CAPITAL_LETTER_C);
				break;

				case KEYBOARD_UP :
					TERM.socket.writeByte(ESCAPE);
					TERM.socket.writeByte(LEFT_SQUARE_BRACKET);
					TERM.socket.writeByte(LATIN_CAPITAL_LETTER_A);
				break;

				case KEYBOARD_DOWN :
					TERM.socket.writeByte(ESCAPE);
					TERM.socket.writeByte(LEFT_SQUARE_BRACKET);
					TERM.socket.writeByte(LATIN_CAPITAL_LETTER_B);
				break;

				case KEYBOARD_PAGE_UP :
					TERM.socket.writeByte(ESCAPE);
					TERM.socket.writeByte(LEFT_SQUARE_BRACKET);
					TERM.socket.writeByte(LATIN_CAPITAL_LETTER_M);
				break;

				case KEYBOARD_PAGE_DOWN :
					TERM.socket.writeByte(ESCAPE);
					TERM.socket.writeByte(LEFT_SQUARE_BRACKET);
					TERM.socket.writeByte(LATIN_CAPITAL_LETTER_H);
					TERM.socket.writeByte(SEMICOLON);
					TERM.socket.writeByte(ESCAPE);
					TERM.socket.writeByte(LEFT_SQUARE_BRACKET);
					TERM.socket.writeByte(DIGIT_TWO);
					TERM.socket.writeByte(LATIN_CAPITAL_LETTER_J);
				break;

				case KEYBOARD_HOME :
					TERM.socket.writeByte(ESCAPE);
					TERM.socket.writeByte(LEFT_SQUARE_BRACKET);
					TERM.socket.writeByte(LATIN_CAPITAL_LETTER_H);
				break;

				default:
					TERM.socket.writeByte( key );
				break;
			}
			
		}, false);
	};
	
	var fontmap = new Image();
	fontmap.onload = function (){
		viewer = new TERM.AnsiViewer(this);
		commands = new TERM.Telnet(viewer);

		initKeyboard();
	};
	fontmap.src = fontMapURL;
	
	this.connect = function(host, port) {
        viewer.displayCleared();
        viewer.reposition(0, 0);

        TERM.socket.connect(host, port, function (e) {
            viewer.readBytes(e.data.toString());
        });
	};
}
