import WeatherData from './WeatherData'
import './WeatherForecast.css'

function Weather({ day, img, imgAlt, conditions, time }) {
    return (
        // <div className="weather">
        //     <h2> {day} </h2>
        //     <img src={img} alt={imgAlt} />
        //     <p><span>conditions:  </span> {conditions} </p>
        //     <p><span>time:</span>  {time}  </p>
        // </div>

        <WeatherData day={day} img={img} imgAlt={imgAlt} conditions={conditions} time={time}/>

    )
}

export default Weather