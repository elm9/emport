import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Parallax, Background } from 'react-parallax';
import FitText from 'react-fittext';

import GitHub from './images/github-logo.png';
import ReplateImg from './images/replate.jpg';
import AsyncImg from './images/async.jpg';
import DemocracyImg from './images/DemNow.jpg';
import MemeImg from './images/socialMemedia.jpg';
import CodeImg from './images/codeReview.jpg';
import StarWarsImg from './images/StarWars.jpg';


const Portfolio = () => (
    <div style={{ backgroundColor: 'rgba(246, 241, 182, 0.17)' }}>
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <FitText compressor={1}>
                    <h1 style={{ fontFamily: "'Cinzel', serif", textAlign: 'center' }}>EMILY MURPHY</h1>
                    </FitText>
                </Col>
            </Row>
        </Container>        
        <Parallax
            bgImage={require('./images/1.jpg')}
            bgImageAlt='an arial view of a sailboat on green water'
            strength={600}
        >
        <div style={{height: '800px' }} /> 
        </Parallax>
        <Container style={{ padding: '20px'}}>
            <Row>
                <FitText compressor={2.5}>
                <Col sm={10}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", margin: '10px', padding: '10px' }}>I’m a full-stack web developer currently living in Northern Virginia. From my background in culinary arts I have an eye for quality products and a mind for streamlined functionality.</p>
                </Col>
                </FitText>
                <Col sm={3} md={2} lg={2}>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/elm9' ><img style={{ width: '100px', margin: '10px', padding: '10px', alignContent:'center' }} src={GitHub} /></a>
                </Col>
            </Row>
        </Container>
        <Parallax
            bgImage={require('./images/2.jpg')}
            bgImageAlt='an arial view of two ships at port'
            strength={600}
        >
        <div style={{height: '800px'}} />
        </Parallax>
        <Container style={{ padding: '20px'}}>
            <Row>
                <FitText compressor={2}>
                <Col sm={12} md={12} lg={12}><h2 style={{ fontFamily: "'Cinzel', serif", margin: '10px'}}>SKILLS</h2></Col>
                </FitText>
            </Row>
            <Row>
                <FitText compressor={1.5}>
                <Col sm={4}>
                    <ul style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        <li>JavaScript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>jQuery</li>
                    </ul>
                </Col>
                </FitText>
                <FitText compressor={1.5}>
                <Col sm={4}>
                    <ul style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                    </ul>
                </Col>
                </FitText>
                <FitText compressor={1.5}>
                <Col sm={4}>
                    <ul style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        <li>MySQL</li>
                        <li>Heroku</li>
                        <li>Bootstrap</li>
                        <li>S3 and Route 53</li>
                    </ul>
                </Col>
                </FitText>
            </Row>
        </Container>
        <Parallax
            bgImage={require('./images/3.jpg')}
            bgImageAlt='an arial view of docks leading up to houses'
            strength={600}
        >
        <div style={{height: '800px'}} />
        </Parallax>

        <Container style={{ padding: '20px' }}>
            <Row>
                <FitText compressor={2}>
                <Col sm={12} md={12} lg={12}><h2 style={{ fontFamily: "'Cinzel', serif", margin: '10px'}}>CERTIFICATION</h2></Col>
                </FitText>
            </Row>
            <Row>
                <FitText compressor={3}>
                <Col sm={12}>
                <br /> <br/>
                <p style={{ fontFamily: "'Montserrat', sans-serif", border: 'groove', borderColor: 'gold', margin: '20px', padding: '20px', textAlign: 'center' }} >
                    <big>The George Washington <br /> College of Professional Studies</big>
                    <br />
                    <italic>Full Stack Web Development Program</italic>
                    <br />
                    <small>August - November 2018</small>
                </p>
                <br />
                </Col>
                </FitText>
            </Row>
        </Container>

        <Parallax
            bgImage={require('./images/4.jpg')}
            bgImageAlt='an arial view of a neighborhood with red and blue houses '
            strength={600}
        >
        <div style={{height: '800px'}} />
        </Parallax>
                {/* PORTFOLIO */}
        <Container style={{ padding: '20px'}}>
            <Row>
                <FitText compressor={2}>
                <Col sm={12} md={12} lg={12}><h2 style={{ fontFamily: "'Cinzel', serif", margin: '10px'}}>PORTFOLIO</h2></Col>
                </FitText>
           
                <Col sm={12} md={6} lg={4} >
                    <a target="_blank" rel="noopener noreferrer" href='https://replate.herokuapp.com/'>
                        <img src={ReplateImg} style={{ height: '300px', width: '300px', padding: '25px' }} resizeMode="contain" />
                    </a>
                </Col>
                <Col sm={12} md={6} lg={4} >
                    <a target="_blank" rel="noopener noreferrer" href='https://all-things-async.herokuapp.com/'>
                        <img src={AsyncImg} style={{ height: '300px', width: '300px', padding: '25px' }} resizeMode="contain"/>
                    </a>
                </Col>
           
                <Col sm={12} md={6} lg={4} >
                    <a target="_blank" rel="noopener noreferrer" href='https://sheltered-scrubland-82709.herokuapp.com/index.html'>
                        <img src={DemocracyImg} style={{ height: '300px', width: '300px', padding: '25px' }} resizeMode="contain"/>
                    </a>
                </Col>
                <Col sm={12} md={6} lg={4} >
                    <a target="_blank" rel="noopener noreferrer" href='https://salty-waters-21692.herokuapp.com/'>
                        <img src={MemeImg} style={{ height: '300px', width: '300px', padding: '25px' }} resizeMode="contain"/>
                    </a>
                </Col>
            
                <Col sm={12} md={6} lg={4} >
                    <a target="_blank" rel="noopener noreferrer" href='https://elm9.github.io/Code_Review_Tool/'>
                        <img src={CodeImg} style={{ height: '300px', width: '300px', padding: '25px' }} resizeMode="contain"/>
                    </a>
                </Col>
                <Col sm={12} md={6} lg={4} >
                    <a target="_blank" rel="noopener noreferrer" href='https://elm9.github.io/RPGGame_StarWars/'>
                        <img src={StarWarsImg} style={{ height: '300px', width: '300px', padding: '25px' }} resizeMode="contain"/>
                    </a>
                </Col>
            </Row>
        </Container>
        
        <Parallax
            bgImage={require('./images/5.jpg')}
            bgImageAlt='an arial view of red rooftops'
            strength={600}
        >
        <div style={{height: '800px'}} />
        </Parallax>
        <Container>
            <Row>
                <Col sm={6}><a target="_blank" rel="noopener noreferrer" href='https://github.com/elm9'> <h2 style={{ fontFamily: "'Cinzel', serif", margin: '10px', textAlign: 'start'}}>GitHub</h2></a></Col>
                <Col sm={6}><p style={{fontSize: 'small', textAlign: 'end'}}>Images by <a href={'https://www.pexels.com/@pok-rie-33563'}>Pok Rie</a></p></Col>
            </Row>
        </Container>
    </div>
);




export default Portfolio;