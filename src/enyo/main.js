enyo.kind({
	
  	name: "wTerm.Main",
	kind: enyo.HFlexBox,
	pack: 'center',
  	
  	components: [
		{kind: "AppMenu", components: [
			{caption: "Show Keyboard", onclick: "showKeyboard"}
		]},
		{layoutKind: enyo.VFlexLayout, pack: 'end', components: [
			{kind: 'Button', caption: 'Esc', style: 'width: 60px; height: 60px;', onclick: 'buttonEsc'},
			//{kind: 'Button', caption: 'Ctrl', style: 'width: 60px; height: 60px;'},
			//{kind: 'Button', caption: 'Alt', style: 'width: 60px; height: 60px;'},
		]},
		{kind: 'wTerm.tty', name: 'tty'},
		{layoutKind: enyo.VFlexLayout, pack: 'center', components: [
			{flex: 1},
			{layoutKind: enyo.HFlexLayout, components: [
				{kind: 'Button', caption: 'Ins', style: 'width: 60px; height: 60px;', onclick: 'buttonIns'},
				{kind: 'Button', caption: 'Home', style: 'width: 60px; height: 60px;', onclick: 'buttonHome'},
				{kind: 'Button', caption: 'PgUp', style: 'width: 60px; height: 60px;', onclick: 'buttonPgUp'},
			]},
			{layoutKind: enyo.HFlexLayout, components: [
				{kind: 'Button', caption: 'Del', style: 'width: 60px; height: 60px;', onclick: 'buttonDel'},
				{kind: 'Button', caption: 'End', style: 'width: 60px; height: 60px;', onclick: 'buttonEnd'},
				{kind: 'Button', caption: 'PgDn', style: 'width: 60px; height: 60px;', onclick: 'buttonPgDn'},
			]},
			{flex: 1},
			{layoutKind: enyo.HFlexLayout, components: [
				{flex: 1},
				{kind: 'Button', caption: 'Up', style: 'width: 60px; height: 60px;', onclick: 'buttonUp'},
				{flex: 1},
			]},
			{layoutKind: enyo.HFlexLayout, components: [
				{kind: 'Button', caption: 'Left', style: 'width: 60px; height: 60px;', onclick: 'buttonLeft'},
				{kind: 'Button', caption: 'Down', style: 'width: 60px; height: 60px;', onclick: 'buttonDown'},
				{kind: 'Button', caption: 'Right', style: 'width: 60px; height: 60px;', onclick: 'buttonRight'},
			]},
			{flex: 1}
		]},
  	],
  	
  	rendered: function() {
  		this.inherited(arguments)
  		enyo.keyboard.setManualMode(true)
		this.showKeyboard()
	},

	showKeyboard: function() {
		enyo.keyboard.show(0)
	},

	buttonUp: function() {
		this.$.tty.writeString('\033[A')
	},

	buttonLeft: function() {
		this.$.tty.writeString('\033[D')
	},

	buttonDown: function() {
		this.$.tty.writeString('\033[B')
	},

	buttonRight: function() {
		this.$.tty.writeString('\033[C')
	},

	buttonEsc: function() {
		this.$.tty.writeString('\033')
	},

	buttonHome: function() {
		this.$.tty.writeString('\033[1~')
	},

	buttonEnd: function() {
		this.$.tty.writeString('\033[4~')
	},

	buttonDel: function() {
		this.$.tty.writeString('\033[3~')
	},

	buttonIns: function() {
		this.$.tty.writeString('\033[2~')
	},

	buttonPgUp: function() {
		this.$.tty.writeString('\033[5~')
	},

	buttonPgDn: function() {
		this.$.tty.writeString('\033[6~')
	},

})
