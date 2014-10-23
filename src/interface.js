function ThermostatView(element) {
	this.el = $(element);
	this.thermostat = new Thermostat;
	this.el.text(this.thermostat.temperature);
	// now can create methods that'll do the binding for us. binding methods to html.
	this.bindTo('.increase_temperature', this.thermostat, this.thermostat.increaseTemp);
};

ThermostatView.prototype.bindTo = function(selector, obj, func) {
	$(selector).on('click', function() {
		$('.temp').text(func.call(obj)); 
	});
};

$(document).ready(function() {
	new ThermostatView('.temp')

	// $('.temp').text(thermostat.temperature);

	// $('.increase_temperature').on('click', function() {
	// $('.temp').text(thermostat.increaseTemp()); });

	// $('.decrease_temperature').on('click', function() {
	// $('.temp').text(thermostat.decreaseTemp()); });

	// $('.reset').on('click', function() {
	// thermostat.resetTemperature();
	// $('.temp').text(thermostat.temperature); });
});