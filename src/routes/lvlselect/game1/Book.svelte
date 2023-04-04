<script>
    import Book1 from "./books/book1.png";
    import Book2 from "./books/book2.png";
    import Book3 from "./books/book3.png";
    import Book4 from "./books/book4.png";
    import Book5 from "./books/book5.png";
    import Book5Alt from "./books/book5true.png";
    //importing Book pictures

    export let book = 0;
    //exporting book value for Page.svelte to read
</script>

<div>
    <img src={Book1} on:click={() => {book = 0;}} alt="the book" />
    <img src={Book2} on:click={() => {book = 1;}} alt ="the book 2" />
    <img src={Book3} on:click={() => {book = 2;}} alt ="the book 2" />
    <img src={Book4} on:click={() => {book = 3;}}  alt ="the book 2" />
    <img src={Book5} on:click={() => {book = 4;}} alt ="the book 2" />
    <img src={Book5Alt} on:click={() => {book = 4;}} alt ="the book 2" />
    <!--The different book images with click inputs setting the book value-->
</div>