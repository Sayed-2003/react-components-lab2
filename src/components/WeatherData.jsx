import WeatherIcon from './WeatheIcon'
import './WeatherForecast.css'

function WeatherData({ day, conditions, time,img,imgAlt }) {
    return (
        <div className="weather">
            <h2> {day} </h2>
            <WeatherIcon img={img} imgAlt={imgAlt} />
            <p><span>conditions:  </span> {conditions} </p>
            <p><span>time:</span>  {time}  </p>
        </div>

    )
}

export default WeatherData