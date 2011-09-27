enyo.kind({
	
  	name: "wTerm.Main",
	kind: enyo.VFlexBox,
	align: 'center',

  	initComponents: function() {
        this.inherited(arguments)
        this.createComponent({kind: 'wTerm.tty', name: 'tty'})
		this.createComponent({kind: 'wTerm.vkb', name: 'vkb', tty: this.$.tty})
    }
    
})
