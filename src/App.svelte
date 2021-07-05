<script>
	import Header from './components/Header/Header.svelte';
	import SearchBar from './components/SearchBar/SearchBar.svelte';
</script>

<Header />
<main>
	<div class="filters">
		<SearchBar />
	</div>
</main>

<style>
	main {
		padding: 1rem;
	}
</style>
