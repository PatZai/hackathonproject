import React from 'react';
import "./style.css"
const CardList = () => {
	return (
		// <!-- partial:index.partial.html -->
		<div>
			<div className='cards-title'>
				<h1>ARTICLES</h1>
			</div>
			<main class="page-content">
            <div class="card">
                <div class="content">
                    <h2 class="title">Depression</h2>
                    <p class="copy">
                        Learn more about how to deal with depression...
                    </p>
                    <button class="btn">Click here</button>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <h2 class="title">Anxiety</h2>
                    <p class="copy">
                        Learn more about how to deal with anxiety...
                    </p>
                    <button class="btn">Click here</button>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <h2 class="title">Psychology</h2>
                    <p class="copy">Peer into the human mind and find out more about what makes us who we are...</p>
                    <button class="btn">Click here</button>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <h2 class="title">Mentality</h2>
                    <p class="copy">
                        Learn about how people perceive the world...
                    </p>
                    <button class="btn">Click here</button>
                </div>
            </div>
        </main>
		</div>
	);
};

export default CardList;
