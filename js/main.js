function Character() {

	var that = this;

	this.maxpoints = ko.observable(40);
	this.max = 10;
	this.min = 1;

	this.st = ko.observable(5);
	this.pe = ko.observable(5);
	this.en = ko.observable(5);
	this.ch = ko.observable(5);
	this.ii = ko.observable(5);
	this.ag = ko.observable(5);
	this.lk = ko.observable(5);
};

var myChar = new Character();

var model = {
	pointsleft: ko.computed(function () {
		return myChar.maxpoints - myChar.st - myChar.pe - myChar.en - myChar.ch - myChar.ii - myChar.ag - myChar.lk;
	}),
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
