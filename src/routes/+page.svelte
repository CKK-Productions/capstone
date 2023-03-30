<script>
	export let accname='Marco';
	import { page } from '$app/stores';
	
	import Game1 from "./imgs/game1.jpg";
	import Game2 from "./imgs/game2.jpg";
	
	import YAH from "./imgs/yahcrop.png";
	function webpage(url) {
		window.location.assign(url);
	}

	let game = {two: false};

</script>

<svelte:head>
	<title>Level Select</title>
	<meta name="description" content="The Middle Space" />
</svelte:head>

<!-- text for asking to sign in-->
<section>
	<div> <!--class="aspectwrapper"-->
		<div class id="welcome">
			<h1>
				Hello, {accname}!
			</h1>
		</div>
		<div class="g1">
			<img src={Game1} on:click={() => webpage("/game1")} alt="Game 1 icon" />
		</div>
		<div class="g2">
			<img src={Game2} on:click={() => webpage("/game2")} alt="Game 2 icon" />
		</div>
		
		{#if game.two}
			<div class="right">
				<img src={YAH} alt="you are here" class="yah"/>
			</div>
		{:else}
			<div class="left">		
				<img src={YAH} alt="you are here" class="yah"/>
			</div>
		{/if}
		
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

	/* .aspectwrapper {
		display: inline-block;
		width: 100%;
		position: relative;
	} */
	.g1 {
		position: absolute;
		top: 30%;
		left: 28.5%;
		border: 3px ridge #355dd4;
		width:417px;
		height: 555px;
	}
	.g2 {
		position: absolute;
		top: 30%;
		left: 54.7%;
		border: 3px ridge #355dd4;
		width: 417px;
		height: 555px;
	}
	#welcome {
		font-family: 'Quicksand', sans-serif;
		position: absolute;
		top: 20%;
		left: 47%;
	}
	.left {
		position: absolute;
		top: 75%;
		left: 31.8%; 
	}
	.right {
		position: absolute;
		top: 75%;
		left: 58%;
	}
	.yah {
		width: 250px;
		height: 250px;
	}
</style>