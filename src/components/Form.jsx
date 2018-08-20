import React from 'react'

const Form = (props) =>(
    <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="Страна..."/>
            <input type="text" name="country" placeholder="Город..."/>
            <button>Узнать погоду</button>
        </form>    
    </div>
)

export default Form;