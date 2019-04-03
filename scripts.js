//variables
let numberCorrect = 0;
let current = 0;
let totalQuestions = 10;
let currentQuestion = 1;

let questionsArray =  

[
{
    number: 1,
    text: `Which state is Champaign-Urbana located in?`,
    ans1: `Michigan`,
    ans2: `Delaware`, 
    ans3: `Illinois`, 
    ans4: `Kentucky`
},

{
    number: 2,
    text: `Which major University is located in Champaign-Urbana?`,
    ans1: `Illinois University`,
    ans2: `The University of Illinois`, 
    ans3: `Illinois State University`, 
    ans4: `Midwestern University`
},

{
    number: 3,
    text: `The following technology was invented in Champaign-Urbana`,
    ans1: `The web browser`,
    ans2: `The transistor`, 
    ans3: `The LED`, 
    ans4: `All of the above`
},

{
    number: 4,
    text: `The following Olympian speed-skating gold medalist is from Champaign `,
    ans1: `Bonnie Blair`,
    ans2: `Nancy Spector`, 
    ans3: `Frank Cannon`, 
    ans4: `Jason Alameda`
},

{
    number: 5,
    text: `What food product is made in Champaign-Urbana?`,
    ans1: `Kraft Macaroni and Cheese`,
    ans2: `Jimmy Dean sausages`, 
    ans3: `Nabisco Triscuits`, 
    ans4: `Hostess Twinkies`
},

{
    number: 6,
    text: `Which famous politician practiced law in Urbana?`,
    ans1: `Lyndon Johnson`,
    ans2: `James Buchanan`, 
    ans3: `Abraham Lincoln`, 
    ans4: `Theodore Roosevelt`
},

{
    number: 7,
    text: `What film festival is held annually in Champaign's Virginia Theater`,
    ans1: `The Cartoon Rodeo Festival`,
    ans2: `The Documentary Film Festival`, 
    ans3: `Cinemania`, 
    ans4: `Ebertfest`
},

{
    number: 8,
    text: `The farmland around Champaign-Urbana is mainly used to grow which crops:`,
    ans1: `Corn and soybeans`,
    ans2: `Malt and hops`, 
    ans3: `Wheat and barley`, 
    ans4: `Cotton and tobacco`
},

{
    number: 9,
    text: `The terrain that Champaign-Urbana is located on is extremely`,
    ans1: `Hilly`,
    ans2: `Mountainous`, 
    ans3: `Flat`, 
    ans4: `Rocky`
},

{
    number: 10,
    text: `Which classic rock band got their start in Champaign-Urbana`,
    ans1: `The Eagles`,
    ans2: `Bachman-Turner Overdrive`, 
    ans3: `Loverboy`, 
    ans4: `REO Speedwagon`
}
]


let answersArray = 
[

{
    num: 1,
    code: `ans3`,
    txt: `Illinois`
},

{
    num: 2,
    code: `ans2`, 
    txt: `The University of Illinois`,
},

{
    num: 3,
    code: `ans4`, 
    txt: `All of the above`,
    },

{
    num: 4,
    code: `ans1`, 
    txt: `Bonnie Blair`,
},

{
    num: 5,
    code: `ans1`, 
    txt: `Kraft Macaroni and Cheese`,
},

{
    num: 6,
    code: `ans3`, 
    txt: `Abraham Lincoln`,
},

{
    num: 7,
    code: `ans4`, 
    txt: `Ebertfest`,
},

{
    num: 8,
    code: `ans1`, 
    txt: `Corn and soybeans`,
},

{
    num: 9,
    code: `ans3`, 
    txt: `Flat`,
},

{   
    num: 10,
    code: `ans4`, 
    txt: `REO Speedwagon`,
}
];

//run when button is pressed to start quiz
function handleStart(){
    $(".startButton").click(function event(){
        console.log("handleStart function ran");
        askQuestion();
    });
}
//sets up the question             
function askQuestion(){
    console.log("askQuestion function ran");
    questionTemplate(questionsArray[current].number, questionsArray[current].text, questionsArray[current].ans1, questionsArray[current].ans2, 
        questionsArray[current].ans3, questionsArray[current].ans4);
}
//renders the question
function questionTemplate(n, t, a1, a2, a3, a4){
    console.log("questionTemplate function ran");
    
    //question form
    let question = 
                   `<div class="templateContainer">
                
                    <form id="formOne">

                    <fieldset>
                    
                    <p>
                    <legend>
                    ${n}) ${t}
                    </legend>
                    </p>

                    <label for="inputOne">
                    <input id = "inputOne"  type="radio" name="a" value="ans1" checked id="inputOne">
                    ${a1}
                    </label>
                    <br>
                   
                    <label for="inputTwo">
                    <input id="inputTwo"  type="radio" name="a" value="ans2"> ${a2}
                    </label>
                    <br>

                    <label for="inputThree">
                    <input id="inputThree" type="radio" name="a" value="ans3"> ${a3} 
                    </label>
                    <br>

                    <label for="inputFour">
                    <input id="inputFour" type="radio" name="a" value="ans4">${a4}
                    </label>
                    <br>

                    <label for="submitButton">
                    <input class="submitButton" type="submit" value="Send">
                    </label>
    
                    </fieldset>

                    </form>

                    <p>Question number: ${currentQuestion} out of 10 questions</p>
                    </div>`

    $(".questionArea").html(question);
}
//gets answer from user
function getUserAnswer() {
    $(".questionArea").on("submit", "#formOne", function(event){    //event delegation
    event.preventDefault();
    console.log("getUserAnswer function ran");
    let selected = $('input:checked');
    let userAnswer = selected.val();
    console.log(userAnswer);
    evaluateAnswer(userAnswer);
    });
}
//determines whether answer is right or wrong
function evaluateAnswer(uA){

    let localBoolean = false;

    console.log("evaluate answer function ran");
    console.log("Here is the userAnswer variable again: " + uA);
    if(uA === answersArray[current].code){
        console.log("It's right");
        numberCorrect = numberCorrect + 1;
        localBoolean = true;
    }
    else {
        console.log("It's wrong");
    }
    console.log("number correct: " + numberCorrect);
    console.log("local variable localBoolean: " + localBoolean);
    $(".numberRight").text(`Questions answered correctly: ${numberCorrect}`);
    
    if(localBoolean === false){
        wrongTemplate();
    }

    else if(localBoolean === true){
        rightTemplate();
    }      
}
//for wrong answers
function wrongTemplate(){
    console.log("wrongTemplate function ran");
    let wrongScreen = 
                   `<div class="templateContainer">
                    <p>Sorry, that's wrong!</p>
                    <p>The correct answer is: ${answersArray[current].txt}</p>
                    <form id="formTwo">
                    <input class="submitButton" type="submit" value="Next" >
                    </form>
                    </div>`
                    
                    $(".questionArea").html(wrongScreen);

    current = current + 1; //current is added to
    currentQuestion = currentQuestion + 1;
    
    $(".questionArea").on("submit", "#formTwo", function(event){    //event delegation
        event.preventDefault();
        if(current < totalQuestions){
            askQuestion();
        }
        else {finalTemplate()}
    });
}
//for right answers
function rightTemplate(){
    console.log("rightTemplate function ran");
    let rightScreen = 
                   `<div class="templateContainer">
                    <p>You are correct!</p>
                    <p>The correct answer is, indeed: ${answersArray[current].txt}</p>
                    <form id="formThree">
                    <input class="submitButton" type="submit" value="Next" >
                    </form>
                    </div>`
    $(".questionArea").html(rightScreen);

    current = current + 1; //current is added to
    currentQuestion = currentQuestion + 1;

    $(".questionArea").on("submit", "#formThree", function(event){
        event.preventDefault();
        if(current < totalQuestions){
            askQuestion();
        }
        else {finalTemplate()}
    });
}
//final screen with option to reset
function finalTemplate(){
    console.log("finalTemplate function ran");
    let finalScreen = 
                `<div class="templateContainer">
                 <p>Thanks for playing!</p>
                 <p>Your score is: ${numberCorrect}0%
                 <p>Please come visit Champaign-Urbana one day</p>
                 <button type="button" class="resetButton">Would you like to play again?</button>`

    $(".questionArea").on("click", ".resetButton", function(event){
        reset();
    });
                 
    $(".questionArea").html(finalScreen); 
}

function reset(){
    console.log("reset function ran");
    numberCorrect = 0;
    current = 0;
    currentQuestion = 1;
    $(".numberRight").text(`Questions answered correctly: ${numberCorrect}`);
    askQuestion();  
}

function doQuiz () {
    handleStart();
    getUserAnswer();
  }
  
  $(doQuiz);