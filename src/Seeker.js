import { useState, useEffect } from 'react';
import { Form, AutoComplete, Select, Button, Card, Alert, List, Modal } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { states } from './states';
import { Link } from 'react-router-dom';
const { Option } = Select;

const styles= {
    wrapper: {
        width: '95%',
        margin: 'auto',
        marginTop: '30px'
    },
    item: {
        width: '30%',
        minWidth: "250px"
    },
    heading: {
        padding: '10px',
        fontSize: '1.8em'
    },
    backbtn: {
        position: 'relative',
        top: '5px'
        // left: '3%'
    },
    subheading: {
        // marginTop: '-10px'
    }
}

const options = ['Oxygen', 'Remdesivir', 'Plasma', 'Beds', 'Other Medicines', 'Food', 'Tocilizumab'];

function getDateTimeDifference(timeStamp){
    // var convertedDateTime = new Date(timeStamp);
    // var currentDateTime = new Date();
    // var diff = (currentDateTime - convertedDateTime)/1000;
    // var result = 0;
    // var unit;
    // var suffix = " ago";

    // if(diff < 60){
    //     unit = " second";
    //     result = diff;
    // }
    // else if(diff < 60*60){
    //     unit = " minute";
    //     result =  parseInt(diff/60);
    // }
    // else if(diff < 60*60*24){
    //     unit = " hour";
    //     result =  parseInt(diff/(60*60));
    // }
    // else if(diff < 60*60*24*7){
    //     unit = " day";
    //     result = parseInt(diff/(60*60*24));
    // }
    // else if(diff < 60*60*24*30){
    //     unit = " week";
    //     result = parseInt(diff/(60*60*24*7));
    // }
    // else{
    //     unit = " month";
    //     result = parseInt(diff/(60*60*24*30));
    // }
    // if(result == 1){
    //     return result + unit + suffix;
    // }
    // else{
    //     return result + unit + "s" + suffix;
    // }
    const d = new Date(timeStamp);
    const mon = d.getMonth();
    const day = d.getDate();
    const y = d.getFullYear();
    const hrs = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    return `${day}/${mon}/${y} at ${hrs}:${min}:${sec}`
}

const Seeker = ({queries}) => {
    const [state, setState] = useState(undefined);
    const [categ, setCateg] = useState(undefined);
    const [result, setResult] = useState({});
    const [details, setDetails] = useState(null);

    const sortResult = () => {
        if (state && categ) {
            let temp = {};
            if (queries[state] && queries[state][categ]) {
                temp[state] = {};
                temp[state][categ] = queries[state][categ];
            } else temp=undefined;
            setResult(temp);
        }
        else if (state) {
            let temp = {};
            if (queries[state]) temp[state] = queries[state];
            else temp = undefined;
            setResult(temp);
        }
        else if (categ) {
            let stop=true, temp = {};
            Object.entries(queries).forEach(kvp => {
                if (kvp[1][categ]) {
                    if(stop) stop=false;
                    temp[kvp[0]] = {};
                    temp[kvp[0]][categ] = kvp[1][categ];
                }
            });
            if (stop) temp = undefined;
            setResult(temp);
        }
        else setResult(queries);
    }

    useEffect(()=>sortResult(), [queries, state, categ]);



    return (
        <>
        <Link to="/">
        <Button type="primary" style={styles.backbtn} icon={<ArrowLeftOutlined />}>Back</Button>
        </Link>
        <div style={styles.wrapper}>
            <p style={{marginBottom: '10px'}}>
            <b>Please Note: </b>This is <b>Crowdsourced data</b> to fight COVID across India. The data is made available to public as is, and is being verified by our volunteers in realtime.<br />
            </p>
            <Form layout="inline">
                {/* <Form.Item>
                    <Button type="primary" style={styles.new} disabled>Add New Request</Button>
                </Form.Item> */}
                <Form.Item
                    label="State"
                    name="state"
                    style={styles.item}
                >
                    <AutoComplete
                        options={states}
                        placeholder="Enter Region"
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        onSelect={s => setState(s)}
                        allowClear
                        onClear={()=>setState(undefined)}
                    />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="I need: "
                    style={styles.item}
                >
                    <Select
                        placeholder="What do you need?"
                        onChange={c => setCateg(c)}
                        allowClear
                    >
                    {options.map(opt => <Option key={opt} value={opt.toLowerCase()}>{opt}</Option>)}
                    </Select>
                </Form.Item>
            </Form>
            <Modal title="Details" visible={details} onCancel={() => setDetails(null)} footer={null}>
                {details}
            </Modal>
            <h1 style={styles.heading}>Help Providers</h1>
            {result? (
                <div>
                {Object.keys(result).map(region =>
                    <div key={region}>
                        <h1 style={{marginBottom: '0'}}>{region.toUpperCase()}</h1>
                        {/* <Card key={region} title={region.toUpperCase()} extra={<div><b>Verified</b><img src={verified} width="40px" /></div>}> */}
                        {Object.keys(result[region]).map(cat =>
                            // <Card
                            //     style={{ marginTop: 10 }}
                            //     type="inner"
                            //     title={cat.toUpperCase()}
                            //     key={cat}
                            // >
                        <div>
                            <h3 style={styles.subheading}>{cat.toUpperCase()}</h3>
                            <List
                                grid={{gutter: 16, xs: 2, sm: 3, md: 4, lg: 5}}
                                dataSource={Object.entries(result[region][cat])}
                                renderItem={item => (
                                <List.Item>
                                    <Card key={item[0]}>
                                        <div><b>NAME: </b>{item[1].name}</div>
                                        <div><b>PHONE: </b>
                                        <a href={`tel:+91${item[0]}`}>{item[0]}</a><br />
                                        <div><b>Last Verified: </b>{item[1].verified?getDateTimeDifference(item[1].verified):item[1].date+' at '+item[1].time}</div>
                                        <center>
                                        {item[1].desc && 
                                        <div style={{display: 'inline', marginRight: '4px'}}>
                                            <Button type="primary" onClick={()=>setDetails(item[1].desc)}>
                                                Details
                                            </Button>
                                        </div>
                                        }
                                        <div style={{display: 'inline'}}>
                                        <a target="blank" href={`https://api.whatsapp.com/send?phone=91${item[0]}`}>
                                            <Button type="primary">Message</Button>
                                        </a>
                                        </div>
                                        </center>
                                        </div>
                                    </Card>
                                </List.Item>
                                )}
                            />
                            </div>
                            // </Card>
                        )}
                    </div>
                        // {/* </Card> */}
                    )}</div>) : <Alert style={{marginTop: '10px'}} type="warning" message="No record Found" showIcon/>}
        </div>
        </>
    )
}

export default Seeker