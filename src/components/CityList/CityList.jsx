import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CityInfo from './../CityInfo';
import Weather from './../Weather';


const renderCityAndCountry = onClickCity => cityAndCountry => {

    const { city, country } = cityAndCountry

    return (
        <li key={city} onClick={onClickCity}>

            <Grid container alignItems="center" justify="center">
                <Grid item xs={12} md={8}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Weather temperature={10} state="cloud" />
                </Grid>
            </Grid>
            
        </li>
    )
}

const CityList = ({ cities, onClickCity }) => {
    return (
        <ul>
            {cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))}
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
