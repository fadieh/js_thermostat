describe ('Thermostat', function () {

	beforeEach(function(){
		thermostat = new Thermostat
	});

it ('it will have a range of temperatures', function(){
	expect(thermostat.temperature.length).toEqual(13)
});

it ('should be 20 degrees at the start', function(){
	expect(thermostat.startTemperature).toEqual(20)
});

});
