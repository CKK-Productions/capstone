<script>
    import JanJoy from "./jan/janjoy.png";
    import JanBlank from "./jan/janblank.png";
    import JanDevil from "./jan/jandevil.png";
    import JanNorm from "./jan/jannormal.png";
    import JanOne from "./jan/janoneeye.png";
    import JanSilly from "./jan/jansilly.png";
    import JanSq from "./jan/jansquare.png";
    //import JanBlink from "./jan/janblink.gif";
    //import JanOJoy from "./jan/janoverjoy.png";
    //importing the Jan character images

    import JanNormal from "../game2/imgs/jan/jannormal.gif";
    import JanSmug from "../game2/imgs/jan/jansmug.gif";
    import JanMouth from "../game2/imgs/jan/janmouth.gif";
    import JanDesp from "../game2/imgs/jan/jandespair.gif";
    import JanSpin from "../game2/imgs/jan/janspin.gif";
    import JanStare from "../game2/imgs/jan/janstare.gif";

    import Arrow from "./books/funnyarrowr.png";

    import Timer from "./jan/timer.png";

    import Dialog0 from "./level1/jandialog0.json";
    import Dialog1 from "./level1/jandialog.json";
    import Dialog2 from "./level2/jandialog.json";
    import Dialog3 from "./level3/jandialog.json";
    import Dialog4 from "./level4/jandialog.json";
    import Dialog5 from "./level5/jandialog0.json";
    import Dialog6 from "./level5/jandialog.json";
    import Dialog7 from "./end/jandialog0.json";
    import Dialog8 from "./end/jandialog.json";
    //importing the different dialogs. Any dialog with a 0 does not have success/failure sheets.
    
    import Textbox from "./jan/textbox.png";

    const Jan = [JanNorm, JanOne, JanSilly, JanJoy, JanSq, JanDevil, JanBlank];
    const Dialog = [Dialog0, Dialog1, Dialog2, Dialog3, Dialog4, Dialog5, Dialog6, Dialog7, Dialog8]
    //setting the Jan expressions and Dialogs into arrays

    let j = 6; //defaulting Jan's expression to JanBlank value of 6 in the array
    let currJan = Jan[j]; //setting Jan's expression in the array

    let y = 0; //value of the dialog being read in the array, 0 is the first
    let line = 0; //value of the current line being read
    let part = 'a'; //is for success/failure reading purposes. all part are 'a' unless it is a success/failure read
    let currDial = Dialog[y]; //setting currDial as the default dialog (Dialog0)

    let dialog = currDial[part][line].dialog; //setting dialog as the direct dialog of the current line
    let expression = currDial[part][line].expression; //setting expression as the direct expression of the current line
    let count = currDial[part].length; //setting count as the line count for the dialog

    export let qhide = 'none';
    export let dhide = 'none';
    export let phide = 'none';
    export let bhide = 'none';
    export let ehide = 'none';
    let thide = 'none';
    export let d = 0;
    export let v = 0;
    export let c = "click";
    export let zed = 0;
    export let b = 0;
    export let qexp = 0;
    let rand = 0;

    let buthide = "show";
    // function expCheck can be improved with an enum/swtich case. 
    // const JanExp = {
    //     de: 0,
    //     oe: 1,
    //     si: 2,
    //     up: 3,
    //     se: 4,
    //     dv: 5,
    //     bl: 6,
    //     he: 0,
    //     bi: 0,
    // };
    
    function expCheck(exp) {  //function for checking the expression and setting the value that changes Jan's sprite
        if (exp == "de") {
            j = 0
        }
        else if (exp == "oe"){
            j = 1
        }
        else if (exp == "si"){
            j = 2
        }
        else if (exp == "up"){
            j = 3
        }
        else if (exp == "se"){
            j = 4
        }
        else if (exp == "dv"){
            j = 5
        }
        else if (exp == "bl"){
            j = 6
        }
        // else if (exp = "he"){
        //     j = 7
        // }
        // else if (exp = "bi"){
        //     j = 8
        // }
        // else if (exp = "no"){
        //     j = 9
        // }
        // else if (exp = "sm"){
        //     j = 10
        // }
        // else if (exp = "mo"){
        //     j = 11
        // }
        // else if (exp = "sp"){
        //     j = 13
        // }
        // else if (exp = "st"){
        //     j = 14
        // }
    }
    

    function nextProg() {
        y++;
        line = 0;
        currDial = Dialog[y]; //updating the currDial with the new Dialog
        dialog = currDial[part][line].dialog; //update
        expression = currDial[part][line].expression; //update
        count = currDial[part].length; //update
        buthide = "show";
    }
    
    function victoryCheck() {
        if (v == 1) {
            d = 0;
            v = 0;
            nextProg();
        }
    }
    function nextLine() {  //function for pressing the dialog button
        if (y == 1 && line == 6) {
            phide = "show";
            bhide = "show";
        }
        if (y == 1 && line == 9) {
            qhide = "show";
        }
        if (y == 1 && line == 15 || y == 2 && line == 6 || y == 3 && line == 7 || y == 4 && line == 7 || y == 5 && line == 10 || y == 8 && line == 18) {
            buthide = "none";
        }
        if (y == 6 && line == 3) {
            buthide = "none";
            zed++;
            v = 0;
        }
        if (y == 2 && line == 0 || y == 3 && line == 0 || y == 4 && line == 0 || y == 5 && line == 0 || y == 6 && line == 0 || y == 7 && line == 0) {
            buthide = "show";
        }
        if (y == 6 && line == 0) {
            thide = "none";
        }
        if (y == 5 && line == 7) {
            thide = "show";
            line++; //incrementing the line
            //console.log(`DEBUG: LINE = ${line}, COUNT = ${count}, Y = ${y}`) debugging
            //console.log(line == count); debugging
            dialog = currDial[part][line].dialog; //update
            expression = currDial[part][line].expression //update
            expCheck(expression); //setting Jan's expression based on the json file entr
        }
        if (y == 8 && line == count - 1) {  //if statement when hitting the final dialog
            ehide = "show";
            //insert submit here <<<<<<<<<<<<<
        }
        else {
            if ((y == 0) && line == count - 1) { //if statement for checking if at the end of a dialog sequence. MUST BE BEFORE THE ELSE
                nextProg();
            }
            else if ((y == 7) && line == count - 1) { //if statement for checking if at the end of a dialog sequence. MUST BE BEFORE THE ELSE
                nextProg();
                //add true form sprites
            }
            else if (line == count - 2 && y == 1) { //if statement for checking if at the end of a dialog sequence. MUST BE BEFORE THE ELSE
                d++;
                line++;
                c = "not";
                dialog = currDial[part][line].dialog; //update
                expression = currDial[part][line].expression //update
                expCheck(expression); //setting Jan's expression based on the json file entry
            }
            else if (line == count - 2 &&  (y == 2 || y == 3 || y == 4 || y == 5)) { //if statement for checking if at the end of a dialog sequence. MUST BE BEFORE THE ELSE
                d++;
                b++;
                line++;
                c = "not";
                dialog = currDial[part][line].dialog; //update
                expression = currDial[part][line].expression //update
                expCheck(expression); //setting Jan's expression based on the json file entry
            }
            else {
                line++; //incrementing the line
                //console.log(`DEBUG: LINE = ${line}, COUNT = ${count}, Y = ${y}`) debugging
                //console.log(line == count); debugging
                dialog = currDial[part][line].dialog; //update
                expression = currDial[part][line].expression //update
                expCheck(expression); //setting Jan's expression based on the json file entry
                console.log(expression);
                console.log(j);
            }
        }
    }

    function janReaction() {
        if (qexp == 2) { //correct
            rand = Math.floor(Math.random() * 3)
            qexp = 0;
            dialog = currDial["success"][rand].dialog; 
            expression = currDial["success"][rand].expression;
            expCheck(expression);
        }
        else if (qexp == 1) { //wrong
            rand = Math.floor(Math.random() * 3)
            qexp = 0;
            dialog = currDial["failure"][rand].dialog; 
            expression = currDial["failure"][rand].expression;
            expCheck(expression);
        }
        qexp = 0;
    }

    // https://www.tetyys.com/SAPI4/SAPI4?text=hello%20world%20text%20to%20speech&voice=Sam&pitch=100&speed=450 API debugging
    $:j, currJan = Jan[j]; //whenever j value is updated, currJan will be updated with the current Jan expression
    $:v, victoryCheck();
    $:qexp, janReaction();
</script>

<div class="janny">
    <img src={currJan} alt="Janny" /> <!--Jan's image-->
</div>
<div class="jan">
    <button class="jan" type="button" disabled><h2>{dialog}</h2></button> <!--Jan's interact dialog button-->
    <img src={Textbox} id="textbox" alt="textbox"/>
    <button class="cnt" type="button" on:click={() => nextLine()} style="--buttdis: {buthide}"><img src={Arrow} id="arrow" alt="arrow" /></button>
</div>
<div class="timer" style="--timerdis: {thide}">
    <img src={Timer} alt="The Timer" />
</div>

<style>
    #arrow {
        width: 50px;
        height: 40px;
    }
    div.jan {
        position: absolute;
        left: 1560px;
        top: 170px;
        /* border: 3px solid blue; */
    }
    div.janny {
        position: absolute;
        left: 1830px;
        top: 400px;
        width: 223px;
        height: 190px;
        padding: 4px;
        background-color: aquamarine; 
        /* border: 3px solid blue; */
    }
    button.jan {
        width: 500px;
        height: 200px;
        background-color: aliceblue;
        color: black;
    }
    button.cnt {
        width: 100px;
        height: 50px;
        position: absolute;
        top: 180%;
        left: 15%;
        display: var(--buttdis);
        cursor: pointer;
        border: 2px red solid;
    }
    #textbox{
        position: absolute;
        top: -20%;
        left: -20%;
    }
    div.timer {
        position: absolute;
        top: 5%;
        left: 43%;
        display: var(--timerdis)
    }
</style>