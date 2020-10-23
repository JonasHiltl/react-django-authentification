import React, { useEffect } from 'react';
import CustomLayout from './Layout';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../store/actions/auth';

const CheckAuthenticated = (props) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                await props.checkAuthenticated();
                await props.load_user();
            } catch (err) {

            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {props.children}
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(CheckAuthenticated);