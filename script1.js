let startBtn = document.querySelector(".btnStart");
let infoBox = document.querySelector(".info-box");
let exitBtn = document.querySelector(".quit");
let continueBtn = document.querySelector(".continue")
let rstart = document.querySelector(".start")
let quizBox = document.querySelector(".quiz-box")
let quesCount = 0;
let optionsCount = 0;
let nextBtn = document.querySelector(".nextBtn")
let allOption = document.querySelectorAll(".options")

allOption.forEach((ao) => console.log(ao))


startBtn.onclick = () => {
   infoBox.classList.add("showInfoBox")
   rstart.classList.add("removeStartBtn")
}

exitBtn.onclick = () => {
    infoBox.classList.remove("showInfoBox")
    rstart.classList.remove("removeStartBtn")
}

continueBtn.onclick = () => {
   quizBox.classList.add("showQuizBox")
   showQuestion(quesCount);
   showOptions(optionsCount)
}

nextBtn.onclick = () =>{
  console.log(questions.length)
  if(quesCount < questions.length-1){quesCount++; optionsCount++}
  else{console.log("Complete")}
  showQuestion(quesCount);
  showOptions(optionsCount);

}




let showQuestion = (index) => {
    let ques = document.getElementById("que")
    let quesTag =  questions[index].question;
    ques.innerHTML = quesTag
}

let showOptions = (index) => {
    let opt1 = document.getElementById("opt1")
    let opt2 = document.getElementById("opt2")
    let opt3 = document.getElementById("opt3")
    let opt4 = document.getElementById("opt4")
    
    opt1.innerHTML = questions[index].Options[0]
    opt2.innerHTML = questions[index].Options[1]
    opt3.innerHTML = questions[index].Options[2]
    opt4.innerHTML = questions[index].Options[3]

    
for (let i = 0; i < allOption.length; i++) {
    console.log(allOption[i])
    allOption[i].setAttribute("onclick" , "userSelected(this)")
}
}

let userSelected = (userClick) => {
    let user = userClick.textContent
    let correctAns = questions[quesCount].answer
    console.log(user , correctAns)

    if (user != correctAns){
        console.log("you are wrong")
    }
    else{console.log("you are right")}
}














































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

