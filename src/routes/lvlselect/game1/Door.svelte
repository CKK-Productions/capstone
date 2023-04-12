<script>
    import Door from "./door/locked.png";
    import Door1 from "./door/chain1.png";
    import Door2 from "./door/chain2.png";
    import Door3 from "./door/chain3.png";
    import Door4 from "./door/chain4.png";
    import UnDoor from "./door/unlocked.png";
    import UnDoor2 from "./door/unlocked.png";
    import UnDoor3 from "./door/unlocked.png";
    const Doors = [Door, Door1, Door2, Door3, Door4, UnDoor, UnDoor2, UnDoor3]
    //importing Door images and putting them into an array

    import Loading from "./door/test.gif";
    export let z = 0;
    export let v = 0;
    let currDoor = Doors[z];
    //exporting z and having the door image be set to the first array input.

    function launchApp() {
        v = 0
        v++;
        lhide = "show";
        z++;
    }

    let lhide = "none";

    $:z, currDoor = Doors[z];
    //when z updates, the image will update respectively.
</script>

<div>
    {#if z == 6}
        <img src={currDoor} on:click={() => launchApp()} alt="the door" /> <!-- The image of the door-->
    {:else}
        <img src={currDoor} alt="the door" /> <!-- The image of the door-->
    {/if}
</div>
<div>
    <img src={Loading} id="load" alt="load bar" style="--loaddis: {lhide}"/>
</div>

<style>
    #load {
        position: absolute;
        top: 30%;
        left: 28%;
        display: var(--loaddis)
    }
</style>