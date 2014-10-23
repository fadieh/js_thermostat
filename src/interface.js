function ThermostatView(element) {
	this.el = $(element);
	this.thermostat = new Thermostat;
	this.el.text(this.thermostat.temperature);
	// now can create methods that'll do the binding for us. binding methods to html.
	this.bindTo('.increase_temperature', this.thermostat, this.thermostat.increaseTemp);
	this.bindTo('.decrease_temperature', this.thermostat, this.thermostat.decreaseTemp);
	this.bindTo('.reset', this.thermostat, this.thermostat.resetTemperature);
	this.bindTo('.powersaver', this.thermostat, this.thermostat.turnPowerSaverOff);

};

ThermostatView.prototype.bindTo = function(selector, obj, func) {
	$(selector).on('click', function() {
	$('.temp').text(func.call(obj)); 
	});
};

$(document).ready(function() {
	new ThermostatView('.temp')

// We are binding an on click event on a selector whatever selector it is. Could be H1 and we’re going to replace on the H1, the text with the function call on the object we are passing through. Meaning, 

// So we’re going to bind on this element (+ button) this function of the thermostat. Meaning when you click on that thing, here. We’re going to call that function which is inside of the thermostat object. 

});