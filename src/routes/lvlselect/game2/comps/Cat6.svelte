<script>
    export let cat6win = 0;
    export let ic6 = "none";

    function gameCheck(x) {
        if (x == 1) {
            cat6win = 1
        }
        else if (x == 0) {
            cat6win = 2
            alert("The malware most likely created this restore. You've returned right where you were.")
        }
        else if (x == 2) {
            alert("This works, but there is a better option.")
        }
        else if (x == 3) {
            cat6win = 2
            alert("This restore is too far back; it was created by the manufacturer. You're removed everything")
        }
    }

    function closeGame() {
        ic6 = "none";
    }

</script>

<main>
    <div class="test">
        {#if cat6win == 0}
            <h2>A Intrusion Detection System noticed malicious activity starting at 10PM on 12/25/2022.
                You were relatively prepared and have some System Restore points, but can't tell them apart.
            </h2>

            <h2>
                Which System Restore Point should you choose?
            </h2>
            
            <div class="buttons">
                <button class="sheet" disabled on:click={() => gameCheck(1)}><h4 class="ans">Name | Created On | User</h4></button>
                <button class="answer" on:click={() => gameCheck(3)}><h4 class="ans">SysRes | 07/04/2015 | DELL</h4></button>
                <button class="answer" on:click={() => gameCheck(2)}><h4 class="ans">SysRes | 05/13/2020 | Aubrey</h4></button>
                <button class="answer" on:click={() => gameCheck(1)}><h4 class="ans">SysRes | 10/26/2022 | Aubrey</h4></button>
                <button class="answer" on:click={() => gameCheck(0)}><h4 class="ans">SysRes | 12/26/2022 | Aubrey</h4></button>
            </div>
        {:else}
            <h2>Correct!</h2>

            <h2>You recover as much as you could with the safetys you had available.
                More could be recovered if you regulate when you created System Restores.
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
        width: 500px;
        height: 50px;
    }

    .sheet {
        width: 500px;
        height: 50px;
        color: black;
        background-color: aliceblue;
    }
    h4.ans {
        border-left: 3px solid black;
        border-right: 3px solid black;
    }


    #close {
        position: relative;
        top: 15%;
        left: 41.2%;
        width: 100px;
    }
</style>