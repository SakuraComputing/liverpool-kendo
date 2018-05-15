import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth';

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
    }
    onSubmit = (e) => {
      e.preventDefault();
    };

    render() {
        return (
            <div>
                <h1>Registration form</h1>
            </div>
        )
    }
};

Register.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
   auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(Register);
