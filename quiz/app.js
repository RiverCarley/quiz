const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
       id: 0,
       text: "Which drink would you choose?",
       answers: [
           {
               text: "Sparkling Water",
           
           },
           {
               text: "Psilocybin Tea",
          
           },
           {
               text: "Cream Soda",
         
           },
          
       ]
    },
    {
        id: 1,
        text: "Which pet would you choose?",
        answers: [
            {
                text: "Sea Monkeys",
   
            },
            {
                text: "Rabbit",
 
            },
            {
                text: "Dog",
       
            },
          
        ]
    },
    {
        id: 2,
        text: "Which car would you choose?",
        answers: [
            {
                text: "1965 Shelby Cobra",
     
            },
            {
                text: "2024 Volvo S60",
     
            },
            {
                text: "Tesla Model 3",
        
            },
        
        ]
    }
]

const answers = [
    {
        combination: ["Sparkling Water", "Sea Monkeys", "1965 Shelby Cobra"],
        text: "1",

    },
    {
        combination: ["Sparkling Water", "Sea Monkeys", "2024 Volvo S60"],
        text: "2",

    },
    {  
        combination: ["Sparkling Water", "Sea Monkeys", "Tesla Model 3"],
        text: "3",
   
    },
    {
        combination: ["Sparkling Water", "Rabbit", "1965 Shelby Cobra"],
        text: "4",
  
    }
]
// need to have a default answer to compensate for lack of combination data

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text
          
            answerBlock.append( answerTitle)

            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)

    })
}
populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length) {
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) 
        ) {
            result = answer
            return
        } else if (!result) {
            //first answer object is default
            result = answers[0]
        }
    })

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    

    answerBlock.append(answerTitle)

    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.innerText !== chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}






