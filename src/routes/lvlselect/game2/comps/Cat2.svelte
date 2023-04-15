<script>
    export let cat2win = 0;
    export let ic2 = "none";

    function gameCheck(x) {
        if (x == 1) {
            cat2win = 1
        }
        else {
            cat2win = 2
            alert("You're not safe.")
        }
    }

    function closeGame() {
        ic2 = "none";
    }
</script>

<main>
    <div class="test">
        {#if cat2win == 0}
            <h2>Viruses are well-known to be spread all throughout the internet. Biological Viruses spread through physical interaction.
            </h2>

            <h2>
                Is it possible to contract a computer virus from physical means?
            </h2>
            
            <div class="buttons">
                <button class="answer" on:click={() => gameCheck(0)}><h4>No</h4></button>
                <button class="answer" on:click={() => gameCheck(1)}><h4>Yes</h4></button>
            </div>
        {:else}
            <h2>Correct!</h2>

            <h2>Open physical ports on your computer can allow an USB to inject code.</h2>
            <h2>There is a special USB called a "Rubber Ducky" designed to inject code immediately after inserted.</h2>
        
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