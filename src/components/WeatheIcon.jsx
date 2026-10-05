import './WeatherForecast.css'

function WeatherIcon({img, imgAlt}) {
    return (
            <img src={img} alt={imgAlt} />
        
    )
}

export default WeatherIcon