import React from 'react'

var Header = () => {
	return (
		
			<div id='headerContainer'>
				<div id='headerItems'>
					<h4>DeepStyle</h4>
					<button type="button" className="btn btn-default"><a href="/auth/google">Login With Google</a></button>
					<button type="button" className="btn btn-default"><a href="">Upgrade</a></button>
				</div>
			</div>

		)
}

export default Header
