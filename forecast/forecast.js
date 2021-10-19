let query = document.getElementById('query');
let button = document.getElementById('btn');
let api_key = 'd6e7a7089fa4208ceae3d463cca6a0b4';
let country = document.querySelector('.country');
let date = document.querySelector('.date');
let temp = document.querySelector('.temp');
let weather = document.querySelector('.weather');
let sunnyImg = document.querySelector('#sunny');
let cloudImg = document.querySelector('#cloud');
let rainyImg = document.querySelector('#rain');
let humid = document.querySelector('.humid')
function getQuery() {
	console.log(query.value);
}
button.addEventListener('click',function(){
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+query.value+'&appid='+api_key)
	.then(response => response.json())
	.then(data => {
		let	name = data['name'];
		country.innerHTML = name;
		let date1 = new Date();
		console.log(data)
		date.innerHTML = "Date: " +date1.toLocaleString("en-US")
		let tem = data['main']['temp'] - 273;
		temp.innerHTML = "Temperature: " + Math.floor(tem);
		weather.innerHTML = "Weather: " +data['weather'][0]['main'];
		query.value = '';
		humid.innerHTML = "Humidity: " + data['main']['humidity']
		if (data['weather'][0]['main'] === "Clear") {
			sunnyImg.style = 'display: inline-block';
			cloudImg.style = 'display: none';
			rainyImg.style = 'display: none';
		} else if (data['weather'][0]['main'] === "Clouds") {
			sunnyImg.style = 'display: none';
			rainyImg.style = 'display: none';
			cloudImg.style = 'display: inline-block';
		} else if (data['weather'][0]['main'] === "Rain") {
			sunnyImg.style = 'display: none';
			cloudImg.style = 'display: none';
			rainyImg.style = 'display: inline-block';
		}
		let mobile_view = window.matchMedia("(max-width: 768px)");
		if (mobile_view.matches) {
    		document.querySelector('.bg').style = 'background: blue;margin-left:-18px;height:100px;'
    		if (data['weather'][0]['main'] === "Clear") {
			sunnyImg.style = 'display: inline-block;height: 100px;';
			cloudImg.style = 'display: none;height: 100px;';
		} else if (data['weather'][0]['main'] === "Clouds") {
			sunnyImg.style = 'display: none;height: 100px;';
			cloudImg.style = 'display: inline-block;height: 100px;';
		}
		}

	})
})