<script>
    import { tempGet, getFnameById, getGameOne, getGameTwo } from '../../../scripts/api';
    
    let acc = "Tufu";
    let accname = `${acc}`;

    let Fails = "0";
    let Comps = ["No", "Yes"]
    let Complete = Comps[0];

    let Pa = ["Not Started","Pass","Fail"]
    let Pass = Pa[0];
    let G2Complete = Comps[0];

    let storedUser;
	let usersName;
    let GFails;
    let GPass;
    let State;

	async function userGet() {
		storedUser = await tempGet();
		usersName = await getFnameById(storedUser);

		console.log(usersName)
        return usersName;
	}

    async function gameOne () {
        storedUser = await tempGet();
        GFails = await getGameOne(storedUser);
        if (GFails !== 666) {
            Complete = Comps[1];
            jan1hide = "none";
            jan2hide = "show";
            jan3hide = "none";
            jan4hide = "show";
            return GFails;
        }
        else {
            GFails = "Not Started"
            return GFails;
        }
        
    }

    async function gameTwo () {
        storedUser = await tempGet();
        GPass = await getGameTwo(storedUser);
        if (GPass !== 666) {
            G2Complete = Comps[1];
            if (GPass == "y") {
                State = "Passed";
                jan2hide = "none";
                jan4hide = "none";
            }
            else {
                State = "Failed"
            }
        }
        else {
            State = "Not Started";
        }
        return State;
    }   

    let userPromise = userGet();
    let onePromise = gameOne();
    let twoPromise = gameTwo();
    

    import Icon1 from "../game1/jan/janup.gif";
    import Icon2 from "../game1/jan/janse.gif";
    import Icon2alt from "../game2/imgs/jan/jannormal.gif";
    import Icon1alt from "../game2/imgs/jan/jansmug.gif";

    let jan1hide = "show";
    let jan2hide = "none";
    let jan3hide = "show";
    let jan4hide = "none";
</script>


<svelte:head>
    <title>Progress Report</title>
    <meta name="description" content="Collection of Progress">
</svelte:head>

<div class="acc">
    {#await userPromise}
    <h2>Account Name: Loading...</h2>
    {:then account}
    <h2>Account Name: {account}</h2>
    {:catch error}
    <h2>Account Name: Name Failed</h2>
    {/await}

</div>
<div class="g1icon" style="--jandis: {jan1hide}">
    <img src={Icon1} alt="icon1" />
</div>
<div class="g1iconalt" style="--jan4dis: {jan4hide}">
    <img src={Icon1alt} alt="icon1" />
</div>
<div class="g2icon" style="--jan3dis: {jan3hide}">
    <img src={Icon2} alt="icon1" />
</div>
<div class="g2iconalt" style="--jan2dis: {jan2hide}">
    <img src={Icon2alt} alt="icon1" />
</div>
<div class="g1">
    <h1>Jan's Day</h1>
    {#await onePromise}
    <h3>Fails: Loading</h3>
    <h3>Completed: Loading</h3>
    {:then failure}
    <h3>Fails: {failure}</h3>
    <h3>Completed: {Complete}</h3>
    {:catch error}
    <h3>Fails: Not Started</h3>
    <h3>Completed: {Complete}</h3>
    {/await}
</div>
<div class="g2">
    <h1>Jan's Meoware</h1>
    {#await twoPromise}
    <h3>Pass: Loading</h3>
    <h3>Completed: {G2Complete}</h3>
    {:then passing}
    <h3>Pass: {passing}</h3>
    <h3>Completed: {G2Complete}</h3>
    {:catch error}
    <h3>Pass: Not Started</h3>
    <h3>Completed: {G2Complete}</h3>
    {/await}
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
        display: var(--jandis)
    }
    .g1iconalt {
        position: absolute;
        top: 25%;
        left: 66%;
        display: var(--jan4dis);
    }
    .g2icon {
        position: absolute;
        top: 25%;
        left: 58%;
        display: var(--jan3dis);
    }
    .g2iconalt {
        position: absolute;
        top: 30%;
        left: 19%;
        display: var(--jan2dis)
    }
    .acc {
        position: absolute;
        top: 20%;
        left: 45%;
    }
</style>