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

    export let a = 'none';
    export let b = 'none';
    export let c = 'none';
    export let d = 'none';
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
        else if (exp = "he"){
            j = 0
        }
        else if (exp = "bi"){
            j = 0
        }
    }
    
    function nextLine() {  //function for pressing the dialog button
        if (y == 1 && line == 6) {
            c = "show";
            d = "show";
        }
        if (y == 1 && line == 9) {
            a = "show";
        }
        if (y == 8 && line == count - 1) {  //if statement when hitting the final dialog
            alert("Done.")
        }
        else{
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
    }

    // https://www.tetyys.com/SAPI4/SAPI4?text=hello%20world%20text%20to%20speech&voice=Sam&pitch=100&speed=450 API debugging
    $:j, currJan = Jan[j]; //whenever j value is updated, currJan will be updated with the current Jan expression

</script>

<div class="janny">
    <img src={currJan} alt="Janny" /> <!--Jan's image-->
</div>
<div class="jan">
    <!-- <p>{count} | {line} | {y}</p>  -->
    <button class="jan" type="button" disabled><h2>{dialog}</h2></button> <!--Jan's interact dialog button-->
    <img src={Textbox} id="textbox" alt="textbox"/>
    <button class="cnt" type="button" on:click={() => nextLine()}><p> ==> </p> </button>
</div>

<style>
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
        /* border: 3px solid blue; */
    }
    button.jan {
        width: 500px;
        height: 200px;
    }
    button.cnt {
        width: 100px;
        height: 50px;
        position: absolute;
        top: 180%;
        left: 15%;
    }
    #textbox{
        position: absolute;
        top: -20%;
        left: -20%;
    }
</style>