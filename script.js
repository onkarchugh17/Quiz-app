let start = document.querySelector(".btnStart")
let InfoBox = document.querySelector(".info-box")
let continuee = document.querySelector(".continue")
let exit = document.querySelector(".quit")
let quizBox = document.querySelector(".quiz-box")
let nextBtn = document.querySelector(".nextBtn")
let qCount = document.querySelector(".totalQue")
let queText = document.querySelector(".ques")
let optionList = document.querySelector(".option-list")
let options = optionList.querySelectorAll(".options")
let timeCount = document.querySelector(".timer-sec")
let finalResult = document.querySelector(".result-box")
let restartBtn = document.querySelector(".restart")
let quitBtn = document.querySelector(".quit_")
let score = document.querySelector(".score")


let tick = '<div class="iconTick"><i class="fas fa-check"></i></div>'
let cross = '<div class="iconCross"><i class="fas fa-times"></i></div>'



let quesCount = 0;
let queNumb = 1;
let counter;
let userScore = 0;



let questions = [
    {
        numb: 1,
        question: "What does HTML stands for?",
        answer: "Hyper Text Markup Language",

        Options: [
            "Hyper Text Processor",
            "Hyper Text Makeup Language",
            "Hyper Text Markup Language",
            "Hike Text Markup Language"
        ]
    },

    {
        numb: 2,
        question: "Method to remove the last element of array?",
        answer: "pop()",

        Options: [
            "pop()",
            "push()",
            "shift()",
            "unshift()"
        ]
    },

    {
        numb: 3,
        question: "there are how many types of datatypes in js?",
        answer: "8",

        Options: [
            "7",
            "8",
            "6",
            "9"
        ]
    },

    {
        numb: 4,
        question: "'true' in JS is?",
        answer: "Boolean",

        Options: [
            "String",
            "Bigint",
            "Symbol",
            "Boolean"
        ]
    },

    {
        numb: 5,
        question: "What is CSS stands for?",
        answer: "Cascading Style Sheets",

        Options: [
            "Cascading Style Sheets",
            "Communication Style Sheet",
            "Cascading Styler Sheets",
            "Cascading Styling Sheets"
        ]
    }

]



start.onclick = () => {
    InfoBox.classList.add("activeInfo")
    start.classList.add("removeBtn")
}

exit.onclick = () => {
    InfoBox.classList.remove("activeInfo")
}

continuee.onclick = () => {
    InfoBox.classList.remove("activeInfo")
    quizBox.classList.add("activeQuiz")
    showQuestion(0)
    queCount(1)
    startTimeout(15)

}



nextBtn.onclick = () => {
    if (quesCount < questions.length - 1) {
        quesCount++
        queNumb++
        showQuestion(quesCount)
        queCount(queNumb)
        clearInterval(counter)
        startTimeout(15)
        nextBtn.style.display = "none"

    } else {
        console.log("Questions Completed")
        showResult()
    }
}


let showQuestion = (index) => {


    let queTag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let optionsTag = '<div class="options" onclick ="optionSelected(this)">' + questions[index].Options[0] + '</div>'
        + '<div class="options" onclick ="optionSelected(this)">' + questions[index].Options[1] + '</div>'
        + '<div class="options" onclick ="optionSelected(this)">' + questions[index].Options[2] + '</div>'
        + '<div class="options" onclick ="optionSelected(this)">' + questions[index].Options[3] + '</div>'
    queText.innerHTML = queTag;
    optionList.innerHTML = optionsTag;
    for (let i = 0; i < options.length; i++) {
        console.log(options[i])
    }
}

let optionSelected = (answer) => {
    clearInterval(counter)
    let userAns = answer.textContent;
    let correctAns = questions[quesCount].answer;
    let allOption = optionList.children.length
    //console.log(correctAns , userAns)
    console.log(allOption)
    

    if (userAns == correctAns) {
        userScore += 1;
        answer.classList.add("correct")
        answer.insertAdjacentHTML("beforeend", tick)
    }
    else {
        answer.classList.add("incorrect")
        answer.insertAdjacentHTML("beforeend", cross)

        for (let i = 0; i < allOption; i++) {
            if (optionList.children[i].textContent == correctAns) {
                optionList.children[i].setAttribute("class", "options correct")
                optionList.children[i].insertAdjacentHTML("beforeend", tick)
                //console.log(optionList.children[i])
                

            }
            

        }
    }




    for (let i = 0; i < allOption; i++) {
        optionList.children[i].classList.add("disabled")

    }

    nextBtn.style.display = "block"

}

let showResult = () => {

    InfoBox.classList.remove("activeInfo")
    quizBox.classList.remove("activeQuiz")
    finalResult.classList.add("activeResult")
    if (userScore == 3) {
        let scoreTag = '<span>Hey! you got <p> ' + userScore + ' </p> out of <p> ' + questions.length + ' </p></span>';
        score.innerHTML = scoreTag
    }

    if (userScore < 3) {
        let scoreTag = '<span>Sorry! you got only <p> ' + userScore + ' </p> out of <p> ' + questions.length + ' </p></span>';
        score.innerHTML = scoreTag
    }

    if (userScore > 3) {
        let scoreTag = '<span>Excellent mate! You got<p> ' + userScore + ' </p> out of <p> ' + questions.length + ' </p> Cheers</span>';
        score.innerHTML = scoreTag
    }


}




let startTimeout = (time) => {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time
        time--;
        if (time < 0) {
            clearInterval(counter);
            timeCount.textCountent = "00"
        }
    }
}






let queCount = (index) => {
    let qCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>questions</span>'
    qCount.innerHTML = qCountTag
}


quitBtn.onclick = () => {
    window.location.reload();
}

restartBtn.onclick = () => {
    window.location.reload();
}







