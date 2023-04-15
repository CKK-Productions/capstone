<script>
    import RightArrow from "./books/funnyarrowr.png"
    import LeftArrow from "./books/funnyarrow.png"
    //importing the arrow images
    
    import Ch1P1 from "./level1/chap1/a1.jpg";
    import Ch1P2 from "./level1/chap1/a2.jpg";
    import Ch1P3 from "./level1/chap1/a3.jpg";
    import Ch1P4 from "./level1/chap1/a4.jpg";
    import Ch1P5 from "./level1/chap1/a5.jpg";
    import Ch1P6 from "./level1/chap1/a6.jpg";

    import Ch2P1 from "./level2/chap2/a1.jpg";
    import Ch2P2 from "./level2/chap2/a2.jpg";
    import Ch2P3 from "./level2/chap2/a3.jpg";
    import Ch2P4 from "./level2/chap2/a4.jpg";
    import Ch2P5 from "./level2/chap2/a5.jpg";
    import Ch2P6 from "./level2/chap2/a6.jpg";
    import Ch2P7 from "./level2/chap2/a7.jpg";
    import Ch2P8 from "./level2/chap2/a8.jpg";
    import Ch2P9 from "./level2/chap2/a9.jpg";
    import Ch2P10 from "./level2/chap2/a10.jpg";
    import Ch2P11 from "./level2/chap2/a11.jpg";
    import Ch2P12 from "./level2/chap2/a12.jpg";
    import Ch2P13 from "./level2/chap2/a13.jpg";
    import Ch2P14 from "./level2/chap2/a14.jpg";
    import Ch2P15 from "./level2/chap2/a15.jpg";
    import Ch2P16 from "./level2/chap2/a16.jpg";
    import Ch2P17 from "./level2/chap2/a17.jpg";
    import Ch2P18 from "./level2/chap2/a18.jpg";

    import Ch3P1 from "./level3/chap3/a1.jpg";
    import Ch3P2 from "./level3/chap3/a2.jpg";
    import Ch3P3 from "./level3/chap3/a3.jpg";
    import Ch3P4 from "./level3/chap3/a4.jpg";
    import Ch3P5 from "./level3/chap3/a5.jpg";
    import Ch3P6 from "./level3/chap3/a6.jpg";
    import Ch3P7 from "./level3/chap3/a7.jpg";
    import Ch3P8 from "./level3/chap3/a8.jpg";
    import Ch3P9 from "./level3/chap3/a9.jpg";
    import Ch3P10 from "./level3/chap3/a10.jpg";
    import Ch3P11 from "./level3/chap3/a11.jpg";
    import Ch3P12 from "./level3/chap3/a12.jpg";
    import Ch3P13 from "./level3/chap3/a13.jpg";
    import Ch3P14 from "./level3/chap3/a14.jpg";
    import Ch3P15 from "./level3/chap3/a15.jpg";
    import Ch3P16 from "./level3/chap3/a16.jpg";

    import Ch4P1 from "./level4/chap4/a1.jpg";
    import Ch4P2 from "./level4/chap4/a2.jpg";
    import Ch4P3 from "./level4/chap4/a3.jpg";
    import Ch4P4 from "./level4/chap4/a4.jpg";
    import Ch4P5 from "./level4/chap4/a5.jpg";
    import Ch4P6 from "./level4/chap4/a6.jpg";
    import Ch4P7 from "./level4/chap4/a7.jpg";
    import Ch4P8 from "./level4/chap4/a8.jpg";
    import Ch4P9 from "./level4/chap4/a9.jpg";
    import Ch4P10 from "./level4/chap4/a10.jpg";
    import Ch4P11 from "./level4/chap4/a11.jpg";
    import Ch4P12 from "./level4/chap4/a12.jpg";
    import Ch4P13 from "./level4/chap4/a13.jpg";

    import Ch5P1 from "./level5/chap5/a1.jpg";
    import Ch5P2 from "./level5/chap5/a2.jpg";
    import Ch5P3 from "./level5/chap5/a3.jpg";
    import Ch5P4 from "./level5/chap5/a4.jpg";
    import Ch5P5 from "./level5/chap5/a5.jpg";
    import Ch5P6 from "./level5/chap5/a6.jpg";
    import Ch5P7 from "./level5/chap5/a7.jpg";
    import Ch5P8 from "./level5/chap5/a8.jpg";
    import Ch5P9 from "./level5/chap5/a9.jpg";
    import Ch5P10 from "./level5/chap5/a10.jpg";
    import Ch5P11 from "./level5/chap5/a11.jpg";
    import Ch5P12 from "./level5/chap5/a12.jpg";
    import Ch5P13 from "./level5/chap5/a13.jpg";
    import Ch5P14 from "./level5/chap5/a14.jpg";
    import Ch5P15 from "./level5/chap5/a15.jpg";
    import Ch5P16 from "./level5/chap5/a16.jpg";
    //importing all book images

    const chapter1 = [Ch1P1, Ch1P2, Ch1P3, Ch1P4, Ch1P5, Ch1P6];
    const chapter2 = [Ch2P1, Ch2P2, Ch2P3, Ch2P4, Ch2P5, Ch2P6, Ch2P7, Ch2P8, Ch2P9, Ch2P10, Ch2P11, Ch2P12, Ch2P13, Ch2P14, Ch2P15, Ch2P16, Ch2P17, Ch2P18];
    const chapter3 = [Ch3P1, Ch3P2, Ch3P3, Ch3P4, Ch3P5, Ch3P6, Ch3P7, Ch3P8, Ch3P9, Ch3P10, Ch3P11, Ch3P12, Ch3P13, Ch3P14, Ch3P15, Ch3P16];
    const chapter4 = [Ch4P1, Ch4P2, Ch4P3, Ch4P4, Ch4P5, Ch4P6, Ch4P7, Ch4P8, Ch4P9, Ch4P10, Ch4P11, Ch4P12, Ch4P13];
    const chapter5 = [Ch5P1, Ch5P2, Ch5P3, Ch5P4, Ch5P5, Ch5P6, Ch5P7, Ch5P8, Ch5P9, Ch5P10, Ch5P11, Ch5P12, Ch5P13, Ch5P14, Ch5P15, Ch5P16];
    const chapters = [chapter1, chapter2, chapter3, chapter4, chapter5]
    //making the images into arrays, and then the arrays in an array

    export let x = 0; //chapter value being exported so the Book.svelte component can input
    let y = 0; //page value
    let page = chapters[x][y]; //setting variable to be the page image
    let count = chapters[x].length; //checking the amount of images in an array

    function prevPage() { //function for going to a previous page
        if (y == 0) { //will not allow going beyond a point outside the array
            alert("no More behind!");
        }
        else {
            y = y - 1 //decrement the page value
            page = chapters[x][y] //update the page image
        }
    }

    function nextPage() {
        if (y == count - 1) { //will not allow going ahead a point outside the array
            alert("no More ahead!");
        }
        else {
            y = y + 1 //increment the page value
            page = chapters[x][y]  //update the page image
        }
    }
    $:x, page = chapters[x][0], y= 0, count = chapters[x].length; //whenever x is adjusted, update the current page back to the first page of the chapter, set y to 0, and update the count

</script>

<div class="head">
</div>
<div> <!-- Arrows and Page count-->
    <img on:click={prevPage} src={LeftArrow} alt="Left Arrow" id="la"> 
    <h3 id="count"> Page {y + 1}/{count} </h3>
    <img on:click={nextPage} src={RightArrow} alt="Right Arrow" id="ra">
    <img on:click={prevPage} src={LeftArrow} alt="Left Arrow" id="lab"> 
    <img on:click={nextPage} src={RightArrow} alt="Right Arrow" id="rab">
</div>
<div class="body"> <!-- Page image -->
    <img src={page} alt ="the page" id="pg"/>
</div>

<style>
    #pg {
        width: 900px;
        height: 1500px;
    }
    #ra {
        position: absolute;
        float: right;
        width: 9%;
        height: 3.3%;
        top: 0.7%;
        right: 1%;
    }
    #la {
        position: absolute;
        float: left;
        width: 9%;
        height: 3.3%;
        top: 0.7%;
        left: 1%
    }
    #rab {
        position: absolute;
        float: right;
        width: 9%;
        height: 3.3%;
        top: 95%;
        right: 1.5%
    }
    #lab {
        position: absolute;
        float: left;
        width: 9%;
        height: 3.3%;
        top: 95%;
        left: 1.5%
    }
    #count {
        position: relative;
        left: 46%;
    }
    .head {
        border: 3px #355dd4 solid;
        position: absolute;
        top: 0.5%;
        left:0.7%;
        width: 98%;
        height: 3.5%;
        background-color: aquamarine;
    }
    .body {
        border: 3px #355dd4 solid;
    }
</style>