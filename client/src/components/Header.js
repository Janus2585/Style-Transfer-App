import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	
	renderContent() { //helper method to determine what to show in the Header
		switch (this.props.auth){
			case null://waiting to determine is user is logged in or logged out
				return;
			case false://user is logged out
				return (
					<li><a href="/auth/google">Login With Google</a></li>
				);
			default:
				return (
					<div>
						<li><a href="">Profile</a></li>
						<li><a href="/api/logout">Logout</a></li>
					</div>
				);

		}
	}


	render() {
		return (
			<nav>
			    <div className="nav-wrapper">
			      <a href="/" className="brand-logo left">DeepStyle</a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			      	{this.renderContent()}
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
