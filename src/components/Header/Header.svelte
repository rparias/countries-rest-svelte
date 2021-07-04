<script>
	import DarkModeButton from '../DarkModeButton/DarkModeButton.svelte';
</script>

<header>
	<h1>Where in the world?</h1>
	<DarkModeButton />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		box-shadow: 0 1px 3px #979797;
		padding: 30px 16px;
	}

	h1 {
		font-weight: 800;
		font-size: 1rem;
	}

	@media only screen and (min-width: 768px) {
		header {
			padding: 24px 81px;
		}

		h1 {
			font-size: 24px;
		}
	}
</style>
