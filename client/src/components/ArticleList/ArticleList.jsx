const ArticleList = () => {
	return (
		<div>
			<div class="wrapper">
				<nav class="navbar navbar-expand-lg bg-body-tertiary">
					<div class="container-fluid">
						<a class="navbar-brand" href="#">
							Navbar
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="#">
										Home
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										Link
									</a>
								</li>
								<li class="nav-item dropdown">
									<a
										class="nav-link dropdown-toggle"
										href="#"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Dropdown
									</a>
									<ul class="dropdown-menu">
										<li>
											<a class="dropdown-item" href="#">
												Action
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Another action
											</a>
										</li>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Something else here
											</a>
										</li>
									</ul>
								</li>
								<li class="nav-item">
									<a class="nav-link disabled">Disabled</a>
								</li>
							</ul>
							<form class="d-flex" role="search">
								<input
									class="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button class="btn btn-outline-success" type="submit">
									Search
								</button>
							</form>
						</div>
					</div>
				</nav>
			</div>

			<div class="article-box">
				<div class="article1" id="article1">
					<div class="title-heading">
						<div class="article-image">
							<img src="images/Snail.png" alt="test" class="article-image" />
						</div>
						<div class="title-info">
							<a href="#" class="article-author">
								Article Title 1
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="article-body">
				<p>
					Article description.... Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Quod facilis voluptate nobis, atque, dicta numquam
					dolor vitae facere ab animi nulla est ipsa perferendis sequi a ipsum
					laborum nesciunt aperiam.
				</p>
				<div class="article-voting">
					<p class="m-0">Author: xxxx &bull; x days ago</p>
				</div>

				<div class="article-box">
					<div class="article1" id="article1">
						<div class="title-heading">
							<div class="article-image">
								<img src="images/Snail.png" alt="test" class="article-image" />
							</div>
							<div class="title-info">
								<a href="#" class="article-author">
									Article Title 2
								</a>
							</div>
						</div>
						<div class="article-body">
							<p>
								Article description.... Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Quod facilis voluptate nobis, atque, dicta
								numquam dolor vitae facere ab animi nulla est ipsa perferendis
								sequi a ipsum laborum nesciunt aperiam.
							</p>
							<div class="article-voting">
								<p class="m-0">Author: xxxx &bull; x days ago</p>
							</div>
						</div>
					</div>
				</div>

				<div class="article-box">
					<div class="article1" id="article1">
						<div class="title-heading">
							<div class="article-image">
								<img src="images/Snail.png" alt="test" class="article-image" />
							</div>
							<div class="title-info">
								<a href="#" class="article-author">
									Article Title 3
								</a>
							</div>
						</div>
						<div class="article-body">
							<p>
								Article description.... Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Quod facilis voluptate nobis, atque, dicta
								numquam dolor vitae facere ab animi nulla est ipsa perferendis
								sequi a ipsum laborum nesciunt aperiam.
							</p>
							<div class="article-voting">
								<p class="m-0">Author: xxxx &bull; x days ago</p>
							</div>
						</div>
					</div>
				</div>

				<div class="article-box">
					<div class="article1" id="article1">
						<div class="title-heading">
							<div class="article-image">
								<img src="images/Snail.png" alt="test" class="article-image" />
							</div>
							<div class="title-info">
								<a href="#" class="article-author">
									Article Title 4
								</a>
							</div>
						</div>
						<div class="article-body">
							<p>
								Article description.... Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Quod facilis voluptate nobis, atque, dicta
								numquam dolor vitae facere ab animi nulla est ipsa perferendis
								sequi a ipsum laborum nesciunt aperiam.
							</p>
							<div class="article-voting">
								<p class="m-0">Author: xxxx &bull; x days ago</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleList;
