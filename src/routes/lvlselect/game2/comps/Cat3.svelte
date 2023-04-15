<script>
    export let cat3win = 0;
    export let ic3 = "none";
    import Catty from "../imgs/cats/catforgame.png";

    function gameCheck(x) {
        if (x == 1) {
            cat3win = 1
        }
        else {
            cat3win = 2
            alert("Should have investigated closer.")
        }
    }

    function closeGame() {
        ic3 = "none";
    }

</script>

<main>
    <div class="test">
        {#if cat3win == 0}
            <h2>Which one of these images is a virus configured to appear as a normal image?
            </h2>
            <div class="buttons">
                <img src={Catty} alt="kitykat.png" title="kitykat.png" on:click={() => gameCheck(0)}/>
                <img src={Catty} alt="kitykat.png" title="kitykat.png" on:click={() => gameCheck(0)}/>
                <img src={Catty} alt="kitykat.exe" title="kitykat.exe" id="virus" on:click={() => gameCheck(1)}/>
                <img src={Catty} alt="kitykat.png" title="kitykat.png" on:click={() => gameCheck(0)}/>
            </div>
        {:else}
            <h2>Correct!</h2>

            <h2>Always pay attention to any attachments to ensure they are formatted as they should be for what they are.</h2>
            <h2>Images should never be executables.</h2>

            <button class="answer" on:click={() => closeGame()} id="close"><h4>Close</h4></button>
        {/if}
    </div>
</main>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

    #virus {
        cursor: pointer;
    }
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
        left: 13.5%;
        text-align: center;
        width: 400px;
    }

    #close {
        position: relative;
        top: 15%;
        left: 41.2%;
        width: 100px;
    }
</style>