// import { Link } from 'react-router-dom';
// import "./style.css";

// const RegisterList = () => {
// 	return (
// 		<div class="container">
// 			<div class="row">
// 				<div class="col-lg-10 col-xl-9 mx-auto">
// 					<div class="card card-signin flex-row my-5">
// 						<div class="card-img-left d-none d-md-flex">
// 							{/* <!-- Background image for card set in CSS! --> */}
// 						</div>
// 						<div class="card-body">
// 							<h5 class="card-title text-center">Register</h5>
// 							<form class="form-signin">
// 								<div class="form-label-group">
// 									<input
// 										type="text"
// 										id="inputUserame"
// 										class="form-control"
// 										placeholder="Username"
// 										required
// 										autofocus
// 									/>
// 									<label for="inputUserame">Username</label>
// 								</div>

// 								<div class="form-label-group">
// 									<input
// 										type="email"
// 										id="inputEmail"
// 										class="form-control"
// 										placeholder="Email address"
// 										required
// 									/>
// 									<label for="inputEmail">Email address</label>
// 								</div>

// 								<hr />

// 								<div class="form-label-group">
// 									<input
// 										type="password"
// 										id="inputPassword"
// 										class="form-control"
// 										placeholder="Password"
// 										required
// 									/>
// 									<label for="inputPassword">Password</label>
// 								</div>

// 								<div class="form-label-group">
// 									<input
// 										type="password"
// 										id="inputConfirmPassword"
// 										class="form-control"
// 										placeholder="Password"
// 										required
// 									/>
// 									<label for="inputConfirmPassword">Confirm password</label>
// 								</div>

// 								<button
// 									class="btn btn-lg btn-primary btn-block text-uppercase"
// 									type="submit"
// 								>
// 									Register
// 								</button>
// 								<Link
// 									class="d-block text-center mt-2 small"
// 									href="https://huykhong.com"
// 								>
// 									Sign In
// 								</Link>
// 								<hr class="my-4" />
// 								<button
// 									class="btn btn-lg btn-google btn-block text-uppercase"
// 									type="submit"
// 								>
// 									<i class="fab fa-google mr-2"></i> Sign up with Google
// 								</button>
// 								<button
// 									class="btn btn-lg btn-facebook btn-block text-uppercase"
// 									type="submit"
// 								>
// 									<i class="fab fa-facebook-f mr-2"></i> Sign up with Facebook
// 								</button>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default RegisterList;

// // import React, { useState } from 'react';

// // const RegisterPage = () => {
// // 	const [username, setUsername] = useState('');
// // 	const [email, setEmail] = useState('');
// // 	const [password, setPassword] = useState('');
// // 	const [confirmPassword, setConfirmPassword] = useState('');

// // 	const handleRegister = (e) => {
// // 		e.preventDefault();
// // 		// handle registration logic
// // 	};

// // 	return (
// // 		<div>
// // 			<h1>Register</h1>
// // 			<form onSubmit={handleRegister}>
// // 				<label>
// // 					Username:
// // 					<input
// // 						type="text"
// // 						value={username}
// // 						onChange={(e) => setUsername(e.target.value)}
// // 					/>
// // 				</label>
// // 				<br />
// // 				<label>
// // 					Email:
// // 					<input
// // 						type="email"
// // 						value={email}
// // 						onChange={(e) => setEmail(e.target.value)}
// // 					/>
// // 				</label>
// // 				<br />
// // 				<label>
// // 					Password:
// // 					<input
// // 						type="password"
// // 						value={password}
// // 						onChange={(e) => setPassword(e.target.value)}
// // 					/>
// // 				</label>
// // 				<br />
// // 				<label>
// // 					Confirm Password:
// // 					<input
// // 						type="password"
// // 						value={confirmPassword}
// // 						onChange={(e) => setConfirmPassword(e.target.value)}
// // 					/>
// // 				</label>
// // 				<br />
// // 				<button type="submit">Register</button>
// // 			</form>
// // 		</div>
// // 	);
// // };

// // export default RegisterPage;
