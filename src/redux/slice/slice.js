import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name:'weather',
    initialState:{
        weathers:{
        location:"Delhi",
        temp:"20",
        humidity:"13",
        windspeed:"4",
    rain:''}
    },
    reducers: {
        fetchData : (state, action)=>{
            state.weathers.location = action.payload.name;
            state.weathers.temp = action.payload.main.temp;
            state.weathers.humidity = action.payload.main.humidity;
            state.weathers.windspeed = action.payload.wind.speed;
            state.weathers.rain = action.payload.weather.main;
        }
    }
    
});

export const {
    fetchData
} = weatherSlice.actions;

export default weatherSlice.reducer