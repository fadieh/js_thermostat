describe ('Thermostat', function () {

	beforeEach(function(){
		thermostat = new Thermostat
	});

it ('can increase the temperature by 1', function(){
	thermostat.temperature = 20
	thermostat.increaseTemp(1)
	expect(thermostat.temperature).toEqual(21)
});

it ('can decrease the temperature by 1', function(){
	thermostat.temperature = 21
	thermostat.decreaseTemp(1)
	expect(thermostat.temperature).toEqual(20)
});

it ('minimum temperature is 10', function(){
	thermostat.temperature = 10
	thermostat.decreaseTemp
	expect(thermostat.temperature).toEqual(10)
});

it ('maximum temperature is 32', function(){
	thermostat.temperature = 32
	thermostat.increaseTemp
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

it ('can only go up to 25 if power saving is on', function(){
	thermostat.temperature = 25
	thermostat.increaseTemp()
	expect(thermostat.temperature).toEqual(25)
})

it ('can go up to 32 if power saving is off', function(){
	thermostat.powerSaver = false
	thermostat.temperature = 31
	thermostat.increaseTemp()
	thermostat.increaseTemp()
	expect(thermostat.temperature).toEqual(32) 
})

it ('below 18 is green', function(){
	thermostat.temperature = 17
	thermostat.setColour()
	expect(thermostat.colour).toEqual('green')
})

it ('18 - 24 is yellow', function(){
	thermostat.temperature = 20
	thermostat.setColour()
	expect(thermostat.colour).toEqual('yellow')
})

it ('25 and above is red', function(){
	thermostat.temperature = 25
	thermostat.setColour()
	expect(thermostat.colour).toEqual('red')
})

it ('if turn power saver on 26 or above, reverts back to 25.', function(){
	thermostat.temperature = 27
	thermostat.turnPowerSaverOn()
	expect(thermostat.temperature).toEqual(25)

})

it ('can turn celcius to fahrenheit', function(){
	thermostat.temperature = 20
	thermostat.convertToFahrenheit()
	expect(thermostat.temperature).toEqual(68+'°F')
})

it ('can turn fahrenheit to celcius', function(){
	thermostat.temperature = 68
	thermostat.convertToCelcius()
	expect(thermostat.temperature).toEqual(20+'°C')
})

// it ('cant convert to celcius when its already celcius', function(){

// });

// it ('cant convert to fahrenheit when its already fahrenheit', function(){
	
// });

// });
