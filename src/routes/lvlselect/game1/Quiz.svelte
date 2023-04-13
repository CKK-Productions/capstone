<script lang="ts">
    import level0 from "./level1/1ques.json";
    import level1 from "./level1/1ques.json";
    import level2 from "./level2/2ques.json";
    import level3 from "./level3/3ques.json";
    import level4 from "./level4/4ques.json";
    import level5 from "./level5/5ques.json";
    //import quiz questions from json files

    const levels = [level0, level1, level2, level3, level4, level5];
    //set quiz questions into an array

    let x = 0; //value for the current quiz json
    let current = levels[x]; //setting the object of the quiz into a variable
    let rand = Math.floor(Math.random() * 3) + 1; //making a random number between 1 to 3
    let num = 0; //question value
    let set = ''; //string value for the randomization
    export let v = 0; //variable for being done with quiz
    export let d = 0; //variable for being done with dialog
    export let item = 'click';
    export let z = 0;
    export let qansw = 0;
    let fail = 0;

    function randomQuiz(ran) {
        if (ran == 1) {
            set = 'a'
        }
        else if (ran == 2) {
            set = 'b'
        }
        else {
            set = 'c'
        }
    }
    //function for adjusting the string based on the random value. a, b, c are the different sets of 5 questions. will altern

    randomQuiz(rand); //call it once to start

    let question = current[set][num].question;
    let answers = current[set][num].answers;
    let correct = current[set][num].correct;
    //setting the selected set as easier variables

    function updateQuiz() {
        question = current[set][num].question; //update
        answers = current[set][num].answers; //update
        correct = current[set][num].correct;
    }

    function dialogCheck() {
        if (d == 1) {
            d = 0;
            v = 0;
            nextQuiz();
        }
    }

    function nextQuiz() {
        x++ //increment quiz
        current = levels[x]; //update
        num = 0; //reset the questions back to the first
        rand = Math.floor(Math.random() * 3) + 1; //new randomization number
        randomQuiz(rand); //have set represent the new randomization
        updateQuiz();
    }
    function checkRes(chec) { //function for pressing an answer button
        if (correct == chec) { //if button pressed has the same value as the correct value
            num++; //increment question value
            if (num == 5) { //if finished with final question
                v++; // variable for victory
                item = 'click'
                z++;
            } 
            else { 
                qansw = 2;
                updateQuiz();
            }
        }
        else {
            qansw = 1;
            fail++;
        }   
    }

    function checkWin() { //function for pressing an answer button
        num++; //increment question value
        if (num == 5) { //if finished with final question
            v++; // variable for victory
            item = 'click'
            z++;
        } 
        else { 
            updateQuiz();
        }
    }

    function canClick(item) {
        return item == 'click'
    }

    $:d, dialogCheck();
    $:qansw, qansw = 0;
</script>
    
    <div class="quiz">
        <button id="question" type="button" disabled><h2>{question}</h2></button>
        <div class="button">
            <button class="answer" disabled='{canClick(item)}' on:click={() => checkRes(0)}><h2>{answers[0]}</h2></button>
            <button class="answer" disabled='{canClick(item)}' on:click={() => checkRes(1)}><h2>{answers[1]}</h2></button>
            <button class="answer" disabled='{canClick(item)}' on:click={() => checkRes(2)}><h2>{answers[2]}</h2></button>
            <button class="answer" disabled='{canClick(item)}' on:click={() => checkRes(3)}><h2>{answers[3]}</h2></button>
            <!-- <button class="answer" disabled='{canClick(item)}' on:click={() => checkWin()}><h2>Win</h2></button> -->
        </div> 
    </div>

    <style>
    div.quiz {
        position: absolute;
        left: 860px;
        top: 200px;
        /* border: 3px solid blue; */
        width: 620px;
    }
    div.button {
        flex: 1;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
    }
    .answer {
        width: 297px;
    }
    #question {
        width: 618px;
        height: 200px;
    }
    div {
        padding: 10px;
    }
    </style>