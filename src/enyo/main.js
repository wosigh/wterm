enyo.kind({
	
	name: "wTerm",
	kind: enyo.VFlexBox,
	align: 'center',

  	initComponents: function() {
        this.inherited(arguments)
        this.createComponent({kind: 'tty', name: 'tty'})
		this.createComponent({kind: 'vkb', name: 'vkb', tty: this.$.tty})
    }
    
})
