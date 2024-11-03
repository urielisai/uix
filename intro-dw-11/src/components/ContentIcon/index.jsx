import React from 'react';
import { Col, Row, Button } from 'antd';
import { SearchOutlined, UserOutlined, NotificationOutlined } from '@ant-design/icons';
import './ContentIcon.css';

const ContentIcon = () => {
    return (
        <div className="content-icon">
            <Row gutter={32}>
                <Col span={8}>
                    <SearchOutlined className="icon" />
                </Col>
                <Col span={8}>
                    <UserOutlined className="icon" />
                </Col>
                <Col span={8}>
                    <NotificationOutlined className="icon" />
                </Col>
            </Row>
        </div>
    );
};

export default ContentIcon;
