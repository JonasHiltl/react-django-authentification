import React from 'react';

import AuthContainer from '../containers/AuthContainer'
import { Typography } from 'antd';

const { Title } = Typography;

const Activate = () => {
    return(
        <AuthContainer>
            <Title>Activate</Title>
        </AuthContainer>
    );
};

export default Activate;