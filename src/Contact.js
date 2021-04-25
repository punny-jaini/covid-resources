import { Card, Row, Col } from "antd";
import insta from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import car from "./assets/car.jpg"

const Seeker = () => {
    return (
        <div style={{margin: '2%'}}>
            <Card title="Fight Against COVID">
                We are a group of students, influencers and simply others who are doing whatever they can to help fight this
                pandemic together. This is a database of resources collected through various modes including manual contacts,
                whatsapp, instagram and twitter. <br /><b>Please note: </b> 
                Everyone is running out of stock, capacity and resources so if you find numbers that are switched off/busy or not picking up, move on to the next one.
            </Card>
            <Card title="Our Team">
                <Row gutter={[{ sm: 14, md: 20, lg: 24 }, 16]}>
                    <Col sm={7} md={10} lg={12}>
                    A huge shoutout to <a href="https://www.instagram.com/covidaidresources/" target="blank">Covid Aid Resources</a> for working day and night to provide help to those who need it in these times of crisis.
                    </Col>
                    <Col sm={7} md={10} lg={12} style={{textAlign: "right"}}>
                    <a href="https://www.instagram.com/covidaidresources/" target="blank">
                        <img src={car} width="30%" style={{minWidth:'50px', maxWidth: '80px'}} alt="C.A.R." />
                    </a>
                    </Col>
                </Row>
            </Card>
            <Card title="Contact us">
                <Row gutter={[{ sm: 14, md: 20, lg: 24 }, 16]}>
                    <Col sm={7} md={10} lg={12}>
                    We are doing our best to continuously keep this updated, any help is much appreciated, please send us as many verified links as you can and share actively!
                    <br />
                    <a href='https://forms.gle/GznUPJ7s5ZwZSsreA'>Reach out and join us!</a><br />
                    Contact: <a href={`tel:+916397973267`}>6397973267</a>{' | '}
                    <a href={`tel:+917354302000`}>7354302000</a>
                    </Col>
                    <Col sm={7} md={10} lg={12}>
                        <Row gutter={[{ sm: 6, md: 8, lg: 16 }, 16]}>
                        <Col sm={3} md={4} lg={8} style={{textAlign: "right"}}>
                        <a href="https://www.instagram.com/lakshay.agrawal/" target="blank">
                            <img src={insta} width="30%" style={{minWidth:'50px'}} alt="instagram" />
                        </a>
                        </Col>
                        <Col sm={3} md={4} lg={8} style={{textAlign: "right"}}>
                        <a href="https://www.linkedin.com/in/lakshay-agrawal-1515231a0/" target="blank">
                            <img src={linkedin} width="30%" style={{minWidth:'50px'}} alt="linkedin" />
                        </a>
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Seeker