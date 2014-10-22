function Thermostat() {

	this.powerSaver = true
	this.temperature = 20
	this.temperatureRange = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
};

Thermostat.prototype.increaseTemp = function() {
	if (this.temperature < 32)
	return this.temperature = this.temperature + 1
	else this.temperature = 32
	
};

Thermostat.prototype.decreaseTemp = function() {
	if (this.temperature > 10)
	return this.temperature = this.temperature - 1
	else this.temperature = 10
};

Thermostat.prototype.resetTemperature = function () {
	return this.temperature = 20
}