import React from 'react';
import "./style.css"
// import "bootstrap/dist/css/bootstrap.css";



const cardList = () => {
	return (
		// <!-- partial:index.partial.html -->
		<div >
			<div className='carts-title'>
				<h1>ARTICLES</h1>
			</div>
			<main class="page-content">
            <div class="cart">
                <div class="content">
                    <h2 class="title">Anxiety</h2>
                    <p class="copy">
                        Learn more about how to deal with anxiety...
                    </p>
                    <button class="btn">Click here</button>
                </div>
            </div>
            <div class="cart">
                <div class="content">
                    <h2 class="title">Depression</h2>
                    <p class="copy">
                        Learn more about how to deal with depression...
                    </p>
                    <button class="btn">Click here</button>
                </div>
            </div>
            <div class="cart">
                <div class="content">
                    <h2 class="title">Phobias</h2>
                    <p class="copy">Learn more about how to deal with phobias...</p>
                    <button class="btn">Click here</button>
                </div>
            </div>
            <div class="cart">
                <div class="content">
                    <h2 class="title">Trauma</h2>
                    <p class="copy">
						Learn more about how to deal with phobias...
                    </p>
                    <button class="btn">Click here</button>
                </div>
            </div>
        </main>
		</div>
	);
};

export default cardList;
