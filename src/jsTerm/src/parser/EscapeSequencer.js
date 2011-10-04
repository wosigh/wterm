
	this.modeSet = function(params) {
		for (var i in params)
			switch (params[i]) {
				case '2':
					enyo.warn('KAM','Locked')
					break;
				case '4':
					enyo.warn('IRM','Insert')
					viewer.control.modes['insert'] = true
					break;
				case '12':
					enyo.warn('SRM','Off')
					break;
				case '20':
					enyo.warn('LMN','New line')
					viewer.control.modes['newline'] = true
					break;
				case '25':
					enyo.warn('DECTCEM','Show Cursor')
					viewer.cursor.enabled = true
					viewer.cursorShow()
					break;
				case '?1':
					enyo.warn('DECCKM','Application')
					break;
				case '?3':
					viewer.resize(25,127)
					break;
				case '?4':
					enyo.warn('DECSCLM','Smooth')
					break;
				case '?5':
					enyo.warn('DECSCNM','Reverse')
					viewer.control.modes['reverse'] = true
					_currentForegroundColor = _defaultBackgroundColor;
					_currentBackgroundColor = _defaultForgroundColor;
					viewer.foregroundColorChanged(_currentForegroundColor);
					viewer.backgroundColorChanged(_currentBackgroundColor);
					break;
				case '?6':
					enyo.warn('DECOM','Relative')
					viewer.control.modes['origin'] = 1
					break;
				case '?7':
					enyo.log('DECAWM','On')
					//viewer.control.modes['wrap'] = true
					break;
				case '?8':
					enyo.warn('DECARM','On')
					break;
				case '?18':
					enyo.warn('DECPFF','On')
					break;
				case '?19':
					enyo.warn('DECPEX','Full screen')
					break;
			}
	};
	
	this.modeReset = function(params) {
		for (var i in params)
			switch (params[i]) {
				case '2':
					enyo.warn('KAM','Unlocked')
					break;
				case '4':
					enyo.warn('IRM','Replace')
					viewer.control.modes['insert'] = false
					break;
				case '12':
					enyo.warn('SRM','On')
					break;
				case '20':
					enyo.warn('LMN','Linefeed')
					viewer.control.modes['newline'] = false
					break;
				case '25':
					enyo.warn('DECTCEM','Hide Cursor')
					viewer.cursor.enabled = false
					viewer.cursorHide()
					break;
				case '?1':
					enyo.warn('DECCKM','Cursor')
					break;
				case '?2':
					enyo.warn('DECANM','VT52')
					break;
				case '?3':
					viewer.resize(25,80)
					break;
				case '?4':
					enyo.warn('DECSCLM','Jump')
					break;
				case '?5':
					enyo.warn('DECSCNM','Normal')
					viewer.control.modes['reverse'] = false
					_currentForegroundColor = _defaultForgroundColor;
					_currentBackgroundColor = _defaultBackgroundColor;
					viewer.foregroundColorChanged(_currentForegroundColor);
					viewer.backgroundColorChanged(_currentBackgroundColor);
					break;
				case '?6':
					enyo.warn('DECOM','Absolute')
					viewer.control.modes['origin'] = 0
					break;
				case '?7':
					enyo.log('DECAWM','Off')
					//viewer.control.modes['wrap'] = false
					break;
				case '?8':
					enyo.warn('DECARM','Off')
					break;
				case '?18':
					enyo.warn('DECPFF','Off')
					break;
				case '?19':
					enyo.warn('DECPEX','Scrolling region')
					break;
			}
	};
	
	this.deviceAttributes = function(params) {
		viewer.control.writeString('\033')
		//viewer.control.writeString('\033[?1;2c'); // VT100 with Advanced Video Option
		//viewer.control.writeString('\033[?1;0c'); // VT101 with No Options
		//viewer.control.writeString('\033[?6c'); // VT102
		//viewer.control.writeString('\033[?60;1;2;6;8;9;15;c'); // VT220
	};
	
	this.eraseDisplay = function(params) {
		if (params[0] == '1')
			viewer.eraseUp();
		else if (params[0] == '2')
			viewer.eraseScreen();
		else
			viewer.eraseDown();
	};
	
	this.eraseLine = function(params) {
		if (params[0] == '1')
			viewer.eraseStartOfLine();
		else if (params[0] == '2')
			viewer.eraseLine();
		else
			viewer.eraseEndOfLine();
	};
	
	this.scrollScreen = function(params) {
		if (params.length == 2)
			viewer.scrollScreen(parseInt(params[0]),parseInt(params[1]));
		else
			viewer.scrollScreen(1,viewer.cursor.maxLineHeight);
	};
	
	this.cursorPosition = function(params) {
		if (params[0]=='') {
			viewer.home()
		} else {
			var line = parseInt(params[0])
			var column = parseInt(params[1])
			viewer.reposition(column-1, line-1)
		}
	};
	
	this.deleteLines = function(params) {
		var lines = (params[0] == '') ? 1 : parseInt(params[0])
		viewer.deleteLines(lines)
	};

	this.dec8 = function(params) {
		if (params) {
			switch (params) {
				case '#':
					for (var i=0; i<viewer.cursor.maxLineHeight; i++) {
						for (var j=0; j<viewer.cursor.maxColumns; j++) {
							viewer.reposition(j,i)
							viewer.draw(69)
						}
					}
					viewer.reposition(0,i-1)
					break;
				default:
					enyo.warn('DEC 8', params)
			}
		} else {
			viewer.cursor.position.x = cursorBackup[0];
			viewer.cursor.position.y = cursorBackup[1];
			_currentForegroundColor = cursorBackup[2];
			_currentBackgroundColor = cursorBackup[3];
			_bold = cursorBackup[4];
			_reverse = cursorBackup[5];
			viewer.underline = cursorBackup[6];
			viewer.control.modes['charsetG0'] = cursorBackup[7];
			viewer.control.modes['charsetG1'] = cursorBackup[8];
			viewer.control.modes['charset'] = cursorBackup[9];
			viewer.foregroundColorChanged(_currentForegroundColor);
			viewer.backgroundColorChanged(_currentBackgroundColor);
		}
	};
	
	this.cursorUp = function(params) {
		var value = parseInt(params[0]) || 1
		viewer.cursor.position.y -= viewer.cursor.lineHeight*value
		if (viewer.cursor.position.y < (viewer.topMargin-1)*viewer.cursor.lineHeight)
			viewer.cursor.position.y = (viewer.topMargin-1)*viewer.cursor.lineHeight
	};
	
	this.cursorDown = function(params) {
		var value = parseInt(params[0]) || 1
		viewer.cursor.position.y += viewer.cursor.lineHeight*value
		if (viewer.cursor.position.y > (viewer.botMargin-1)*viewer.cursor.lineHeight)
			viewer.cursor.position.y = (viewer.botMargin-1)*viewer.cursor.lineHeight
	};
	
	this.cursorForward = function(params) {
		var value = parseInt(params[0]) || 1
		viewer.cursor.position.x += viewer.cursor.columnWidth*value
		if (viewer.cursor.position.x > viewer.cursor.columnWidth*(viewer.cursor.maxColumnWidth-1))
			viewer.cursor.position.x = viewer.cursor.columnWidth*(viewer.cursor.maxColumnWidth-1)
	};
	
	this.cursorBackward = function(params) {
		var value = parseInt(params[0]) || 1
		viewer.cursor.position.x -= viewer.cursor.columnWidth*value
		if (viewer.cursor.position.x < 0)
			viewer.cursor.position.x = 0
	};
	
	// Set Graphic Mode functions
	var _bold = false;
	var _reverse = false;

	var _boldColors = [BLACK_BOLD, RED_BOLD, GREEN_BOLD, YELLOW_BOLD, BLUE_BOLD, MAGENTA_BOLD, CYAN_BOLD, WHITE_BOLD];
	var _normalColors = [BLACK_NORMAL, RED_NORMAL, GREEN_NORMAL, YELLOW_NORMAL, BLUE_NORMAL, MAGENTA_NORMAL, CYAN_NORMAL, WHITE_NORMAL];		

	var _defaultForgroundColor = WHITE_NORMAL;
	var _defaultBackgroundColor = BLACK_NORMAL;
	var _currentForegroundColor = _defaultForgroundColor;
	var _currentBackgroundColor = _defaultBackgroundColor;
	
	var cursorBackup = [
		0,0,_defaultForgroundColor,_defaultBackgroundColor,false,false,false,'US','US',0
	];
	this.cursorSave = function(params) {
		cursorBackup = [
			viewer.cursor.position.x, viewer.cursor.position.y,
			_currentForegroundColor, _currentBackgroundColor, _bold, _reverse, viewer.underline,
			viewer.control.modes['charsetG0'], viewer.control.modes['charsetG1'],// ORIGIN MODE
			viewer.control.modes['charset']
		]
	};

	this.setGraphicsMode = function(params) {
		
		for(var i in params){
			
			var param = (params[i]=='') ? 0 : parseInt(params[i]);

			switch( param ) {

				/*  Reset */
				case 0:
					_bold = false;
					_reverse = false;
					_currentForegroundColor = _defaultForgroundColor;
					_currentBackgroundColor = _defaultBackgroundColor;
					viewer.foregroundColorChanged(_currentForegroundColor);
					viewer.backgroundColorChanged(_currentBackgroundColor);
					viewer.underline = false;
					break;
				
				/*  Bold ON */
				case 1:
					_bold = true;
					for( j=0; j<_normalColors.length; j++ ){
						if( _currentForegroundColor == _normalColors[j] )
							_currentForegroundColor = _boldColors[j];
					}
					viewer.foregroundColorChanged(_currentForegroundColor);
					break;
				
				/* Dim */
				case 2:
					_bold = false;
					for( j=0; j<_normalColors.length; j++ ){
						if( _currentForegroundColor == _boldColors[j] )
							_currentForegroundColor = _normalColors[j];
					}
					viewer.foregroundColorChanged(_currentForegroundColor);
					break;
				
				/* Set foreground color */
				case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37:
					var position = param - 30
					if(_reverse) {
						_currentBackgroundColor = _normalColors[position];
						viewer.backgroundColorChanged(_currentBackgroundColor);
					}else {
						_currentForegroundColor = (_bold) ? _boldColors[position] : _normalColors[position];
						viewer.foregroundColorChanged(_currentForegroundColor);
					}
					break;

				case 4:
					viewer.underline = true;
					break;
				
				/* Set background color */
				case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47:
					var position = param - 40
					if(_reverse) {
						_currentForegroundColor = (_bold) ? _boldColors[position] : _normalColors[position];
						viewer.foregroundColorChanged(_currentForegroundColor);
					} else {
						_currentBackgroundColor = _normalColors[position];
						viewer.backgroundColorChanged(_currentBackgroundColor);
					}
					break;
				
				/* Blink ON */
				case 5:
					break;
				
				/* Reverse ON */
				case 7:
					_reverse = true;
					var tmp = _currentBackgroundColor;
					_currentBackgroundColor = _currentForegroundColor;
					_currentForegroundColor = tmp;
					viewer.foregroundColorChanged(_currentForegroundColor);
					viewer.backgroundColorChanged(_currentBackgroundColor);
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

	this.cursorFromTop = function(params) {
		viewer.cursor.position.y = viewer.cursor.lineHeight*parseInt(params[0]);
	};

	this.cursorFromLeft = function(params) {
		viewer.cursor.position.x = viewer.cursor.columnWidth*parseInt(params[0]);
	};

	this.deleteChar = function(params) {
		if (params.length == 0) params = ['1']
		for (var i=0; i<parseInt(params[0]); i++)
			viewer.control.writeString('\x7f')
	};

	this.eraseChar = function(params) {
		if (params.length == 0) params = ['1']
		for (var i=0; i<parseInt(params[0]); i++)
			viewer.drawCharacter(SPACE);
	};

	this.insertLine = function(params) {
		for (var i=0; i<parseInt(params[0]); i++)
			viewer.control.writeString('\xA')
	};

	this.deviceStatusReport = function(params) {
		switch (params[0]) {
			case '5':
				viewer.control.writeString('\033[0n')
				break;
			case '6':
				var col = "" + viewer.cursor.x * viewer.cursor.columnWidth;
				var row = "" + viewer.cursor.y * viewer.cursor.lineHeight;
				viewer.control.writeString('\033['+row+';'+col+'R')
				break;
		}
	};

	this.reset = function(params) {
		viewer.reset()
	};

	this.softreset = function(params) {
		if (params[0] == '!') {
			viewer.reset()
		}
	};

	this.charsetUK = function(params) {
		if (params == '(')
			viewer.control.modes['charsetG0'] = 'UK'
		else if (params == ')')
			viewer.control.modes['charsetG1'] = 'UK'
	};

	this.charsetUS = function(params) {
		if (params == '(')
			viewer.control.modes['charsetG0'] = 'US'
		else if (params == ')')
			viewer.control.modes['charsetG1'] = 'US'
	};

	this.charsetSpecial = function(params) {
		if (params == '(')
			viewer.control.modes['charsetG0'] = 'Special'
		else if (params == ')')
			viewer.control.modes['charsetG1'] = 'Special'
	};

	this.charsetAlt = function(params) {
		if (params == '(')
			viewer.control.modes['charsetG0'] = 'Alt'
		else if (params == ')')
			viewer.control.modes['charsetG1'] = 'Alt'
	};

	this.charsetAltSpecial = function(params) {
		if (params == '(')
			viewer.control.modes['charsetG0'] = 'AltSpecial'
		else if (params == ')')
			viewer.control.modes['charsetG1'] = 'AltSpecial'
	};

	this.index = function(params) {
		viewer.moveDown(1)
	};

	this.reverseIndex = function(params) {
		viewer.moveUp(1)
	};

	this.nextLine = function(params) {
		viewer.moveDown(1)
		viewer.carriageReturn()
	};

	this.setTabStop = function(params) {
		var col = viewer.cursor.position.x/viewer.cursor.columnWidth+1
		viewer.tabs[col] = true
	};

	this.clearTabStops = function(params) {
		if (params[0]=='' || parseInt(params[0])==0) {
			var col = viewer.cursor.position.x/viewer.cursor.columnWidth+1
			delete viewer.tabs[col]
		} else if (parseInt(params[0])==3) {
			viewer.tabs = []
		}
	};
	
	this.init();

};