import React from 'react';
import Chart from 'chart.js';
import Form from './components/form';

import './App.css';

const API_KEY = '74f6da0e224e8b06ceeab76751e9e222';
class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined,
	};
	getWeather = async e => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
		);
		const data = await api_call.json();
		if (city && country) {
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: '',
			});
			var lineChartData = {
				labels: ['Low', 'Current', 'High'],
				datasets: [
					{
						label: '',
						borderColor: '#2757a0',
						pointBackgroundColor: '#ffffff',
						pointRadius: 5,
						data: [data.main.temp_min, data.main.temp, data.main.temp_max],
					},
				],
			};
			var ctx = document.getElementById('myChart').getContext('2d');
			Chart.defaults.global.defaultFontFamily = 'Open Sans';
			Chart.defaults.global.defaultFontSize = '17';
			var myLineChart = new Chart(ctx, {
				type: 'line',
				data: lineChartData,
				options: {
					tooltips: {
						titleSpacing: 5,
					},
					responsive: true,
					legend: {
						display: false,
					},
					scales: {
						yAxes: [
							{
								gridLines: {
									color: '#354657',
								},
								ticks: {
									fontColor: '#ffffff;',
									stepSize: 5,
								},
							},
						],
						xAxes: [
							{
								gridLines: {
									color: '#354657',
								},
								ticks: {
									fontColor: '#ffffff',
								},
							},
						],
					},
				},
			});
		} else {
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: 'Please enter city and country.',
			});
		}
	};

  render() {
		return (
      <div>
    <div>
     <Form getWeather={this.getWeather}
     
     temperature={this.state.temperature}
     humidity={this.state.humidity}
	 city={this.state.city}
	 country={this.state.country}
	 description={this.state.description}
	 error={this.state.error}
     
     
     />
    </div>
    
    </div>
  );
};
};
export default App;