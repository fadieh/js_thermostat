describe ('Thermostat', function () {

	beforeEach(function(){
		thermostat = new Thermostat
	});

it ('it will have a range of temperatures', function(){
	expect(thermostat.temperature.length).toEqual(13)
})

});
