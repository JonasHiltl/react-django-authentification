import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { reset_password } from '../store/actions/auth';
import { Typography, Form, Input, Tooltip, Button, Space } from 'antd';
import { UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { ReactComponent as EmailIcon } from '../assets/EmailIcon.svg';

const { Title, Text } = Typography;

const ResetPassword = (props) => {
    const [requestSent, setRequestSent] = useState(false);

    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEnabled = email.match(mailformat) ;

    const onSubmit = e => {
        //e.preventDefault(); prevents the site from reloading only important when you use native html button or input not with AntDesign

        props.reset_password(email);
        setRequestSent(true);
    };

    /* if (requestSent)
        return <Redirect to='/' /> */
    return (
        <div>
            { requestSent?
                <div>
                    <Space direction="vertical" size={24} style={{ width: '100%' }}>
                        <Tooltip title="back to Login">
                            <Link to='/login'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <ArrowLeftOutlined style={{ fontSize: '18px', marginRight: '10px' }}/>
                                    <Title style={{ margin: '0px'}}level={5}>Back</Title>
                                </div>
                            </Link>
                        </Tooltip>
                        <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                            <EmailIcon style={{ height: '90px'}}/>
                        </div>
                        <Title style={{ textAlign: 'center' }}level={2}>Check your Email</Title>
                        <div style={{ textAlign: 'center'}}>
                            <Text >We have sent you your password recovery instructions to your email.</Text>
                        </div>
                    </Space>
                </div>:
                <div>
                    <Space direction="vertical" size={24} style={{ width: '100%' }}>
                        <Tooltip title="back to Login">
                            <Link to='/login'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <ArrowLeftOutlined style={{ fontSize: '18px', marginRight: '10px' }}/>
                                    <Title style={{ margin: '0px'}}level={5}>Back</Title>
                                </div>
                            </Link>
                        </Tooltip>
                        <Title level={2}>Forgot your Password?</Title>
                        <Text>We'll send a recovery link to your E-mail address</Text>
                        <Form 
                            onFinish={e => onSubmit(e)}
                            spellCheck="false"
                            >
                            <Form.Item
                            initialValue={email}
                            name='emailFormItem' 
                            rules={[
                                {
                                type: 'email',
                                message: 'The input is not a valid E-mail!',
                                },
                                {
                                required: true,
                                message: 'Please input your E-mail!',
                                },
                            ]}
                            >
                                <Input 
                                    size="large" 
                                    placeholder='Email'
                                    name='email'
                                    value={email}
                                    onChange={e => onChange(e)}
                                    prefix={<UserOutlined />}
                                />
                            </Form.Item>
                            <Button 
                                type="primary"
                                block
                                disabled={!isEnabled}
                                htmlType="submit">
                                Reset Password
                            </Button>
                        </Form>
                    </Space>
                </div>
            }
        </div>
    );
};

export default connect(null, { reset_password })(ResetPassword);