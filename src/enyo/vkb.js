enyo.kind({
	
	name: "vkb",
  	kind: 'VFlexBox',
  	flex: 1,
  	width: '100%',
  	
	shift: 1,
	ctrl: 2,
	alt: 4,
	fn: 8,
	caps: 16,
  	
  	published: {
		tty: null,
		mode: 0
  	},

  	components: [
  		{layoutKind: 'HFlexLayout', pack: 'center', components: [
  			{kind: 'vkbKey', content: '~<br>`', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '!<br>1', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '@<br>2', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '#<br>3', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '$<br>4', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '%<br>5', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '^<br>6', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '&<br>7', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '*<br>8', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '(<br>9', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: ')<br>0', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '_<br>-', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '+<br>=', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'Bksp', flex: 1, ontouchstart: 'btnClick'},
  		]},
  		{layoutKind: 'HFlexLayout', pack: 'center', components: [
  			{kind: 'vkbKey', content: 'Tab', flex: 1, ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'q', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'w', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'e', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'r', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 't', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'y', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'u', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'i', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'o', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'p', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '{<br>[', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '}<br>]', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '|<br>\\', ontouchstart: 'btnClick'},
  		]},
  		{layoutKind: 'HFlexLayout', pack: 'center', components: [
  			{kind: 'vkbKey', content: 'Caps Lock', toggling: true, flex: 1, ontouchstart: 'toggleCaps'},
  			{kind: 'vkbKey', content: 'a', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 's', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'd', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'f', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'g', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'h', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'j', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'k', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'l', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: ':<br>;', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '\"<br>\'', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'Enter', flex: 1, ontouchstart: 'btnClick'},
  		]},
  		{layoutKind: 'HFlexLayout', pack: 'center', components: [
  			{kind: 'vkbKey', content: 'Shift', flex: 1, ontouchstart: 'shiftDown', ontouchend: 'shiftUp'},
  			{kind: 'vkbKey', content: 'z', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'x', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'c', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'v', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'b', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'n', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'm', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '<<br>,', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '><br>.', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: '?<br>/', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'Up', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'Esc', ontouchstart: 'btnClick'},
  		]},
  		{layoutKind: 'HFlexLayout', pack: 'center', components: [
  			{kind: 'vkbKey', content: 'Ctrl', ontouchstart: 'ctrlDown', ontouchend: 'ctrlUp'},
  			{kind: 'vkbKey', content: 'Fn', ontouchstart: 'fnDown', ontouchend: 'fnUp'},
  			{kind: 'vkbKey', content: 'Alt', ontouchstart: 'altDown', ontouchend: 'altUp'},
  			{kind: 'vkbKey', content: 'Space', flex: 4, ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'Left', ontouchstart: 'btnClick'},
			{kind: 'vkbKey', content: 'Down', ontouchstart: 'btnClick'},
  			{kind: 'vkbKey', content: 'Right', ontouchstart: 'btnClick'},
  		]},
  	],
  	
	btnClick: function(inSender, inEvent) {
		var key = inSender.content.split('<br>').reverse()
		switch (key[0]) {
			case 'Tab':
				this.tty.writeString('\x09')
				break
			case 'Up':
				this.tty.writeString('\033[A')
				break
			case 'Down':
				this.tty.writeString('\033[B')
				break
			case 'Left':
				this.tty.writeString('\033[D')
				break
			case 'Right':
				this.tty.writeString('\033[C')
				break
			case 'Enter':
				this.tty.writeString('\x0a')
				break
			case 'Esc':
				this.tty.writeString('\x1b')
				break
			case 'Bksp':
				this.tty.writeString('\x08')
				break
			case 'Space':
				this.tty.writeString(' ')
				break
			default:
				if (this.mode == this.ctrl) {
					var base = key[0].toUpperCase().charCodeAt(0)
					if (base > 63 && base < 96) {
						this.warn(String.fromCharCode(base-64))
						this.tty.writeString(String.fromCharCode(base-64))
					}
				} else if (this.mode == this.caps || this.mode == this.shift) {
					if (key.length>1) {
						this.tty.writeString(key[1])
					} else {
						this.tty.writeString(key[0].toUpperCase())
					}
				} else {
					this.tty.writeString(key[0])
				}
		}
		
	},
	
	// Handle special modifier key states here

	toggleCaps: function(inSender, inEvent) {
		if (inSender.down )
			this.mode += this.caps
		else
			this.mode -= this.caps
	},
	
	shiftDown: function() {
		this.mode += this.shift
	},
	
	shiftUp: function() {
		this.mode -= this.shift
	},
	
	fnDown: function() {
		this.mode += this.fn
	},
	
	fnUp: function() {
		this.mode -= this.fn
	},
	
	altDown: function() {
		this.mode += this.alt
	},
	
	altUp: function() {
		this.mode -= this.alt
	},
	
	ctrlDown: function() {
		this.mode += this.ctrl
	},
	
	ctrlUp: function() {
		this.mode -= this.ctrl
	}
	
})
