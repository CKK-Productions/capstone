<script>
    let acc = "Tufu";
    let accname = `${acc}`;

    let Fails = "0";
    let Comps = ["No", "Yes"]
    let Complete = Comps[0];

    let Pa = ["Not Started","Pass","Fail"]
    let Pass = Pa[0];
    let G2Complete = Comps[0];

    import Icon1 from "../game1/jan/janup.gif";
    import Icon2 from "../game1/jan/janse.gif";
</script>


<svelte:head>
    <title>Progress Report</title>
    <meta name="description" content="Collection of Progress">
</svelte:head>

<div class="acc">
    <h2>Account Name: {accname}</h2>

</div>
<div class="g1icon">
    <img src={Icon1} alt="icon1" />
</div>
<div class="g2icon">
    <img src={Icon2} alt="icon1" />
</div>
<div class="g1">
    <h1>Jan's Day</h1>
    <h3>Fails: {Fails}</h3>
    <h3>Completed: {Complete}</h3>
</div>
<div class="g2">
    <h1>Jan's Meoware</h1>
    <h3>Pass: {Pass}</h3>
    <h3>Completed: {G2Complete}</h3>
</div>
<div>

</div>
<div>

</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

    h1 {
        font-family: 'Raleway', sans-serif;
        border-bottom: black 4px solid;
    }
    h2 {
        font-family: 'Quicksand', sans-serif;
    }
    h3 {
        font-family: 'Raleway', sans-serif;
    }
    .g1 {
        position: absolute;
        top: 40%;
        left: 35%;
    }
    .g2 {
        position: absolute;
        top: 40%;
        left: 57%;
    }
    .g1icon{
        position: absolute;
        top: 25%;
        left: 34%;
    }
    .g2icon {
        position: absolute;
        top: 25%;
        left: 58%;
    }
    .acc {
        position: absolute;
        top: 20%;
        left: 45%;
    }
</style>