import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    position: relative;
    height: 100vh;
`

const CenteredWrapper = styled.div`
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    overflow: hidden;
`

const AuthContainer = (props) => {
    return (
        <Container>
            <CenteredWrapper>
                { props.children }
            </CenteredWrapper>
        </Container>
    );
};

export default AuthContainer
