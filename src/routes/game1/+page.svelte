<script lang="ts">
	import Layout from "../+layout.svelte";
	import Header from "../Header.svelte";
    /*import GameOne from '../GameOne.svelte';*/
    import Door from "./level1/locked.png"
    import Book from "./level1/book.png"
    import Book2 from "./level1/book2.png"
    import Page from "./level1/a1.jpg"
    import Janny from "./level1/janjoy.png"
    import GameOne from "./GameOne.svelte"
</script>

<svelte:head>
    <title>Game 1: Level 1</title>
    <meta name="description" content="Level 1">
</svelte:head>

<div class="door">
    <img src={Door} alt="the door" />    
</div>
    <GameOne />
<div class="janny">
    <img src={Janny} alt="Janny" />
</div>
<div class="jan">
    <button class="jan" type="button" disabled><h2>hi There!</h2></button>
</div>

<div class="books">
    <h1>
        <img src={Book} alt="the book" />
    </h1>
    <h1>
        <img src={Book2} alt ="the book 2" />
    </h1>
</div>

<div class="page">
    <img src={Page} alt ="the page" id="pg"/>
</div>
<style>
    /*.door {
        float: left;
    }*/
    /*.quiz {
        float: right;
        border-style: solid;
    }*/
    button.jan {
        width: 500px;
        height: 200px;
    }
    /*.page {
        float: center;
        border-style: solid;
        border-color: #1e90b0;
    }*/
    #pg {
        width: 900px;
        height: 1500px;
    }
    div {
        padding: 10px;
    }
    /*.books {
        border-style: inset;
    }*/

    div.door {
        position: absolute;
        left: 400px;
        border: 3px solid blue;
    } 
    div.books {
        position: absolute;
        left: 400px;
        top: 670px;
        border: 3px solid blue;
    }
    div.page {
        position: absolute;
        left: 1050px;
        top: 670px;
        border: 3px solid blue;
    }
    div.jan {
        position: absolute;
        right: 450px;
        top: 400px;
        border: 3px solid blue;
    }
    div.janny {
        position: absolute;
        right: 600px;
        top: 150px;
        border: 3px solid blue;
    }
</style>