import NavbarList from '../components/Navbar/NavbarList';
import Footers from '../components/Footers/Footers';
import Survey from '../components/Survey/Survey.jsx';

import React from 'react';

const SurveyPage = () => {
	return (
		<>
			<NavbarList />
			<Survey />
			<Footers />
		</>
	);
};

export default SurveyPage;
