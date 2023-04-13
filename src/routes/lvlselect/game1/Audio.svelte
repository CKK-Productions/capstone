<script>
    import AudioPlayer, { playMus, stopAll } from './AudioPlayer.svelte'
    import Intro from './audio/intro.mp3';
    import Test from './audio/test.mp3';

    import Mute from './audio/mute.png';
    import Sound from './audio/sound.png';
    
    let k = 0;
    let l = 0;

    const Icon = [Sound, Mute];
    let currImg = Icon[k];
    let audioTracks = [Intro, Test];


    function musicMute() {
        if (k == 0) {
            k = 1
            currImg = Icon[k];
            stopAll
        }
        else {
            k = 0;
            currImg = Icon[k];
            playMus
        }
    }
    

</script>
<img src={currImg} id="img" on:click={() => musicMute()} alt="mute image">

{#each audioTracks as src}
    <AudioPlayer {src} autoplay/>
{/each}

<style>
    #img {
        width: 60px;
        height: 60px;
    }
</style>