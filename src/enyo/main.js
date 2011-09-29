enyo.kind({

	name: "wTerm",
	kind: enyo.VFlexBox,
	align: 'center',

	prefs: new Prefs(),

	components: [
		{kind: "AppMenu", components: [
			//{caption: "Preferences", onclick: "openPrefs"}
		]}
	],

  	initComponents: function() {
        this.inherited(arguments)
        this.createComponent({kind: 'tty', name: 'tty', prefs: this.prefs})
		this.createComponent({kind: 'vkb', name: 'vkb', tty: this.$.tty})
		this.createComponent({kind: 'Preferences', name: 'preferences', prefs: this.prefs, onClose: 'refresh'})
	},

	openPrefs: function() {
		this.$.preferences.openAtTopCenter()
	},

	refresh: function() {
	}

})
