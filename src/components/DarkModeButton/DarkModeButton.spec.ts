import { render, screen } from '@testing-library/svelte';
import DarkModeButton from './DarkModeButton.svelte';

describe('Dark Mode Button component', () => {
	it('has Dark Mode Button enabled', () => {
		render(DarkModeButton);
		const button = screen.getByRole('button', { name: 'Dark Mode' });
		expect(button).toBeEnabled();
	});
});
