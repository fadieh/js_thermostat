function Thermostat() {

	this.temperature = 20
	this.temperatureRange = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
};

Thermostat.prototype.increaseTemp = function() {
	return this.temperature = this.temperature + 1
	
};

Thermostat.prototype.decreaseTemp = function() {
	if (this.temperature > 10)
	return this.temperature = this.temperature - 1
	else this.temperature = 10
};