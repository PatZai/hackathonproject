import FooterComponent from '../components/Footers';
import NavbarList from '../components/NavbarList';
import CardList from '../components/CardList';
import Header from '../components/Header';

const HomePage = () => {
	return (
		<>
			<NavbarList />
			<Header/>
			<CardList/>
			<FooterComponent />
		</>
	);
};
export default HomePage;
