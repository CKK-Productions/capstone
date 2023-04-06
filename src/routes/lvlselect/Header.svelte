<script>
	import { page } from '$app/stores';
    
    let user = { loggedIn: false };
	user = { loggedIn: true};

    // function toggle() {
    //     user.loggedIn = !user.loggedIn;
    // }

	function webpage(url) {
		window.location.assign(url);
	}
</script>

<div>
{#if user.loggedIn}
	<button on:click={() => user = { loggedIn: false}} id="left">
		Log out
	</button>
{:else}
	<button on:click={webpage("../")} id="left">
		Logging out
	</button>
{/if}

<nav>
    <svg viewBox="0 0 2 3" aria-hidden="true">
        <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul>
        <li aria-current={$page.url.pathname === './lvlselect/' ? 'page' : undefined}>
            <a href="../lvlselect">Cyber-Interactive</a>
        </li>
        <!-- Remove later once SPA is in-->
        <!-- <li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
            <a href="/login">Temporary Log In Page</a>
        </li>-->
    </ul>
    <svg viewBox="0 0 2 3" aria-hidden="true">
        <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
</nav>

{#if user.loggedIn}
    <button on:click={() => webpage("/lvlselect/progress")} id="right">
        Progress Report
    </button>
{/if}

</div>

<style>
	#left {
		position: absolute;
		top: 1.2%;
		left: 2%;
	}
	#right {
		position: absolute;
		top: 1.2%;
		right: 2%;
	}
	div {
		background-color: #124d6a;
	}
	#log {
		width: 100px;
		text-align: center;
		float: left;
	}

	#report {
		width: 100px;
		text-align: center;
		float: right;
	}

    button {
        font-family: inherit;
        font-size: inherit;
        padding: 0.4em;
        margin: 0 0 0.5em 0;
        box-sizing: border-box;
        border: 1px solid #1e90b0
    }

	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: #18678d;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
		background-color: #124d6a;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
