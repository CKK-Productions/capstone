<script>
    import Jan from "./imgs/jan/jan2.png";
    import Test from "./imgs/bg/test.jpg";

</script>

<div class="bg">
    <img src={Test} alt="Background">
</div>
<div class="janny">
    <img src={Jan} alt="Jan's Emotion Box" id="jan">
</div>
<div class="speech">
    <!-- <button type="button"></button> -->
    <button class="talk" type="button" disabled><h2>Nae Nae</h2></button>
</div>

<style>
    .talk{

    }
    .janny {
        position: absolute;
        left:46%;
        top: 20%
    }
    .bg {
        position: absolute;
        left:35%;
    }
    .speech {
        position: absolute;
        left: 47%;
        top: 60%;
    }
</style>