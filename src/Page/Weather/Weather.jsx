import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import './weather.css'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../redux/slice/slice.js'
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import { LinearProgress } from '@mui/material';

const Weather = () => {
    const date = new Date();
    const presentDate = date.getDate();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];
    const presentDay = date.getDay()
    const day = days[presentDay];
    const currTime = new Date().toLocaleTimeString();
    const [locations, setLocations] = useState('');
    const [loading, setLoading]=useState(false);
    const dispatch = useDispatch();

    const sample = useSelector((state) => state.weathers.weathers);

    const weatherData = async () => {
        try {
            if(locations === ''){
                return;
            }else{
            setLoading(true);
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=b59f570a0d07270949c8dc6fe81e0a8d`);
            console.log(response.data)
            dispatch(fetchData(response.data));
            setLoading(false);
            }

        } catch (error) {
            toast.error(`${locations} is invalid Location`)
        }
    }

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            weatherData();
        }, 2000);
        return () => clearTimeout(debounceTimer);
    }, [locations]);

    return (
        <div className='main_container'>
            <div className='textfield'>
                <TextField id="filled-basic" label="🔍 Search" variant="filled"
                    onChange={(e) => setLocations(e.target.value)}
                    value={locations}
                    InputProps={{
                        style : {backgroundColor: 'rgb(166, 130, 224)', borderRadius : '20px', width: '40vw',}
                    }}
                />
            </div>
            <div className='time'>
                <h4 >{day}, {presentDate} {month}</h4>
                <h1 className='time2'>{currTime}</h1>
            </div>
            <CircularProgress value={loading}/>

            {
                loading ? (<h1>Loading...</h1>) : (  <div>
                <div className='img'>
                <div>
                    
                </div>
                <div className='location'>{sample.location}</div>
                <div className='temp'>{sample.temp}°C</div>
            </div>
            <div className='data'>
                <div className='humidity'> 💧 Humidity : {sample.humidity}%</div>
                <div className='windspeed'>༄.° Windspeed : {sample.windspeed}%</div>
            </div>
            </div>)
            }

          
        </div>
    )
}

export default Weather
