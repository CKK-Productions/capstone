<script lang="ts">
    //remaining:
    //audio
    //sprite insert
    //timer?
    //API for:
    //  get temp num
    //  insert game completion along with fail count

    import Quiz from "./Quiz.svelte";
    import Page from "./Page.svelte"
    import Book from "./Book.svelte"
    import Door from "./Door.svelte"
    import Jan from "./Jan.svelte"
    // import Audio from "./Audio.svelte"
    
    function webpage(url) {
		window.location.assign(url);
	}

    //imports for different components

    // import {getTTS, Voice} from "../../../scripts/tts";
    //tts import WIP

    let currBook = 0; //for adjusting book chapter
    let currDoor = 0; //for changing door img
    
    let quhide = "none";
    let dohide = "show";
    let pahide = "none";
    let bohide = "none";
    let endhide = "none";
    let quizbutt = "click";
    let gamecomp = 0;
    let dialogcomp = 0;
    let unlBook = 0;
    let qa = 0;
    </script>

<svelte:head>
    <title>Game 1: Jan's Day</title>
    <meta name="description" content="Game 1">
</svelte:head>
<!-- <div class="audio">
    <Audio />
</div> -->
<div class="door" style="--doordis: {dohide}">
    <Door bind:z={currDoor} bind:v={gamecomp}/> <!--Door.svelte with z value being the same as currDoor-->    
</div>
<div class="quiz" style="--quizdis: {quhide}">
    <Quiz bind:d={dialogcomp} bind:v={gamecomp} bind:item={quizbutt} bind:z={currDoor} bind:qansw={qa}/> 
</div>
<div class="jan">
    <Jan bind:qhide={quhide} bind:dhide={dohide} bind:phide={pahide} bind:bhide={bohide} bind:ehide={endhide} bind:d={dialogcomp} bind:v={gamecomp} bind:c={quizbutt} bind:zed={currDoor} bind:b={unlBook} bind:qexp={qa}/> <!-- Jan.svelte-->
</div>

<div class="books" style="--bookdis: {bohide}">
    <h1>
        <Book bind:book={currBook} bk={unlBook} /> <!--Book.svelte with book value being the same as currBook | Outputing chapter value-->
    </h1>
</div>

<div class="page" style="--pagedis: {pahide}">
    <Page x={currBook} /> <!--Page.svelte with x being the same as currBook | Inputing chapter value-->
</div>
<div class="end" style="--endis: {endhide}">
    <h2>Score Submitted</h2>
    <button id="return" on:click={() => webpage("./")}>
        <h2>Return to Main Menu</h2>
    </button>
</div>
<!-- <div class="audio">
    <Audio />
</div> -->
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
    div {
        padding: 10px;
    }
    .quiz {
        display: var(--quizdis)
    }
    .jan {
        display: show;
    }
    .door {
        position: absolute;
        left: 300px;
        /* border: 3px solid blue; */
        width: 600px;
        height: 600px;
        display: var(--doordis)
    } 
    .books {
        position: absolute;
        left: 400px;
        top: 700px;
        /* border: 3px solid blue; */
        width: 500px;
        display: var(--bookdis);
        background-color: rgb(144, 73, 46);
        border: 3px solid rgb(93, 48, 30);
    }
    .page {
        position: absolute;
        left: 1050px;
        top: 670px;
        /* border: 3px solid blue; */
        display: var(--pagedis)
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
    .audio {
        position: absolute;
        top:4%;
        left:82%;
    }
</style>