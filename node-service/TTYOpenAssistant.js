const NULL = 0
const START_OF_HEADING = 1;
const START_OF_TEXT = 2;
const END_OF_TEXT = 3;
const END_OF_TRANSMISSION = 4;
const ENQUIRY = 5;
const ACKNOWLEDGE = 6;
const BELL = 7;
const BACKSPACE = 8;
const HORIZONTAL_TABULATION = 9;
const LINE_FEED = 10;
const VERTICAL_TABULATION = 11;
const FORM_FEED = 12;
const CARRIAGE_RETURN = 13;
const SHIFT_OUT = 14;
const SHIFT_IN = 15;
const DATA_LINK_ESCAPE = 16;
const DEVICE_CONTROL_ONE = 17;
const DEVICE_CONTROL_TWO = 18;
const DEVICE_CONTROL_THREE = 19;
const DEVICE_CONTROL_FOUR = 20;
const NEGATIVE_ACKNOWLEDGE = 21;
const SYNCHRONOUS_IDLE = 22;
const END_OF_TRANSMISSION_BLOCK = 23;
const CANCEL = 24;
const END_OF_MEDIUM = 25;
const SUBSTITUTE = 26;
const ESCAPE = 27;
const FILE_SEPARATOR = 28;
const GROUP_SEPARATOR = 29;
const RECORD_SEPARATOR = 30;
const UNIT_SEPARATOR = 31;
const SPACE = 32;
const EXCLAMATION_MARK = 33;
const QUOTATION_MARK = 34;
const uint_SIGN = 35;
const DOLLAR_SIGN = 36;
const PERCENT_SIGN = 37;
const AMPERSAND = 38;
const APOSTROPHE = 39;
const LEFT_PARENTHESIS = 40;
const RIGHT_PARENTHESIS = 41;
const ASTERISK = 42;
const PLUS_SIGN = 43;
const COMMA = 44;
const HYPHEN_MINUS = 45;
const FULL_STOP = 46;
const SOLIDUS = 47;
const DIGIT_ZERO = 48;
const DIGIT_ONE = 49;
const DIGIT_TWO = 50;
const DIGIT_THREE = 51;
const DIGIT_FOUR = 52;
const DIGIT_FIVE = 53;
const DIGIT_SIX = 54;
const DIGIT_SEVEN = 55;
const DIGIT_EIGHT = 56;
const DIGIT_NINE = 57;
const COLON = 58;
const SEMICOLON = 59;
const LESS_THAN_SIGN = 60;
const EQUALS_SIGN = 61;
const GREATER_THAN_SIGN = 62;
const QUESTION_MARK = 63;
const COMMERCIAL_AT = 64;
const LATIN_CAPITAL_LETTER_A = 65;
const LATIN_CAPITAL_LETTER_B = 66;
const LATIN_CAPITAL_LETTER_C = 67;
const LATIN_CAPITAL_LETTER_D = 68;
const LATIN_CAPITAL_LETTER_E = 69;
const LATIN_CAPITAL_LETTER_F = 70;
const LATIN_CAPITAL_LETTER_G = 71;
const LATIN_CAPITAL_LETTER_H = 72;
const LATIN_CAPITAL_LETTER_I = 73;
const LATIN_CAPITAL_LETTER_J = 74;
const LATIN_CAPITAL_LETTER_K = 75;
const LATIN_CAPITAL_LETTER_L = 76;
const LATIN_CAPITAL_LETTER_M = 77;
const LATIN_CAPITAL_LETTER_N = 78;
const LATIN_CAPITAL_LETTER_O = 79;
const LATIN_CAPITAL_LETTER_P = 80;
const LATIN_CAPITAL_LETTER_Q = 81;
const LATIN_CAPITAL_LETTER_R = 82;
const LATIN_CAPITAL_LETTER_S = 83;
const LATIN_CAPITAL_LETTER_T = 84;
const LATIN_CAPITAL_LETTER_U = 85;
const LATIN_CAPITAL_LETTER_V = 86;
const LATIN_CAPITAL_LETTER_W = 87;
const LATIN_CAPITAL_LETTER_X = 88;
const LATIN_CAPITAL_LETTER_Y = 89;
const LATIN_CAPITAL_LETTER_Z = 90;
const LEFT_SQUARE_BRACKET = 91;
const REVERSE_SOLIDUS = 92;
const RIGHT_SQUARE_BRACKET = 93;
const CIRCUMFLEX_ACCENT = 94;
const LOW_LINE = 95;
const GRAVE_ACCENT = 96;
const LATIN_SMALL_LETTER_A = 97;
const LATIN_SMALL_LETTER_B = 98;
const LATIN_SMALL_LETTER_C = 99;
const LATIN_SMALL_LETTER_D = 100;
const LATIN_SMALL_LETTER_E = 101;
const LATIN_SMALL_LETTER_F = 102;
const LATIN_SMALL_LETTER_G = 103;
const LATIN_SMALL_LETTER_H = 104;
const LATIN_SMALL_LETTER_I = 105;
const LATIN_SMALL_LETTER_J = 106;
const LATIN_SMALL_LETTER_K = 107;
const LATIN_SMALL_LETTER_L = 108;
const LATIN_SMALL_LETTER_M = 109;
const LATIN_SMALL_LETTER_N = 110;
const LATIN_SMALL_LETTER_O = 111;
const LATIN_SMALL_LETTER_P = 112;
const LATIN_SMALL_LETTER_Q = 113;
const LATIN_SMALL_LETTER_R = 114;
const LATIN_SMALL_LETTER_S = 115;
const LATIN_SMALL_LETTER_T = 116;
const LATIN_SMALL_LETTER_U = 117;
const LATIN_SMALL_LETTER_V = 118;
const LATIN_SMALL_LETTER_W = 119;
const LATIN_SMALL_LETTER_X = 120;
const LATIN_SMALL_LETTER_Y = 121;
const LATIN_SMALL_LETTER_Z = 122;
const LEFT_CURLY_BRACKET = 123;
const VERTICAL_LINE = 124;
const RIGHT_CURLY_BRACKET = 125;
const TILDE = 126;
const DELETE = 127;
const LATIN_CAPITAL_LETTER_C_WITH_CEDILLA = 128;
const LATIN_SMALL_LETTER_U_WITH_DIAERESIS = 129;
const LATIN_SMALL_LETTER_E_WITH_ACUTE = 130;
const LATIN_SMALL_LETTER_A_WITH_CIRCUMFLEX = 131;
const LATIN_SMALL_LETTER_A_WITH_DIAERESIS = 132;
const LATIN_SMALL_LETTER_A_WITH_GRAVE = 133;
const LATIN_SMALL_LETTER_A_WITH_RING_ABOVE = 134;
const LATIN_SMALL_LETTER_C_WITH_CEDILLA = 135;
const LATIN_SMALL_LETTER_E_WITH_CIRCUMFLEX = 136;
const LATIN_SMALL_LETTER_E_WITH_DIAERESIS = 137;
const LATIN_SMALL_LETTER_E_WITH_GRAVE = 138;
const LATIN_SMALL_LETTER_I_WITH_DIAERESIS = 139;
const LATIN_SMALL_LETTER_I_WITH_CIRCUMFLEX = 140;
const LATIN_SMALL_LETTER_I_WITH_GRAVE = 141;
const LATIN_CAPITAL_LETTER_A_WITH_DIAERESIS = 142;
const LATIN_CAPITAL_LETTER_A_WITH_RING_ABOVE = 143;
const LATIN_CAPITAL_LETTER_E_WITH_ACUTE = 144;
const LATIN_SMALL_LETTER_AE = 145;
const LATIN_CAPITAL_LETTER_AE = 146;
const LATIN_SMALL_LETTER_O_WITH_CIRCUMFLEX = 147;
const LATIN_SMALL_LETTER_O_WITH_DIAERESIS = 148;
const LATIN_SMALL_LETTER_O_WITH_GRAVE = 149;
const LATIN_SMALL_LETTER_U_WITH_CIRCUMFLEX = 150;
const LATIN_SMALL_LETTER_U_WITH_GRAVE = 151;
const LATIN_SMALL_LETTER_Y_WITH_DIAERESIS = 152;
const LATIN_CAPITAL_LETTER_O_WITH_DIAERESIS = 153;
const LATIN_CAPITAL_LETTER_U_WITH_DIAERESIS = 154;
const CENT_SIGN = 155;
const POUND_SIGN = 156;
const YEN_SIGN = 157;
const PESETA_SIGN = 158;
const LATIN_SMALL_LETTER_F_WITH_HOOK = 159;
const LATIN_SMALL_LETTER_A_WITH_ACUTE = 160;
const LATIN_SMALL_LETTER_I_WITH_ACUTE = 161;
const LATIN_SMALL_LETTER_O_WITH_ACUTE = 162;
const LATIN_SMALL_LETTER_U_WITH_ACUTE = 163;
const LATIN_SMALL_LETTER_N_WITH_TILDE = 164;
const LATIN_CAPITAL_LETTER_N_WITH_TILDE = 165;
const FEMININE_ORDINAL_INDICATOR = 166;
const MASCULINE_ORDINAL_INDICATOR = 167;
const INVERTED_QUESTION_MARK = 168;
const REVERSED_NOT_SIGN = 169;
const NOT_SIGN = 170;
const VULGAR_FRACTION_ONE_HALF = 171;
const VULGAR_FRACTION_ONE_QUARTER = 172;
const INVERTED_EXCLAMATION_MARK = 173;
const LEFT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK = 174;
const RIGHT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK = 175;
const LIGHT_SHADE = 176;
const MEDIUM_SHADE = 177;
const DARK_SHADE = 178;
const BOX_DRAWINGS_LIGHT_VERTICAL = 179;
const BOX_DRAWINGS_LIGHT_VERTICAL_AND_LEFT = 180;
const BOX_DRAWINGS_VERTICAL_SINGLE_AND_LEFT_DOUBLE = 181;
const BOX_DRAWINGS_VERTICAL_DOUBLE_AND_LEFT_SINGLE = 182;
const BOX_DRAWINGS_DOWN_DOUBLE_AND_LEFT_SINGLE = 183;
const BOX_DRAWINGS_DOWN_SINGLE_AND_LEFT_DOUBLE = 184;
const BOX_DRAWINGS_DOUBLE_VERTICAL_AND_LEFT = 185;
const BOX_DRAWINGS_DOUBLE_VERTICAL = 186;
const BOX_DRAWINGS_DOUBLE_DOWN_AND_LEFT = 187;
const BOX_DRAWINGS_DOUBLE_UP_AND_LEFT = 188;
const BOX_DRAWINGS_UP_DOUBLE_AND_LEFT_SINGLE = 189;
const BOX_DRAWINGS_UP_SINGLE_AND_LEFT_DOUBLE = 190;
const BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT = 191;
const BOX_DRAWINGS_LIGHT_UP_AND_RIGHT = 192;
const BOX_DRAWINGS_LIGHT_UP_AND_HORIZONTAL = 193;
const BOX_DRAWINGS_LIGHT_DOWN_AND_HORIZONTAL = 194;
const BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT = 195;
const BOX_DRAWINGS_LIGHT_HORIZONTAL = 196;
const BOX_DRAWINGS_LIGHT_VERTICAL_AND_HORIZONTAL = 197;
const BOX_DRAWINGS_VERTICAL_SINGLE_AND_RIGHT_DOUBLE = 198;
const BOX_DRAWINGS_VERTICAL_DOUBLE_AND_RIGHT_SINGLE = 199;
const BOX_DRAWINGS_DOUBLE_UP_AND_RIGHT = 200;
const BOX_DRAWINGS_DOUBLE_DOWN_AND_RIGHT = 201;
const BOX_DRAWINGS_DOUBLE_UP_AND_HORIZONTAL = 202;
const BOX_DRAWINGS_DOUBLE_DOWN_AND_HORIZONTAL = 203;
const BOX_DRAWINGS_DOUBLE_VERTICAL_AND_RIGHT = 204;
const BOX_DRAWINGS_DOUBLE_HORIZONTAL = 205;
const BOX_DRAWINGS_DOUBLE_VERTICAL_AND_HORIZONTAL = 206;
const BOX_DRAWINGS_UP_SINGLE_AND_HORIZONTAL_DOUBLE = 207;
const BOX_DRAWINGS_UP_DOUBLE_AND_HORIZONTAL_SINGLE = 208;
const BOX_DRAWINGS_DOWN_SINGLE_AND_HORIZONTAL_DOUBLE = 209;
const BOX_DRAWINGS_DOWN_DOUBLE_AND_HORIZONTAL_SINGLE = 210;
const BOX_DRAWINGS_UP_DOUBLE_AND_RIGHT_SINGLE = 211;
const BOX_DRAWINGS_UP_SINGLE_AND_RIGHT_DOUBLE = 212;
const BOX_DRAWINGS_DOWN_SINGLE_AND_RIGHT_DOUBLE = 213;
const BOX_DRAWINGS_DOWN_DOUBLE_AND_RIGHT_SINGLE = 214;
const BOX_DRAWINGS_VERTICAL_DOUBLE_AND_HORIZONTAL_SINGLE = 215;
const BOX_DRAWINGS_VERTICAL_SINGLE_AND_HORIZONTAL_DOUBLE = 216;
const BOX_DRAWINGS_LIGHT_UP_AND_LEFT = 217;
const BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT = 218;
const FULL_BLOCK = 219;
const LOWER_HALF_BLOCK = 220;
const LEFT_HALF_BLOCK = 221;
const RIGHT_HALF_BLOCK = 222;
const UPPER_HALF_BLOCK = 223;
const GREEK_SMALL_LETTER_ALPHA = 224;
const LATIN_SMALL_LETTER_SHARP_S = 225;
const GREEK_CAPITAL_LETTER_GAMMA = 226;
const GREEK_SMALL_LETTER_PI = 227;
const GREEK_CAPITAL_LETTER_SIGMA = 228;
const GREEK_SMALL_LETTER_SIGMA = 229;
const MICRO_SIGN = 230;
const GREEK_SMALL_LETTER_TAU = 231;
const GREEK_CAPITAL_LETTER_PHI = 232;
const GREEK_CAPITAL_LETTER_THETA = 233;
const GREEK_CAPITAL_LETTER_OMEGA = 234;
const GREEK_SMALL_LETTER_DELTA = 235;
const INFINITY = 236;
const GREEK_SMALL_LETTER_PHI = 237;
const GREEK_SMALL_LETTER_EPSILON = 238;
const INTERSECTION = 239;
const IDENTICAL_TO = 240;
const PLUS_MINUS_SIGN = 241;
const GREATER_THAN_OR_EQUAL_TO = 242;
const LESS_THAN_OR_EQUAL_TO = 243;
const TOP_HALF_INTEGRAL = 244;
const BOTTOM_HALF_INTEGRAL = 245;
const DIVISION_SIGN = 246;
const ALMOST_EQUAL_TO = 247;
const DEGREE_SIGN = 248;
const BULLET_OPERATOR = 249;
const MIDDLE_DOT = 250;
const SQUARE_ROOT = 251;
const SUPERSCRIPT_LATIN_SMALL_LETTER_N = 252;
const SUPERSCRIPT_TWO = 253;
const BLACK_SQUARE = 254;
const NO_BREAK_SPACE = 255;

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

var TTYOpenAssistant = function() {
	
	this.commandsESC = [];
	this.commandsCSI = [];
	this.escapeCommandStart = -1;
	this.bufferEscapeCommand = 0;
	this.textBuffer = null;
	this.csiBuffer = null;
	
};

TTYOpenAssistant.prototype.setup = function() {
	
	this.commandsESC[DIGIT_EIGHT] = this.dec8.bind(this); //this.cursorRestore
	this.commandsESC[LATIN_SMALL_LETTER_C] = this.reset.bind(this);
	//this.commandsESC[LATIN_CAPITAL_LETTER_A] = this.charsetUK.bind(this);
	//this.commandsESC[LATIN_CAPITAL_LETTER_B] = this.charsetUS.bind(this);
	//this.commandsESC[DIGIT_ONE] = this.charsetSpecial.bind(this);
	//this.commandsESC[DIGIT_ONE] = this.charsetAlt.bind(this);
	//this.commandsESC[DIGIT_TWO] = this.charsetAltSpecial.bind(this);
	this.commandsESC[DIGIT_SEVEN] = this.cursorSave.bind(this);
	this.commandsESC[EQUALS_SIGN] = this.appKeyMode.bind(this);
	this.commandsESC[GREATER_THAN_SIGN] = this.normalKeyMode.bind(this);

	this.commandsESC[LATIN_CAPITAL_LETTER_D] = this.index.bind(this);
	this.commandsESC[LATIN_CAPITAL_LETTER_M] = this.reverseIndex.bind(this);
	this.commandsESC[LATIN_CAPITAL_LETTER_E] = this.nextLine.bind(this);
	this.commandsESC[LATIN_CAPITAL_LETTER_H] = this.setTabStop.bind(this);

	this.commandsCSI[LATIN_SMALL_LETTER_H] = this.modeSet.bind(this);
	this.commandsCSI[LATIN_SMALL_LETTER_L] = this.modeReset.bind(this);

	this.commandsCSI[LATIN_SMALL_LETTER_C] = this.deviceAttributes.bind(this);
	this.commandsCSI[LATIN_SMALL_LETTER_M] = this.setGraphicsMode.bind(this);
	this.commandsCSI[LATIN_CAPITAL_LETTER_J] = this.eraseDisplay.bind(this);
	this.commandsCSI[LATIN_CAPITAL_LETTER_K] = this.eraseLine.bind(this);
	this.commandsCSI[LATIN_SMALL_LETTER_R] = this.scrollScreen.bind(this);
	this.commandsCSI[LATIN_CAPITAL_LETTER_H] = this.cursorPosition.bind(this);
	this.commandsCSI[LATIN_SMALL_LETTER_F] = this.cursorPosition.bind(this);
	
	this.commandsCSI[LATIN_CAPITAL_LETTER_A] = this.cursorUp.bind(this);
	this.commandsCSI[LATIN_CAPITAL_LETTER_B] = this.cursorDown.bind(this);
	this.commandsCSI[LATIN_CAPITAL_LETTER_C] = this.cursorForward.bind(this);
	this.commandsCSI[LATIN_CAPITAL_LETTER_D] = this.cursorBackward.bind(this);
	
	this.commandsCSI[LATIN_SMALL_LETTER_D] = this.cursorFromTop.bind(this);
	this.commandsCSI[LATIN_CAPITAL_LETTER_G] = this.cursorFromLeft.bind(this);
	//this.commandsCSI[LATIN_CAPITAL_LETTER_P] = this.deleteChar.bind(this);
	this.commandsCSI[LATIN_CAPITAL_LETTER_X] = this.eraseChar.bind(this);
	//this.commandsCSI[LATIN_CAPITAL_LETTER_L] = this.insertLine.bind(this);
	this.commandsCSI[LATIN_SMALL_LETTER_N] = this.deviceStatusReport.bind(this);
	//this.commandsCSI[LATIN_SMALL_LETTER_P] = this.softreset.bind(this);
	//this.commandsCSI[LATIN_CAPITAL_LETTER_M] = this.deleteLines.bind(this);
	this.commandsCSI[LATIN_SMALL_LETTER_G] = this.clearTabStops.bind(this);
	//this.commandsCSI[LATIN_CAPITAL_LETTER_S] = this.scrollUp.bind(this);
	//this.commandsCSI[LATIN_CAPITAL_LETTER_T] = this.scrollDown.bind(this);
	
};

TTYOpenAssistant.prototype.send = function(id, type, params) {
	ttys[id][1].get().result = {type: type, params: params}
};

TTYOpenAssistant.prototype.executeESC = function(id, ic, fc) {
	if (this.commandsESC[fc] != undefined)
		this.commandsESC[fc](id, ic);
	else
		console.error('ESC', ic, fc)
};

TTYOpenAssistant.prototype.executeCSI = function(id, cmd, paramsRaw) {
	var params = paramsRaw.split(';')
	if (this.commandsCSI[cmd] != undefined)
		this.commandsCSI[cmd](id, params);
	else
		console.error('CSI', cmd, params)
};

TTYOpenAssistant.prototype.eraseChar = function(id, params) {
	this.send(id, _ERASE_CHAR, parseInt(params,10)||1)
};

TTYOpenAssistant.prototype.setTabStop = function(id, params) {
	this.send(id, _SET_TAB_STOP, null)
};

TTYOpenAssistant.prototype.clearTabStops = function(id, params) {
	this.send(id, _CLEAR_TAB_STOP, params)
};

TTYOpenAssistant.prototype.charsetUK = function(id, params) {
	if (params == '(') this.send(id, _SET_G0, 'UK')
	else if (params == ')') this.send(id, _SET_G1, 'UK')
};

TTYOpenAssistant.prototype.charsetUS = function(id, params) {
	if (params == '(') this.send(id, _SET_G0, 'US')
	else if (params == ')') this.send(id, _SET_G1, 'US')
};

TTYOpenAssistant.prototype.charsetSpecial = function(id, params) {
	if (params == '(') this.send(id, _SET_G0, 'Special')
	else if (params == ')') this.send(id, _SET_G1, 'Special')
};

TTYOpenAssistant.prototype.charsetAlt = function(id, params) {
	if (params == '(') this.send(id, _SET_G0, 'Alt')
	else if (params == ')') this.send(id, _SET_G1, 'Alt')
};

TTYOpenAssistant.prototype.charsetAltSpecial = function(id, params) {
	if (params == '(') this.send(id, _SET_G0, 'AltSpecial')
	else if (params == ')') this.send(id, _SET_G1, 'AltSpecial')
};

TTYOpenAssistant.prototype.appKeyMode = function(id, params) {
	this.send(id, _APP_CURSOR_KEYS, true)
};

TTYOpenAssistant.prototype.normalKeyMode = function(id, params) {
	this.send(id, _APP_CURSOR_KEYS, false)
};

TTYOpenAssistant.prototype.dec8 = function(id, params) {
	if (params) {
		switch (params) {
			case uint_SIGN:
				this.send(id, _DEC_CALIBRATE, null)
				break;
		}
	} else {
		this.send(id, _CURSOR_RESTORE, null)
	}
};

TTYOpenAssistant.prototype.cursorSave = function(id, params) {
	this.send(id, _CURSOR_SAVE, null)
};

TTYOpenAssistant.prototype.index = function(id, params) {
	this.send(id, _CURSOR_DOWN, [1,true])
};

TTYOpenAssistant.prototype.reverseIndex = function(id, params) {
	this.send(id, _CURSOR_UP, [1,true])
};

TTYOpenAssistant.prototype.scrollScreen = function(id, params) {
	console.log("SCROLL_SCREEN", params)
	if (params.length == 2)
		this.send(id, _SCROLL_SCREEN, [parseInt(params[0],10),parseInt(params[1],10)])
	else
		this.send(id, _SCROLL_SCREEN, null)
};

TTYOpenAssistant.prototype.deviceStatusReport = function(id, params) {
	switch (params[0]) {
		case '5':
			ttys[id][0][1].write('\033[0n')
			break;
		case '6':
			this.send(id, _CURSOR_REPORT, null)
			break;
	}
};

TTYOpenAssistant.prototype.cursorFromTop = function(id, params) {
	this.send(id, _CURSOR_FROM_TOP, parseInt(params[0],10))
};

TTYOpenAssistant.prototype.cursorFromLeft = function(id, params) {
	this.send(id, _CURSOR_FROM_LEFT, parseInt(params[0],10))
};

TTYOpenAssistant.prototype.cursorPosition = function(id, params) {
	this.send(id, _CURSOR_POSITION, [parseInt(params[0],10)||1,parseInt(params[1],10)||1])
};

TTYOpenAssistant.prototype.nextLine = function(id, params) {
	this.send(id, _NEXT_LINE, null)
};

TTYOpenAssistant.prototype.reset = function(id, params) {
	this.send(id, _RESET, null)
};

TTYOpenAssistant.prototype.scrollUp = function(id, params) {
	this.send(id, _SCROLL_UP, parseInt(params[0],10) || 1)
};

TTYOpenAssistant.prototype.scrollDown = function(id, params) {
	this.send(id, _SCROLL_DOWN, parseInt(params[0],10) || 1)
};

TTYOpenAssistant.prototype.cursorUp = function(id, params) {
	this.send(id, _CURSOR_UP, [parseInt(params[0],10) || 1, false])
};

TTYOpenAssistant.prototype.cursorDown = function(id, params) {
	this.send(id, _CURSOR_DOWN, [parseInt(params[0],10) || 1, false])
};

TTYOpenAssistant.prototype.cursorForward = function(id, params) {
	this.send(id, _CURSOR_FORWARD, parseInt(params[0],10) || 1)
};

TTYOpenAssistant.prototype.cursorBackward = function(id, params) {
	this.send(id, _CURSOR_BACKWARD, parseInt(params[0],10) || 1)
};

TTYOpenAssistant.prototype.setGraphicsMode = function(id, params) {
		
	for(var i in params){
		
		var param = (params[i]=='') ? 0 : parseInt(params[i],10);

		switch( param ) {

			/*  Reset */
			case 0:
				this.send(id, _GRAPHICS_MODE_BOLD, false)
				this.send(id, _GRAPHICS_MODE_REVERSE, false)
				this.send(id, _GRAPHICS_MODE_UNDERLINE, false)
				this.send(id, _GRAPHICS_MODE_BLINK, false)
				this.send(id, _GRAPHICS_MODE_FG, -1)
				this.send(id, _GRAPHICS_MODE_BG, -1)
				break;
			
			/*  Bold ON */
			case 1:
				this.send(id, _GRAPHICS_MODE_BOLD, true)
				break;
			
			/* Dim */
			case 2:
				this.send(id, _GRAPHICS_MODE_BOLD, false)
				break;
			
			/* Set foreground color */
			case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: 
				this.send(id, _GRAPHICS_MODE_FG, param - 30)
				break;

			case 4:
				this.send(id, _GRAPHICS_MODE_UNDERLINE, true)
				break;
			
			/* Set background color */
			case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47:
				this.send(id, _GRAPHICS_MODE_BG, param - 40)
				break;
			
			/* Blink ON */
			case 5:
				this.send(id, _GRAPHICS_MODE_BLINK, true)
				break;
			
			/* Reverse ON */
			case 7:
				this.send(id, _GRAPHICS_MODE_REVERSE, true)
				break;
			
			/* Concealed ON */
			case 8:
				break;
			
			/* Reset to normal? */
			case 9:
				break;
		}

	}
	
};

TTYOpenAssistant.prototype.eraseLine = function(id, params) {
	if (params[0] == '1')
		this.send(id, _ERASE_START_OF_LINE, null)
	else if (params[0] == '2')
		this.send(id, _ERASE_LINE, null)
	else if (params[0] == '' || params[0] == '0')
		this.send(id, _ERASE_END_OF_LINE, null)
};

TTYOpenAssistant.prototype.eraseDisplay = function(id, params) {
	if (params[0] == '1')
		this.send(id, _ERASE_UP, null)
	else if (params[0] == '2')
		this.send(id, _ERASE_SCREEN, null)
	else if (params[0] == '' || params[0] == '0')
		this.send(id, _ERASE_DOWN, null)
};

TTYOpenAssistant.prototype.deviceAttributes = function(id, params) {
	ttys[id][0][1].write('\033[?1;2c'); // VT100 with Advanced Video Option
	//ttys[id][0][1].write('\033[?1;0c'); // VT101 with No Options
	//ttys[id][0][1].write('\033[?6c'); // VT102
	//ttys[id][0][1].write('\033[?60;1;2;6;8;9;15;c'); // VT220
};

TTYOpenAssistant.prototype.modeSet = function(id, params) {
	switch (params[0]) {
		case '?1':
			this.send(id, _APP_CURSOR_KEYS, true)
			break;
		case '?3':
			this.send(id, _SET_COLS, 127)
			break;
		case '?6':
			this.send(id, _SET_ORIGIN, true)
			break;
		case '?7':
			this.send(id, _AUTO_WRAP, true)
			break;
		case '?25':
			this.send(id, _ENABLE_CURSOR, null)
			break;
		case '?1047':
			this.send(id, _BUFFER_SAVE, false)
			break;
		case '?1048':
			this.send(id, _CURSOR_SAVE, null)
			break;
		case '?1049':
			this.send(id, _CURSOR_SAVE, null)
			this.send(id, _BUFFER_SAVE, true)
			break;
		default:
			console.log('modeSet', params)
	}
};

TTYOpenAssistant.prototype.modeReset = function(id, params) {
	switch (params[0]) {
		case '?1':
			this.send(id, _APP_CURSOR_KEYS, false)
			break;
		case '?3':
			this.send(id, _SET_COLS, 80)
			break;
		case '?6':
			this.send(id, _SET_ORIGIN, false)
			break;
		case '?7':
			console.log('AUTO WRAP OFF')
			this.send(id, _AUTO_WRAP, false)
			break;
		case '?25':
			this.send(id, _DISABLE_CURSOR, null)
			break;
		case '?1047':
			this.send(id, _BUFFER_RESTORE, true)
			break;
		case '?1048':
			this.send(id, _CURSOR_RESTORE, null)
			break;
		case '?1049':
			this.send(id, _BUFFER_RESTORE, false)
			this.send(id, _CURSOR_RESTORE, null)
			break;
		default:
			console.log('modeReset', params)
	}
};

TTYOpenAssistant.prototype.parse = function (id, buffer) {
	
	var i=0, l=buffer.length;
	try {
		this.send(id, _HIDE_CURSOR, null)
		for (; i<l; i++) {
			if(buffer[i] == ESCAPE) {
				if (this.textBuffer != null) {
					this.send(id, _TEXT,this.textBuffer.join(''))
					this.textBuffer = null
				}
				this.escapeCommandStart = i;
				this.bufferEscapeCommand = 1;
			} else {
				if (buffer[i]<SPACE) {
					if (this.textBuffer != null) {
						this.send(id, _TEXT,this.textBuffer.join(''))
						this.textBuffer = null
					}
					switch(buffer[i]) {
						case BACKSPACE:
							this.send(id, _CURSOR_BACKWARD, 1)
							break;
	
						case VERTICAL_TABULATION:
						case FORM_FEED:
						case LINE_FEED:
							this.send(id, _CURSOR_DOWN, [1, true])
							/*if (viewer.control.modes['newline'])
								this.send(id, 'carriageReturn',null)*/
							break;
	
						case CARRIAGE_RETURN:
							this.send(id, _CARRIAGE_RETURN, null)
							break;
	
						case SHIFT_OUT:
							this.send(id, _SET_CHARSET, 1)
							break;
	
						case SHIFT_IN:
							this.send(id, _SET_CHARSET, 0)
							break;
	
						case HORIZONTAL_TABULATION:
							this.send(id, _HTAB, null)
							break;
	
						default:
							console.warn('CTRL',buffer[i]);
					}
				} else if(this.bufferEscapeCommand == 1) {
					if (buffer[i] == LEFT_SQUARE_BRACKET) {
						this.csiBuffer = [];
						this.bufferEscapeCommand = 3;
					} else {
						this.bufferEscapeCommand = 2;
						if (buffer[i]>=DIGIT_ZERO && buffer[i]<=TILDE) {
							this.executeESC(id, null,buffer[i]);
							this.bufferEscapeCommand = 0;
						}
					}
				} else if(this.bufferEscapeCommand == 2) {
					if (buffer[i]>=DIGIT_ZERO && buffer[i]<=TILDE) {
						if (i-this.escapeCommandStart+1 == 3)
							this.executeESC(id, buffer[i-1],buffer[i])
						this.bufferEscapeCommand = 0;
					}
				} else if(this.bufferEscapeCommand == 3) {
					if (buffer[i]>=COMMERCIAL_AT && buffer[i]<=TILDE) {
						this.executeCSI(id, buffer[i],this.csiBuffer.join(''));
						this.bufferEscapeCommand = 0;
						this.csiBuffer = null;
					} else {
						this.csiBuffer.push(String.fromCharCode(buffer[i]))
					}
				} else if(buffer[i] >= SPACE) {
					if (this.textBuffer == null)
						this.textBuffer = [];
					this.textBuffer.push(String.fromCharCode(buffer[i]))
				}
			}
		}
		if (this.textBuffer != null) {
			this.send(id, _TEXT,this.textBuffer.join(''))
			this.textBuffer = null
		}
		this.send(id, _SHOW_CURSOR, null)
	} catch(e) {
		console.log('CSI RANGE',this.escapeCommandStart+2,i,buffer.length)
		console.log('parse',e)
	}
	
};

TTYOpenAssistant.prototype.uniqid = function() {
	
    var newDate = new Date;
    return newDate.getTime();
    
};

TTYOpenAssistant.prototype.run = function(future, subscription) {

    var args = this.controller.args;

	process.chdir('/')
	var id = this.uniqid();
	console.log('New Session ID', id)
	ttys[id] = [
		TTYOpenAssistant.prototype.opencmd("/bin/login",["-f","root"],args.rows,args.cols),
		subscription
	];
	future.result = { tty_id: id, pid:ttys[id].pid };
	
	ttys[id][0][1].on('data', this.parse.bind(this, id));
	
};

TTYOpenAssistant.prototype.opencmd = function(cmd,args,rows,cols,callback) {

	var fileds = binding.openpty();
	binding.setWindowSize(fileds[0],rows,cols);
	var streams = [];
	streams.push(net.Stream(fileds[0]));
	streams[0].readable=streams[0].writeable = true;
	streams.push(streams[0])
	streams.push(cp.spawn(cmd,args,{setsid:true,customFds:[fileds[1],fileds[1],fileds[1]]}));
	streams[0].resume();
	if(callback)
		callback(streams);
	return streams;
	
};