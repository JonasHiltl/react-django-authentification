import React, { useState, useEffect  } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../store/actions/auth';

import { Form, Input, Button, Checkbox, Space, Typography } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import "./login.less"
const { Text, Title  } = Typography;

const NormalLoginForm = ({ login }) => {
  const [formData, setFormData] = useState({
    email: localStorage.getItem('email') || '',
    password: localStorage.getItem('password') || '',
    rememberMe: true
  });

  const handleCheckbox = e => {
    setFormData(({ rememberMe, ...formData }) =>
      ({ ...formData, rememberMe: !rememberMe })
    );
  };

  const { email, password, rememberMe } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const isEnabled = email.length > 0 && password.length > 7;

  const onSubmit = e => {
    //e.preventDefault(); prevents the site from reloading only important when you use native html button or input not with AntDesign

    login(email, password);
    if (rememberMe) {
      window.localStorage.setItem('rememberMe', rememberMe);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    }
  };
  //if (isAuthenticated)
  //      return <Redirect to='/' />;

  return (
    <div className="container">
      <div className="centered-wrapper">
        <Space direction="vertical" size={24} style={{ width: '100%' }}>
          <Title>COURSES</Title>
          <Title level={3}>Log in to your account</Title>
          <Form 
            onFinish={e => onSubmit(e)}
            initialValues={{
              remember: true,
            }}
            spellcheck="false"
          >
            <Form.Item
              initialValue={email}
              name='emailFormItem' 
              label="Email" 
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
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={e => onChange(e)}
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item initialValue={password} name="passwordFormItem"label="Password" rules={[
              { 
                required: true,
                message: 'Please input your Password!',
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
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={e => onChange(e)}
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
            </Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox onChange={e => handleCheckbox(e)} name="rememberMe" value={rememberMe}>Remember me</Checkbox>
              </Form.Item>
              <Form.Item>
                <Text>Don't have an account?<Link to='/signup'> Sign Up</Link></Text>
              </Form.Item>
            </div>
            <Button 
              type="primary"
              block
              disabled={!isEnabled}
              htmlType="submit">
              Login
            </Button>
            </Form>
          <Text>Forgot your Password?<Link to='/reset_password'> Reset Password</Link></Text>
        </Space>
      </div>
    </div>
  );
};
  
//const mapStateToProps = state => ({
  //isAuthenticated: state.auth.isAuthenticated
//});

export default connect(null, { login })(NormalLoginForm);