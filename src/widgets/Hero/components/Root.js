import React from 'react';
import { Banner, Heading } from 'rebass';

import logo from './logo.png';

const Root = () => (
	<Banner
		color="white"
		bg="gray8"
		backgroundImage="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
	>
		<Heading f={[4, 5, 6, 7]}>Welcome to Lundegaard Digital Café</Heading>
		<img src={logo} />
	</Banner>
);

export default Root;
