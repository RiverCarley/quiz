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
        text: "Frankenstein by Mary Shelley",
        textb: "13",
        texty: "https://www.goodreads.com/book/show/35031085-frankenstein?ref=nav_sb_noss_l_6",
        textz: "https://www.amazon.ca/Frankenstein-1818-Text-Mary-Shelley/dp/0143131842/ref=sr_1_6?crid=ZESCD20SUFS6&keywords=frankenstein+mary+shelley&qid=1707152295&sprefix=franke%2Caps%2C122&sr=8-6",
        texts:"test text",
        page:"100",
        dis:"info",
        tit:"Frankenstein",
     
    },
    {
        combination: ["Sparkling Water", "Sea Monkeys", "2024 Volvo S60"],
        text: "Catch 22 by Joseph Heller",
        textb: "23",
        texty: "https://www.goodreads.com/book/show/168668.Catch_22?from_search=true&from_srp=true&qid=qqPsObNCga&rank=1",
        textz: "https://www.amazon.ca/Catch-22-50th-Anniversary-Joseph-Heller-ebook/dp/B0048WQDIE/ref=sr_1_1?crid=21HMEXW4AXE47&keywords=catch+22+book&qid=1707154687&sprefix=catch+22+book%2Caps%2C103&sr=8-1",
     


    },
    {  
        combination: ["Sparkling Water", "Sea Monkeys", "Tesla Model 3"],
        text: "When Breath Becomes Air by Paul Kalanithi",
        textb: "17",
        texty: "https://www.goodreads.com/book/show/25899336-when-breath-becomes-air?ac=1&from_search=true&qid=RU87ZpuVqm&rank=1",
        textz: "https://www.amazon.ca/When-Breath-Becomes-Paul-Kalanithi-ebook/dp/B00XSSYR50/ref=sr_1_1?crid=2W14B1OBFHI4U&keywords=when+breath+becomes+air+by+paul+kalanithi&qid=1707154636&sprefix=when+bre%2Caps%2C96&sr=8-1",
    
   
    },
    {
        combination: ["Sparkling Water", "Rabbit", "1965 Shelby Cobra"],
    
       
        text: "On The Road by Jack Kerouac",
        textb: "14",
        texty: "https://www.goodreads.com/book/show/70401.On_the_Road?from_search=true&from_srp=true&qid=bOvhHw7ZOd&rank=1",
        textz: "https://www.amazon.ca/Road-Jack-Kerouac-ebook/dp/B0893QYWX8/ref=sr_1_1?crid=1UFRH6PFDNGRD&keywords=on+the+road&qid=1707154622&sprefix=on+the+road%2Caps%2C98&sr=8-1",
    },
    {
        combination: ["Sparkling Water", "Rabbit", "2024 Volvo S60"],
        text: "One Hundred Years of Solitude by Gabriel Garcia Marquez",
        textb: "16",
        texty: "https://www.goodreads.com/book/show/320.One_Hundred_Years_of_Solitude?ref=nav_sb_noss_l_8",
        textz: "https://www.amazon.ca/Hundred-Solitude-Gabriel-Garc%C3%ADa-M%C3%A1rquez-ebook/dp/B0BFK4THKQ/ref=sr_1_1?crid=2RYSMEFZLOJVJ&keywords=one+hundred+years+of+solitude&qid=1707154567&sprefix=one+hun%2Caps%2C99&sr=8-1",

    },
    {  
        combination: ["Sparkling Water", "Rabbit", "Tesla Model 3"],
        text: "Never Finished by David Goggins",
        textb: "18",
        texty: "https://www.goodreads.com/book/show/63079845-never-finished?from_search=true&from_srp=true&qid=yYpZQ02HUO&rank=1",
        textz: "https://www.amazon.ca/Never-Finished-Unshackle-Your-Within-ebook/dp/B0BJMN7RMV/ref=sr_1_1?crid=2IU07Y5HFX9RN&keywords=never+finished+david+goggins+book&qid=1707154545&sprefix=never+fin%2Caps%2C88&sr=8-1",
   
    },
    {
        combination: ["Sparkling Water", "Dog", "1965 Shelby Cobra"],
    
       
        text: "Norse Mythology by Neil Gaiman",
        textb: "21",
        texty: "https://www.goodreads.com/book/show/37903770-norse-mythology?ref=nav_sb_noss_l_10",
        textz: "https://www.amazon.ca/Norse-Mythology-Neil-Gaiman-ebook/dp/B01HQA6EOC/ref=sr_1_1?crid=362ZWSWF26M5K&keywords=norse+mythology+neil+gaiman&qid=1707154482&sprefix=norse%2Caps%2C96&sr=8-1",
    },
    {
        combination: ["Sparkling Water", "Dog", "2024 Volvo S60"],
        text: "Game of Thrones by George R.R. Martin",
        textb: "6",
        texty: "https://www.goodreads.com/book/show/13496.A_Game_of_Thrones?from_search=true&from_srp=true&qid=9NQm1APFK0&rank=1",
        textz: "https://www.amazon.ca/Game-Thrones-Song-Fire-Book-ebook/dp/B000QCS8TW/ref=sr_1_1?crid=5X6EJM3UR7DY&keywords=game+of+thrones+book+1&qid=1707154458&sprefix=game+of+thrones+%2Caps%2C106&sr=8-1",

    },
    {  
        combination: ["Sparkling Water", "Dog", "Tesla Model 3"],
        text: "Fire and Blood by George R.R. Martin",
        textb: "15",
        texty: "https://www.goodreads.com/book/show/39943621-fire-blood?from_search=true&from_srp=true&qid=fVPOJrt00I&rank=2",
        textz: "https://www.amazon.ca/Fire-Blood-Thrones-Targaryen-History-ebook/dp/B07C6TBTV3/ref=sr_1_1?crid=PR0U9PXDB1GE&keywords=fire+and+blood&qid=1707154402&sprefix=fire+and+blood%2Caps%2C96&sr=8-1",
   
    },
     {
        combination: ["Psilocybin Tea", "Sea Monkeys", "1965 Shelby Cobra"],
        text: "Fear and Loathing in Las Vegas by Hunter S. Thompson",
        textb: "1",
        texty: "https://www.goodreads.com/book/show/7745.Fear_and_Loathing_in_Las_Vegas",
        textz: "https://www.amazon.ca/Fear-Loathing-Las-Vegas-American-ebook/dp/B003WUYQG4/ref=sr_1_1?crid=2VAO23V81SF1J&keywords=fear+and+loathing+in+las+vegas+book&qid=1707075450&sprefix=fear+and+loa%2Caps%2C103&sr=8-1",
     
     
    },
    {
        combination: ["Psilocybin Tea", "Sea Monkeys", "2024 Volvo S60"],
        text: "The Catcher in the Rye by J.D.Salinger",
        textb: "24",
        texty: "https://www.goodreads.com/book/show/5107.The_Catcher_in_the_Rye?ref=nav_sb_noss_l_14",
        textz: "https://www.amazon.ca/Catcher-Rye-J-D-Salinger/dp/0316769487/ref=sr_1_1?crid=FM96432PNVTW&keywords=the+catcher+in+the+rye&qid=1707154383&sprefix=the+catcher+in+the+rye%2Caps%2C95&sr=8-1",

    },
    {  
        combination: ["Psilocybin Tea", "Sea Monkeys", "Tesla Model 3"],
        text: "Brave New World by Aldous Huxley",
        textb: "27",
        texty: "https://www.goodreads.com/book/show/5129.Brave_New_World?ref=nav_sb_noss_l_5",
        textz: "https://www.amazon.ca/Brave-New-World-Aldous-Huxley/dp/030735654X/ref=sr_1_1?crid=2EPL55KRZVIFE&keywords=brave+new+world+aldous+huxley&qid=1707154329&sprefix=brave+new+%2Caps%2C92&sr=8-1",
   
    },
    {
        combination: ["Psilocybin Tea", "Rabbit", "1965 Shelby Cobra"],
    
       
        text: "The Time Machine by H.G. Wells",
        textb: "11",
        texty: "https://www.goodreads.com/book/show/2493.The_Time_Machine?from_search=true&from_srp=true&qid=i0CW8UaZbP&rank=1",
        textz: "https://www.amazon.ca/Time-Machine-H-G-Wells/dp/1659539153/ref=sr_1_4?crid=234C7NL3HBTIY&keywords=the+time+machine+by+h.+g.+wells&qid=1707154301&sprefix=the+time+machine%2Caps%2C97&sr=8-4",
    },
    {
        combination: ["Psilocybin Tea", "Rabbit", "2024 Volvo S60"],
        text: "1984 by George Orwell",
        textb: "26",
        texty: "https://www.goodreads.com/book/show/61439040-1984?from_search=true&from_srp=true&qid=2aAWZLF7kB&rank=1",
        textz: "https://www.amazon.ca/1984-George-Orwell/dp/B09PK6F3J8/ref=sr_1_1?crid=21FGPZD191ZQB&keywords=1984&qid=1707154250&sprefix=1984%2Caps%2C96&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",

    },
    {  
        combination: ["Psilocybin Tea", "Rabbit", "Tesla Model 3"],
        text: "DMT the Spirit Molecule by Rick Strassman, M.D.",
        textb: "19",
        texty: "https://www.goodreads.com/book/show/51654.DMT?ref=nav_sb_noss_l_10",
        textz: "https://www.amazon.ca/DMT-Molecule-Revolutionary-Near-Death-Experiences-ebook/dp/B003N3U3J4/ref=sr_1_2?crid=3UUYWQQ9MPOJY&keywords=dmt+the+sp&qid=1707154228&sprefix=dmt+the+sp%2Caps%2C92&sr=8-2",
   
    },
    {
        combination: ["Psilocybin Tea", "Dog", "1965 Shelby Cobra"],
    
       
        text: "The Fellowship of the Ring by J.R.R. Tolkien",
        textb: "20",
        texty: "https://www.goodreads.com/book/show/61215351-the-fellowship-of-the-ring?from_search=true&from_srp=true&qid=WyChHkKVqB&rank=1",
        textz: "https://www.amazon.ca/Fellowship-Ring-Lord-Rings-Book-ebook/dp/B002RI9THI/ref=sr_1_1?crid=103FY2OR86JDI&keywords=fellowship+of+the+ring&qid=1707154139&sprefix=felolow%2Caps%2C112&sr=8-1",
    },
    {
        combination: ["Psilocybin Tea", "Dog", "2024 Volvo S60"],
        text: "Dune by Frank Herbert",
        textb: "9",
        texty: "https://www.goodreads.com/book/show/44767458-dune?ref=nav_sb_ss_1_4",
        textz: "https://www.amazon.ca/Dune-Frank-Herbert-ebook/dp/B00B7NPRY8/ref=sr_1_2?crid=J389C360LCKY&keywords=dune&qid=1707154119&sprefix=dune%2Caps%2C137&sr=8-2",

    },
    {  
        combination: ["Psilocybin Tea", "Dog", "Tesla Model 3"],
        text: "The HitchHiker's Guilde to the Galaxy by Douglas Adams",
        textb: "25",
        texty: "https://www.goodreads.com/book/show/11.The_Hitchhiker_s_Guide_to_the_Galaxy?ref=nav_sb_noss_l_5",
        textz: "https://www.amazon.ca/Hitchhikers-Guide-Galaxy-Douglas-Adams-ebook/dp/B003GK2180/ref=sr_1_1?crid=2B7GI837URTSC&keywords=hitchhiker%27s+guide+to+the+galaxy&qid=1707152941&sprefix=hitch%2Caps%2C109&sr=8-1",
   
    },
    {
        combination: ["Cream Soda", "Sea Monkeys", "1965 Shelby Cobra"],
        text: "One Flew Over the Cuckoo's Nest by Ken Kesey",
        textb: "2",
        texty: "https://www.goodreads.com/book/show/332613.One_Flew_Over_the_Cuckoo_s_Nest?ref=nav_sb_ss_1_19",
        textz: "https://www.amazon.ca/One-Flew-Over-Cuckoos-Nest-ebook/dp/B000SWV680/ref=sr_1_1?crid=YF7BZH0A0XHL&keywords=one+flew+over+the+cuckoo%27s+nest+book&qid=1707152853&sprefix=one+flew+over+the+%2Caps%2C99&sr=8-1",
    },
    {
        combination: ["Cream Soda", "Sea Monkeys", "2024 Volvo S60"],
        text: "Catch 22 by Joeseph Heller",
        textb: "23",
        texty: "https://www.goodreads.com/book/show/168668.Catch_22?from_search=true&from_srp=true&qid=FmFfQhhyZf&rank=1",
        textz: "https://www.amazon.ca/Catch-22-50th-Anniversary-Joseph-Heller-ebook/dp/B0048WQDIE/ref=sr_1_1?crid=372HQE05IZDXC&keywords=catch+22&qid=1707152796&sprefix=catch+22%2Caps%2C111&sr=8-1",

    },
    {  
        combination: ["Cream Soda", "Sea Monkeys", "Tesla Model 3"],
        text: "A Visit From The Goon Squad by Jennifer Egan",
        textb: "3",
        texty: "https://www.goodreads.com/book/show/7331435-a-visit-from-the-goon-squad?ref=nav_sb_noss_l_27",
        textz: "https://www.amazon.ca/Visit-Goon-Squad-Jennifer-Egan-ebook/dp/B0036S4C6G/ref=sr_1_1?crid=6XV0NJBIB5BI&keywords=a+visit+from+the+goon+squad+by+jennifer+egan&qid=1707152776&sprefix=avisit+from+teh+%2Caps%2C94&sr=8-1",
   
    },
    {
        combination: ["Cream Soda", "Rabbit", "1965 Shelby Cobra"],
    
       
        text: "Slaughter House-Five by Kurt Vonnegut",
        textb: "8",
        texty: "https://www.goodreads.com/book/show/59737226-slaughter-house-five?ref=nav_sb_noss_l_16",
        textz: "https://www.amazon.ca/Slaughterhouse-Five-Novel-Modern-Library-Novels-ebook/dp/B000SEGHT6/ref=sr_1_1?crid=20COLX64UZJGS&keywords=slaughterhouse+five&qid=1707152695&sprefix=slaug%2Caps%2C91&sr=8-1",
    },
    {
        combination: ["Cream Soda", "Rabbit", "2024 Volvo S60"],
        text: "The Road by Cormac McCarthy",
        textb: "4",
        texty: "https://www.goodreads.com/book/show/6288.The_Road?from_search=true&from_srp=true&qid=jLs6tuUY5x&rank=1",
        textz: "https://www.amazon.ca/Road-Vintage-International-Cormac-McCarthy-ebook/dp/B000OI0G1Q/ref=sr_1_1?crid=3428620Y9NSJ2&keywords=the+road+cormac+mccarthy&qid=1707152669&sprefix=the+road%2Caps%2C118&sr=8-1",

    },
    {  
        combination: ["Cream Soda", "Rabbit", "Tesla Model 3"],
        text: "American Dirt by Jeanine Cummins",
        textb: "5",
        texty: "https://www.goodreads.com/book/show/45046527-american-dirt?from_search=true&from_srp=true&qid=i7WEpSb3UR&rank=1",
        textz: "https://www.amazon.ca/American-Dirt-Novel-Jeanine-Cummins-ebook/dp/B07QQLCZY1/ref=sr_1_1?crid=2N4OP0LVP66ZH&keywords=american+dirt&qid=1707152611&sprefix=american+dirt%2Caps%2C91&sr=8-1",
   
    },
    {
        combination: ["Cream Soda", "Dog", "1965 Shelby Cobra"],
    
       
        text: "The Complete Tales Of H.P. Lovecraft by H.P. Lovecraft",
        textb: "10",
        texty: "https://www.goodreads.com/book/show/43617306-the-complete-tales-of-h-p-lovecraft?ref=nav_sb_noss_l_24",
        textz: "https://www.amazon.ca/Complete-Tales-Lovecraft-Knickerbocker-Classics-ebook/dp/B08VN21DKR/ref=sr_1_1?crid=2P4CBXG6W1E10&keywords=Want+to+read+Buy+on+Amazon+CA+Rate+this+book+The+Complete+Tales+of+H.P.+Lovecraft&qid=1707152594&sprefix=want+to+read+buy+on+amazon+ca+rate+this+book+the+complete+tales+of+h+p+lovecraft%2Caps%2C85&sr=8-1",
    },
    {
        combination: ["Cream Soda", "Dog", "2024 Volvo S60"],
        text: "Bradbury Stories by Ray Bradbury",
        textb: "12",
        texty: "https://www.goodreads.com/book/show/9619.Bradbury_Stories?from_search=true&from_srp=true&qid=fcj0tCiu1h&rank=1",
        textz: "https://www.amazon.ca/Bradbury-Stories-Most-Celebrated-Tales/dp/0060544880/ref=sr_1_1?crid=3JTXVMU3UAB9I&keywords=bradbury+stories+100&qid=1707152527&sprefix=bradbury+stories+100%2Caps%2C89&sr=8-1",

    },
    {  
        combination: ["Cream Soda", "Dog", "Tesla Model 3"],
        text: "The Way of Kings by Brandon Sanderson",
        textb: "7",
        texty: "https://www.goodreads.com/book/show/7235533-the-way-of-kings?ref=nav_sb_noss_l_16",
        textz: "https://www.amazon.ca/Way-Kings-Stormlight-Archive-Book-ebook/dp/B003P2WO5E/ref=sr_1_1?crid=O7VKOWVZ4W54&keywords=The+Way+of+Kings&qid=1707152500&sprefix=the+way+of+kings%2Caps%2C82&sr=8-1",
   
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
    function ReplaceText(i){
        document.getElementById("i").innerText=i
       
    }
    function ReplacePage(p){
    document.getElementById("p").innerText=p
    }
    function Replacedis(d){
        document.getElementById("d").innerText=d
        }
        function Replacetit(t){
            document.getElementById("t").innerText=t
            }
        
    

    answerBlock.append(answerTitle)

    answerDisplay.append(answerBlock)
    ReplaceImage("./images/"+result.textb+".jpg");
    ReplaceGRLink(""+result.texty+"");
    ReplaceAZLink(""+result.textz+"");
    ReplaceText(""+result.texts+"");
    ReplacePage(""+result.page+"");
    Replacedis(""+result.dis+"");
    Replacetit(""+result.tit+"");
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



