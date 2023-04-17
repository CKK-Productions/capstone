<script>
    export let cat4win = 0;
    export let ic4 = "none";
    export let y = 0;

    function gameCheck(x) {
        if (x == 1) {
            y = 2;
            cat4win = 1
        }
        else {
            cat4win = 2
            alert("Not every cure is guarranteed to work.")
        }
    }

    function gameAdv(z) {
        if (z == 1) {
            y = 1
        }
        else {
            cat4win = 2
            alert("Not everything has a remedy.")
        }
    }

    function closeGame() {
        ic4 = "none";
    }

</script>

<main>
    <div class="test">
        {#if y == 0}
            <h2>Your computer has no available backups or safetys in place before a malware incident occured.
            </h2>

            <h2>
                Can you guarantee the computer can be safely recovered?
            </h2>
            
            <div class="buttons">
                <button class="answer" on:click={() => gameAdv(1)}><h4>No</h4></button>
                <button class="answer" on:click={() => gameAdv(0)}><h4>Yes</h4></button>
            </div>
        {:else if y == 1}
            <h2>Your computer <b>HAS</b> available backups or safetys in place before a malware incident occured.</h2>

            <h2>
                Can you guarantee the computer can be safely recovered?
            </h2>

            <div class="buttons">
                <button class="answer" on:click={() => gameCheck(1)}><h4>No</h4></button>
                <button class="answer" on:click={() => gameCheck(0)}><h4>Yes</h4></button>
            </div>
        {:else}
            <h2>Correct!</h2>

            <h2>
                Some malware can infect a computer beyond the point of recovery. 
                It is still wise to prepare with safetys to mitigate as much damage as possible.
            </h2>

            <button class="answer" on:click={() => closeGame()} id="close"><h4>Close</h4></button>
        {/if}
    </div>
</main>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

    div.test {
        width: 550px;
        height: 300px;
        position: absolute;
        top: 20%;
        left: 4%;
        /* background-color: aqua; */
        /* border: 2px solid rgb(77, 133, 168); */
    }

    h2 {
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        position: relative;
        top: 10%;
    }

    .buttons {
        position: relative;
        top: 15%;
        text-align: center;
    }

    .answer {
        width: 100px;
        height: 50px;
    }
    
    #close {
        position: relative;
        top: 15%;
        left: 41.2%;
    }
</style>