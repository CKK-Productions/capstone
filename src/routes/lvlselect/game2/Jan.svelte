<script>
    import JanNormal from "./imgs/jan/jannormal.gif";
    import JanSmug from "./imgs/jan/jansmug.gif";
    import JanMouth from "./imgs/jan/janmouth.gif";
    import JanDesp from "./imgs/jan/jandespair.gif";
    import JanSpin from "./imgs/jan/janspin.gif";
    import JanStare from "./imgs/jan/janstare.gif";

    import BG1 from "./imgs/bg/BG1.jpg";
    import BG2 from "./imgs/bg/BG2.png";
    import BG3 from "./imgs/bg/BG3.png";
    import BG4 from "./imgs/bg/BG4.png";
    import BG5 from "./imgs/bg/BG5.png";

    import Arrow from "../game1/books/funnyarrowr.png";
    import Popcorn from "./imgs/jan/popcorn.png";

    import Dialog0 from "./jan/jandia.json";
    import Dialog1 from "./jan/jandia1.json";
    import Dialog2 from "./jan/jandia2.json";
    import Dialog3 from "./jan/jandia3.json";
    import Dialog4 from "./jan/jandia4.json";
    import Dialog5 from "./jan/jandia5.json";
    import Dialog6 from "./jan/jandia6.json";
    import Dialog7 from "./jan/jandia7.json";
    import Dialog8 from "./jan/jandia8.json";
    import DialogG from "./jan/jandiag.json";

    export let c1 = "none";
    export let c2 = "none";
    export let c3 = "none";
    export let c4 = "none";
    export let c5 = "none";
    export let c6 = "none";
    export let c7 = "none";
    export let c8 = "none";
    export let c10 = "none";
    export let cv10 = 0;
    export let diafin = 0;
    export let buthide = "show";
    export let gamefin = 0;
    export let janhide = "show";
    export let diahide = "show";
    export let ehide = "none";
    export let etitle = "test";
    export let total = 0;
    let pophide = "none";

    const Jan = [JanNormal, JanSmug, JanMouth, JanDesp, JanSpin, JanStare];
    const BG = [BG1, BG2, BG3, BG4, BG5];
    const Dialog = [Dialog0, Dialog1, Dialog2, Dialog3, Dialog4, Dialog5, Dialog6, Dialog7, Dialog8, DialogG];

    let j = 0; //defaulting Jan's expression to JanBlank value of 6 in the array
    let currJan = Jan[j]; //setting Jan's expression in the array
    let b = 0;
    let currBG = BG[b];

    let y = 0; //value of the dialog being read in the array, 0 is the first
    let line = 0; //value of the current line being read
    let part = 'a'; //is for success/failure reading purposes. all part are 'a' unless it is a success/failure read
    let currDial = Dialog[y]; //setting currDial as the default dialog (Dialog0)

    let dialog = currDial[part][line].dialog; //setting dialog as the direct dialog of the current line
    let expression = currDial[part][line].expression; //setting expression as the direct expression of the current line
    let count = currDial[part].length; //setting count as the line count for the dialog


    function expCheck(exp) {  //function for checking the expression and setting the value that changes Jan's sprite
        if (exp == "no") {
            j = 0
        }
        else if (exp == "sm"){
            j = 1
        }
        else if (exp == "mo"){
            j = 2
        }
        else if (exp == "de"){
            j = 3
        }
        else if (exp == "sp"){
            j = 4
        }
        else if (exp == "st"){
            j = 5
        }
    }

    function nextProg() {
        if (gamefin == 1) {
            y++;
            gamefin = 0;
            line = 0;
            part = 'a'
            currDial = Dialog[y]; //updating the currDial with the new Dialog
            dialog = currDial[part][line].dialog; //update
            expression = currDial[part][line].expression; //update
            count = currDial[part].length; //update
            expCheck(expression);
            buthide = "show";
            janhide = "show";
            diahide = "show";
            diafin = 0;
        }
        if (gamefin == 2) {
            y++;
            gamefin = 0;
            line = 0;
            part = 'b'
            currDial = Dialog[y]; //updating the currDial with the new Dialog
            dialog = currDial[part][line].dialog; //update
            expression = currDial[part][line].expression; //update
            count = currDial[part].length; //update
            expCheck(expression);
            buthide = "show";
            janhide = "show";
            diahide = "show";
            diafin = 0;
        }
    }

    function endGame() {
        if (part == 'a') {
            ehide = "show";
            etitle = "Good Ending! Score Submitted";
        }
        else if (part == 'b') {
            ehide = "show";
            etitle = "Bad Ending! Score Submitted";
        }
    }

    function nextLine() {  //function for pressing the dialog button
        if (y == 0 && line == 4) {
            c10 = "show";
        }
        if (y == 0 && line == 6) {
            cv10 = 1;
        }
        if (y == 0 && line == 7) {
            c1 = "show";
            c2 = "show";
            c3 = "show";
            c4 = "show";
            c5 = "show";
            c6 = "show";
            c7 = "show";
            c8 = "show";
            c10 = "none";
        }
        if (y == 8 && line == 0) {
            pophide = "none";
        }
        if (y == 7 && line == 3) {
            pophide = "show";
        }
        if (y == 9 && line == count - 2 && part == 'b') {
            c1 = "none";
            c2 = "none";
            c3 = "none";
            c4 = "none";
            c5 = "none";
            c6 = "none";
            c7 = "none";
            c8 = "none";
            currBG = BG[1];
        }
        if (y == 9 && line == 0 && part == 'a') {
            currBG = BG[1];
        }
        if (y == 9 && line == 1 && part == 'a') {
            currBG = BG[2];
        }
        if (y == 9 && line == 3 && part == 'a') {
            c1 = "none";
            c2 = "none";
            c3 = "none";
            c4 = "none";
            c5 = "none";
            c6 = "none";
            c7 = "none";
            c8 = "none";
            currBG = BG[3];
        }
        if (y == 9 && line == 4 && part == 'a') {
            currBG = BG[4];
        }
        if (y == 9 && line == 14 && part == 'a') {
            janhide="none";
        }
        if (y == 8 && line == 5 && (total == 5 || total == 6 || total == 7 || total == 8)) { 
            y++;
            line = 0;
            part = 'a'
            currDial = Dialog[y]; //updating the currDial with the new Dialog
            dialog = currDial[part][line].dialog; //update
            expression = currDial[part][line].expression; //update
            count = currDial[part].length; //update
            expCheck(expression);
        }
        else if (y == 8 && line == 5 && (total == 0 || total == 1 || total == 2 || total == 3 || total == 4)){
            y++;
            line = 0;
            part = 'b'
            currDial = Dialog[y]; //updating the currDial with the new Dialog
            dialog = currDial[part][line].dialog; //update
            expression = currDial[part][line].expression; //update
            count = currDial[part].length; //update
            expCheck(expression);
        }
        else if (y == 7 && line == 4) {
            j = 0;
            diafin = 1;
            diahide = "none";
            buthide = "none";
        }
        else if (y == 9 && line == count - 1) {
            endGame();
        }
        else if (line == count - 1) { //if statement for checking if at the end of a dialog sequence. MUST BE BEFORE THE ELSE
            //console.log("EXECUTED!"); debugging
            diafin = 1;  
            janhide = "none";
            diahide = "none";
            buthide = "none";
        }
        else {
            line++; //incrementing the line
            //console.log(`DEBUG: LINE = ${line}, COUNT = ${count}, Y = ${y}`) debugging
            //console.log(line == count); debugging
            dialog = currDial[part][line].dialog; //update
            expression = currDial[part][line].expression //update
            expCheck(expression); //setting Jan's expression based on the json file entry
        }
    }
    
    $:gamefin, nextProg();
    $:j, currJan = Jan[j];
</script>

<div class="bg">
    <img src={currBG} id="bg" alt="Background">
</div>
<div class="janny">
    <img src={currJan} alt="Jan's Emotion Box" id="jan" style="--jandis: {janhide}">
</div>
<div class="speech">
    <button class="jan" type="button" disabled style="--diadis: {diahide}"><h2>{dialog}</h2></button>
    <button class="cnt" type="button" on:click={() => nextLine()} style="--buttdis: {buthide}"><img src={Arrow} id="arrow" alt="arrow" /></button>
</div> 
<div>
    <img src={Popcorn} alt="Popcorn" id="pop" style="--popdis: {pophide}" />
</div>

<style>
    #pop {
        display: var(--popdis);
        position: absolute;
        width: 130px;
        top: 50%;
        left: 50%;
    }

    #arrow {
        width: 50px;
        height: 40px;
    }
    .janny {
        position: absolute;
        left: 39.7%;
        top: 20%;
    }
    #jan {
        display: var(--jandis)
    }
    #bg {
        width: 1753px;
        height: 1080px;
    }
    .bg {
        position: absolute;
        left:15%;
    }
    .speech {
        position: absolute;
        left: 39.7%;
        top: 72%;
    }
    button.jan {
        width: 503px;
        height: 100px;
        background-color: aliceblue;
        color: black;
        display: var(--diadis);
        border: 2px blue solid;
    }
    button.cnt {
        width: 100px;
        height: 50px;
        position: absolute;
        top: 80%;
        left: 90%;
        display: var(--buttdis);
        border: 2px red solid;
        cursor: pointer;
    }
</style>