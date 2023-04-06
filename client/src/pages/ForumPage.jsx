import NavbarList from '../components/Navbar/NavbarList';
import Footers from '../components/Footers/Footers';
import ForumList from '../components/ForumList/ForumList';
import Dropdown from '../components/ForumList/Dropdown';
import Card from '../components/ForumList/Card';
import Side from '../components/ForumList/Side';

const ForumPage = () => {
	return (
	  <>
		<NavbarList />
		<div className="d-flex">
		  <div className="flex-grow-1" style={{ width: '60%' }}>
			<Dropdown />
			<Card />
			{/* <ForumList /> */}
		  </div>
		  <div className="flex-grow-1">
			<Side />
		  </div>
		</div>
		<Footers />
	  </>
	);
  };
  

export default ForumPage;
