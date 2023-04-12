<script>
    import Jan from "./Jan.svelte";
    // import Cat1 from "./comps/Cat1.svelte";

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

    const Cat1 = [Cat1b, Cat1a];
    const Cat2 = [Cat2b, Cat2a];
    const Cat3 = [Cat3b, Cat3a];
    const Cat4 = [Cat4b, Cat4a];
    const Cat5 = [Cat5b, Cat5a];
    const Cat6 = [Cat6b, Cat6a];
    const Cat7 = [Cat7b, Cat7a];
    const Cat8 = [Cat8b, Cat8a];

    let ca1 = 0;
    let ca2 = 0;
    let ca3 = 0;
    let ca4 = 0;
    let ca5 = 0;
    let ca6 = 0;
    let ca7 = 0;
    let ca8 = 0;

    let c1hide = "show";
    let c2hide = "show";
    let c3hide = "show";
    let c4hide = "show";
    let c5hide = "show";
    let c6hide = "show";
    let c7hide = "show";
    let c8hide = "show";
</script>

<svelte:head>
	<title>Game 2: Jan's Judgement</title>
	<meta name="description" content="Second Game" />
</svelte:head>
<div>
    <Jan />
</div>
<div>
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
</div>

<style>
    .catbox1 {
        position: absolute;
        top: 10%;
        left: 20%;
        display: var(--cat1dis);
    }
    .catbox2 {
        position: absolute;
        top: 30%;
        left: 20%;
        display: var(--cat2dis);
    }
    .catbox3 {
        position: absolute;
        top: 50%;
        left: 20%;
        display: var(--cat3dis);
    }
    .catbox4 {
        position: absolute;
        top: 70%;
        left: 20%;
        display: var(--cat4dis);
    }
    .catbox5 {
        position: absolute;
        top: 10%;
        left: 70%;
        display: var(--cat5dis);
    }
    .catbox6 {
        position: absolute;
        top: 30%;
        left: 70%;
        display: var(--cat6dis);
    }
    .catbox7 {
        position: absolute;
        top: 50%;
        left: 70%;
        display: var(--cat7dis);
    }
    .catbox8 {
        position: absolute;
        top: 70%;
        left: 70%;
        display: var(--cat8dis);
    }
</style>