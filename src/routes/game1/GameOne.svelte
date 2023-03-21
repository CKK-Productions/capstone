<script lang="ts">
    import level1 from './level1/1ques.json'
    import level2 from './level2/2ques.json'
    import level3 from './level3/3ques.json'
    import level4 from './level4/4ques.json'
    import level5 from './level5/5ques.json'


    const levels = [level1, level2, level3, level4, level5];
    let x = 0;
    let current = levels[x];
    let rand = Math.floor(Math.random() * 3) + 1;
    let num = 0;
    let set = '';

    if (rand == 1) {
        set = 'a'
    }
    else if (rand == 2) {
        set = 'b'
    }
    else {
        set = 'c'
    }


    //example level 1.1 : level1['level1.1'][0].question  

    let question = current[set][num].question;
    let answers = current[set][num].answers;
    let correct = current[set][num].correct;

    function checkRes(chec) {
        if (correct == chec) {
            alert("WOOOO");
            num++;
            if (num == 5) {
                x++;
                current = levels[x];
                num = 0;
            } 
            question = current[set][num].question;
            answers = current[set][num].answers;
            correct = current[set][num].correct;
        }
        else {
            alert("No.");
        }
    }

</script>
    
    <div class="quiz">
        <p>{num}</p>
        <button id="question" type="button" disabled><h2>{question}</h2></button>
        <div class="button">
            <button class="answer" on:click={() => checkRes(0)}><h2>{answers[0]}</h2></button>
            <button class="answer" on:click={() => checkRes(1)}><h2>{answers[1]}</h2></button>
            <button class="answer" on:click={() => checkRes(2)}><h2>{answers[2]}</h2></button>
            <button class="answer" on:click={() => checkRes(3)}><h2>{answers[3]}</h2></button>
        </div> 
    </div>

    <style>
    div.quiz {
        position: absolute;
        left: 860px;
        top: 200px;
        border: 3px solid blue;
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