
/*
Requirements:

Users start on a screen where they can click a button to start the quiz.

Once the game is started, the user should be prompted through a series
of at least 5 multiple choice questions which they can answer. 
Questions are to be asked one after another, and the user should 
only be able to view one question at a time.

Users should not be able to skip questions.

When viewing an individual question, the user should also 
be able to see which question they're on (for instance, "7 out of 10")
and their current score ("5 correct, 2 incorrect").

When a user submits an answer to a question, they should first get 
feedback on if their answer was correct or not. If it's incorrect,
they should be shown the correct answer. Then they should be moved 
along to the next question.

After the user has completed the final question, they should be 
shown their overall score (in other words, how many questions they
got right out of the total questions asked) and be able to start a
new game.
*/

$(startQuiz)

function startQuiz (){
$("#js-quiz-control").click(function(){
        var newQuiz = Quiz (5, $("#quiz"));
        $(".question-section").siblings().addClass("hidden");
        $( ".question-section:nth-of-type(1)").removeClass("hidden");
});
}
























/*Other full list of 47 facts:

            "Forty-seven is the fifteenth prime number.",
            "Forty-seven is a safe prime.",
            "Forty-seven is the thirteenth supersingular prime.",
            "Forty-seven is the sixth Lucas prime.",
            "Forty-seven in binary is 00101111.",
            "The atomic number of silver is 47.",
            "The atomic mass of one of the naturally occurring stable isotopes of titanium is 47.",
            "During the 2012 US presidential election, Mitt Romney claimed that 47 percent of Americans do not pay any income tax.",
            "Joe Menosky graduated from Pomona College in 1979 and became a writer on Star Trek: The Next Generation"
                    + "There he infected the other writers with his love of the number 47, and, as a result, the show often mentioned the number 47.",
            "According to the Bible, Jesus completed 47 miracles.",
            "The Declaration of Independence has 47 sentences.",
            "A concert harp has 47 strings.",
            "The tropics of Cancer and Capricorn are 47 degrees apart.",
            "The Geneva Convention protecting prisoners of war was originally signed by 47 nations.",
            "Euler left so much material unpublished upon his death that it took St. Petersburg Academy 47 years to finish printing all of his manuscripts.",
            "The Ringling Brothers Barnum and Bailey circus train is on the road 47 weeks of every year.",
            "Saddam Hussain had 47 presidential bunkers.",
            "Also known as Theodore Geisel, Dr. Seuss published 47 books in his life time.",
            "According to Ptolemy, there are 47 constellations.",
            "The Maltese Falcon weighed 47 pounds.",
            "There are 47 voting members for the Academy Awards.",
            "Most coach buses have a passenger seating capacity of 47.",
            "When Lord Carnavon opened King Tut's tomb, 47 people tragically died from the curse.",
            "There are 47 species of gulls.",
            "Japan has 47 prefectures.",
            "South Carolina has 47 state parks.",
            "The largest Stone Age tomb in England, located near Stonehenge, contains the remains of 47 people.",
            "A cubic foot of human flesh weighs approximately 47 pounds.",
            "There were 47 Samuri who became Ronin after their lord was slain. They eventually killed his slayer and all commited ritual suicide.",
            "In the song Macerena, the refrain is repeated 47 times.",
            "Of the books sold in the United States, 47 percent are romance novels.",
            "The annual output of the Aswan High Dam in Egypt is 47 billion kilowatt-hours.",
            "The number 47 in hexadecimal is 2F.",
            "The number 47 in octal is 57.",
            "The number 47 in roman numerals is X L V I I.",
            "J. J. Abrams, who produced and directed Star Trek, frequently uses the number 47 in his productions.",
            "The Brooklyn-based hip hop collective Pro Era and its late co-founder Jamal Dewar has also made references to the number 47 in various songs by members of the group.",
            "The AK-47, also known as a Kalashnikov rifle, is one of the most widely used military weapons in the world.",
            "47 is dialing code for Norway.",
            "The Roswell alian sighting in Roswell, New Mexico happened in 1947.",
            "The number 47 is objectively the best and most useful number in existence.",
            "According to The Book Of Facts by Isaac Asimov, a mosquito has 47 teeth.",
            "The Great Potato Famine in Ireland occurred in 1847.",
            "Hot Springs National Park has 47 hot springs.",
            "Dr. Seuss published 47 books in his life time.",
            "Most coach buses have a passenger seating capacity of 47.",
            "The road running through Joshua Tree National Monument is 47 miles long."
            */
