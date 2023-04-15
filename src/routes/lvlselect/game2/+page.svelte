<script>
    //Additions:
    //make hovers work
    
    import Jan from "./Jan.svelte";
    import Cat1p from "./comps/Cat1.svelte";
    import Cat2p from "./comps/Cat2.svelte";
    import Cat3p from "./comps/Cat3.svelte";
    import Cat4p from "./comps/Cat4.svelte";
    import Cat5p from "./comps/Cat5.svelte";
    import Cat6p from "./comps/Cat6.svelte";
    import Cat7p from "./comps/Cat7.svelte";
    import Cat8p from "./comps/Cat8.svelte";

    import Cat1a from "./imgs/cats/cat1.png";
    import Cat2a from "./imgs/cats/cat2.png";
    import Cat3a from "./imgs/cats/cat3.png";
    import Cat4a from "./imgs/cats/cat4.png";
    import Cat5a from "./imgs/cats/cat5.png";
    import Cat6a from "./imgs/cats/cat6.png";
    import Cat7a from "./imgs/cats/cat7.png";
    import Cat8a from "./imgs/cats/cat8.png";

    import Cat1b from "./imgs/cats/at1.png";
    import Cat2b from "./imgs/cats/at2.png";
    import Cat3b from "./imgs/cats/at3.png";
    import Cat4b from "./imgs/cats/at4.png";
    import Cat5b from "./imgs/cats/at5.png";
    import Cat6b from "./imgs/cats/at6.png";
    import Cat7b from "./imgs/cats/at7.png";
    import Cat8b from "./imgs/cats/at8.png";

    import Cat10a from "./imgs/cats/cat10.png";
    import Cat10b from "./imgs/cats/at10.png";


    const Cat1 = [Cat1b, Cat1a];
    const Cat2 = [Cat2b, Cat2a];
    const Cat3 = [Cat3b, Cat3a];
    const Cat4 = [Cat4b, Cat4a];
    const Cat5 = [Cat5b, Cat5a];
    const Cat6 = [Cat6b, Cat6a];
    const Cat7 = [Cat7b, Cat7a];
    const Cat8 = [Cat8b, Cat8a];
    const Cat10 = [Cat10a, Cat10b];

    let ca1 = 0;
    let ca2 = 0;
    let ca3 = 0;
    let ca4 = 0;
    let ca5 = 0;
    let ca6 = 0;
    let ca7 = 0;
    let ca8 = 0;
    let ca10 = 0;

    let cat = 9;

    let c1hide = "none";
    let c2hide = "none";
    let c3hide = "none";
    let c4hide = "none";
    let c5hide = "none";
    let c6hide = "none";
    let c7hide = "none";
    let c8hide = "none";
    let c10hide = "none";
    let ghide = "none";
    let jhide = "show";
    let dhide = "show";
    let endhide = "none";
    
    let cat1hov = "cyan";
    let cat2hov = "cyan";
    let cat3hov = "cyan";
    let cat4hov = "cyan";
    let cat5hov = "cyan";
    let cat6hov = "cyan";
    let cat7hov = "cyan";
    let cat8hov = "cyan";
    const hovers = [cat1hov, cat2hov, cat3hov, cat4hov, cat5hov, cat6hov, cat7hov, cat8hov]

    let cat1w = 0;
    let cat2w = 0;
    let cat3w = 0;
    let cat4w = 0;
    let cat5w = 0;
    let cat6w = 0;
    let cat7w = 0;
    let cat8w = 0;

    let d = 0;
    let v = 0;
    let w = 0;
    let y = 0;
    let f = 0;
    let endtitle = "naenae";

    function gameChange(x) {
        if (cat == x) {
            // cat1hov = "cyan";
            ghide = "none";
            cat = 9;
        }
        else {
            // cat1hov = "green";
            ghide = "show";
            cat = x;
        }
    }
    
    function catOneChange() {
        if (cat1w == 1) {
            ca1 = 1
            v = 1;
            w++;
        }
        else if (cat1w == 2) {
            c1hide = "none"
            ghide = "none"
            v = 2;
        }
    }
    
    function catTwoChange() {
        if (cat2w == 1) {
            ca2 = 1
            v = 1;
            w++;
        }
        else if (cat2w == 2) {
            c2hide = "none"
            ghide = "none"
            v = 2;
        }
    }

    function catThrChange() {
        if (cat3w == 1) {
            ca3 = 1
            v = 1;
            w++;
        }
        else if (cat3w == 2) {
            c3hide = "none"
            ghide = "none"
            v = 2;
        }
    }
    function catFouChange() {
        if (cat4w == 1) {
            ca4 = 1
            v = 1;
            w++;
        }
        else if (cat4w == 2) {
            c4hide = "none"
            ghide = "none"
            v = 2;
        }
    }
    function catFivChange() {
        if (cat5w == 1) {
            ca5 = 1
            v = 1;
            w++;
        }
        else if (cat5w == 2) {
            c5hide = "none"
            ghide = "none"
            v = 2;
        }
    }
    function catSixChange() {
        if (cat6w == 1) {
            ca6 = 1
            v = 1;
            w++;
        }
        else if (cat6w == 2) {
            c6hide = "none"
            ghide = "none"
            v = 2;
        }
    }
    function catSevChange() {
        if (cat7w == 1) {
            ca7 = 1
            v = 1;
            w++;
        }
        else if (cat7w == 2) {
            c7hide = "none"
            ghide = "none"
            v = 2;
        }
    }
    function catEigChange() {
        if (cat8w == 1) {
            ca8 = 1
            v = 1;
            w++;
        }
        else if (cat8w == 2) {
            c8hide = "none"
            ghide = "none"
            v = 2;
        }
    }

    function webpage(url) {
		window.location.assign(url);
	}


    $:cat1w, catOneChange();
    $:cat2w, catTwoChange();
    $:cat3w, catThrChange();
    $:cat4w, catFouChange();
    $:cat5w, catFivChange();
    $:cat6w, catSixChange();
    $:cat7w, catSevChange();
    $:cat8w, catEigChange();
    $:ghide, ghide = ghide;
</script>

<svelte:head>
	<title>Game 2: Jan's Meoware</title>
	<meta name="description" content="Second Game" />
</svelte:head>
<div>
    <Jan bind:c1={c1hide} bind:c2={c2hide} bind:c3={c3hide} 
    bind:c4={c4hide} bind:c5={c5hide} bind:c6={c6hide}
    bind:c7={c7hide} bind:c8={c8hide} bind:c10={c10hide} 
    bind:cv10={ca10} bind:diafin={d} bind:gamefin={v}
    bind:janhide={jhide} bind:diahide={dhide} bind:total={w} 
    bind:ehide={endhide} bind:etitle={endtitle}/>
</div>
<div class="gamebox" style="--gamedis: {ghide}">
    {#if cat == 0}
        <Cat1p bind:cat1win={cat1w} bind:ic1={ghide}/>
    {:else if cat == 1}
        <Cat2p bind:cat2win={cat2w} bind:ic2={ghide}/>
    {:else if cat == 2}
        <Cat3p bind:cat3win={cat3w} bind:ic3={ghide}/>
    {:else if cat == 3}
        <Cat4p bind:cat4win={cat4w} bind:ic4={ghide} bind:y={y}/>
    {:else if cat == 4}
        <Cat5p bind:cat5win={cat5w} bind:ic5={ghide}/>
    {:else if cat == 5}
        <Cat6p bind:cat6win={cat6w} bind:ic6={ghide}/>
    {:else if cat == 6}
        <Cat7p bind:cat7win={cat7w} bind:ic7={ghide} bind:f={f}/>
    {:else if cat == 7}
        <Cat8p bind:cat8win={cat8w} bind:ic8={ghide}/>
    {/if}
</div>
<div>
    {#if (d == 1)}
        <div class="catbox1" style="--cat1dis: {c1hide}; --cat1hov: {cat1hov}">
            <img src={Cat1[ca1]} alt="Cat 1" on:click={() => gameChange(0)}/>
        </div>
        <div class="catbox2" style="--cat2dis: {c2hide}; --cat2hov: {cat2hov}">
            <img src={Cat2[ca2]} alt="Cat 2" on:click={() => gameChange(1)}/>
        </div>
        <div class="catbox3" style="--cat3dis: {c3hide}; --cat3hov: {cat3hov}">
            <img src={Cat3[ca3]} alt="Cat 3" on:click={() => gameChange(2)}/>
        </div>
        <div class="catbox4" style="--cat4dis: {c4hide}; --cat4hov: {cat4hov}">
            <img src={Cat4[ca4]} alt="Cat 4" on:click={() => gameChange(3)} />
        </div>
        <div class="catbox5" style="--cat5dis: {c5hide}; --cat5hov: {cat5hov}">
            <img src={Cat5[ca5]} alt="Cat 5" on:click={() => gameChange(4)} />
        </div>
        <div class="catbox6" style="--cat6dis: {c6hide}; --cat6hov: {cat6hov}">
            <img src={Cat6[ca6]} alt="Cat 6" on:click={() => gameChange(5)} />
        </div>
        <div class="catbox7" style="--cat7dis: {c7hide}; --cat7hov: {cat7hov}">
            <img src={Cat7[ca7]} alt="Cat 7" on:click={() => gameChange(6)} />
        </div>
        <div class="catbox8" style="--cat8dis: {c8hide}; --cat8hov: {cat8hov}">
            <img src={Cat8[ca8]} alt="Cat 8" on:click={() => gameChange(7)} />
        </div>
    {:else}
        <div class="catbox1" style="--cat1dis: {c1hide}">
            <img src={Cat1[ca1]} alt="Cat 1" />
        </div>
        <div class="catbox2" style="--cat2dis: {c2hide}">
            <img src={Cat2[ca2]} alt="Cat 2" />
        </div>
        <div class="catbox3" style="--cat3dis: {c3hide}">
            <img src={Cat3[ca3]} alt="Cat 3" />
        </div>
        <div class="catbox4" style="--cat4dis: {c4hide}">
            <img src={Cat4[ca4]} alt="Cat 4" />
        </div>
        <div class="catbox5" style="--cat5dis: {c5hide}">
            <img src={Cat5[ca5]} alt="Cat 5" />
        </div>
        <div class="catbox6" style="--cat6dis: {c6hide}">
            <img src={Cat6[ca6]} alt="Cat 6" />
        </div>
        <div class="catbox7" style="--cat7dis: {c7hide}">
            <img src={Cat7[ca7]} alt="Cat 7" />
        </div>
        <div class="catbox8" style="--cat8dis: {c8hide}">
            <img src={Cat8[ca8]} alt="Cat 8" />
        </div>
    {/if}
    <div class="catbox10" style="--cat10dis: {c10hide};">
        <img src={Cat10[ca10]} alt="Cat to be popped" />
    </div>
    <div class="end" style="--endis: {endhide}">
        <h2>{endtitle}</h2>
        <button id="return" on:click={() => webpage("./")}>
        <h2>Return to Main Menu</h2>
        </button>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
    h2 {
        font-family: 'Quicksand', sans-serif;
        text-align: center;
        position: relative;
        top: 20%;
    }
    #return {
        position: relative;
        top: 20%;
        left: 32.5%;
    }
    .gamebox {
        position: absolute;
        top: 20%;
        left: 37.8%;
        width: 600px;
        height: 800px;
        background-color: #1e81b0;
        display: var(--gamedis);
    }
    .catbox1 {
        position: absolute;
        top: 10%;
        left: 20%;
        display: var(--cat1dis);
        padding: 4px;
        padding-bottom: 1px;
    }
    .catbox1:hover {
        background-color: var(--cat1hov);
    }
    .catbox2 {
        position: absolute;
        top: 30%;
        left: 20%;
        display: var(--cat2dis);
        padding: 4px;
        padding-bottom: 1px;
    }
    .catbox2:hover {
        background-color: var(--cat2hov);
    }
    .catbox3 {
        position: absolute;
        top: 50%;
        left: 20%;
        display: var(--cat3dis);
        padding: 4px;
        padding-bottom: 1px;
    }
    .catbox3:hover {
        background-color: var(--cat3hov);
    }
    .catbox4 {
        position: absolute;
        top: 70%;
        left: 20%;
        display: var(--cat4dis);
        padding: 4px;
        padding-bottom: 1px;
    }
    .catbox4:hover {
        background-color: var(--cat4hov);
    }
    .catbox5 {
        position: absolute;
        top: 10%;
        left: 70%;
        display: var(--cat5dis);
        padding: 4px;
        padding-bottom: 1px;
    }
    .catbox5:hover {
        background-color: var(--cat5hov);
    }
    .catbox6 {
        position: absolute;
        top: 30%;
        left: 70%;
        display: var(--cat6dis);
        padding: 4px;
        padding-bottom: 1px;
    }
    .catbox6:hover {
        background-color: var(--cat6hov);
    }
    .catbox7 {
        position: absolute;
        top: 50%;
        left: 70%;
        display: var(--cat7dis);
        padding: 4px;
        padding-bottom: 1px;
    }
    .catbox7:hover {
        background-color: var(--cat7hov);
    }
    .catbox8 {
        position: absolute;
        top: 70%;
        left: 70%;
        display: var(--cat8dis);
        padding: 4px;
        padding-bottom: 1px;
    }
    .catbox8:hover {
        background-color: var(--cat8hov);
    }
    .catbox10 {
        position: absolute;
        top: 40%;
        left: 30%;
        display: var(--cat10dis);
    }
    .end {
        background-color: rgb(115, 130, 242);
        position: absolute;
        width: 600px;
        height: 250px;
        left: 38%;
        top: 35%;
        display: var(--endis);
    }
</style>