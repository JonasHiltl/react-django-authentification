import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { verify } from '../store/actions/auth';
import AuthContainer from '../containers/AuthContainer'
import { Typography, Button, Space } from 'antd';

const { Title } = Typography;

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);

    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token;

        verify(uid, token);
        setVerified(true)
    };

    if (verified)
        return <Redirect to='/' />
    return (
        <AuthContainer>
            <div>
                <Space
                    direction='vertical'
                    >
                    <Title level={2}>Verify your Account:</Title>
                    <Button 
                        onClick={verify_account}
                        block
                        type="primary">
                        Verify
                    </Button>
                </Space>
            </div>
        </AuthContainer>
    );
};

export default connect(null, { verify })(Activate);