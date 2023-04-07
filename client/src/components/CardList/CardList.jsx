import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const cardList = () => {
	return (
		// <!-- partial:index.partial.html -->
		<div>
			<div className="cards-title">
				<h1 className="text-center">ARTICLES</h1>
			</div>
			<main class="page-content">
				<div class="card">
					<div class="content">
						<h2 class="title">Anxiety</h2>
						<p class="copy">Learn more about how to deal with anxiety...</p>
						<button class="btn"><Link to="/Anxiety">Click here</Link></button>
					</div>
				</div>
				<div class="card">
					<div class="content">
						<h2 class="title">Depression</h2>
						<p class="copy">Learn more about how to deal with depression...</p>
						<button class="btn"><Link to="/Depression">Click here</Link></button>
					</div>
				</div>
				<div class="card">
					<div class="content">
						<h2 class="title">Phobias</h2>
						<p class="copy">Learn more about how to deal with phobias...</p>
						<button class="btn"><Link to="/Phobias">Click here</Link></button>
					</div>
				</div>
				<div class="card">
					<div class="content">
						<h2 class="title">Trauma</h2>
						<p class="copy">Learn more about how to deal with phobias...</p>
						<button class="btn"><Link to="/Trauma">Click here</Link></button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default cardList;
