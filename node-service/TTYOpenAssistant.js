var NULL = 0
var START_OF_HEADING = 1;
var START_OF_TEXT = 2;
var END_OF_TEXT = 3;
var END_OF_TRANSMISSION = 4;
var ENQUIRY = 5;
var ACKNOWLEDGE = 6;
var BELL = 7;
var BACKSPACE = 8;
var HORIZONTAL_TABULATION = 9;
var LINE_FEED = 10;
var VERTICAL_TABULATION = 11;
var FORM_FEED = 12;
var CARRIAGE_RETURN = 13;
var SHIFT_OUT = 14;
var SHIFT_IN = 15;
var DATA_LINK_ESCAPE = 16;
var DEVICE_CONTROL_ONE = 17;
var DEVICE_CONTROL_TWO = 18;
var DEVICE_CONTROL_THREE = 19;
var DEVICE_CONTROL_FOUR = 20;
var NEGATIVE_ACKNOWLEDGE = 21;
var SYNCHRONOUS_IDLE = 22;
var END_OF_TRANSMISSION_BLOCK = 23;
var CANCEL = 24;
var END_OF_MEDIUM = 25;
var SUBSTITUTE = 26;
var ESCAPE = 27;
var FILE_SEPARATOR = 28;
var GROUP_SEPARATOR = 29;
var RECORD_SEPARATOR = 30;
var UNIT_SEPARATOR = 31;
var SPACE = 32;
var EXCLAMATION_MARK = 33;
var QUOTATION_MARK = 34;
var uint_SIGN = 35;
var DOLLAR_SIGN = 36;
var PERCENT_SIGN = 37;
var AMPERSAND = 38;
var APOSTROPHE = 39;
var LEFT_PARENTHESIS = 40;
var RIGHT_PARENTHESIS = 41;
var ASTERISK = 42;
var PLUS_SIGN = 43;
var COMMA = 44;
var HYPHEN_MINUS = 45;
var FULL_STOP = 46;
var SOLIDUS = 47;
var DIGIT_ZERO = 48;
var DIGIT_ONE = 49;
var DIGIT_TWO = 50;
var DIGIT_THREE = 51;
var DIGIT_FOUR = 52;
var DIGIT_FIVE = 53;
var DIGIT_SIX = 54;
var DIGIT_SEVEN = 55;
var DIGIT_EIGHT = 56;
var DIGIT_NINE = 57;
var COLON = 58;
var SEMICOLON = 59;
var LESS_THAN_SIGN = 60;
var EQUALS_SIGN = 61;
var GREATER_THAN_SIGN = 62;
var QUESTION_MARK = 63;
var COMMERCIAL_AT = 64;
var LATIN_CAPITAL_LETTER_A = 65;
var LATIN_CAPITAL_LETTER_B = 66;
var LATIN_CAPITAL_LETTER_C = 67;
var LATIN_CAPITAL_LETTER_D = 68;
var LATIN_CAPITAL_LETTER_E = 69;
var LATIN_CAPITAL_LETTER_F = 70;
var LATIN_CAPITAL_LETTER_G = 71;
var LATIN_CAPITAL_LETTER_H = 72;
var LATIN_CAPITAL_LETTER_I = 73;
var LATIN_CAPITAL_LETTER_J = 74;
var LATIN_CAPITAL_LETTER_K = 75;
var LATIN_CAPITAL_LETTER_L = 76;
var LATIN_CAPITAL_LETTER_M = 77;
var LATIN_CAPITAL_LETTER_N = 78;
var LATIN_CAPITAL_LETTER_O = 79;
var LATIN_CAPITAL_LETTER_P = 80;
var LATIN_CAPITAL_LETTER_Q = 81;
var LATIN_CAPITAL_LETTER_R = 82;
var LATIN_CAPITAL_LETTER_S = 83;
var LATIN_CAPITAL_LETTER_T = 84;
var LATIN_CAPITAL_LETTER_U = 85;
var LATIN_CAPITAL_LETTER_V = 86;
var LATIN_CAPITAL_LETTER_W = 87;
var LATIN_CAPITAL_LETTER_X = 88;
var LATIN_CAPITAL_LETTER_Y = 89;
var LATIN_CAPITAL_LETTER_Z = 90;
var LEFT_SQUARE_BRACKET = 91;
var REVERSE_SOLIDUS = 92;
var RIGHT_SQUARE_BRACKET = 93;
var CIRCUMFLEX_ACCENT = 94;
var LOW_LINE = 95;
var GRAVE_ACCENT = 96;
var LATIN_SMALL_LETTER_A = 97;
var LATIN_SMALL_LETTER_B = 98;
var LATIN_SMALL_LETTER_C = 99;
var LATIN_SMALL_LETTER_D = 100;
var LATIN_SMALL_LETTER_E = 101;
var LATIN_SMALL_LETTER_F = 102;
var LATIN_SMALL_LETTER_G = 103;
var LATIN_SMALL_LETTER_H = 104;
var LATIN_SMALL_LETTER_I = 105;
var LATIN_SMALL_LETTER_J = 106;
var LATIN_SMALL_LETTER_K = 107;
var LATIN_SMALL_LETTER_L = 108;
var LATIN_SMALL_LETTER_M = 109;
var LATIN_SMALL_LETTER_N = 110;
var LATIN_SMALL_LETTER_O = 111;
var LATIN_SMALL_LETTER_P = 112;
var LATIN_SMALL_LETTER_Q = 113;
var LATIN_SMALL_LETTER_R = 114;
var LATIN_SMALL_LETTER_S = 115;
var LATIN_SMALL_LETTER_T = 116;
var LATIN_SMALL_LETTER_U = 117;
var LATIN_SMALL_LETTER_V = 118;
var LATIN_SMALL_LETTER_W = 119;
var LATIN_SMALL_LETTER_X = 120;
var LATIN_SMALL_LETTER_Y = 121;
var LATIN_SMALL_LETTER_Z = 122;
var LEFT_CURLY_BRACKET = 123;
var VERTICAL_LINE = 124;
var RIGHT_CURLY_BRACKET = 125;
var TILDE = 126;
var DELETE = 127;
var LATIN_CAPITAL_LETTER_C_WITH_CEDILLA = 128;
var LATIN_SMALL_LETTER_U_WITH_DIAERESIS = 129;
var LATIN_SMALL_LETTER_E_WITH_ACUTE = 130;
var LATIN_SMALL_LETTER_A_WITH_CIRCUMFLEX = 131;
var LATIN_SMALL_LETTER_A_WITH_DIAERESIS = 132;
var LATIN_SMALL_LETTER_A_WITH_GRAVE = 133;
var LATIN_SMALL_LETTER_A_WITH_RING_ABOVE = 134;
var LATIN_SMALL_LETTER_C_WITH_CEDILLA = 135;
var LATIN_SMALL_LETTER_E_WITH_CIRCUMFLEX = 136;
var LATIN_SMALL_LETTER_E_WITH_DIAERESIS = 137;
var LATIN_SMALL_LETTER_E_WITH_GRAVE = 138;
var LATIN_SMALL_LETTER_I_WITH_DIAERESIS = 139;
var LATIN_SMALL_LETTER_I_WITH_CIRCUMFLEX = 140;
var LATIN_SMALL_LETTER_I_WITH_GRAVE = 141;
var LATIN_CAPITAL_LETTER_A_WITH_DIAERESIS = 142;
var LATIN_CAPITAL_LETTER_A_WITH_RING_ABOVE = 143;
var LATIN_CAPITAL_LETTER_E_WITH_ACUTE = 144;
var LATIN_SMALL_LETTER_AE = 145;
var LATIN_CAPITAL_LETTER_AE = 146;
var LATIN_SMALL_LETTER_O_WITH_CIRCUMFLEX = 147;
var LATIN_SMALL_LETTER_O_WITH_DIAERESIS = 148;
var LATIN_SMALL_LETTER_O_WITH_GRAVE = 149;
var LATIN_SMALL_LETTER_U_WITH_CIRCUMFLEX = 150;
var LATIN_SMALL_LETTER_U_WITH_GRAVE = 151;
var LATIN_SMALL_LETTER_Y_WITH_DIAERESIS = 152;
var LATIN_CAPITAL_LETTER_O_WITH_DIAERESIS = 153;
var LATIN_CAPITAL_LETTER_U_WITH_DIAERESIS = 154;
var CENT_SIGN = 155;
var POUND_SIGN = 156;
var YEN_SIGN = 157;
var PESETA_SIGN = 158;
var LATIN_SMALL_LETTER_F_WITH_HOOK = 159;
var LATIN_SMALL_LETTER_A_WITH_ACUTE = 160;
var LATIN_SMALL_LETTER_I_WITH_ACUTE = 161;
var LATIN_SMALL_LETTER_O_WITH_ACUTE = 162;
var LATIN_SMALL_LETTER_U_WITH_ACUTE = 163;
var LATIN_SMALL_LETTER_N_WITH_TILDE = 164;
var LATIN_CAPITAL_LETTER_N_WITH_TILDE = 165;
var FEMININE_ORDINAL_INDICATOR = 166;
var MASCULINE_ORDINAL_INDICATOR = 167;
var INVERTED_QUESTION_MARK = 168;
var REVERSED_NOT_SIGN = 169;
var NOT_SIGN = 170;
var VULGAR_FRACTION_ONE_HALF = 171;
var VULGAR_FRACTION_ONE_QUARTER = 172;
var INVERTED_EXCLAMATION_MARK = 173;
var LEFT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK = 174;
var RIGHT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK = 175;
var LIGHT_SHADE = 176;
var MEDIUM_SHADE = 177;
var DARK_SHADE = 178;
var BOX_DRAWINGS_LIGHT_VERTICAL = 179;
var BOX_DRAWINGS_LIGHT_VERTICAL_AND_LEFT = 180;
var BOX_DRAWINGS_VERTICAL_SINGLE_AND_LEFT_DOUBLE = 181;
var BOX_DRAWINGS_VERTICAL_DOUBLE_AND_LEFT_SINGLE = 182;
var BOX_DRAWINGS_DOWN_DOUBLE_AND_LEFT_SINGLE = 183;
var BOX_DRAWINGS_DOWN_SINGLE_AND_LEFT_DOUBLE = 184;
var BOX_DRAWINGS_DOUBLE_VERTICAL_AND_LEFT = 185;
var BOX_DRAWINGS_DOUBLE_VERTICAL = 186;
var BOX_DRAWINGS_DOUBLE_DOWN_AND_LEFT = 187;
var BOX_DRAWINGS_DOUBLE_UP_AND_LEFT = 188;
var BOX_DRAWINGS_UP_DOUBLE_AND_LEFT_SINGLE = 189;
var BOX_DRAWINGS_UP_SINGLE_AND_LEFT_DOUBLE = 190;
var BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT = 191;
var BOX_DRAWINGS_LIGHT_UP_AND_RIGHT = 192;
var BOX_DRAWINGS_LIGHT_UP_AND_HORIZONTAL = 193;
var BOX_DRAWINGS_LIGHT_DOWN_AND_HORIZONTAL = 194;
var BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT = 195;
var BOX_DRAWINGS_LIGHT_HORIZONTAL = 196;
var BOX_DRAWINGS_LIGHT_VERTICAL_AND_HORIZONTAL = 197;
var BOX_DRAWINGS_VERTICAL_SINGLE_AND_RIGHT_DOUBLE = 198;
var BOX_DRAWINGS_VERTICAL_DOUBLE_AND_RIGHT_SINGLE = 199;
var BOX_DRAWINGS_DOUBLE_UP_AND_RIGHT = 200;
var BOX_DRAWINGS_DOUBLE_DOWN_AND_RIGHT = 201;
var BOX_DRAWINGS_DOUBLE_UP_AND_HORIZONTAL = 202;
var BOX_DRAWINGS_DOUBLE_DOWN_AND_HORIZONTAL = 203;
var BOX_DRAWINGS_DOUBLE_VERTICAL_AND_RIGHT = 204;
var BOX_DRAWINGS_DOUBLE_HORIZONTAL = 205;
var BOX_DRAWINGS_DOUBLE_VERTICAL_AND_HORIZONTAL = 206;
var BOX_DRAWINGS_UP_SINGLE_AND_HORIZONTAL_DOUBLE = 207;
var BOX_DRAWINGS_UP_DOUBLE_AND_HORIZONTAL_SINGLE = 208;
var BOX_DRAWINGS_DOWN_SINGLE_AND_HORIZONTAL_DOUBLE = 209;
var BOX_DRAWINGS_DOWN_DOUBLE_AND_HORIZONTAL_SINGLE = 210;
var BOX_DRAWINGS_UP_DOUBLE_AND_RIGHT_SINGLE = 211;
var BOX_DRAWINGS_UP_SINGLE_AND_RIGHT_DOUBLE = 212;
var BOX_DRAWINGS_DOWN_SINGLE_AND_RIGHT_DOUBLE = 213;
var BOX_DRAWINGS_DOWN_DOUBLE_AND_RIGHT_SINGLE = 214;
var BOX_DRAWINGS_VERTICAL_DOUBLE_AND_HORIZONTAL_SINGLE = 215;
var BOX_DRAWINGS_VERTICAL_SINGLE_AND_HORIZONTAL_DOUBLE = 216;
var BOX_DRAWINGS_LIGHT_UP_AND_LEFT = 217;
var BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT = 218;
var FULL_BLOCK = 219;
var LOWER_HALF_BLOCK = 220;
var LEFT_HALF_BLOCK = 221;
var RIGHT_HALF_BLOCK = 222;
var UPPER_HALF_BLOCK = 223;
var GREEK_SMALL_LETTER_ALPHA = 224;
var LATIN_SMALL_LETTER_SHARP_S = 225;
var GREEK_CAPITAL_LETTER_GAMMA = 226;
var GREEK_SMALL_LETTER_PI = 227;
var GREEK_CAPITAL_LETTER_SIGMA = 228;
var GREEK_SMALL_LETTER_SIGMA = 229;
var MICRO_SIGN = 230;
var GREEK_SMALL_LETTER_TAU = 231;
var GREEK_CAPITAL_LETTER_PHI = 232;
var GREEK_CAPITAL_LETTER_THETA = 233;
var GREEK_CAPITAL_LETTER_OMEGA = 234;
var GREEK_SMALL_LETTER_DELTA = 235;
var INFINITY = 236;
var GREEK_SMALL_LETTER_PHI = 237;
var GREEK_SMALL_LETTER_EPSILON = 238;
var INTERSECTION = 239;
var IDENTICAL_TO = 240;
var PLUS_MINUS_SIGN = 241;
var GREATER_THAN_OR_EQUAL_TO = 242;
var LESS_THAN_OR_EQUAL_TO = 243;
var TOP_HALF_INTEGRAL = 244;
var BOTTOM_HALF_INTEGRAL = 245;
var DIVISION_SIGN = 246;
var ALMOST_EQUAL_TO = 247;
var DEGREE_SIGN = 248;
var BULLET_OPERATOR = 249;
var MIDDLE_DOT = 250;
var SQUARE_ROOT = 251;
var SUPERSCRIPT_LATIN_SMALL_LETTER_N = 252;
var SUPERSCRIPT_TWO = 253;
var BLACK_SQUARE = 254;
var NO_BREAK_SPACE = 255;

var TTYOpenAssistant = function() {
	
	this.commandsESC = [];
	this.commandsCSI = [];
	this.escapeCommandStart = -1;
	this.bufferEscapeCommand = 0;
	this.textBuffer = null;
	
};

TTYOpenAssistant.prototype.setup = function() {
	
	console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
	console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
	console.log("               TTY OPEN ASSISTANT OPENING")
	console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
	console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
	
	//this.commandsESC[DIGIT_EIGHT] = this.dec8; //this.cursorRestore
	this.commandsESC[LATIN_SMALL_LETTER_C] = this.reset;
	//this.commandsESC[LATIN_CAPITAL_LETTER_A] = this.charsetUK;
	//this.commandsESC[LATIN_CAPITAL_LETTER_B] = this.charsetUS;
	//this.commandsESC[DIGIT_ONE] = this.charsetSpecial;
	//this.commandsESC[DIGIT_ONE] = this.charsetAlt;
	//this.commandsESC[DIGIT_TWO] = this.charsetAltSpecial;
	//this.commandsESC[DIGIT_SEVEN] = this.cursorSave;

	//this.commandsESC[LATIN_CAPITAL_LETTER_D] = this.index;
	//this.commandsESC[LATIN_CAPITAL_LETTER_M] = this.reverseIndex;
	//this.commandsESC[LATIN_CAPITAL_LETTER_E] = this.nextLine;
	//this.commandsESC[LATIN_CAPITAL_LETTER_H] = this.setTabStop;

	//this.commandsCSI[LATIN_SMALL_LETTER_H] = this.modeSet;
	//this.commandsCSI[LATIN_SMALL_LETTER_L] = this.modeReset;

	//this.commandsCSI[LATIN_SMALL_LETTER_C] = this.deviceAttributes;
	//this.commandsCSI[LATIN_SMALL_LETTER_M] = this.setGraphicsMode;
	this.commandsCSI[LATIN_CAPITAL_LETTER_J] = this.eraseDisplay;
	this.commandsCSI[LATIN_CAPITAL_LETTER_K] = this.eraseLine;
	//this.commandsCSI[LATIN_SMALL_LETTER_R] = this.scrollScreen;
	//this.commandsCSI[LATIN_CAPITAL_LETTER_H] = this.cursorPosition;
	//this.commandsCSI[LATIN_SMALL_LETTER_F] = this.cursorPosition;
	this.commandsCSI[LATIN_CAPITAL_LETTER_A] = this.cursorUp;
	this.commandsCSI[LATIN_CAPITAL_LETTER_B] = this.cursorDown;
	this.commandsCSI[LATIN_CAPITAL_LETTER_C] = this.cursorForward;
	this.commandsCSI[LATIN_CAPITAL_LETTER_D] = this.cursorBackward;
	//this.commandsCSI[LATIN_SMALL_LETTER_D] = this.cursorFromTop;
	//this.commandsCSI[LATIN_CAPITAL_LETTER_G] = this.cursorFromLeft;
	//this.commandsCSI[LATIN_CAPITAL_LETTER_P] = this.deleteChar;
	//this.commandsCSI[LATIN_CAPITAL_LETTER_X] = this.eraseChar;
	//this.commandsCSI[LATIN_CAPITAL_LETTER_L] = this.insertLine;
	//this.commandsCSI[LATIN_SMALL_LETTER_N] = this.deviceStatusReport;
	//this.commandsCSI[LATIN_SMALL_LETTER_P] = this.softreset;
	//this.commandsCSI[LATIN_CAPITAL_LETTER_M] = this.deleteLines;
	//this.commandsCSI[LATIN_SMALL_LETTER_G] = this.clearTabStops;
	
};

TTYOpenAssistant.prototype.send = function(subscription, type, params) {
	console.log('Send via Subscription', type)
	subscription.get().result = {type: type, params: params}
};

TTYOpenAssistant.prototype.executeESC = function(subscription, ic, fc) {
	if (this.commandsESC[fc] != undefined)
		this.commandsESC[fc](subscription, ic);
	else
		console.error('ESC', ic, fc)
};

TTYOpenAssistant.prototype.executeCSI = function(subscription, cmd, paramsRaw) {
	var params = paramsRaw.split(';')
	if (this.commandsCSI[cmd] != undefined)
		this.commandsCSI[cmd](subscription, params);
	else
		console.error('CSI', cmd, params)
};

TTYOpenAssistant.prototype.eraseDisplay = function(params) {
	if (params[0] == '1')
		this.send(subscription,'eraseUp', null)
	else if (params[0] == '2')
		this.send(subscription,'eraseScreen', null)
	else
		this.send(subscription,'eraseDown', null)
};

TTYOpenAssistant.prototype.eraseLine = function(params) {
	if (params[0] == '1')
		this.send(subscription,'eraseStartOfLine', null)
	else if (params[0] == '2')
		this.send(subscription,'eraseLine', null)
	else
		this.send(subscription,'eraseEndOfLine', null)
};

TTYOpenAssistant.prototype.cursorPosition = function(params) {
	if (params[0]=='') {
		this.send(subscription,'cursorPosition', [1,1])
	} else {
		this.send(subscription,'cursorPosition', [parseInt(params[0]),parseInt(params[1])])
	}
};

TTYOpenAssistant.prototype.reset = function(subscription, params) {
	this.send(subscription,'reset', null)
};

TTYOpenAssistant.prototype.cursorUp = function(subscription, params) {
	this.send(subscription,'cursorUp', parseInt(params[0]) || 1)
};

TTYOpenAssistant.prototype.cursorDown = function(subscription, params) {
	this.send(subscription,'cursorDown', parseInt(params[0]) || 1)
};

TTYOpenAssistant.prototype.cursorForward = function(subscription, params) {
	this.send(subscription,'cursorForward', parseInt(params[0]) || 1)
};

TTYOpenAssistant.prototype.cursorBackward = function(subscription, params) {
	this.send(subscription,'cursorBackward', parseInt(params[0]) || 1)
};

TTYOpenAssistant.prototype.setGraphicsMode = function(subscription, params) {
	console.log("SET GRAHPICS MODE", params)
};

TTYOpenAssistant.prototype.parse = function (subscription, buffer) {
	
	try {
		for (var i=0; i<buffer.length; i++) {
			if(buffer[i] == ESCAPE) {
				if (this.textBuffer != null) {
					this.send(subscription,'text',this.textBuffer.join(''))
					this.textBuffer = null
				}
				this.escapeCommandStart = i;
				this.bufferEscapeCommand = 1;
			} else {
				if(this.bufferEscapeCommand == 1) {
					if (buffer[i] == LEFT_SQUARE_BRACKET)
						this.bufferEscapeCommand = 3;
					else {
						this.bufferEscapeCommand = 2;
						if (buffer[i]>=DIGIT_ZERO && buffer[i]<=TILDE) {
							this.executeESC(subscription,null,buffer[i]);
							this.bufferEscapeCommand = 0;
						}
					}
				} else if(this.bufferEscapeCommand == 2) {
					if (buffer[i]>=DIGIT_ZERO && buffer[i]<=TILDE) {
						if (i-this.escapeCommandStart+1 == 3)
							this.executeESC(subscription,buffer[i-1],buffer[i])
						this.bufferEscapeCommand = 0;
					}
				} else if(this.bufferEscapeCommand == 3) {
					if (buffer[i]>=COMMERCIAL_AT && buffer[i]<=TILDE) {
						console.log("CSI Command",this.escapeCommandStart+2, i)
						this.executeCSI(subscription,buffer[i],buffer.toString('ascii',start=this.escapeCommandStart+2,end=i));
						this.bufferEscapeCommand = 0;
					}
				} else if(buffer[i] >= SPACE) {
					if (this.textBuffer == null)
						this.textBuffer = new Array(4096);
					this.textBuffer[i] = String.fromCharCode(buffer[i])
				} else {
					if (this.textBuffer != null) {
						this.send(subscription,'text',this.textBuffer.join(''))
						this.textBuffer = null
					}
					switch(buffer[i]) {
						case BACKSPACE:
							this.send(subscription,'cursorBackward',1)
							break;
	
						case VERTICAL_TABULATION:
						case FORM_FEED:
						case LINE_FEED:
							this.send(subscription,'cursorDown',1)
							/*if (viewer.control.modes['newline'])
								this.send('carriageReturn',null)*/
							break;
	
						case CARRIAGE_RETURN:
							this.send(subscription,'carriageReturn',null)
							break;
	
						case SHIFT_OUT:
							viewer.control.modes['charset'] = 1
							break;
	
						case SHIFT_IN:
							//viewer.control.modes['charset'] = 0
							break;
	
						case HORIZONTAL_TABULATION:
							/*var newX = -1
							for (var k in viewer.tabs) {
								if (k>viewer.cursor.x/viewer.cursor.columnWidth) {
									newX = (k-1)*viewer.cursor.columnWidth
									break;
								}
							}
							if (newX == -1)
								newX = (viewer.cursor.maxColumnWidth-1)*viewer.cursor.columnWidth
							viewer.cursor.x = newX*/
							break;
	
						default:
							console.warn('CTRL',buffer[i]);
					}
				}
			}
		}
		if (this.textBuffer != null) {
			this.send(subscription,'text',this.textBuffer.join(''))
			this.textBuffer = null
		}
	} catch(e) {
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
	ttys[id] = TTYOpenAssistant.prototype.opencmd("/bin/login",["-f","root"]);
	future.result = { tty_id: id, pid:ttys[id].pid };
	
	var that = this;
	ttys[id][1].on('data', function(data) {
		that.parse(subscription,data);
	});
	
};

TTYOpenAssistant.prototype.opencmd=function(cmd,args,callback) {

	var fileds = binding.openpty();
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