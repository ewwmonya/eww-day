'use client';

import {
	Provider,
	defaultTheme,
	Flex,
	View,
	Heading,
} from '@adobe/react-spectrum';
import { TextField, Switch, Picker, Item, Button } from '@adobe/react-spectrum';
import { useState } from 'react';

type Prefs = {
	displayName?: string;
	clockFormat?: '12h' | '24h';
	theme?: 'wireframe' | 'black';
	notifications?: boolean;
};

export default function SettingsFormClient(props: { initialPrefs?: Prefs }) {
	const [prefs, setPrefs] = useState<Prefs>(
		props.initialPrefs ?? {
			displayName: 'Monya',
			clockFormat: '12h',
			theme: 'black',
			notifications: true,
		}
	);

	return (
		<Provider theme={defaultTheme}>
			<View padding='size-200'>
				<Heading level={2}>Settings</Heading>
				<Flex direction='column' gap='size-200' width='size-4600'>
					<TextField
						label='Display name'
						value={prefs.displayName}
						onChange={(v) => setPrefs((p) => ({ ...p, displayName: v }))}
					/>
					<Picker
						label='Clock format'
						selectedKey={prefs.clockFormat}
						onSelectionChange={(k) =>
							setPrefs((p) => ({ ...p, clockFormat: k as '12h' | '24h' }))
						}
					>
						<Item key='12h'>12-hour</Item>
						<Item key='24h'>24-hour</Item>
					</Picker>
					<Picker
						label='Theme'
						selectedKey={prefs.theme}
						onSelectionChange={(k) =>
							setPrefs((p) => ({ ...p, theme: k as 'wireframe' | 'black' }))
						}
					>
						<Item key='wireframe'>Wireframe</Item>
						<Item key='black'>Black</Item>
					</Picker>
					<Switch
						isSelected={!!prefs.notifications}
						onChange={(val) => setPrefs((p) => ({ ...p, notifications: val }))}
					>
						Email notifications
					</Switch>
					<Button
						variant='cta'
						onPress={() => {
							console.log('saved');
							/* save later */
						}}
					>
						Save
					</Button>
				</Flex>
			</View>
		</Provider>
	);
}
