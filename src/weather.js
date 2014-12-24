$(document).ready(function() {
	$.getJSON('http://www.myweather2.com/developer/forecast.ashx?uac=lPJ6yq.VXI&output=json&query=me1', function(data) {

		$('.outsidetemp').text((data['weather']['curren_weather'][0]['temp']));
		$('.outsideweather').text((data['weather']['curren_weather'][0]['weather_text']));

		console.log(data['weather']['curren_weather'][0]['temp']);

	})
})