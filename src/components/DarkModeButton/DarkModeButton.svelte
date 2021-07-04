<script>
	function handleClick() {
		const body = document.body;
		body.classList.toggle('dark-mode');
	}
</script>

<button on:click={handleClick}>Dark Mode</button>

<style>
	button {
		background: none;
		border: none;
		font-weight: 600;
		font-size: 12px;
		position: relative;
		cursor: pointer;
	}

	button::before {
		position: absolute;
		top: 0;
		left: -25px;
		content: '';
		background-image: url('../images/light_moon.png');
		background-repeat: no-repeat;
		background-size: 16px;
		width: 100%;
		height: 100%;
	}

	@media only screen and (min-width: 768px) {
		button {
			font-size: 16px;
		}

		button::before {
			top: 4px;
			background-size: auto;
		}
	}
</style>
