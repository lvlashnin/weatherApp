import React, { Component } from 'react';
import './App.css';
import Titles from './Titles'
import Form from './Form';
import Weather from './Weather';

const API_KEY ='1cd8359be73c9ae2115d2cf2f813cc25'

class App extends Component {
  
  state = {
    country: undefined,
    city: undefined,
    temperature: undefined, 
    humidity: undefined,
    description: undefined,
    error: undefined     
  }

  getWeather = async (e) => {
    e.preventDefault()
    const country = e.target.elements.country.value
    const city = e.target.elements.city.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country},${city}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()   
    if (city&&country){
      console.log(data)
      this.setState({
        country: data.sys.country,
        city: data.name,
        temperature: data.main.temp, 
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })      
    } else{
      this.setState({
        country: undefined,
        city: undefined,
        temperature: undefined, 
        humidity: undefined,
        description: undefined,
        error: "Введите Страну и Город"
      })
    }
  }

  render() {
    return (
      <div>      
      <Titles/>
      <Form getWeather={this.getWeather}/>
      <Weather
          temperature={this.state.temperature}
          country={this.state.country}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
         />     
      </div>
    );
  }
}

export default App;
