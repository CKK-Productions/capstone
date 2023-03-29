<script lang="ts">
	import Layout from "../+layout.svelte";
	import Header from "../Header.svelte";
    import Quiz from "./Quiz.svelte";
    import Page from "./Page.svelte"
    import Book from "./Book.svelte"
    import Door from "./Door.svelte"
    import Jan from "./Jan.svelte"
    //imports for different components

    import {getTTS, Voice} from "../../scripts/tts";
    //tts import

    let currBook = 0; //for adjusting chapter
    let currDoor = 0; //for changing door img

</script>

<svelte:head>
    <title>Game 1: Jan's Day</title>
    <meta name="description" content="Game 1">
</svelte:head>

<div class="door">
    <!--<button on:click={() => console.log(test)}>test</button>-->
    <Door bind:z={currDoor}/> <!--Door.svelte with z value being the same as currDoor-->    
</div>
<div>
    <Quiz /> <!--Quiz.svelte-->
</div>
<div>
    <Jan /> <!-- Jan.svelte-->
</div>

<div class="books">
    <h1>
        <Book bind:book={currBook} /> <!--Book.svelte with book value being the same as currBook | Outputing chapter value-->
    </h1>
</div>

<div class="page">
    <Page x={currBook} /> <!--Page.svelte with x being the same as currBook | Inputing chapter value-->
</div>
<style>
    div {
        padding: 10px;
    }

    div.door {
        position: absolute;
        left: 300px;
        border: 3px solid blue;
        width: 600px;
        height: 600px;
    } 
    div.books {
        position: absolute;
        left: 400px;
        top: 700px;
        border: 3px solid blue;
        width: 500px;
    }
    div.page {
        position: absolute;
        left: 1050px;
        top: 670px;
        border: 3px solid blue;
    }
    div.quiz {
        position: absolute;
        left: 860px;
        top: 200px;
        border: 3px solid blue;
        width: 620px;
    }
</style>