import React from 'react';
import { Tabs, List, Divider, Card } from 'antd';

const { TabPane } = Tabs;

const Resources = ({ resources }) => {
    return (
        <Tabs defaultActiveKey="1">
            {
                resources && resources.map((item, idx) => (
                    // Since array indices start from 0 and tab panes from 1 so I added 1 to the key
                    <TabPane tab={item.category} key={idx + 1}>
                        <Card title={item.category}>
                            <p>{item.description}</p>
                            <br />
                            <Divider plain orientation="left">Links</Divider>
                            <List
                                dataSource={item.links}
                                renderItem={item => (
                                    <List.Item><a href={item.linkURL} target="_blank" className="external-link" rel="noreferrer">{item.linkDescription}</a></List.Item>
                                )}
                            />
                        </Card>
                    </TabPane>
                ))
            }
        </Tabs>
    )
}

export default Resources;