import React from 'react';
import PropTypes from 'prop-types';
import Typografy from '@material-ui/core/Typography';

const CityInfo = ({ city, country }) => (
    <div>
        <Typografy display="inline" variant="h4">{city}, </Typografy>
        <Typografy display="inline" variant="h6">{country}</Typografy>
    </div>
)

CityInfo.propTypes = {
            city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
}

export default CityInfo;