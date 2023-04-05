import FooterComponent from '../components/Footers';
import NavbarList from '../components/NavbarList';
import CardList from '../components/CardList';

const HomePage = () => {
	return (
		<>
			<NavbarList />
			<CardList/>
			<CardList/>
			<FooterComponent />
		</>
	);
};
export default HomePage;
