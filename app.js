const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')
var  shouldShowVideo = true;


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
        text: "Fear and Loathing in Las Vegas by Hunter S. Thompson",
        textb: "1",
        texty: "https://www.goodreads.com/book/show/7745.Fear_and_Loathing_in_Las_Vegas",
        textz: "https://www.amazon.ca/Fear-Loathing-Las-Vegas-American-ebook/dp/B003WUYQG4/ref=sr_1_1?crid=2VAO23V81SF1J&keywords=fear+and+loathing+in+las+vegas+book&qid=1707075450&sprefix=fear+and+loa%2Caps%2C103&sr=8-1",
     
    },
    {
        combination: ["Sparkling Water", "Sea Monkeys", "2024 Volvo S60"],
        text: "2",
        textb: "2",


    },
    {  
        combination: ["Sparkling Water", "Sea Monkeys", "Tesla Model 3"],
        text: "3",
        textb: "3",
    
   
    },
    {
        combination: ["Sparkling Water", "Rabbit", "1965 Shelby Cobra"],
    
       
        text: "The Road by Cormac McCarthy",
        textb: "4",
  
    },
    {
        combination: ["Sparkling Water", "Rabbit", "2024 Volvo S60"],
        text: "5",
        textb: "5",


    },
    {  
        combination: ["Sparkling Water", "Rabbit", "Tesla Model 3"],
        text: "6",
        textb: "6",
    
   
    },
    {
        combination: ["Sparkling Water", "Dog", "1965 Shelby Cobra"],
    
       
        text: "7",
        textb: "7",
  
    },
    {
        combination: ["Sparkling Water", "Dog", "2024 Volvo S60"],
        text: "8",
        textb: "8",


    },
    {  
        combination: ["Sparkling Water", "Dog", "Tesla Model 3"],
        text: "9",
        textb: "9",
    
   
    },
     {
        combination: ["Psilocybin Tea", "Sea Monkeys", "1965 Shelby Cobra"],
        text: "10",
        textb: "10",
     
    },
    {
        combination: ["Psilocybin Tea", "Sea Monkeys", "2024 Volvo S60"],
        text: "11",
        textb: "11",


    },
    {  
        combination: ["Psilocybin Tea", "Sea Monkeys", "Tesla Model 3"],
        text: "12",
        textb: "12",
    
   
    },
    {
        combination: ["Psilocybin Tea", "Rabbit", "1965 Shelby Cobra"],
    
       
        text: "13",
        textb: "13",
  
    },
    {
        combination: ["Psilocybin Tea", "Rabbit", "2024 Volvo S60"],
        text: "14",
        textb: "14",


    },
    {  
        combination: ["Psilocybin Tea", "Rabbit", "Tesla Model 3"],
        text: "15",
        textb: "15",
    
   
    },
    {
        combination: ["Psilocybin Tea", "Dog", "1965 Shelby Cobra"],
    
       
        text: "16",
        textb: "16",
  
    },
    {
        combination: ["Psilocybin Tea", "Dog", "2024 Volvo S60"],
        text: "17",
        textb: "17",


    },
    {  
        combination: ["Psilocybin Tea", "Dog", "Tesla Model 3"],
        text: "18",
        textb: "18",
    
   
    },
    {
        combination: ["Cream Soda", "Sea Monkeys", "1965 Shelby Cobra"],
        text: "19",
        textb: "19",
     
    },
    {
        combination: ["Cream Soda", "Sea Monkeys", "2024 Volvo S60"],
        text: "20",
        textb: "20",


    },
    {  
        combination: ["Cream Soda", "Sea Monkeys", "Tesla Model 3"],
        text: "21",
        textb: "21",
    
   
    },
    {
        combination: ["Cream Soda", "Rabbit", "1965 Shelby Cobra"],
    
       
        text: "22",
        textb: "22",
  
    },
    {
        combination: ["Cream Soda", "Rabbit", "2024 Volvo S60"],
        text: "23",
        textb: "23",


    },
    {  
        combination: ["Cream Soda", "Rabbit", "Tesla Model 3"],
        text: "24",
        textb: "24",
    
   
    },
    {
        combination: ["Cream Soda", "Dog", "1965 Shelby Cobra"],
    
       
        text: "25",
        textb: "25",
  
    },
    {
        combination: ["Cream Soda", "Dog", "2024 Volvo S60"],
        text: "26",
        textb: "26",


    },
    {  
        combination: ["Cream Soda", "Dog", "Tesla Model 3"],
        text: "27",
        textb: "27",
    
   
    },
]
// need to have a default answer to compensate for lack of combination data

const unansweredQuestions = []
const chosenAnswers = []
const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div');
        titleBlock.id = question.id;
        titleBlock.classList.add('title-block');
        const titleHeading = document.createElement('h2');
        titleHeading.textContent = question.text;
        titleBlock.append(titleHeading);

        // Add event listeners for mouseover and mouseout
        titleBlock.addEventListener('mouseover', () => highlightBlocks(question.id, true));
        titleBlock.addEventListener('mouseout', () => highlightBlocks(question.id, false));

        questionDisplay.append(titleBlock);

        const answersBlock = document.createElement('div');
        answersBlock.id = question.id + "-questions";
        answersBlock.classList.add('answer-options');

        unansweredQuestions.push(question.id);

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div');
            answerBlock.classList.add('answer-block');
            answerBlock.addEventListener('mouseover', () => highlightBlocks(question.id, true));
            answerBlock.addEventListener('mouseout', () => highlightBlocks(question.id, false));
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text));

            const answerTitle = document.createElement('h3');
            answerTitle.textContent = answer.text;

            answerBlock.append(answerTitle);

            answersBlock.append(answerBlock);
        });

        questionDisplay.append(answersBlock);
    });
};

function highlightBlocks(questionId, isHighlighted) {
    const titleBlock = document.getElementById(questionId);
    titleBlock.classList.toggle('highlighted', isHighlighted);

    const answerBlocks = document.getElementById(questionId + "-questions").getElementsByClassName('answer-block');
    Array.from(answerBlocks).forEach(answerBlock => {
        answerBlock.classList.toggle('highlighted', isHighlighted);
    });
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
        shouldShowVideo = false; // Update shouldShowVideo to false
       

        location.href = '#answer'
        showAnswer()
        updateElementsVisibility();
    }
  
}
var shouldShowVideo = true;

function updateElementsVisibility() {
    var videoElement = document.getElementById('bookVideo');
    var imageElement = document.getElementById('x');

    if (!shouldShowVideo) {
        // If shouldShowVideo is false, hide the video element
        videoElement.style.display = 'none';
        imageElement.style.display = 'block';
    } else {
        // If shouldShowVideo is true, hide the image element
        imageElement.style.display = 'none';
        videoElement.style.display = 'block'; // Show the video element
    }
}
const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if (answer.combination.every(option => chosenAnswers.includes(option))) {
            result = answer;
            return;
        }
    })

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    function ReplaceImage(y){
        document.getElementById("x").src=y
    }
    function ReplaceGRLink(yy){
        document.getElementById("y").href=yy
    }
    function ReplaceAZLink(j){
        document.getElementById("z").href=j
    }
    

    answerBlock.append(answerTitle)

    answerDisplay.append(answerBlock)
    ReplaceImage("./images/"+result.textb+".jpg");
    ReplaceGRLink(""+result.texty+"");
    ReplaceAZLink(""+result.textz+"");
    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))
  

}


function disableQuestionBlock(questionId, chosenAnswer) {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.innerText !== chosenAnswer) {
            block.style.opacity = "10%"
          

        }
    })
}
var videoElement = document.getElementById('bookVideo');
var imageElement = document.getElementById('x');

if (!shouldShowVideo) {
    // If shouldShowVideo is false, hide the video element
    videoElement.style.display = 'none';
    imageElement.style.display = 'block'; 


} else {
    // If shouldShowVideo is true, hide the image element
    imageElement.style.display = 'none';
}







updateElementsVisibility();



