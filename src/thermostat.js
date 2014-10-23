function Thermostat() {

	this.powerSaver = true
	this.temperature = 20
	this.colour = 'yellow'
	this.type = 'celcius'

};

Thermostat.prototype.increaseTemp = function() {
	if ((this.temperature < 32) && (this.powerSaver === false)) 
	{ this.increaseTempBy1() }
	else if ((this.temperature < 25) && (this.powerSaver === true))
	{ this.increaseTempBy1() }
	else if ((this.temperature === 25) && (this.powerSaver === true)) 
	{ this.powerSaverMaxTemp()}
	else if ((this.temperature ===25) && (this.powerSaver === false))
	{ this.increaseTempBy1() }
	else this.maxTemperatureReached()
	return this.temperature
};

Thermostat.prototype.decreaseTemp = function() {
	if (this.temperature > 10)
	{ this.decreaseTempby1() }
	else this.minimumTempReached()
	return this.temperature
};

Thermostat.prototype.increaseTempBy1 = function () {
	this.temperature = this.temperature + 1
	this.setColour()
};

Thermostat.prototype.decreaseTempby1 = function() {
	this.temperature = this.temperature - 1
	this.setColour()
};

Thermostat.prototype.powerSaverMaxTemp = function () {
	this.temperature = 25
};

Thermostat.prototype.minimumTempReached = function () {
	this.temperature = 10
};

Thermostat.prototype.maxTemperatureReached = function () {
	this.temperature = 32
};

Thermostat.prototype.resetTemperature = function () {
	this.temperature = 20
};

Thermostat.prototype.turnPowerSaverOff = function () {
	this.powerSaver = false
};

Thermostat.prototype.turnPowerSaverOn = function () {
	this.powerSaver = true
	this.powerSaverMaxTemp()
};

Thermostat.prototype.setColour = function () {
	if (this.temperature < 18)
	{ this.colour = 'green'}
	else if ((this.temperature > 17) && (this.temperature < 25))
	{ this.colour = 'yellow'}
	else 
	{ this.colour = 'red'}
};

Thermostat.prototype.convertToFahrenheit = function () {
	this.temperature = this.temperature * 9 / 5 + 32 + "°F"
	this.type = 'fahrenheit'
};

Thermostat.prototype.convertToCelcius = function () {
	this.temperature = (this.temperature - 32) * 5 / 9 + "°C"
	this.type = 'celcius'
};