
// import "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";

import React from 'react';
import { Link } from 'react-router-dom';

const ForumList = () => {
	return (
		<div class="container">
			<div class="row">
				<div class="col-lg-9 mb-3">
					<div class="row text-left mb-5">
						<div class="col-lg-6 mb-3 mb-sm-0">
							<div
								class="dropdown bootstrap-select form-control form-control-lg bg-white bg-op-9 text-sm w-lg-50"
								style={"width: 100%"}
							>
								<select
									class="form-control form-control-lg bg-white bg-op-9 text-sm w-lg-50"
									data-toggle="select"
									tabindex="-98"
								>
									<option> Categories </option>
									<option> Learn </option>
									<option> Share </option>
									<option> Build </option>
								</select>
							</div>
						</div>
						<div class="col-lg-6 text-lg-right">
							<div
								class="dropdown bootstrap-select form-control form-control-lg bg-white bg-op-9 ml-auto text-sm w-lg-50"
								style={"width: 100%;"}
							>
								<select
									class="form-control form-control-lg bg-white bg-op-9 ml-auto text-sm w-lg-50"
									data-toggle="select"
									tabindex="-98"
								>
									<option> Filter by </option>
									<option> Votes </option>
									<option> Replys </option>
									<option> Views </option>
								</select>
							</div>
						</div>
					</div>

					<div class="card row-hover pos-relative py-3 px-3 mb-3 border-warning border-top-0 border-right-0 border-bottom-0 rounded-0">
						<div class="row align-items-center">
							<div class="col-md-8 mb-3 mb-sm-0">
								<h5>
									<a href="#" class="text-primary">
										Drupal 8 quick starter guide
									</a>
								</h5>
								<p class="text-sm">
									<span class="op-6">Posted</span>{' '}
									<a class="text-black" href="#">
										20 minutes
									</a>{' '}
									<span class="op-6">ago by</span>{' '}
									<a class="text-black" href="#">
										KenyeW
									</a>
								</p>
								<div class="text-sm op-5">
									{' '}
									<a class="text-black mr-2" href="#">
										#C++
									</a>{' '}
									<a class="text-black mr-2" href="#">
										#AppStrap Theme
									</a>{' '}
									<a class="text-black mr-2" href="#">
										#Wordpress
									</a>{' '}
								</div>
							</div>
							<div class="col-md-4 op-7">
								<div class="row text-center op-7">
									<div class="col px-1">
										{' '}
										<i class="ion-connection-bars icon-1x"></i>{' '}
										<span class="d-block text-sm">141 Votes</span>{' '}
									</div>
									<div class="col px-1">
										{' '}
										<i class="ion-ios-chatboxes-outline icon-1x"></i>{' '}
										<span class="d-block text-sm">122 Replys</span>{' '}
									</div>
									<div class="col px-1">
										{' '}
										<i class="ion-ios-eye-outline icon-1x"></i>{' '}
										<span class="d-block text-sm">290 Views</span>{' '}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
						<div class="row align-items-center">
							<div class="col-md-8 mb-3 mb-sm-0">
								<h5>
									<Link to="#" class="text-primary">
										HELP! My Windows XP machine is down
									</Link>
								</h5>
								<p class="text-sm">
									<span class="op-6">Posted</span>{' '}
									<a class="text-black" href="#">
										54 minutes
									</a>{' '}
									<span class="op-6">ago by</span>{' '}
									<a class="text-black" href="#">
										DanielD
									</a>
								</p>
								<div class="text-sm op-5">
									{' '}
									<a class="text-black mr-2" href="#">
										#Development
									</a>{' '}
									<a class="text-black mr-2" href="#">
										#AppStrap Theme
									</a>{' '}
								</div>
							</div>
							<div class="col-md-4 op-7">
								<div class="row text-center op-7">
									<div class="col px-1">
										{' '}
										<i class="ion-connection-bars icon-1x"></i>{' '}
										<span class="d-block text-sm">256 Votes</span>{' '}
									</div>
									<div class="col px-1">
										{' '}
										<i class="ion-ios-chatboxes-outline icon-1x"></i>{' '}
										<span class="d-block text-sm">251 Replys</span>{' '}
									</div>
									<div class="col px-1">
										{' '}
										<i class="ion-ios-eye-outline icon-1x"></i>{' '}
										<span class="d-block text-sm">223 Views</span>{' '}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
						<div class="row align-items-center">
							<div class="col-md-8 mb-3 mb-sm-0">
								<h5>
									<a href="#" class="text-primary">
										Bootstrap 4 development in record time with AppStrap
										Bootstrap 4 Theme
									</a>
								</h5>
								<p class="text-sm">
									<span class="op-6">Posted</span>{' '}
									<a class="text-black" href="#">
										26 minutes
									</a>{' '}
									<span class="op-6">ago by</span>{' '}
									<a class="text-black" href="#">
										Themelize.me
									</a>
								</p>
								<div class="text-sm op-5">
									{' '}
									<a class="text-black mr-2" href="#">
										#Development
									</a>{' '}
									<a class="text-black mr-2" href="#">
										#iOS
									</a>{' '}
									<a class="text-black mr-2" href="#">
										#Bootstrap 4
									</a>{' '}
									<a class="text-black mr-2" href="#">
										#Wordpress
									</a>{' '}
								</div>
							</div>
							<div class="col-md-4 op-7">
								<div class="row text-center op-7">
									<div class="col px-1">
										{' '}
										<i class="ion-connection-bars icon-1x"></i>{' '}
										<span class="d-block text-sm">163 Votes</span>{' '}
									</div>
									<div class="col px-1">
										{' '}
										<i class="ion-ios-chatboxes-outline icon-1x"></i>{' '}
										<span class="d-block text-sm">236 Replys</span>{' '}
									</div>
									<div class="col px-1">
										{' '}
										<i class="ion-ios-eye-outline icon-1x"></i>{' '}
										<span class="d-block text-sm">22 Views</span>{' '}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-3 mb-4 mb-lg-0 px-lg-0 mt-lg-0">
					<div style={"visibility: hidden; display: none; width: 285px; height: 801px; margin: 0px; float: none; position: static; inset: 85px auto auto;"}></div>
					<div
						data-settings='{"parent":"#content","mind":"#header","top":10,"breakpoint":992}'
						data-toggle="sticky"
						class="sticky"
						style={"top: 85px;"}
					>
						<div class="sticky-inner">
							<a
								class="btn btn-lg btn-block btn-success rounded-0 py-4 mb-3 bg-op-6 roboto-bold"
								href="#"
							>
								Ask Question
							</a>
							<div class="bg-white mb-3">
								<h4 class="px-3 py-4 op-5 m-0">Active Topics</h4>
								<hr class="m-0" />
								<div class="pos-relative px-3 py-3">
									<h6 class="text-primary text-sm">
										<a href="#" class="text-primary">
											Why Bootstrap 4 is so awesome?{' '}
										</a>
									</h6>
									<p class="mb-0 text-sm">
										<span class="op-6">Posted</span>{' '}
										<a class="text-black" href="#">
											39 minutes
										</a>{' '}
										<span class="op-6">ago by</span>{' '}
										<a class="text-black" href="#">
											AppStrapMaster
										</a>
									</p>
								</div>
								<hr class="m-0" />
								<div class="pos-relative px-3 py-3">
									<h6 class="text-primary text-sm">
										<a href="#" class="text-primary">
											Custom shortcut or command to launch command in terminal?{' '}
										</a>
									</h6>
									<p class="mb-0 text-sm">
										<span class="op-6">Posted</span>{' '}
										<a class="text-black" href="#">
											58 minutes
										</a>{' '}
										<span class="op-6">ago by</span>{' '}
										<a class="text-black" href="#">
											DanielD
										</a>
									</p>
								</div>
								<hr class="m-0" />
								<div class="pos-relative px-3 py-3">
									<h6 class="text-primary text-sm">
										<a href="#" class="text-primary">
											HELP! My Windows XP machine is down{' '}
										</a>
									</h6>
									<p class="mb-0 text-sm">
										<span class="op-6">Posted</span>{' '}
										<a class="text-black" href="#">
											48 minutes
										</a>{' '}
										<span class="op-6">ago by</span>{' '}
										<a class="text-black" href="#">
											DanielD
										</a>
									</p>
								</div>
								<hr class="m-0" />
								<div class="pos-relative px-3 py-3">
									<h6 class="text-primary text-sm">
										<a href="#" class="text-primary">
											HELP! My Windows XP machine is down{' '}
										</a>
									</h6>
									<p class="mb-0 text-sm">
										<span class="op-6">Posted</span>{' '}
										<a class="text-black" href="#">
											38 minutes
										</a>{' '}
										<span class="op-6">ago by</span>{' '}
										<a class="text-black" href="#">
											DanielD
										</a>
									</p>
								</div>
								<hr class="m-0" />
							</div>
							<div class="bg-white text-sm"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	{
		/* <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript"> */
	}
};

export default ForumList;
