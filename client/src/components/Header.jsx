import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<div class="landing-page">
			<div class="container">
				<div class="header-area">
					<div class="info">
						<h1>Mental health Checker</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus odit nihil ullam nesciunt quidem iste, Repellendus
							odit nihil
						</p>
						<Link to="/Survey"><button>Checker Survey</button></Link>
					</div>
					<div class="image">
						<img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="random" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
