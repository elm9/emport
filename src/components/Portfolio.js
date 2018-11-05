import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Parallax, Background } from 'react-parallax';
import FitText from 'react-fittext';
import Async from './images/async.jpg';
import Async2 from './images/async2.jpg';
import Meme from './images/socialmemedia.jpg';
import Meme2 from './images/socialmemedia2.jpg';
import Democracy from './images/democracy.jpg';
import Democracy2 from './images/democracy2.jpg';
import CodeReview from './images/codereview.jpg';
import CodeReview2 from './images/codereview2.jpg';
import StarWars from './images/starwars.jpg';
import StarWars2 from './images/starwars2.jpg';

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
                <FitText compressor={2}>
                <Col sm={12} md={12} lg={12}><h2 style={{ fontFamily: "'Cinzel', serif", margin: '10px'}}>ABOUT ME</h2></Col>
                </FitText>
            </Row>
            <Row>
                <FitText compressor={2.5}>
                <Col sm={12}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif" }}>I’m a full-stack web developer currently living in Northern Virginia. I have a culinary background and I have retooled to create beautiful, dynamic, and user-friendly websites. I earned a certificate from the George Washington University School of Professional Studies in Full-Stack Web Development.</p>
                </Col>
                </FitText>
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
                <FitText compressor={3}>
                <Col sm={12}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", }}>Browser Based Technologies (JavaScript, HTML5, CSS3, jQuery), Website Deployment (AWS, Heroku, GitHub), Databases (MySQL, MongoDB), Server-side Development (Node.JS, React, Express.js), ES6, Git, NPM, Yarn, Bootstrap</p>
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

        {/* PORTFOLIO */}
        <Container style={{ padding: '20px'}}>
            <Row>
                <FitText compressor={2}>
                <Col sm={12} md={12} lg={12}><h2 style={{ fontFamily: "'Cinzel', serif", margin: '10px'}}>PORTFOLIO</h2></Col>
                </FitText>
            </Row>

            <Container style={{ padding: '10px', margin: '5px', backgroundColor:'rgba(246, 241, 182, 0.43)' }}>
                
                <Row>
                    <Col sm={12}>
                    <FitText compressor={3}>
                    <h3 style={{ fontFamily: "'Cinzel', serif", margin: '10px' }} >Asyncronous Functions Demonstration</h3>
                    </FitText>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <img  style={{ width: '95%', margin: '10px', border: '10px', padding: '10px', alignContent:'center'}} src={Async} resizeMode="contain" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FitText compressor={3.5}>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }} >about</p>
                        </FitText>
                    </Col>
                </Row>
                <Row>   
                    <Col sm={12}>
                        <img style={{ width: '95%', margin: '10px', border: '10px', padding: '10px', alignContent:'center'}} src={Async2} />
                    </Col>
                </Row>
               
            </Container>

            <Container style={{ padding: '10px', margin: '5px', backgroundColor:'rgba(246, 241, 182, 0.43)' }}>
                
                <Row>
                    <Col sm={12}>
                    <FitText compressor={3}>
                    <h3 style={{ fontFamily: "'Cinzel', serif", margin: '10px' }} >Social Memedia</h3>
                    </FitText>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <img  style={{ width: '95%', margin: '10px', border: '10px', padding: '10px', alignContent:'center'}} src={Meme} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FitText compressor={3.5}>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }} >about</p>
                        </FitText>
                    </Col>
                </Row>
                <Row>   
                    <Col sm={12}>
                        <img style={{ width: '95%', margin: '10px', border: '10px', padding: '10px', alignContent:'center'}} src={Meme2} />
                    </Col>
                </Row>
               
            </Container>

            <Container style={{ padding: '10px', margin: '5px', backgroundColor:'rgba(246, 241, 182, 0.43)' }}>
                
                <Row>
                    <Col sm={12}>
                    <FitText compressor={3}>
                    <h3 style={{ fontFamily: "'Cinzel', serif", margin: '10px' }} >Democracy For Sale</h3>
                    </FitText>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <img  style={{ width: '95%', margin: '10px', border: '10px', padding: '10px', alignContent:'center'}} src={Democracy} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FitText compressor={3.5}>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }} >about</p>
                        </FitText>
                    </Col>
                </Row>
                <Row>   
                    <Col sm={12}>
                        <img style={{ width: '95%', margin: '10px', border: '10px', padding: '10px', alignContent:'center'}} src={Democracy2} />
                    </Col>
                </Row>
               
            </Container>

            <Container style={{ padding: '10px', margin: '5px', backgroundColor:'rgba(246, 241, 182, 0.43)' }}>
                
                <Row>
                    <Col sm={12}>
                    <FitText compressor={3}>
                    <h3 style={{ fontFamily: "'Cinzel', serif", margin: '10px' }} >Code Review Tool</h3>
                    </FitText>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <img  style={{ width: '95%', margin: '10px', border: '10px', padding: '10px', alignContent:'center'}} src={CodeReview} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FitText compressor={3.5}>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }} >about</p>
                        </FitText>
                    </Col>
                </Row>
                <Row>   
                    <Col sm={12}>
                        <img style={{ width: '95%', margin: '10px', border: '10px', padding: '10px', alignContent:'center'}} src={CodeReview2} />
                    </Col>
                </Row>
               
            </Container>

            <Container style={{ padding: '10px', margin: '5px', backgroundColor:'rgba(246, 241, 182, 0.43)' }}>
                
                <Row>
                    <Col sm={12}>
                    <FitText compressor={3}>
                    <h3 style={{ fontFamily: "'Cinzel', serif", margin: '10px' }} >Star Wars RPG Game</h3>
                    </FitText>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <img  style={{ width: '95%', margin: '10px', border: '10px', padding: '10px', alignContent:'center'}} src={StarWars} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FitText compressor={3.5}>
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }} >about</p>
                        </FitText>
                    </Col>
                </Row>
                <Row>   
                    <Col sm={12}>
                        <img style={{ width: '95%', margin: '10px', border: '10px', padding: '10px', alignContent:'center'}} src={StarWars2} />
                    </Col>
                </Row>
               
            </Container>
        </Container>


        <Parallax
            bgImage={require('./images/4.jpg')}
            bgImageAlt='an arial view of a neighborhood with red and blue houses '
            strength={600}
        >
        <div style={{height: '800px'}} />
        </Parallax>
        <Container style={{ padding: '20px', alignContent: 'center'}}>
            <Row style={{ align: 'center' }}>
                <FitText compressor={2}>
                <Col sm={12}><a target="_blank" rel="noopener noreferrer" href='https://github.com/elm9'> <h2 style={{ fontFamily: "'Cinzel', serif", margin: '10px', textAlign: 'center'}}>GitHub</h2></a></Col>
                {/* <Col sm={12} ><a style={{ textAlign: 'center', margin: '20px' }} href='https://github.com/elm9'> <img style={{ width: '70px' }} src={GitHubLogo} /> </a></Col> */}
                </FitText>
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
                <Col sm={12} md={12} lg={12}><p style={{fontSize: 'small', textAlign: 'center'}}>Images by <a href={'https://www.pexels.com/@pok-rie-33563'}>Pok Rie</a></p></Col>
            </Row>
        </Container>
    </div>
);




export default Portfolio;