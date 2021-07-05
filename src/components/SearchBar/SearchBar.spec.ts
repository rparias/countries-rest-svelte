import { render, screen } from '@testing-library/svelte';
import SearchBar from './SearchBar.svelte';

describe('Search Bar Component', () => {
	it('has country input', () => {
		render(SearchBar);
		const countryInput = screen.getByPlaceholderText('Search for a country...');
		expect(countryInput).toBeInTheDocument();
	});
});
