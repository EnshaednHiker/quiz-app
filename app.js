$(startQuiz)

function startQuiz() {
        $("#js-quiz-control").click(function () {
                var newQuiz = Quiz(5, $("#quiz"));
                $(".question-section").siblings().addClass("hidden");
                $(".question-section:nth-of-type(1)").removeClass("hidden");
                $("#js-quiz-control").addClass("hidden");
        });
}