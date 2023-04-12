<script>
    import JanNormal from "./imgs/jan/jannormal.png";
    import JanSmug from "./imgs/jan/jansmug.png";
    import JanMouth from "./imgs/jan/janmouth.png";
    import JanDesp from "./imgs/jan/jandespair.png";
    import JanSpin from "./imgs/jan/janspin.png";
    import JanStare from "./imgs/jan/janstare.png";

    import BG1 from "./imgs/bg/BG1.jpg";

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
    import DialogB from "./jan/jandiab.json";

    const Jan = [JanNormal, JanSmug, JanMouth, JanDesp, JanSpin, JanStare];
    const BG = [BG1];
    const Dialog = [Dialog0, Dialog1, Dialog2, Dialog3, Dialog4, Dialog5, Dialog6, Dialog7, Dialog8, DialogG, DialogB];

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

    function nextLine() {  //function for pressing the dialog button
        if (line == count - 1) { //if statement for checking if at the end of a dialog sequence. MUST BE BEFORE THE ELSE
            //console.log("EXECUTED!"); debugging
            y++; //incrementing the dialog value
            line = 0; //setting the line back to 0
            currDial = Dialog[y]; //updating the currDial with the new Dialog
            dialog = currDial[part][line].dialog; //update
            expression = currDial[part][line].expression; //update
            count = currDial[part].length; //update
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
    
    $:j, currJan = Jan[j];
</script>

<div class="bg">
    <img src={currBG} id="bg" alt="Background">
</div>
<div class="janny">
    <img src={currJan} alt="Jan's Emotion Box" id="jan">
</div>
<div class="speech">
    <button class="jan" type="button" disabled><h2>{dialog}</h2></button>
</div> 

<style>
    .janny {
        position: absolute;
        left: 39.7%;
        top: 20%
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
        top: 65%;
    }
    button.jan {
        width: 503px;
        height: 200px;
    }
</style>