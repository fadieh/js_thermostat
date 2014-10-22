function Thermostat() {

	this.powerSaver = true
	this.temperature = 20
	this.colour = 'green'
};

Thermostat.prototype.increaseTemp = function() {
	if ((this.temperature < 32) && (this.powerSaver === false)) 
	{ this.increaseTempBy1() }
	else if ((this.temperature < 25) && (this.powerSaver === true))
	{ this.increaseTempBy1() }
	else if ((this.temperature === 25) && (this.powerSaver === true)) 
	{ this.powerSaverMaxTemp() }
	else this.maxTemperature()
};

Thermostat.prototype.increaseTempBy1 = function () {
	this.temperature = this.temperature + 1
}

Thermostat.prototype.decreaseTempby1 = function() {
	this.temperature = this.temperature - 1
}

Thermostat.prototype.powerSaverMaxTemp = function () {
	this.temperature = 25
}

Thermostat.prototype.minimumTemp = function () {
	this.temperature = 10
}

Thermostat.prototype.maxTemperature = function () {
	this.temperature = 32
}

Thermostat.prototype.decreaseTemp = function() {
	if (this.temperature > 10)
	{ this.decreaseTempby1() }
	else this.minimumTemp()
};

Thermostat.prototype.resetTemperature = function () {
	return this.temperature = 20
}

Thermostat.prototype.turnPowerSaverOff = function () {
	this.powerSaver = false
}

Thermostat.prototype.turnPowerSaverOn = function () {
	this.powerSaver = true
}