import { useState, useEffect } from 'react';
import { Form, AutoComplete, Select, Button, Row, Col, Card, Alert, List, Modal, Input } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { states } from './states';
import { Link } from 'react-router-dom';
import verified from './assets/verified.png';
import { markVerified, exhausted } from './actions';
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
    v: {
        width: '49%', 
        marginRight: '2%',
        textAlign: 'center'
    },
    u: {
        width: '98%',
        textAlign: 'center'
    }
}

const options = ['Oxygen', 'Remdesivir', 'Plasma', 'Beds', 'Other Medicines', 'Food', 'Tocilizumab'];

const makedate = (m) => {
    if(m) {
        const d = new Date(m[1].verified);
        const mon = d.getMonth();
        const day = d.getDate();
        const y = d.getFullYear();
        const hrs = d.getHours();
        const min = d.getMinutes();
        return `${day}/${mon}/${y} at ${hrs}:${min}`
    } else return '-'
}

const Update = ({queries, unchecked, functions}) => {
    const [state, setState] = useState(undefined);
    const [categ, setCateg] = useState(undefined);
    const [result, setResult] = useState({});
    const [details, setDetails] = useState(null);
    const [vst, setVst] = useState(true);

    const ModalHeader = ({d}) => {
        return (
            <>
                {vst? 
                <div><img src={verified} width="10%" style={{marginRight: '5%'}} />Verifed on {makedate(d)}</div>
                : d[1].verified?<div>Not working on {makedate(d)}</div>:<div>UNVERIFIED ENTRY</div>
                }
            </>
        )
    }

    const sortResult = () => {
        if(vst){
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
        } else {
            if (state && categ) {
                let temp = {};
                if (unchecked[state] && unchecked[state][categ]) {
                    temp[state] = {};
                    temp[state][categ] = unchecked[state][categ];
                } else temp=undefined;
                setResult(temp);
            }
            else if (state) {
                let temp = {};
                if (unchecked[state]) temp[state] = unchecked[state];
                else temp = undefined;
                setResult(temp);
            }
            else if (categ) {
                let stop=true, temp = {};
                Object.entries(unchecked).forEach(kvp => {
                    if (kvp[1][categ]) {
                        if(stop) stop=false;
                        temp[kvp[0]] = {};
                        temp[kvp[0]][categ] = kvp[1][categ];
                    }
                });
                if (stop) temp = undefined;
                setResult(temp);
            }
            else setResult(unchecked);
        }
    }

    useEffect(()=>sortResult(), [queries, unchecked, state, categ, vst]);

    return (
        <div>
        <Link to="/">
        <Button type="primary" style={styles.backbtn} icon={<ArrowLeftOutlined />}>Back</Button>
        </Link>
        <div style={styles.wrapper}>
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
                    label="Category: "
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
                <Form.Item
                    name="status"
                    label="Status: "
                    style={styles.item}
                >
                    <Select
                        onChange={c => setCateg(c)}
                        defaultValue={true}
                        onChange={e=>setVst(e)}
                    >
                    <Option value={true}>VERIFIED</Option>
                    <Option value={false}>UNVERIFIED</Option>
                    </Select>
                </Form.Item>
            </Form>
            <Modal title={<ModalHeader d={details} />} 
                visible={details} onCancel={() => setDetails(null)} footer={null}
            >
                {vst ? <div style={{marginBottom: '20px'}}>
                    Please use the following buttons to change the verification status.<br />
                    <b>Note:<br />
                    If the user is not picking up or you are in doubt, DO NOT mark as not working, they may just be busy.
                    </b>
                </div> : <div>
                    Please click the following button to mark as verified. We request you to not give unverified data.
                </div>}
                <Row style={{width: '100%'}}>
                    <Col style={vst?styles.v:styles.u}>
                        <Button 
                            type="primary"
                            onClick={()=>markVerified(details, setDetails, [vst, vst?functions.v:functions.u])}
                        >
                            Working
                        </Button>
                    </Col>
                    {vst && <Col style={{width: '49%', textAlign: 'center'}}>
                        <Button 
                            type="danger"
                            onClick={()=>exhausted(details, setDetails, functions.v)}
                        >Not Working</Button>
                    </Col>}
                </Row>
            </Modal>
            <h1 style={styles.heading}>Help Providers</h1>
            {result? (
                <div>
                {Object.keys(result).map(region =>
                    <div>
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
                                        <center>
                                            <Button type="primary" onClick={() => setDetails([...item, region, cat])}>Update</Button>
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
        </div>
    )
}

export default Update