<button>Dark Mode</button>

<style>
	button {
		background: none;
		border: none;
		font-weight: 600;
		font-size: 12px;
		position: relative;
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
</style>
