import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import * as actions from '../../store/actions';
import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}
	render() {
		//JSX
		return (
			<div className='loginBackground'>
				<div className='loginContainer'>
					<div className='loginContent row'>
						<div className='col-12 textLogin'>login</div>
						<div className='col-12 form-group'>
							<label>UserName</label>
							<input
								type='text'
								className='form-control login-input'
								placeholder='Enter your User Name'
							/>
						</div>
						<div className='col-12 form-group'>
							<label>Password</label>
							<input
								type='password'
								className='form-control login-input'
								placeholder='Enter your Password'
							/>
						</div>
						<div className='col-12'>
							<button className='btn-login'>Login</button>
						</div>
						<div className='col-12'>
							<span className='forgot-password'>
								{' '}
								forgot your password
							</span>
						</div>
						<div className='col-12 text-center'>
							<span className='text-orther-login'>or Login with : </span>
						</div>
						<div className='col-12 social-login'>
							<i class='fab fa-google-plus-g'></i>
							<i class='fab fa-facebook-square'></i>
							<i class='fab fa-github'></i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		language: state.app.language,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		navigate: (path) => dispatch(push(path)),
		adminLoginSuccess: (adminInfo) =>
			dispatch(actions.adminLoginSuccess(adminInfo)),
		adminLoginFail: () => dispatch(actions.adminLoginFail()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
