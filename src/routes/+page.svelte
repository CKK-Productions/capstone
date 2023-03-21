<script>
	export let accname='Marco';
	import { page } from '$app/stores';
	
	function webpage(url) {
		window.location.assign(url);
	}
</script>

<svelte:head>
	<title>Level Select</title>
	<meta name="description" content="The Middle Space" />
</svelte:head>

<section>
	<h1>
		Hello, {accname}!
	</h1>

	<div>
		<h1>Part 1	| Part 2</h1>
		<!-- Visual Line Here -->
		<button on:click={() => webpage("/game1")}><h2>Level 1</h2></button>
		<!-- Visual Line Here -->
		<button on:click={() => webpage("/game2/level1")}><h2>Level 1</h2></button>
	</div>
	<div>
		<p>Part 2</p>
	</div>
</section>

<style>
	
</style>