describe ('Thermostat', function () {

	beforeEach(function(){
		thermostat = new Thermostat
	});

it ('it will have a range of temperatures', function(){
	expect(thermostat.temperatureRange.length).toEqual(13)
});

it ('should be 20 degrees at the start', function(){
	expect(thermostat.startTemperature).toEqual(20)
});

it ('can increase the temperature', function(){
	expect(thermostat.temperature).toEqual(20)
	thermostat.increaseTemp(1)
	expect(thermostat.temperature).toEqual(21)
});

});
