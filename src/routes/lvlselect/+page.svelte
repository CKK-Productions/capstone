<script lang="ts">
	//remaining:
	//API for:
	//	get account name?(await)
	//	get account progress to lock/unlock game 2
	export let accname='Marco';
	import { page } from '$app/stores';
	
	import Game1 from "./imgs/game1.jpg";
	import Game2 from "./imgs/game2.jpg";
	
	import YAH from "./imgs/yah2.png";

	// import {user} from "./+layout.svelte";
	// import type {UserInfo} from "../stores";

	function webpage(url : string) {
		window.location.assign(url);
	}

	let game = {two: false};
	
	// async function cookieArrive() {
	// 	const res = document.cookie;
	// 	const data = await res.json();

	// 	if (res.ok) {
	// 		return data;
	// 	} else{
	// 		throw new Error(data);
	// 	}

	// }
	// let localUser : UserInfo;

	// const sub = user.subscribe( value => {
	// 	localUser = value;
	// 	console.log(`Value = ${value.uid}, ${value.username}`);
	// });

</script>

<svelte:head>
	<title>Level Select</title>
	<meta name="description" content="The Middle Space" />
</svelte:head>

<!-- text for asking to sign in-->
<section>
	<div> <!--class="aspectwrapper"-->
		<div id="welcome">
			<!-- {#await cookieArrive()}
				<h1> Loading...</h1>
			{:then user}
				<h1> Hello, {user.employee}!</h1>
			{:catch error}
				<h1> Failed D:</h1>
			{/await} -->
			<h1> Hello, {accname}!</h1>
		</div>
		<div class="g1">
			<img src={Game1} on:click={() => webpage("./lvlselect/game1")} alt="Game 1 icon" />
		</div>
		<div class="g2">
			<img src={Game2} on:click={() => webpage("./lvlselect/game2")} alt="Game 2 icon" />
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
		height: 270px;
	}
</style>