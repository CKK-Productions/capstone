<script>
    export let cat7win = 0;
    export let ic7 = "none";
    export let f = 0;

    function gameCheck(x) {
        if (x == 1) {
            f = 2;
            cat7win = 1
        }
        else {
            cat7win = 2
            alert("You're skimming the story, aren't you?")
        }
    }

    function gameAdv(z) {
        if (z == 1) {
            f = 1
        }
        else {
            cat7win = 2
            alert("Did you read the last chapter of the first game?")
        }
    }

    function closeGame() {
        ic7 = "none";
    }

</script>

<main>
    <div class="test">
        {#if f == 0}
            <h2>After the recent malicious activity, all the files have been encrypted.
            </h2>

            <h2>
                What kind of attack is this?
            </h2>
            
            <div class="buttons">
                <button class="answer" on:click={() => gameAdv(0)}><h4>Logic Bomb</h4></button>
                <button class="answer" on:click={() => gameAdv(0)}><h4>DoS</h4></button>
                <button class="answer" on:click={() => gameAdv(1)}><h4>Ransomware</h4></button>
                <button class="answer" on:click={() => gameAdv(0)}><h4>Spam</h4></button>
            </div>
        {:else if f == 1}
            <h2>What kind of malware caused this?</h2>

            <div class="buttons2">
                <button class="answer" on:click={() => gameCheck(0)}><h4>Virus</h4></button>
                <button class="answer" on:click={() => gameCheck(0)}><h4>Worm</h4></button>
                <button class="answer" on:click={() => gameCheck(0)}><h4>Rootkit</h4></button>
                <button class="answer" on:click={() => gameCheck(0)}><h4>Spyware</h4></button>
                <button class="answer" on:click={() => gameCheck(1)}><h4>Trojan</h4></button>
                <button class="answer" on:click={() => gameCheck(0)}><h4>Spam</h4></button>
            </div>
        {:else}
            <h2>Correct!</h2>

            <h2>
                This is all Janny's fault.
            </h2>
            <h2>
                Once an attack has occured, the best we can do is to mitigate the damage done.
                It is best to never let the attack happen in the first place by always being cautious.
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
    .buttons2 {
        position: relative;
        top: 15%;
        left: 13.5%;
        text-align: center;
        width: 400px;
    }

    .answer {
        width: 100px;
        height: 50px;
    }

    #close {
        position: relative;
        top: 15%;
        left: 41.2%;
        width: 100px;
    }
</style>