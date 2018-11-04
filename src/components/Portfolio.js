import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <div>
            <h1>EMILY MURPHY</h1>
        </div>
        <Parallax
            bgImage={require('./images/1.jpg')}
            bgImageAlt='an arial view of a sailboat on green water'
            strength={600}
        >
        <div style={{height: '800px' }} /> 
        </Parallax>
        <div style={{height: '500px', padding: '20px'}}>
            <h1 style={{margin: '10px'}}>EMILY MURPHY</h1>
            
        </div>
        <Parallax
            bgImage={require('./images/2.jpg')}
            bgImageAlt='an arial view of two ships at port'
            strength={600}
        >
        <div style={{height: '800px'}} />
        </Parallax>
        <div style={{height: '500px', padding: '20px'}}>
            <h1 style={{margin: '10px'}}>EMILY MURPHY</h1>
            
        </div>
        <Parallax
            bgImage={require('./images/3.jpg')}
            bgImageAlt='an arial view of docks leading up to houses'
            strength={600}
        >
        <div style={{height: '800px'}} />
        </Parallax>
        <div style={{height: '500px', padding: '20px'}}>
            <h1 style={{margin: '10px'}}>EMILY MURPHY</h1>
            
        </div>
        <Parallax
            bgImage={require('./images/4.jpg')}
            bgImageAlt='an arial view of a neighborhood with red and blue houses '
            strength={600}
        >
        <div style={{height: '800px'}} />
        </Parallax>
        <div style={{height: '500px', padding: '20px'}}>
            <h1 style={{margin: '10px'}}>EMILY MURPHY</h1>
            
        </div>
        <Parallax
            bgImage={require('./images/5.jpg')}
            bgImageAlt='an arial view of roads, houses, and trees'
            strength={600}
        >
        <div style={{height: '800px'}} />
        </Parallax>
        <div>
            <p style={{fontSize: 'small'}}>Images by <a href={'https://www.pexels.com/@pok-rie-33563'}>Pok Rie</a></p>
        </div>
    </div>
);

export default Portfolio;