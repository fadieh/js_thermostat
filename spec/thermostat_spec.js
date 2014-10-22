describe ('Thermostat', function () {

	beforeEach(function(){
		thermostat = new Thermostat
	});

it ('it will have a range of temperatures', function(){
	expect(thermostat.temperatureRange.length).toEqual(23)
});

it ('can increase the temperature by 1', function(){
	expect(thermostat.temperature).toEqual(20)
	thermostat.increaseTemp(1)
	expect(thermostat.temperature).toEqual(21)
});

it ('can decrease the temperature by 1', function(){
	thermostat.increaseTemp(1)
	expect(thermostat.temperature).toEqual(21)
	thermostat.decreaseTemp(1)
	expect(thermostat.temperature).toEqual(20)
});

it ('minimum temperature is 10', function(){
	thermostat.decreaseTemp(1)
	thermostat.decreaseTemp(1)
	thermostat.decreaseTemp(1)
	thermostat.decreaseTemp(1)
	thermostat.decreaseTemp(1)
	thermostat.decreaseTemp(1)
	thermostat.decreaseTemp(1)
	thermostat.decreaseTemp(1)
	thermostat.decreaseTemp(1)
	thermostat.decreaseTemp(1)
	thermostat.decreaseTemp(1)
	expect(thermostat.temperature).toEqual(10)
});

it ('maximum temperature is 32', function(){
		thermostat.increaseTemp(1)
		thermostat.increaseTemp(1)
		thermostat.increaseTemp(1)
		thermostat.increaseTemp(1)
		thermostat.increaseTemp(1)
		thermostat.increaseTemp(1)
		thermostat.increaseTemp(1)
		thermostat.increaseTemp(1)
		thermostat.increaseTemp(1)
		thermostat.increaseTemp(1)
		thermostat.increaseTemp(1)
		thermostat.increaseTemp(1)
		thermostat.increaseTemp(1)
		expect(thermostat.temperature).toEqual(32)
});

it ('power saving is on by default', function(){
	expect(thermostat.powerSaver).toEqual(true)
});

it ('can reset the temperature back to 20', function() {
	thermostat.increaseTemp(1)
	thermostat.resetTemperature()
	expect(thermostat.temperature).toEqual(20)
});

it ('can turn power saver off', function(){
	thermostat.turnPowerSaverOff()
	expect(thermostat.powerSaver).toEqual(false)
});

it ('can turn power saver back on', function(){
	thermostat.turnPowerSaverOff()
	thermostat.turnPowerSaverOn()
	expect(thermostat.powerSaver).toEqual(true)
})

});
