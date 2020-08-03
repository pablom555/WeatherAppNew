import React from 'react';
import PropTypes from 'prop-types';
import Typografy from '@material-ui/core/Typography';
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi';
import { IconContext } from 'react-icons';

const validState = ["sunny", "rain", "fog", "cloudy", "cloud"]

const stateByName = {
    sunny: WiDaySunny,
    rain: WiRain,
    fog: WiDayFog,
    cloudy: WiDayCloudy,
    cloud: WiCloud
}

const renderIconByState = state => {
    const Icon = stateByName[state]
    return <Icon/>
}

const Weather = ({ temperature, state }) => {
    return (
        <div>

            <IconContext.Provider value={{size: '5em'}}>
                {renderIconByState(state)}
            </IconContext.Provider>

            <Typografy display="inline" variant="h3">{temperature}</Typografy>

        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validState).isRequired,
}

export default Weather
