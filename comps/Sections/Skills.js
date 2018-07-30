import React, { Component } from 'react';

import css from '../../styles/Sections/skills.css';
import ScrollPercentage from 'react-scroll-percentage'
import SkillBar from '../SkillBar';

import Aux from '../../hoc/Aux';



export default class Skills extends React.Component {
    state = {
        percentage: 0.2
    }

    onChangePosition(percentage, inView) {       
        this.setState({
            percentage
        })
    }

    render() {
        let opac = '0.2'
        opac = this.state.percentage * 1.5
        let wd = 0
        wd = this.state.percentage * 2.5
        if (wd >= 1) {
            wd = 1
        }

        return (
            <Aux>
                <ScrollPercentage onChange={(percentage, inView) => this.onChangePosition(percentage.toFixed(2), inView)} />

                <div className={css.Skills__Left}>
                    <div className={css.Skills__Left_Wrapper} style={{opacity: opac}}>
                        <h3>SKILLBARS LEFT</h3>
                        <ul className={css.Skills__Ul}>
                            <li className={css.Skills__Li}>Okay</li>
                            <li className={css.Skills__Li}>Okay</li>
                            <li className={css.Skills__Li}>Okay</li>
                        </ul>
                        <SkillBar color={'#45aaf2'} width={`${wd * 80}%`} tag={'HTML'} />
                        <SkillBar color={'#f7b731'} width={`${wd * 50}%`} tag={'CSS'} />
                        <SkillBar color={'#2d98da'} width={`${wd * 70}%`} tag={'HTML'} />
                        <SkillBar color={'#fc5c65'} width={`${wd * 20}%`} tag={'HTML'} />
                        <SkillBar color={'#a55eea'} width={`${wd * 30}%`} tag={'HTML'} />
                    </div>
                </div>
                <div className={css.Skills__Right}>
                    <div className={css.Skills__Right_Wrapper} style={{opacity: opac}}>
                        <h3>SKILLBARS RIGHT</h3>
                        <ul className={css.Skills__Ul}>
                            <li className={css.Skills__Li}>Okay</li>
                            <li className={css.Skills__Li}>Okay</li>
                            <li className={css.Skills__Li}>Okay</li>
                        </ul>
                        <SkillBar color={'#45aaf2'} width={`${wd * 100}%`} tag={'HTML'} />
                        <SkillBar color={'#f7b731'} width={`${wd * 100}%`} tag={'CSS'} />
                        <SkillBar color={'#2d98da'} width={`${wd * 80}%`} tag={'HTML'} />
                        <SkillBar color={'#fc5c65'} width={`${wd * 60}%`} tag={'HTML'} />
                        <SkillBar color={'#a55eea'} width={`${wd * 50}%`} tag={'HTML'} />
                    </div>
                </div>
            </Aux>

        )
    }
}

{/*  <section className={css.Skills} id="Skills">
                <ScrollPercentage onChange={(percentage, inView) => this.onChangePosition(percentage, inView)}
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                > 
                
                </ScrollPercentage>*/}


