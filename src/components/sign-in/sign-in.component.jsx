import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handlechange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({ email: "", password: "" });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput name="email" type="email" label="email" value={this.state.email} handleChange={this.handlechange} required />
					<FormInput name="password" type="password" label="password" value={this.state.email} handleChange={this.handlechange} required />

					<CustomButton type="submit">Sign In</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
