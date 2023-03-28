import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import * as actions from '../../store/actions';
import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			password: '',
			isShowTruePassword: false,
		};
	}

	handlerUserName = (event) => {
		this.setState({
			userName: event.target.value,
		});
	};
	handlerPassword = (event) => {
		this.setState({
			password: event.target.value,
		});
	};
	handlerSubmit = (event) => {
		alert('succss');
	};

	handlerShowPassword = () => {
		this.setState({
			isShowTruePassword: !this.state.isShowTruePassword,
		});
	};
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
								value={this.state.userName}
								onChange={(event) => {
									this.handlerUserName(event);
								}}
							/>
						</div>
						<div className='col-12 form-group'>
							<label>Password</label>
							<div className='customer-input-password'>
								<input
									type={
										this.state.isShowTruePassword
											? 'text'
											: 'password'
									}
									className='form-control login-input'
									placeholder='Enter your Password'
									value={this.state.password}
									onChange={(event) => {
										this.handlerPassword(event);
									}}
								/>
								<span
									onClick={() => {
										this.handlerShowPassword();
									}}>
									<i
										className={
											this.state.isShowTruePassword
												? 'far fa-eye'
												: 'fas fa-eye-slash'
										}></i>
								</span>
							</div>
						</div>
						<div className='col-12'>
							<button
								className='btn-login'
								onClick={(event) => {
									this.handlerSubmit(event);
								}}>
								Login
							</button>
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
							<i className='fab fa-google-plus-g  google'></i>
							<i className='fab fa-facebook-square facebook'></i>
							<i className='fab fa-github github'></i>
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
