import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Banner.css'
import Logo from '../../store/logo/alpha.png'

function Banner() {
    return (
        <div className="banner-box">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Row className="align-items-center">
                            <Col lg={8}>
                                <div className="banner-content">
                                    <h2>Maximize yield by staking SUSHI for xSUSHI</h2>
                                    <p>For every swap on the exchange on every chain, 0.05% of the swap fees are distributed as SUSHI\nproportional to your share of the SushiBar. When your SUSHI is staked into the SushiBar, you recieve\nxSUSHI in return for voting rights and a fully composable token that can interact with other protocols.\nYour xSUSHI is continuously compounding, when you unstake you will
                                        receive all the originally deposited\nSUSHI and any additional from fees.</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="banner-img">
                                    <img src={Logo} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner
