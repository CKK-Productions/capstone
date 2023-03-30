<script lang="ts">
	import Layout from "../+layout.svelte";
	import Header from "../Header.svelte";
    import Quiz from "./Quiz.svelte";
    import Page from "./Page.svelte"
    import Book from "./Book.svelte"
    import Door from "./Door.svelte"
    import Jan from "./Jan.svelte"
    import AudioPlayer from './AudioPlayer.svelte'
    //imports for different components

    import {getTTS, Voice} from "../../scripts/tts";
    //tts import WIP

    let currBook = 0; //for adjusting book chapter
    let currDoor = 0; //for changing door img
    
    let qhide = "none";
    let dhide = "show";
    let phide = "none";
    let bhide = "none";
    </script>

<svelte:head>
    <title>Game 1: Jan's Day</title>
    <meta name="description" content="Game 1">
</svelte:head>
<!-- <AudioPlayer {audio} /> -->
<div class="door" style="--doordis: {dhide}">
    <!--<button on:click={() => console.log(test)}>test</button>-->
    <Door bind:z={currDoor}/> <!--Door.svelte with z value being the same as currDoor-->    
</div>
<div class="quiz" style="--quizdis: {qhide}">
    <Quiz /> <!--Quiz.svelte-->
</div>
<div class="jan">
    <Jan bind:a={qhide} bind:b={dhide} bind:c={phide} bind:d={bhide}/> <!-- Jan.svelte-->
</div>

<div class="books" style="--bookdis: {bhide}">
    <h1>
        <Book bind:book={currBook} /> <!--Book.svelte with book value being the same as currBook | Outputing chapter value-->
    </h1>
</div>

<div class="page" style="--pagedis: {phide}">
    <Page x={currBook} /> <!--Page.svelte with x being the same as currBook | Inputing chapter value-->
</div>
<style>
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
        display: var(--bookdis)
    }
    .page {
        position: absolute;
        left: 1050px;
        top: 670px;
        /* border: 3px solid blue; */
        display: var(--pagedis)
    }
    .hide {
        display: hide;
    }
</style>