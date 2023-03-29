<script>
    import Door from "./door/locked.png";
    import Door1 from "./door/chain1.png";
    import Door2 from "./door/chain2.png";
    import Door3 from "./door/chain3.png";
    import Door4 from "./door/chain4.png";
    import UnDoor from "./door/unlocked.png";
    const Doors = [Door, Door1, Door2, Door3, Door4, UnDoor]
    //importing Door images and putting them into an array

    export let z = 0;
    let currDoor = Doors[z];
    //exporting z and having the door image be set to the first array input.

    $:z, currDoor = Doors[z];
    //when z updates, the image will update respectively.
</script>

<div>
    <img src={currDoor} alt="the door" /> <!-- The image of the door-->
</div>