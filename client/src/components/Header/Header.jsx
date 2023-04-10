import React from 'react';
import './headerstyle.css';
// import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div class="landing-page">
			<div class="container text-center">
				<div class="header-area row align-items-start">
					<div class="image col">
						<img
							src={require('../images/Logo.png')}
							alt="random"
							className="logo-header"
						/>
					</div>
					<div class="info col">
						<h1>Health Hive</h1>
						<p>
							Health Hive is a Community and Education Platform. Learn more about mental health by reading curated articles that aim to provide you a better understanding of those afflicted by mental health issues.
						</p>
						<p>
							Got any questions? Try our forum pages to learn more from the community. We aim to foster a thriving community of individuals trying to help each other.
						</p>
					</div>
					{/* <h2>Check your Mental Health!</h2> */}

				</div>
				{/* <button className='btn btn-primary'  >
					<Link class="nav-link active" aria-current="page" to="/Survey">
						Check
					</Link>
				</button> */}
			</div>
		</div>
	);
};

export default Header;
