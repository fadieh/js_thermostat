function Thermostat() {

	this.powerSaver = true
	this.temperature = 20
	this.colour = 'green'
};

Thermostat.prototype.increaseTemp = function() {
	if ((this.temperature < 32) && (this.powerSaver === false)) 
	{ return this.temperature = this.temperature + 1 }
	else if ((this.temperature < 25) && (this.powerSaver === true))
	{ return this.temperature = this.temperature + 1}
	else if ((this.temperature === 25) && (this.powerSaver === true)) 
	{ return this.temperature = 25 }
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

Thermostat.prototype.turnPowerSaverOff = function () {
	this.powerSaver = false
}

Thermostat.prototype.turnPowerSaverOn = function () {
	this.powerSaver = true
}