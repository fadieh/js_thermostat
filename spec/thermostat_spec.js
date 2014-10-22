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

});
