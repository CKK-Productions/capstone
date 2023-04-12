<script lang="ts">
	//"context='module'"
	// import { writable } from 'svelte/store';
    import Header from './Header.svelte';
	// import type {UserInfo} from './stores';
	// import {Router, Route} from "svelte-routing";
	// import home from './lvlselect/+page.svelte';

	// export const user = writable<UserInfo>({uid: 0,username: "test"});
	// let localUser : UserInfo;

	// const sub = user.subscribe( value => {
	// 	localUser = value;
	// 	console.log(`Value = ${value.uid}, ${value.username}`);
	// })
</script>

<div class="app"> 
	<!-- {#if localUser.uid > 0} -->
    	<Header />
	<!-- {/if} -->
	<body>
    	<main>
			<!-- <Router>
				<Route path="/" component={home} />
			</Router> -->
    		<slot />
    	</main>
	</body>
    <footer>
        <p id="pfoot">A CKK Production</p>
    </footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
	/* Body causes the shrink of the fullscreen*/
	body {
		background-color: #1e90b0;
		min-height: 170vh;
	}

    main {
		flex: 1;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 1rem;
		width: 100%;
		max-width: 110rem;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: #1e81b0;
		min-height: 170vh;
	}
    /* min-height adjusts the darker blue size
		make distinct values for game vs main menu*/
    .app {
        display: flex;
        flex-direction: column;
        min-height: 170vh;
    }

    footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		background-color: #124d6a;
	}

    @media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
	
	#pfoot {
		font-size: 12;
		font-family: 'Roboto', sans-serif;
		font-weight: bold;
		color: white;
	}
</style>