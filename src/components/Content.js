import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Modal from 'react-awesome-modal';

import ReplateImg from './images/replate.jpg';
import AsyncImg from './images/async.jpg';
import DemocracyImg from './images/DemNow.jpg';
import MemeImg from './images/socialMemedia.jpg';
import CodeImg from './images/codeReview.jpg';
import StarWarsImg from './images/StarWars.jpg';

class Content extends Component {

    constructor (props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <Container>
                <Col sm={12} md={6} lg={4}><image onClick={() => this.openModal()} src={ReplateImg} style={{ height: '300px', width: '300px' }} /></Col>
                <Modal
                    visible={this.state.visible}
                    width='500'
                    effect='fadeInUp'
                    onClickAway={() => this.closeModal()}
                >
                    <h1>REPLATE</h1>
                    <p>technologies used</p>
                    <a href='https://replate.herokuapp.com/'>Website</a>
                    <a href='https://github.com/elm9/replate'>GitHub</a>
                    <button onClick={() => this.closeModal()}>Close</button>
                </Modal>
                <Col sm={12} md={6} lg={4}><image src={AsyncImg} style={{ height: '300px', width: '300px' }} /></Col>
                <Modal
                    visible={this.state.visible}
                    width='500'
                    effect='fadeInUp'
                    onClickAway={() => this.closeModal()}
                >
                    <h1>Asynchronous Demonstration</h1>
                    <p>technologies used</p>
                    <a href='https://replate.herokuapp.com/'>Website</a>
                    <a href='https://github.com/elm9/replate'>GitHub</a>
                    <button onClick={() => this.closeModal()}>Close</button>
                </Modal>
                <Col sm={12} md={6} lg={4}><image src={DemocracyImg} style={{ height: '300px', width: '300px' }} /></Col>
                <Modal
                    visible={this.state.visible}
                    width='500'
                    effect='fadeInUp'
                    onClickAway={() => this.closeModal()}
                >
                    <h1>Democracy For Sale</h1>
                    <p>technologies used</p>
                    <a href='https://replate.herokuapp.com/'>Website</a>
                    <a href='https://github.com/elm9/replate'>GitHub</a>
                    <button onClick={() => this.closeModal()}>Close</button>
                </Modal>
                <Col sm={12} md={6} lg={4}><image src={MemeImg} style={{ height: '300px', width: '300px' }} /></Col>
                <Modal
                    visible={this.state.visible}
                    width='500'
                    effect='fadeInUp'
                    onClickAway={() => this.closeModal()}
                >
                    <h1>Social Memedia</h1>
                    <p>technologies used</p>
                    <a href='https://replate.herokuapp.com/'>Website</a>
                    <a href='https://github.com/elm9/replate'>GitHub</a>
                    <button onClick={() => this.closeModal()}>Close</button>
                </Modal>
                <Col sm={12} md={6} lg={4}><image src={CodeImg} style={{ height: '300px', width: '300px' }} /></Col>
                <Modal
                    visible={this.state.visible}
                    width='500'
                    effect='fadeInUp'
                    onClickAway={() => this.closeModal()}
                >
                    <h1>Code Review Tool</h1>
                    <p>technologies used</p>
                    <a href='https://replate.herokuapp.com/'>Website</a>
                    <a href='https://github.com/elm9/replate'>GitHub</a>
                    <button onClick={() => this.closeModal()}>Close</button>
                </Modal>
                <Col sm={12} md={6} lg={4}><image src={StarWarsImg} style={{ height: '300px', width: '300px' }} /></Col>
                <Modal
                    visible={this.state.visible}
                    width='500'
                    effect='fadeInUp'
                    onClickAway={() => this.closeModal()}
                >
                    <h1>Star Wars RPG Game</h1>
                    <p>technologies used</p>
                    <a href='https://replate.herokuapp.com/'>Website</a>
                    <a href='https://github.com/elm9/replate'>GitHub</a>
                    <button onClick={() => this.closeModal()}>Close</button>
                </Modal>
            </Container>
        )
    }
}

export default Content;