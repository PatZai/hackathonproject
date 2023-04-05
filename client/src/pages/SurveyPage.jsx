import NavbarList from '../components/NavbarList';
import Footers from '../components/Footers';
import Survey from '../components/Survey';

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
