import FooterComponent from '../components/Footers/Footers';
import NavbarList from '../components/Navbar/NavbarList';
import CardList from '../components/CardList/CardList';
import Header from '../components/Header/Header';
import TrendingThread from '../components/TrendingThread/TrendingThread';

const HomePage = () => {
	return (
		<>
			<NavbarList />
			<Header/>
			<CardList/>
			<TrendingThread />
			<FooterComponent />
		</>
	);
};
export default HomePage;
