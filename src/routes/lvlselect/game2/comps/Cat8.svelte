<script>
    export let cat8win = 0;
    export let ic8 = "none";
    import Chrome from "../imgs/bg/chrome.png";
    import Edge from "../imgs/bg/edge.png";
    import Opera from "../imgs/bg/opera.png";
    import Firefox from "../imgs/bg/firefox.png";

    function gameCheck(x) {
        if (x == 1) {
            cat8win = 1
        }
        else {
            cat8win = 2
            alert("There's definitely a bigger elephant in the room.")
        }
    }

    function closeGame() {
        ic8 = "none";
    }
</script>

<main>
    <div class="test">
        {#if cat8win == 0}
            <h2>You have terrible browser management skills and have multiple browsers open.
                However, something seems off.
            </h2>

            <h2> Which of these browsers is compromised?
            </h2>
            <div class="buttons">
                <img src={Firefox} alt="firefox" title="Firefox" class="virus" on:click={() => gameCheck(0)}/>
                <img src={Edge} alt="edge" title="Edge" class="virus" on:click={() => gameCheck(0)}/>
                <img src={Chrome} alt="chrome" title="Chrome" class="virus" on:click={() => gameCheck(1)}/>
                <img src={Opera} alt="opera" title="Opera" class="virus" on:click={() => gameCheck(0)}/>
            </div>
            <div class="other">
                <div class="left">
                    <ul>
                        <h4>firefox.exe</h4>
                        <h4>edge.exe </h4>
                        <h4>chrome.exe </h4>
                        <h4>opera.exe </h4>
                    </ul>
                </div>
                <div class="right">
                    <ul>
                        <h4>217 MB</h4>
                        <h4>450 MB</h4> 
                        <h4>3.4 GB</h4> 
                        <h4>834 MB</h4> 
                    </ul>
                </div>
            </div>
            <div class="line"></div>
        {:else}
            <h2>Correct!</h2>

            <h2>Chrome normally uses a lot of memory, but that sheer amount is beyond the normal scope.</h2>
            <h2>Unless you're really pushing out Chrome tabs. It could be genuinely possible.</h2>

            <button class="answer" on:click={() => closeGame()} id="close"><h4>Close</h4></button>
        {/if}
    </div>
</main>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

    .virus {
        cursor: pointer;
        width: 100px;
        height: 100px;
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
        left: 0%;
        text-align: center;
        width: 300px;
    }

    .other {
        position: absolute;
        top: 83%;
        left: 55%;
        width: 200px;
        padding-left: 20px;
        padding-bottom: 1px;
        padding-top:1px;
        background-color: aliceblue;
        border: 2px rgb(62, 61, 61) solid
    }

    .line {
        border: 3px black solid;
        height: 175px;
        width: 0px;
        position: absolute;
        top: 83.5%;
        left: 75%;
    }
    
    .left {
        position: relative;
        left: -20%;
    }

    .right { 
        position: absolute;
        top: 1%;
        left: 45%;
    }

    #close {
        position: relative;
        top: 15%;
        left: 41.2%;
        width: 100px;
    }
</style>