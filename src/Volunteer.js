import { useState } from 'react';
import { Form, AutoComplete, Select, Button, Card, Input, Alert, Spin, DatePicker } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { states } from './states';
import { Link } from 'react-router-dom';
import { addHelp } from './actions';
const { Option } = Select;

const styles= {
    wrapper: {
        width: '95%',
        margin: 'auto',
        marginTop: '30px'
    },
    heading: {
        padding: '10px',
        fontSize: '1.8em'
    },
    backbtn: {
        position: 'relative',
        top: '5px'
        // left: '3%'
    }
}

const options = ['Oxygen', 'Remdesivir', 'Plasma', 'Beds', 'Other Medicines', 'Food', 'Tocilizumab'];

const Volunteer = () => {

    const [state, setState] = useState(null);
    const [error, setError] = useState("");
    const [sub, setSub] = useState("");

    const checkForm = e => {
        setSub("");
        if (!state) setError("Please choose one of the states from the list");
        else if (e.name.length>25) setError("Please enter a smaller name. rest can be included in the description");
        else if (e.phone.match(/^\d{10}$/)===null) setError("Please enter a 10-digit Phone number");
        else {
            setSub("loading");
            const temp = {};
            temp.region = state;
            temp.category = e.category;
            temp.name = e.name;
            temp.phone = e.phone;
            if(e.desc) temp.desc=e.desc;
            if(e.date) temp.date=e.date.toDate();
            addHelp(temp, setSub);
        }
    }

    const checkSub = () => {
        if (sub==="") return <Button type="primary" htmlType="submit">Submit</Button>
        else if (sub==="707") return <Alert 
            type="warning" message="This entry alredy exists!" showIcon
            closable onClose={()=>setSub("")}
        />
        else if (sub==="200") return (
            <div>
                <Alert 
                    type="success" message="Entry Recieved! Thank you!" showIcon
                    closable onClose={()=>setSub("")}
                />
            </div>
        )
        else if (sub==="400") return <Alert 
            type="error" message="Request failed, Please try again!" showIcon
            closable onClose={()=>setSub("")}
        />
        else return <Spin />
    }

    return (
        <>
        <Link to="/">
        <Button type="primary" style={styles.backbtn} icon={<ArrowLeftOutlined />}>Back</Button>
        </Link>
        <div style={styles.wrapper}>
        <p style={{marginBottom: '10px'}}>
        Please ensure you are in compliance with Government of India, state governments in India and local law enforcement authority rules and regulations when using Leads/Suppliers from this site; or providing a Lead/Suppy on this site.
            </p>
            <Card title="If you are a provider, please fill this form">
                {error!=="" && 
                    <Alert 
                    style={{marginBottom: '10px'}} message={error} type="error" 
                    showIcon closable onClose={()=>setError("")}
                    />
                }
                <Form layout="horizontal" labelCol={{span: 4}} wrapperCol={{span: 16}} onFinish={checkForm}>
                    <Form.Item
                        label="State"
                        name="state"
                        rules={[{ required: true, message: 'Please enter a state' }]}
                    >
                        <AutoComplete
                            options={states}
                            placeholder="Enter Region"
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            onSelect={s => setState(s)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="category"
                        label="Category"
                        rules={[{ required: true, message: 'Please select a category' }]}
                    >
                        <Select placeholder="Select a Category">
                        {options.map(opt => <Option key={opt} value={opt.toLowerCase()}>{opt}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input a Name' }]}
                    >
                        <Input placeholder="Enter your name" />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input a Phone Number' }]}
                    >
                        <Input type="tel" placeholder="Enter a 10-digit number" />
                    </Form.Item>
                    <Form.Item
                        label="Verified On"
                        name="date"
                        style={styles.item}
                    >
                        <DatePicker showTime />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="desc"
                        style={styles.item}
                    >
                        <Input.TextArea 
                            placeholder="Any additional information or contact details."
                        />
                    </Form.Item>
                    <Form.Item name="submit">
                        <center>{checkSub()}</center>
                    </Form.Item>
                </Form>
            </Card>
            <Card title="How else can I help?">
                <Card type="inner">
                    Glad you asked! We keep this resource freely available to all, it will be a huge help if you could verify the entries we have received.
                    <br /><center><a href='https://forms.gle/GznUPJ7s5ZwZSsreA' target="blank">
                        <Button type="primary">Help Now</Button>
                    </a></center><br />
                    Please reach out to us on instagram, whatsapp or linkedin through the About section for any queries. 
                </Card>
            </Card>
        </div>
        </>
    )
}

export default Volunteer