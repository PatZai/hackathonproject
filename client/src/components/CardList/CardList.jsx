import React from 'react';
import './style.css';

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
						<button class="btn">Click here</button>
					</div>
				</div>
				<div class="card">
					<div class="content">
						<h2 class="title">Depression</h2>
						<p class="copy">Learn more about how to deal with depression...</p>
						<button class="btn">Click here</button>
					</div>
				</div>
				<div class="card">
					<div class="content">
						<h2 class="title">Phobias</h2>
						<p class="copy">Learn more about how to deal with phobias...</p>
						<button class="btn">Click here</button>
					</div>
				</div>
				<div class="card">
					<div class="content">
						<h2 class="title">Trauma</h2>
						<p class="copy">Learn more about how to deal with phobias...</p>
						<button class="btn">Click here</button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default cardList;
