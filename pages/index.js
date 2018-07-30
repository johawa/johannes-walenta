// ./pages/_document.js
import React, { Comopnent } from 'react';
import Link from 'next/link'
import Waypoint from 'react-waypoint';
import ScrollPercentage from 'react-scroll-percentage'


import css from '../styles/indexPage.css';
import Layout from '../comps/UI/Layout';

//Components
import Aux from '../hoc/Aux';
import Header from '../comps/Sections/Header';
import Skills from '../comps/Sections/Skills';
import Frameworks from '../comps/Sections/Frameworks';
import Projects from '../comps/Sections/Projects';
import Footer from '../comps/Sections/Footer';
import Angle from '../comps/Angle';

const PostLink = (props) => (
    <div className={css.ListItem}>
        <Link href={`/projects?id=${props.id}`}>
            <a>{props.title}</a>
        </Link>
        <style jsx>{`
        div {
          background-color: ${props.color};
          padding: 20px;
          
        }
        `}</style>
    </div>

)

class Index extends React.Component {
    state = {
        top: 0
    }

    SkillsEnter() {
        console.log('Skills entered')
    }

    SkillsLeave() {
        console.log('Skills left')
    }


    render() {
        return (
            <Aux>
                <Layout>

                    <Header />
                    <Angle color={'#A6ADA7'} />
                    <Skills />
                    <Angle color={'#CFCDB4'} />
                    <Frameworks />

                    <Projects />

                    <Footer />
                </Layout>
            </Aux>
        )
    }
}

export default Index;