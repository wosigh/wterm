enyo.kind({
	
  	name: "wTerm.Main",
  	kind: enyo.VFlexBox,
  	
  	components: [
		{kind: 'wTerm.tty', name: 'tty', flex: 1}
  	],
  	
  	rendered: function() {
  		this.inherited(arguments)
  		enyo.keyboard.setManualMode(true)
  		enyo.keyboard.show(0)
  	}
	
})
