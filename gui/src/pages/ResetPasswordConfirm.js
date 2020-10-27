import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { reset_password_confirm } from '../store/actions/auth';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter'
import AuthContainer from '../containers/AuthContainer'
import { Typography, Form, Tooltip, Input, Button, Space } from 'antd';
import { ArrowLeftOutlined,  EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ResetPasswordConfirm = ({ match, reset_password_confirm}) => {
    const [requestSent, setRequestSent] = useState(false);

    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const isEnabled = new_password === re_new_password && new_password.length > 1

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        //e.preventDefault(); prevents the site from reloading only important when you use native html button or input not with AntDesign
        
        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent)
        return <Redirect to='/' />
    return(
        <AuthContainer>
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
                    <Title level={2}>Create new Password</Title>
                    <Text>Please choose your new password</Text>
                    <Form 
                        onFinish={e => onSubmit(e)}
                        spellcheck="false"
                        >
                        <Form.Item name="newPasswordFormItem" rules={[
                            { 
                            required: true,
                            message: 'Please input your new Password!',
                            },
                            { 
                            min: 8,
                            message:'Minimum 8 characters!',
                            }
                            ]}
                            >
                            <Input.Password
                                size='large'
                                type='password'
                                placeholder='New Password'
                                name='new_password'
                                value={new_password}
                                onChange={e => onChange(e)}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                prefix={<LockOutlined className="site-form-item-icon" />}
                            />
                        </Form.Item>
                        <Form.Item name="confirmPasswordFormItem" rules={[
                            { 
                            required: true,
                            message: 'Please confirm your Password!',
                            },
                            { 
                            min: 8,
                            message:'Minimum 8 characters!',
                            }
                            ]}
                            >
                            <Input.Password
                                size='large'
                                type='password'
                                placeholder='Confirm Password'
                                name='re_new_password'
                                value={re_new_password}
                                onChange={e => onChange(e)}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                prefix={<LockOutlined className="site-form-item-icon" />}
                            />
                        </Form.Item>
                        <Form.Item>
                            <PasswordStrengthMeter password={new_password}/>
                        </Form.Item>
                        <Button 
                            type="primary"
                            block
                            disabled={!isEnabled}
                            htmlType="submit">
                            Set new Password
                        </Button>
                    </Form>
                </Space>
            </div>
        </AuthContainer>
    );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);