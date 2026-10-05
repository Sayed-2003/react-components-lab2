// src/App.jsx

import Weather from "./components/WeatherForecast";

const App = () => {

  const weatherForecasts = [
  {
    day: 'Mon',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6qv644eYcScY7DvY4XIGIaTek143NBKyQSX1g2lO9-SqODieHb3G0T8&s=10',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'https://www.iconpacks.net/icons/2/free-moon-icon-2304-thumb.png',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6JBQmQUPi47XbJDoxX9PvYE3qaSn38mEhkd9NjyGzA&s',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsOiU_6i9CmAIE3NiRgXwXXajqksZ3iibEaw9PDVx4Q&s=10',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFXwFdjYAgwqUG64HXcBYpXKQWFn3eMekNIsECoKX3Q&s=10',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];


  return (
    <>

    <h1>Local Weather</h1>

    <section>
    {weatherForecasts.map((oneWeather)=>
    <div key={oneWeather.day}>
      <Weather {...oneWeather} />
    </div>
    )}
    </section>

    </>

  
    
  );
}

export default App
