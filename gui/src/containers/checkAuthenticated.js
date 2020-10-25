import React, { useEffect } from 'react';
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

const mapDispatchToProps = dispatch => {
	return {
        checkAuthenticated: () => dispatch(checkAuthenticated()),
        load_user: () => dispatch(load_user())
	}
}

export default connect(null, mapDispatchToProps)(CheckAuthenticated);