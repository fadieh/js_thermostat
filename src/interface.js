$(document).ready(function() {
	var thermostat = new Thermostat;

	$('.temp').text(thermostat.temperature);

	$('.increase_temperature').on('click', function() {
	$('.temp').text(thermostat.increaseTemp()); });
	
	$('.decrease_temperature').on('click', function() {
	$('.temp').text(thermostat.decreaseTemp()); });
});