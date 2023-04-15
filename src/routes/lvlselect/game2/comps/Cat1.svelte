<script>
    export let cat1win = 0;
    export let ic1 = "show";

    function gameCheck(x) {
        if (x == 1) {
            cat1win = 1
        }
        else {
            cat1win = 2
            alert("Now you've lost your money, and your files.")
        }
    }

    function closeGame() {
        ic1 = "none";
    }

</script>

<main>
    <div class="test">
        {#if cat1win == 0}
            <h2>When compromised by malware, the malware will often provide a solution of its own.
                In order to retrieve your encrypted files, you must pay their fee.
            </h2>

            <h2>
                Should you?
            </h2>
            
            <div class="buttons">
                <button class="answer" on:click={() => gameCheck(1)}><h4>No</h4></button>
                <button class="answer" on:click={() => gameCheck(0)}><h4>Yes</h4></button>
            </div>
        {:else}
            <h2>Correct!</h2>

            <h2>You weren't guarranteed to get your files back even if you did pay.</h2>
            
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