function Character() {
	var that = this;

	this.maxpoints = ko.observable(40);
	this.max = 10;
	this.min = 1;

	var special = {
		'st': 5,
		'pe': 5,
		'en': 5,
		'ch': 5,
		'ii': 5,
		'ag': 5,
		'lk': 5
	};

	for (prop in special) {
		console.log(prop);
		console.log(this);
		this[prop] = ko.observableWithRevert(special[prop]);
		this[prop].subscribe(function (value) {
			if (that.charpoints() > that.maxpoints()) {
				console.log(this);
				this.target.revert();
			}
		});
	}
	console.log(this);

	this.charpoints = ko.computed(function () {
		return that.st() + that.pe() + that.en() + that.ch() + that.ii() + that.ag() + that.lk();
	});

	this.pointsleft = ko.computed(function () {
		return 0;
	});
};

var myChar = new Character();

var model = {
	pointsleft: myChar.charpoints,
	dish: [
		{
			id: 'st',
			name: 'Strength',
			value: myChar.st,
			min: 1,
			max: 10,
			step: 1,
		},						
		{
			id: 'pe',
			name: 'Perception',
			value: myChar.pe,
			min: 1,
			max: 10,
			step: 1,
		},
		{
			id: 'en',
			name: 'Endurance',
			value: myChar.en,
			min: 1,
			max: 10,
			step: 1,
		},
		{
			id: 'ch',
			name: 'Charisma',
			value: myChar.ch,
			min: 1,
			max: 10,
			step: 1,
		},
		{
			id: 'in',
			name: 'Intelligence',
			value: myChar.ii,
			min: 1,
			max: 10,
			step: 1,
		},
		{
			id: 'ag',
			name: 'Agility',
			value: myChar.ag,
			min: 1,
			max: 10,
			step: 1,
		},
		{
			id: 'lk',
			name: 'Luck',
			value: myChar.lk,
			min: 1,
			max: 10,
			step: 1,
		},
	],
	skills: {
		disable: ko.observable(false),
		list: ko.observableArray([
			{ name: "Small Guns" },
			{ name: "Big Guns" },
			{ name: "Energy Weapons" },
			{ name: "Melee Weapons" },
			{ name: "Throwing" },
			{ name: "Unarmed" },
			{ name: "Doctor" },
			{ name: "First Aid" },
			{ name: "Lockpick" },
			{ name: "Repair" },
			{ name: "Science" },
		]),
		selected: ko.observableArray([])
	}
}

var main = {
	init: function () {
		console.log(myChar);
		ko.applyBindings(model);
	}
}

var syslog = {
	debug: 0,
	log: function (msg) {
		if (window.console) {
			console.log("LOG: " + msg);
		}
	},
}
