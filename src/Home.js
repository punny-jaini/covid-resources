import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';

const styles = {
    wrapper: {
        margin: 'auto',
        marginTop: '50px'
    },
    container: {

    },
    lottie: {
        maxWidth: '80%',
        maxHeight: '80%',
        margin: 'auto'
    },
    hero: {
        backgroundColor: 'white',
        marginBottom: '30px',
        padding: 'clamp(2%, 20px, 50px) clamp(3%, 20px, 50px) clamp(3%, 20px, 50px) clamp(3%, 20px, 50px)',
        borderRadius: '5px'
    },
    heroHeading: {
        fontSize: 'calc(16px + 1.5vw)',
        color: '#2F2F2F',
        marginBottom: '15px',
        fontWeight: '600'
    },
    heroCopy: {
        fontSize: 'calc(16px + 0.5vw)',
        color: '#454545',
        marginBottom: '5px'
    },
    helpCard: {
        padding: '15px 25px',
        borderRadius: '5px',
        marginBottom: '30px'
    },
    helpCardLottieContainer: {
        display: 'flex',
        marginBottom: '30px',
        flexWrap: 'wrap'
    },
    helpButton: {
        width: '100%',
        padding: '15px 20px',
        height: '60px',
        borderRadius: '10px',
        fontSize: '18px'
    }
}

const props = {
    background: "transparent",
    speed: "1",
    style: styles.lottie,
    loop: true,
    autoplay: true
}

const Home = () => {
    return (
        <div style={styles.wrapper}>
            <Row gutter={[{ sm: 16, md: 20, lg: 24 }, 16]}>
                <Col sm={8} md={10} lg={12} style={styles.container}>
                    <Card style={styles.helpCard}>
                        <Link to="/volunteer">
                            <div style={styles.helpCardLottieContainer}>
                                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_pk5mpw6j.json"  {...props} style={{ marginRight: '25px', flex: '1 0 30%' }} />
                                <div style={{ flex: '1 0 65%' }}>
                                    <h2 style={{ fontSize: 'calc(16px + 0.9vw)', color: "#2F2F2F", fontWeight: '600' }}>How can I help?</h2>
                                    <p style={{ fontSize: 'calc(16px + 0.1vw)', color: "#383838" }}>If you have any resource or leads available, then please click on 'Give Leads' below. Otherwise, please help us keep our database updated!</p>
                                </div>
                            </div>
                        </Link>
                            <Row style={{width: '100%'}}>
                            <Col style={{width: '49%', marginRight: '2%'}}>
                                <Link to="/volunteer">
                                <Button shape="round" size="large" type="primary" style={styles.helpButton}>Give Leads</Button>
                                </Link>
                            </Col>
                            <Col style={{width: '49%'}}>
                                <Link to="/login">
                                <Button shape="round" size="large" type="primary" style={styles.helpButton}>Help Verify</Button>
                                </Link>
                            </Col>
                            </Row>
                    </Card>
                </Col>
                <Col sm={8} md={10} lg={12} style={styles.container}>
                    <Card style={styles.helpCard}>
                        <Link to="/seeker">
                            <div style={styles.helpCardLottieContainer}>
                                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_vPnn3K.json"  {...props} style={{ marginRight: '25px', flex: '1 0 30%' }} />
                                <div style={{ flex: '1 0 65%' }}>
                                    <h2 style={{ fontSize: 'calc(16px + 0.9vw)', color: "#2F2F2F", fontWeight: '600' }}>Let us help you!</h2>
                                    <p style={{ fontSize: 'calc(16px + 0.1vw)', color: "#383838" }}>Click the following button to get a list of resources and leads which are crowd-sourced from whatsapp groups and other volunteers</p>
                                </div>
                            </div>
                            <Button shape="round" size="large" type="danger" style={styles.helpButton}>I need help!</Button>
                        </Link>
                    </Card>
                </Col>
            </Row>
            <div style={styles.hero}>
                <h1 style={styles.heroHeading}>Purpose</h1>
                <p style={styles.heroCopy}>In these difficult times where covid cases are increasing with each passing day, shortage of resources like oxygen, medicines, beds, etc., are on the rise. Even if these are available, people are having difficulties procuring them because of the lack of contacts.</p>
                <p style={styles.heroCopy}>We decided to make a single source of all of the contacts, so people in need can get to the right person in time, by crowd-sourcing useful contacts. Even if we can save one life, it will be worth it.</p>
                <p style={styles.heroCopy}>If you have any leads on any of the resources you can help others by clicking the ‘I can help’ button above, the bigger we can make our database, the more people we can help.</p>
            </div>
        </div>
    )
}

export default Home