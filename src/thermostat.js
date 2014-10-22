function Thermostat() {

	this.temperature = 
	this.startTemperature = 20
	this.temperatureRange = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
};

Thermostat.prototype.increaseTemp = function() {
	this.temperature = 21
};