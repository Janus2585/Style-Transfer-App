import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<nav>
			    <div className="nav-wrapper">
			      <a href="/" className="brand-logo left">DeepStyle</a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><a href="badges.html">Profile</a></li>
			        <li><a href="collapsible.html">Login</a></li>
			      </ul>
			    </div>
		  	</nav>
		);
	}

	
}

export default Header

			/*
			<div id='headerContainer'>
				<div id='headerItems'>
					<h4>DeepStyle</h4>
					<button type="button" className="btn btn-default"><a href="/auth/google">Login With Google</a></button>
					<button type="button" className="btn btn-default"><a href="">Upgrade</a></button>
				</div>
			</div>
			*/
