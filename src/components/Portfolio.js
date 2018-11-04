import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Parallax, Background } from 'react-parallax';
import GitHubLogo from './images/github-logo.png';
import FitText from 'react-fittext';

const Portfolio = () => (
    <div>
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <FitText compressor={1}>
                    <h1 style={{ fontFamily: "'Cinzel', serif", textAlign: 'center', padding: 'none'}}>EMILY MURPHY</h1>
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
                <Col sm={12} md={12} lg={12}><h2 style={{ fontFamily: "'Cinzel', serif", margin: '10px'}}>ABOUT</h2></Col>
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
        </Container>


        <Parallax
            bgImage={require('./images/4.jpg')}
            bgImageAlt='an arial view of a neighborhood with red and blue houses '
            strength={600}
        >
        <div style={{height: '800px'}} />
        </Parallax>
        <Container style={{ padding: '20px'}}>
            <Row>
                <FitText compressor={2}>
                <Col sm={12} md={12} lg={12}><h2 style={{ fontFamily: "'Cinzel', serif", margin: '10px'}}>CONTACT</h2></Col>
                </FitText>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6}><a style={{ alignSelf: 'flex-end' }} href='https://github.com/elm9'> <img style={{ width: '80px' }} src={GitHubLogo} /> </a></Col>
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