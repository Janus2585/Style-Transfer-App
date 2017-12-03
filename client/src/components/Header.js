import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments'

class Header extends Component {
	
	renderAuthContent() { //helper method to determine what to show in the Header
		switch (this.props.auth) {
			case null://waiting to determine is user is logged in or logged out
				return;
			case false://user is logged out
				return (
					<li><a href="/auth/google">Login With Google</a></li>
				);
			default:
				return (
					<div>
						<li key="1"><Payments /></li>
						<li key="4">Credits: {this.props.auth.credits}</li>
						<li key="2"><a href="">Profile</a></li>
						<li key="3"><a href="/api/logout">Logout</a></li>
					</div>
				);

		}
	}

	renderBillingContent() {
		//check database if user is a premium member
		/*switch (this.props.auth.premiumMember){
			case null:
				return;
			case 'false': 
				return (
					<li><a href="">Upgrade to Premium</a></li>
				);
		}
		*/


	}


	render() {
		return (
			<nav>
			    <div className="nav-wrapper">
			      <a href="/" className="brand-logo left">DeepStyle</a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			      	{this.renderAuthContent()}
			      </ul>
			    </div>
		  	</nav>
		);
	}

	
}


function mapStateToProps(state) {//this function is necessary to make the Header component aware of the state
	return { auth: state.auth };
}
export default connect(mapStateToProps)(Header) // connect() makes the component aware of the state

			/*
			<div id='headerContainer'>
				<div id='headerItems'>
					<h4>DeepStyle</h4>
					<button type="button" className="btn btn-default"><a href="/auth/google">Login With Google</a></button>
					<button type="button" className="btn btn-default"><a href="">Upgrade</a></button>
				</div>
			</div>
			*/
