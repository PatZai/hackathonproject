import React from 'react';
import "./style.css"
const Header = () => {
	return (
		<div class="landing-page">
			<div class="container text-center">
				<div class="header-area row align-items-start">
				<div class="image col">
						<img src={require("../images/Logo.png")} alt="random" className='logo-header' />
					</div>
					<div class="info col">
						<h1>Health Hive</h1>
						<p>
							A community driven application where you can learn more from currated articles or to reach out to the community to understand mental health better
						</p>
					</div>
					
				</div>
			</div>
		</div>

	);
};

export default Header;
