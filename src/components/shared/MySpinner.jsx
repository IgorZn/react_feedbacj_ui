import React from 'react';
import spinner from '../assets/ZKZg.gif'

function MySpinner(props) {
    return <img src={spinner} alt="Loading..." style={{width: '100px', margin: 'auto', display: 'block'}}/>;
}

export default MySpinner;