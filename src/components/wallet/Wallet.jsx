import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Wallet.css";
import Slider from "react-input-slider";
import Logo from "../../store/logo/alpha.png";

function Wallet() {
  // tab option state
  const [isTabActive, setTabActive] = useState(false);

  const [getStakeValue, setStakeValue] = useState(0);
  const [getWeeksValue, setWeeksValue] = useState({ x: 52, xmax: 52 });

  const flexible = () => {
    setTabActive(true);
  };
  const locked = () => {
    setTabActive(false);
  };
  const stackeAmount = () => {
    setStakeValue(getStakeValue);
  };


  const data = 1 + (1 / 52) * getWeeksValue.x;

  // APR value
  let apr;
  if(getWeeksValue.x <= 2){
    apr = 80;
  }else{
    apr = 80 + ( (getWeeksValue.x - 2) * (190-80)) / 50;
  }

  return (
    <div className="wallet-box">
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <Row className="align-items-center">
              <Col lg={8}>
                <div className="wallet-content">
                  <div className="wallet-tab">
                    <ul className="d-flex">
                      <li>
                        <button
                          onClick={flexible}
                          className={
                            isTabActive ? "btn w-100 active" : "btn w-100"
                          }
                        >
                          Flexible
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={locked}
                          className={
                            isTabActive ? "btn w-100" : "btn w-100 active"
                          }
                        >
                          Locked
                        </button>
                      </li>
                    </ul>
                  </div>
                  {isTabActive ? (
                    <div className="flexible-content pt-4">
                      <ul className="d-flex align-align-items-center justify-content-between">
                        <li>Amount</li>
                        <li>
                          Balance: <span>0.0</span>
                        </li>
                      </ul>
                      <Form className="my-4">
                        <Form.Control
                          onChange={stackeAmount}
                          type="number"
                          value={getStakeValue}
                          placeholder="Enter amount to stake"
                        />
                      </Form>
                      <p>
                        Est. APR: <span>90.21%</span>
                      </p>
                      <div className="flexible-bottom-content text-center mt-4">
                        <p>
                          Be aware that there are always risks associated with
                          staking contracts.You assume all responsibility.
                        </p>
                      </div>
                      <button className="btn w-100 mt-5">Approve</button>
                    </div>
                  ) : (
                    <div className="locked-content pt-4">
                      <ul className="d-flex align-align-items-center justify-content-between">
                        <li>
                          Lock for: <b>{getWeeksValue.x} weeks</b>
                        </li>
                        <li>
                          Weight: <b>{data.toFixed(2)}</b>
                        </li>
                      </ul>
                      <div>
                        <Slider
                          className="my-4"
                          axis="x"
                          x={getWeeksValue.x}
                          onChange={({ x }) =>
                            setWeeksValue((getWeeksValue) => ({
                              ...getWeeksValue,
                              x,
                            }))
                          }
                          step="1"
                          xmax={52}
                          styles={{
                            track: {
                              backgroundColor: "#696969",
                            },
                            active: {
                              backgroundColor: "#28272D",
                            },
                            thumb: {
                              width: 20,
                              height: 20,
                            },
                            disabled: {
                              opacity: 0.5,
                            },
                          }}
                        />
                      </div>

                      <ul className="d-flex align-align-items-center justify-content-between">
                        <li>Amount</li>
                        <li>
                          Balance: <span>0.0</span>
                        </li>
                      </ul>
                      <Form className="my-4">
                        <Form.Control
                          onChange={stackeAmount}
                          type="number"
                          value={getStakeValue}
                          placeholder="Enter amount to stake"
                        />
                      </Form>
                      <p>
                        Est. APR: <span>{apr}%</span>
                      </p>
                      <div className="flexible-bottom-content text-center mt-4">
                        <p>
                          Be aware that there are always risks associated with
                          staking contracts.You assume all responsibility.
                        </p>
                      </div>
                      <button className="btn w-100 mt-5">Approve</button>
                    </div>
                  )}
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
  );
}

export default Wallet;
