<script>
    import Book1 from "./books/book1.png";
    import Book2 from "./books/book2.png";
    import Book3 from "./books/book3.png";
    import Book4 from "./books/book4.png";
    import Book5 from "./books/book5.png";
    import Book5Alt from "./books/book5true.png";
    //importing Book pictures

    let b1hide = "show";
    let b2hide = "none";
    let b3hide = "none";
    let b4hide = "none";
    let b5hide = "none";

    export let book = 0;
    export let bk = 0;

    function bookCheck() {
        if (bk == 1) {
            b2hide = "show";
        }
        if (bk == 2) {
            b3hide = "show";
        }
        if (bk == 3) {
            b4hide = "show";
        }
        if (bk == 4) {
            b5hide = "show";
        }
    }

    $:bk, bookCheck();
    //exporting book value for Page.svelte to read
</script>

<div>
    <img src={Book1} id="b1" style="--b1dis: {b1hide}" on:click={() => {book = 0;}} alt="the book" />
    <img src={Book2} id="b2" style="--b2dis: {b2hide}" on:click={() => {book = 1;}} alt ="the book 2" />
    <img src={Book3} id="b3" style="--b3dis: {b3hide}" on:click={() => {book = 2;}} alt ="the book 3" />
    <img src={Book4} id="b4" style="--b4dis: {b4hide}" on:click={() => {book = 3;}}  alt ="the book 4" />
    <img src={Book5} id="b5" style="--b5dis: {b5hide}" on:click={() => {book = 4;}} alt ="the book 5" />
    <!-- <img src={Book5Alt} on:click={() => {book = 4;}} alt ="the book 2" /> -->
    <!--The different book images with click inputs setting the book value-->
</div>

<style>
    #b1 {
        display: var(--b1dis);
        position: relative;
        left:-2%;
        border-bottom: 3px rgb(88, 48, 25) solid;
        border-top: 3px rgb(88, 48, 25) solid;
        background-color:rgb(50, 28, 14);
    }
    #b2 {
        display: var(--b2dis);
        position: relative;
        left:-2%;
        border-bottom: 3px rgb(88, 48, 25) solid;
        background-color:rgb(50, 28, 14);
    }
    #b3 {
        display: var(--b3dis);
        position: relative;
        left:-2%;
        border-bottom: 3px rgb(88, 48, 25) solid;
        background-color:rgb(50, 28, 14);
    }
    #b4 {
        display: var(--b4dis);
        position: relative;
        left:-2%;
        border-bottom: 3px rgb(88, 48, 25) solid;
        background-color:rgb(50, 28, 14);
    }
    #b5 {
        display: var(--b5dis);
        position: relative;
        left:-2%;
        border-bottom: 3px rgb(88, 48, 25) solid;
        background-color:rgb(50, 28, 14);
    }
</style>