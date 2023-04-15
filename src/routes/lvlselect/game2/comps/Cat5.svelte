<script>
    export let cat5win = 0;
    export let ic5 = "none";

    function gameCheck(x) {
        if (x == 1) {
            cat5win = 1
        }
        else {
            cat5win = 2
            alert("Wrong S.")
        }
    }

    function closeGame() {
        ic5 = "none";
    }

</script>

<main>
    <div class="test">
        {#if cat5win == 0}
            <h2>When browsing through websites, the beginning of the URL will often be either http or https.
                Other protocols seem to have an S-ending variant, too.
            </h2>

            <h2>
                Does the S in protocols mean a more simple or more secure process?
            </h2>
            
            <div class="buttons">
                <button class="answer" on:click={() => gameCheck(0)}><h4>Simple</h4></button>
                <button class="answer" on:click={() => gameCheck(1)}><h4>Secure</h4></button>
            </div>
        {:else}
            <h2>Correct!</h2>

            <h2>HTTP is not safe for transfering data because of it's all in plaintext, unlike HTTPS.</h2>

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