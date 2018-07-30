import React, { Component } from 'react';
import ScrollPercentage from 'react-scroll-percentage'

import css from '../../styles/Sections/header.css';
import Angle from '../Angle';


export default class Header extends React.Component {
    state = {
        percentage: 0
    }

    render() {
        return (

            <div className={css.Header}>         
              Header
            </div>
        )
    }
}
