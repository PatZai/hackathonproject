import FooterComponent from '../components/Footers/Footers';
import NavbarList from '../components/NavbarList';
import CardList from '../components/CardList/CardList';
import Header from '../components/Header/Header';

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
