enyo.kind({
	
  	name: "wTerm.Main",
  	kind: enyo.VFlexBox,
  	align: 'center',
  	
  	components: [
		{kind: "AppMenu", components: [
			{caption: "Show Keyboard", onclick: "showKeyboard"}
		]},
		{kind: 'wTerm.tty', name: 'tty', flex: 1}
  	],
  	
  	rendered: function() {
  		this.inherited(arguments)
  		enyo.keyboard.setManualMode(true)
		this.showKeyboard()
	},

	showKeyboard: function() {
		enyo.keyboard.show(0)
	}
	
})
