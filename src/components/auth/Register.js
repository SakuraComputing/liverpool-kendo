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

    onChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    };

    onSubmit = (e) => {
      e.preventDefault();
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="content-container">
                <div className="input-group">

                </div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="submit"
                           className="button"
                    />
                </form>
            </div>
        )
    }
};

Register.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(Register);
