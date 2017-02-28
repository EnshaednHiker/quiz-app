var Quiz = function (questions, container){
    //HTML definitions for the quiz and a quiz item

    //ability to add a quiz item(render question on page)

    //definition of questions
    var quizItems = [
             {
                 question:"What number is the fifteenth prime number?",
                 options: [47, 257, 57, 61],
                 answer: 47
             },
             {
                 question:"According to the Bible how many miracles did Jesus perform?",
                 options: [47, 35, 67, 12],
                 answer: 47
             },
             {
                 question:"How many state parks does South Carolina have?",
                 options: [47, 30, 23, 15],
                 answer: 47
             },
             {
                question:"How many sentences does the Declaration of Independence have?",
                options: [47, 33,12,45],
                answer:  47
             },
             {
                question:"How many strings does a concert harp have?",
                options: [47, 4, 16, 105],
                answer: 47 
             },
             {
                question: "The tropics of Cancer and Capricorn are how many degrees apart?",
                options: [47, 57, 37,27],
                answer: 47 
             },
             {
                question: "Euler left so much material unpublished upon his death that it took St. Petersburg Academy how many years to finish printing all of his manuscripts?",
                options: [47, 2, 34, 100],
                answer:  47
             },
             {
                question: "How many presidential bunkers did Saddam Hussein have?",
                options: [47,44,77,777],
                answer: 47 
             },
             {
                question: "According to Ptolemy, how many constellations are there?",
                options: [47, 12, 87, 100],
                answer:  47
             },
             {
                question: "What is the dialing code for Norway?",
                options: [47, 1, 13, 44],
                answer:  47
             }] || []
     this.buildQuestion = buildQuestion.bind(this)
     this.quizElement = $("<div class='quiz'></div>")
     this.quizStats =  $("<div id='stats'</div>") 
     this.container = container 
     buildQuiz.call(this, quizItems)    
     //set up turn the answers into radial button, so can only select one
     //way to get the data at the end of quiz, maybe a submit button to product results of quiz, right/wrong
     //figure out how to randomize
     //build might want to clear contents before dumping in new one
}

function randomizeOptions (array){
    var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function buildQuestion (item, number){
    var letter = "ABCD"
    var randomAnswers = randomizeOptions(item.options);
    var questionRenderItem =  "<section class = 'question-section'><h2>Question <span>"+ number +"</span></h2>"+
        "<p>" + item.question + "</p><form class='answer-form'>";
        //randomize getting questions, and randomize getting options
        for (var i = 0; i < item.options.length; i++){
            questionRenderItem +="<div><input type='radio' class='answer' name='possible-answer' value='"+randomAnswers[i]+"' id='answer-'"+(i+1)+"'/><label for='answer "+letter.substring(i,1+i)+"'>"+letter.substring(i,1+i)+": "+randomAnswers[i]+"</label></div>";
         }
         questionRenderItem +="<div><button type='button' class='js-question-button'>Submit Answer</button></div></form></section>"             
    return questionRenderItem  
}

function buildStats(items){
    var questionNumber = 1
    var questionTotal = items.length;
    console.log(questionTotal);
    var correct = 0;
    var incorrect = 0;
    var statsRenderItem = "<section class='js-stats-section'><h3>Stats</h3><div class='stats'><p id='correct'>correct: "+correct+"</p></div><div class='stats'><p id='incorrect'>incorrect: "+incorrect+"</p></div><div class='stats'><div><p>question <span id='question-number'>"+questionNumber+"</span> of "+questionTotal+"</p></div></div></section>";
     var checkedAnswer = 0;
    $("input[type='radio']").click(function(){
        checkedAnswer = $(this).val();
        console.log(checkedAnswer);
    });
    $("form").on('click','.js-question-button',function(event){
        //event.preventDefault();  
        if (checkedAnswer){
            alert("Correct: " + checkedAnswer + " is the correct answer.")
            correct++;
            $("#correct").replaceWith("<p id='correct'>correct: "+correct+"</p>");
            console.log(correct);
        }
        else {
            alert("Incorrect: " + checkedAnswer + " is the incorrect answer.")
            incorrect++;
            $("#incorrect").replaceWith("<p id='incorrect'>incorrect: "+incorrect+"</p>");
            console.log(incorrect);
        }
        questionNumber++;
        $("#question-number").replaceWith("<span id='question-number'>"+questionNumber+"</span>");
        console.log(questionTotal);
    });
    
    return statsRenderItem;
}

function buildQuiz(items){
        this.container.empty();
        var self = this;
        //build stats by placing listeners
        self.quizStats.append(self.buildStats(items));
        this.container.append(self.quizStats)  
        //build quiz by looping through quizItems to construct HTML
        items.forEach(function(element, index){
            if (element === 0){
            self.quizElement.append(self.buildQuestion(element, index+1))
        }
            else {
                self.quizElement.append(self.buildQuestion(element, index+1))
                self.quizElement.append()
            }

        });
        this.container.append(self.quizElement)
        $(buildStats) 
}   