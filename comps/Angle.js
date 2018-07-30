import React, { Component } from 'react';

import css from '../styles/angle.css';
import ScrollPercentage from 'react-scroll-percentage'


export default class Angle extends React.Component {
    state = {
        percentage: 0
    }
    render() {
        return (
            <div className={css.Angle} style={{
                clipPath: `polygon(0 ${85 -  (this.state.percentage * 85)}%, 100% ${0}%, 100% 100%, 0 100%)`,
                backgroundColor: this.props.color,
                zIndex: "500",
                height: '8vh',
                marginTop: '-8vh'
                

            }}>

                <ScrollPercentage onChange={(percentage, inView) => {
                    this.setState({
                        percentage: percentage.toPrecision(2)
                    })
                    console.log(this.state.percentage, 'Angle')

                }} >
                </ScrollPercentage>

            </div>
        )
    }
}


  {/*  transform: 'translateY(-10vh)',
                marginBottom: '-10vh' */}