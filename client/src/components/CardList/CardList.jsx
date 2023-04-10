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
						<Link to="/Anxiety">
						<button class="btn">
							Click here
						</button></Link>
					</div>
				</div>
				<div class="card">
					<div class="content">
						<h2 class="title">Depression</h2>
						<p class="copy">Learn more about how to deal with depression...</p>
						<Link to="/Depression">
						<button class="btn">
							Click here
						</button></Link>
					</div>
				</div>
				<div class="card">
					<div class="content">
						<h2 class="title">Phobias</h2>
						<p class="copy">Learn more about how to deal with phobias...</p>
						<Link to="/Phobias">
						<button class="btn">
							Click here
						</button></Link>
					</div>
				</div>
				<div class="card">
					<div class="content">
						<h2 class="title">Trauma</h2>
						<p class="copy">Learn more about how to deal with phobias...</p>
						<Link to="/Trauma">
						<button class="btn">
							Click here
						</button></Link>
					</div>
				</div>
			</main>
			<div className="text-center">
			<Link to="/ArticleList"><button className="btn btn-primary m-5">Click here more articles</button></Link>
			</div>
		</div>
	);
};

export default cardList;
