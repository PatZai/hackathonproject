// import 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css';
// import 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap';
import { Link } from 'react-router-dom';
import "./style.css";

const NavbarList = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid justify-content-between">
    <Link class="navbar-brand" to="/"><img src={require("../images/Smaller_logo.png")} alt="Logo" className='logo-nav'/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="  navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-column flex-sm-row menu-item">
      
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Forum">Forum</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ArticleList">Articles</Link>
        </li>
		<li class="nav-item">
          <Link class="nav-link" to="/AboutPage">About</Link>
        </li>
		<li class="nav-item">
          <Link class="nav-link" to="/Login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};

export default NavbarList;
