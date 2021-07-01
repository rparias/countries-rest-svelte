import { render, screen } from '@testing-library/svelte';
import Header from './Header.svelte';

describe('Header Component', () => {
	it('has h1 element', function () {
		render(Header);
		const h1Element = screen.getByRole('heading', { name: 'Where in the world?' });
		expect(h1Element).toBeInTheDocument();
	});
});
