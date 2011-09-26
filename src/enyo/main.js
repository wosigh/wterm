enyo.kind({
	
  	name: "wTerm.Main",
	kind: enyo.VFlexBox,
	align: 'center',
  	
  	components: [
		{kind: "AppMenu", components: [
			{caption: "Show Keyboard"}
		]},
		{kind: "ApplicationEvents", onKeypress: 'keyPress'},
		/*{layoutKind: enyo.VFlexLayout, pack: 'end', components: [
			{kind: 'Button', caption: 'Esc', style: 'width: 60px; height: 60px;', onclick: 'buttonEsc'},
			//{kind: 'Button', caption: 'Ctrl', style: 'width: 60px; height: 60px;'},
			//{kind: 'Button', caption: 'Alt', style: 'width: 60px; height: 60px;'},
		]},*/

		/*{layoutKind: enyo.VFlexLayout, pack: 'center', components: [
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
		]},*/
  	],
  	
  	initComponents: function() {
        this.inherited(arguments)
        this.createComponent({kind: 'wTerm.tty', name: 'tty'})
		this.createComponent({kind: 'wTerm.vkb', name: 'vkb', tty: this.$.tty})
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

	keyClicker: function(chr) {
		this.$.tty.writeString(chr)
		this.warn(chr,chr.charCodeAt(0))
	}
})
