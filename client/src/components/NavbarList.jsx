// import 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css';
// import 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap';
import { Link } from "react-router-dom";

const NavbarList = () => {
	return (
		<div class="landing-page">
			<div class="container">
				<div class="header-area">
					<div class="logo">
						Your <b>Website</b>
					</div>
					<ul class="links">
						<li><Link className="linky" to="/">Home</Link></li>
						<li><Link className="linky" to="/Register">Login</Link></li>
						<li>Work</li>
						<li>Info</li>
						<li>Get Started</li>
					</ul>
				</div>
				<div class="info">
					<h1>Looking For Inspiration</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
						odit nihil ullam nesciunt quidem iste, Repellendus odit nihil
					</p>
					<button>Button name</button>
				</div>
				<div class="image">
					<img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="random"/>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	);
};

export default NavbarList;