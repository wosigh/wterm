enyo.kind({
	name: 'Key',
	kind: enyo.Button,
	className: 'enyo-button key',
	allowHtml: true,
	
	published: {
		down: false,
		depressed: false,
		toggling: false,
		disabled: false,
	},
	
	events: {
		ontouchstart: '',
		ontouchend: ''
	},

  	rendered: function() {
  		this.hasNode();
        this.node.ontouchstart = enyo.bind(this,'handleTouchstart')
        //this.node.ontouchmove = this.doTouchMove;
        this.node.ontouchend = enyo.bind(this,'handleTouchend')
  	},
  	
  	handleTouchstart: function() {
  		if (!this.disabled) {
  			if (this.toggling)
	  			this.setDown(!this.down)
  			else
  				this.setDown(true)
	  		return this.doTouchstart()
	  	}
  	},
  	
  	handleTouchend: function() {
  		if (!this.disabled && !this.toggling) {
	  		this.setDown(false)
	  		return this.doTouchend()
	  		
	  	}
  	},
	
	mouseoverHandler: function() {},                                                                    
    mouseoutHandler: function() {},                                                                
    mousedownHandler: function() {},
	mouseupHandler: function() {},
	flickHandler: function() {},
	clickHandler: function() {},
	dragstartHandler: function() {},
	dragoverHandler: function() {},
	dragfinishHandler: function() {}
	
})

enyo.kind({
	
  	name: "wTerm.vkb",
  	kind: 'VFlexBox',
  	flex: 1,
  	width: '100%',
  	
  	capsOn: false,
  	shiftOn: false,
  	fnOn: false,
  	altOn: false,
  	ctrlOn: false,
  	
  	published: {
  		tty: null
  	},

  	components: [
  		//{kind: enyo.Control, allowHtml: true, name: 'vkb'}
  		{layoutKind: 'HFlexLayout', pack: 'center', components: [
  			{kind: 'Key', content: '~<br>`', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '!<br>1', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '@<br>2', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '#<br>3', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '$<br>4', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '%<br>5', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '^<br>6', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '&<br>7', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '*<br>8', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '(<br>9', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: ')<br>0', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '_<br>-', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '+<br>=', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'Bksp', flex: 1, ontouchstart: 'btnClick'},
  		]},
  		{layoutKind: 'HFlexLayout', pack: 'center', components: [
  			{kind: 'Key', content: 'Tab', flex: 1, ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'q', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'w', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'e', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'r', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 't', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'y', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'u', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'i', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'o', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'p', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '{<br>[', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '}<br>]', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '|<br>\\', ontouchstart: 'btnClick'},
  		]},
  		{layoutKind: 'HFlexLayout', pack: 'center', components: [
  			{kind: 'Key', content: 'Caps Lock', toggling: true, flex: 1, ontouchstart: 'toggleCaps'},
  			{kind: 'Key', content: 'a', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 's', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'd', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'f', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'g', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'h', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'j', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'k', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'l', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: ':<br>;', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '\"<br>\'', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'Enter', flex: 1, ontouchstart: 'btnClick'},
  		]},
  		{layoutKind: 'HFlexLayout', pack: 'center', components: [
  			{kind: 'Key', content: 'Shift', flex: 1, ontouchstart: 'shiftDown', ontouchend: 'shiftUp'},
  			{kind: 'Key', content: 'z', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'x', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'c', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'v', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'b', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'n', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'm', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '<<br>,', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '><br>.', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: '?<br>/', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'Up', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'Esc', ontouchstart: 'btnClick'},
  		]},
  		{layoutKind: 'HFlexLayout', pack: 'center', components: [
  			{kind: 'Key', content: 'Ctrl', ontouchstart: 'ctrlDown', ontouchend: 'ctrlUp'},
  			{kind: 'Key', content: 'Fn', ontouchstart: 'fnDown', ontouchend: 'fnUp'},
  			{kind: 'Key', content: 'Alt', ontouchstart: 'altDown', ontouchend: 'altUp'},
  			{kind: 'Key', content: 'Space', flex: 4, ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'Left', ontouchstart: 'btnClick'},
			{kind: 'Key', content: 'Down', ontouchstart: 'btnClick'},
  			{kind: 'Key', content: 'Right', ontouchstart: 'btnClick'},
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
				if (this.ctrlOn && !this.fnOn && !this.altOn && !this.shiftOn) {
					var base = key[0].toUpperCase().charCodeAt(0)
					if (base > 63 && base < 96) {
						this.warn(String.fromCharCode(base-64))
						this.tty.writeString(String.fromCharCode(base-64))
					}
				} else if ((this.capsOn && !this.shiftOn) || (!this.capsOn && this.shiftOn)) {
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
	
	toggleCaps: function() {
		this.capsOn = !this.capsOn
	},
	
	shiftDown: function() {
		this.shiftOn = true
	},
	
	shiftUp: function() {
		this.shiftOn = false
	},
	
	fnDown: function() {
		this.fnOn = true
	},
	
	fnUp: function() {
		this.fnOn = false
	},
	
	altDown: function() {
		this.altOn = true
	},
	
	altUp: function() {
		this.altOn = false
	},
	
	ctrlDown: function() {
		this.ctrlOn = true
	},
	
	ctrlUp: function() {
		this.ctrlOn = false
	},
})
