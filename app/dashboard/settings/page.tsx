'use client';

import SettingsFormClient from './SettingsFormClient';

const page = () => {
	return (
		<div className=''>
			<p className='alert text-4xl'>
				this is the page for the dashboard settings
			</p>
			<SettingsFormClient /* initialPrefs={prefs} */ />
		</div>
	);
};
export default page;
