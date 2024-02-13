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
        texts:"Mary Shelley",
        page:"260",
        dis:"This edition is the original 1818 text, which preserves the hard-hitting and politically charged aspects of Shelley's original writing, as well as her unflinching wit and strong female voice. This edition also includes a new introduction and suggestions for further reading by Author: and Shelley expert Charlotte Gordon, literary excerpts and reviews selected by Gordon and a chronology and essay by preeminent Shelley scholar Charles E. Robinson.",
        tit:"Frankenstein",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1818",
     
    },
    {
        combination: ["Sparkling Water", "Sea Monkeys", "2024 Volvo S60"],
        text: "The Heart of the Buddha's Teaching",
        textb: "22",
        texty: "https://www.goodreads.com/book/show/209574.The_Heart_of_the_Buddha_s_Teaching?ref=nav_sb_noss_l_25",
        textz: "https://www.amazon.ca/Heart-Buddhas-Teaching-Transforming-Liberation-ebook/dp/B011G3HD6I/ref=sr_1_1?crid=1NKPUXOQWWU33&keywords=The+Heart+of+the+Buddha%27s+Teaching%3A+Transforming+Suffering+into+Peace%2C+Joy%2C+and+Liberation&qid=1707308620&sprefix=the+heart+of+the+buddha%27s+teaching+transforming+suffering+into+peace%2C+joy%2C+and+liberation%2Caps%2C94&sr=8-1",
        texts:"Thich Nhat Hanh",
        page:"294",
        dis:"With poetry and clarity, Thich Nhat Hanh imparts comforting wisdom about the nature of suffering and its role in creating compassion, love, and joy – all qualities of enlightenment.  Thich Nhat Hanh shows us the connection between personal, inner peace, and peace on earth. —His Holiness the Dalai Lama",
        tit:"The Heart of the Buddha's Teaching",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1998",


    },
    {  
        combination: ["Sparkling Water", "Sea Monkeys", "Tesla Model 3"],
        text: "When Breath Becomes Air by Paul Kalanithi",
        textb: "17",
        texty: "https://www.goodreads.com/book/show/25899336-when-breath-becomes-air?ac=1&from_search=true&qid=RU87ZpuVqm&rank=1",
        textz: "https://www.amazon.ca/When-Breath-Becomes-Paul-Kalanithi-ebook/dp/B00XSSYR50/ref=sr_1_1?crid=2W14B1OBFHI4U&keywords=when+breath+becomes+air+by+paul+kalanithi&qid=1707154636&sprefix=when+bre%2Caps%2C96&sr=8-1",
        texts:"Paul Kalanithi",
        page:"208",
        dis:"For readers of Atul Gawande, Andrew Solomon, and Anne Lamott, a profoundly moving, exquisitely observed memoir by a young neurosurgeon faced with a terminal cancer diagnosis who attempts to answer the question 'What makes a life worth living?'At the age of thirty-six, on the verge of completing a decade's worth of training as a neurosurgeon, Paul Kalanithi was diagnosed with stage IV lung cancer. One day he was a doctor treating the dying, and the next he was a patient struggling to live. And just like that, the future he and his wife had imagined evaporated. When Breath Becomes Air chronicles Kalanithi's transformation from a naïve medical student possessed, as he wrote, by the question of what, given that all organisms die, makes a virtuous and meaningful life into a neurosurgeon at Stanford working in the brain, the most critical place for human identity, and finally into a patient and new father confronting his own mortality.  What makes life worth living in the face of death? What do you do when the future, no longer a ladder toward your goals in life, flattens out into a perpetual present? What does it mean to have a child, to nurture a new life as another fades away? These are some of the questions Kalanithi wrestles with in this profoundly moving, exquisitely observed memoir.",
        tit:"When Breath Becomes Air",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"2016",
   
    },
    {
        combination: ["Sparkling Water", "Rabbit", "1965 Shelby Cobra"],
    
       
        text: "On The Road by Jack Kerouac",
        textb: "14",
        texty: "https://www.goodreads.com/book/show/70401.On_the_Road?from_search=true&from_srp=true&qid=bOvhHw7ZOd&rank=1",
        textz: "https://www.amazon.ca/Road-Jack-Kerouac-ebook/dp/B0893QYWX8/ref=sr_1_1?crid=1UFRH6PFDNGRD&keywords=on+the+road&qid=1707154622&sprefix=on+the+road%2Caps%2C98&sr=8-1",
        texts:"Jack Kerouac",
        page:"307",
        dis:"A quintessential novel of America & the Beat Generation On the Road chronicles Jack Kerouac's years traveling the N. American continent with his friend Neal Cassady, a sideburned hero of the snowy West. As Sal Paradise & Dean Moriarty, the two roam the country in a quest for self-knowledge & experience. Kerouac's love of America, compassion for humanity & sense of language as jazz combine to make On the Road an inspirational work of lasting importance. This classic novel of freedom & longing defined what it meant to be Beat & has inspired every generation since its initial publication.        ",
        tit:"On the Road",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1957",
    },
    {
        combination: ["Sparkling Water", "Rabbit", "2024 Volvo S60"],
        text: "One Hundred Years of Solitude by Gabriel Garcia Marquez",
        textb: "16",
        texty: "https://www.goodreads.com/book/show/320.One_Hundred_Years_of_Solitude?ref=nav_sb_noss_l_8",
        textz: "https://www.amazon.ca/Hundred-Solitude-Gabriel-Garc%C3%ADa-M%C3%A1rquez-ebook/dp/B0BFK4THKQ/ref=sr_1_1?crid=2RYSMEFZLOJVJ&keywords=one+hundred+years+of+solitude&qid=1707154567&sprefix=one+hun%2Caps%2C99&sr=8-1",
        page:"417",
        dis:"The brilliant, bestselling, landmark novel that tells the story of the Buendia family, and chronicles the irreconcilable conflict between the desire for solitude and the need for love—in rich, imaginative prose that has come to define an entire genre known as magical realism.",
        tit:"One Hundred Years of Solitude",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1967",
    },
    {  
        combination: ["Sparkling Water", "Rabbit", "Tesla Model 3"],
        text: "Never Finished by David Goggins",
        textb: "18",
        texty: "https://www.goodreads.com/book/show/63079845-never-finished?from_search=true&from_srp=true&qid=yYpZQ02HUO&rank=1",
        textz: "https://www.amazon.ca/Never-Finished-Unshackle-Your-Within-ebook/dp/B0BJMN7RMV/ref=sr_1_1?crid=2IU07Y5HFX9RN&keywords=never+finished+david+goggins+book&qid=1707154545&sprefix=never+fin%2Caps%2C88&sr=8-1",
        texts:"David Goggins",
        page:"312",
        dis:"Can't Hurt Me, David Goggins' smash hit memoir, demonstrated how much untapped ability we all have but was merely an introduction to the power of the mind. In Never Finished, Goggins takes you inside his Mental Lab, where he developed the philosophy, psychology, and strategies that enabled him to learn that what he thought was his limit was only his beginning and that the quest for greatness is unending. The stories and lessons in this raw, revealing, unflinching memoir offer the reader a blueprint they can use to climb from the bottom of the barrel into a whole new stratosphere that once seemed unattainable. Whether you feel off-course in life, are looking to maximize your potential or drain your soul to break through your so-called glass ceiling, this is the only book you will ever need.",
        tit:"Never Finished",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"2022",
    },
    {
        combination: ["Sparkling Water", "Dog", "1965 Shelby Cobra"],
    
       
        text: "Norse Mythology by Neil Gaiman",
        textb: "21",
        texty: "https://www.goodreads.com/book/show/37903770-norse-mythology?ref=nav_sb_noss_l_10",
        textz: "https://www.amazon.ca/Norse-Mythology-Neil-Gaiman-ebook/dp/B01HQA6EOC/ref=sr_1_1?crid=362ZWSWF26M5K&keywords=norse+mythology+neil+gaiman&qid=1707154482&sprefix=norse%2Caps%2C96&sr=8-1",
        texts:"Neil Gaiman",
        page:"301",
        dis:"Neil Gaiman, long inspired by ancient mythology in creating the fantastical realms of his fiction, presents a bravura rendition of the Norse gods and their world from their origin though their upheaval in Ragnarok.        ",
        tit:"Norse Mythology",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"2017",
    },
    {
        combination: ["Sparkling Water", "Dog", "2024 Volvo S60"],
        text: "Game of Thrones by George R.R. Martin",
        textb: "6",
        texty: "https://www.goodreads.com/book/show/13496.A_Game_of_Thrones?from_search=true&from_srp=true&qid=9NQm1APFK0&rank=1",
        textz: "https://www.amazon.ca/Game-Thrones-Song-Fire-Book-ebook/dp/B000QCS8TW/ref=sr_1_1?crid=5X6EJM3UR7DY&keywords=game+of+thrones+book+1&qid=1707154458&sprefix=game+of+thrones+%2Caps%2C106&sr=8-1",
        texts:"George R.R. Martin",
        page:"835",
        dis:"Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom’s protective Wall. To the south, the king’s powers are failing—his most trusted adviser dead under mysterious circumstances and his enemies emerging from the shadows of the throne. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the frozen land they were born to. Now Lord Eddard Stark is reluctantly summoned to serve as the king’s new Hand, an appointment that threatens to sunder not only his family but the kingdom itself. Sweeping from a harsh land of cold to a summertime kingdom of epicurean plenty, A Game of Thrones tells a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens. Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; a child is lost in the twilight between life and death; and a determined woman undertakes a treacherous journey to protect all she holds dear. Amid plots and counter-plots, tragedy and betrayal, victory and terror, allies and enemies, the fate of the Starks hangs perilously in the balance, as each side endeavors to win that deadliest of conflicts: the game of thrones.",
        tit:"Game of Thrones",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1996",
    },
    {  
        combination: ["Sparkling Water", "Dog", "Tesla Model 3"],
        text: "Mythos by Stephen Fry",
        textb: "15",
        texty: "https://www.goodreads.com/book/show/35074096-mythos?ref=nav_sb_noss_l_6",
        textz: "https://www.amazon.ca/Mythos-Ancient-Mythology-Telling-Classical-ebook/dp/B07SLLYGF6/ref=sr_1_1?crid=3RXWB61658BIZ&keywords=mythos+stephen+fry&qid=1707846675&sprefix=mythos%2Caps%2C169&sr=8-1",
        texts:"Stephen Fry",
        page:"416",
        dis:"Mythos is a modern collection of Greek myths, stylishly retold by legendary writer, actor, and comedian Stephen Fry. Fry transforms the adventures of Zeus and the Olympians into emotionally resonant and deeply funny stories, without losing any of their original wonder. This stunning book features classical artwork inspired by the myths, as well as learned notes from the author. Each adventure is infused with Fry's distinctive wit, voice, and writing style. Connoisseurs of the Greek myths will appreciate this fresh-yet-reverential interpretation, while newcomers will feel welcome. Retellings brim with humor and emotion and offer rich cultural context Celebrating the thrills, grandeur, and unabashed fun of the Greek myths, Mythos breathes life into ancient tales—from Pandora's box to Prometheus's fire. This gorgeous volume invites you to explore a captivating world with the brilliant storyteller Stephen Fry as your guide.",
        tit:"Mythos: The Greek Myths Retold",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"2017",
    },
     {
        combination: ["Psilocybin Tea", "Sea Monkeys", "1965 Shelby Cobra"],
        text: "Fear and Loathing in Las Vegas by Hunter S. Thompson",
        textb: "1",
        texty: "https://www.goodreads.com/book/show/7745.Fear_and_Loathing_in_Las_Vegas",
        textz: "https://www.amazon.ca/Fear-Loathing-Las-Vegas-American-ebook/dp/B003WUYQG4/ref=sr_1_1?crid=2VAO23V81SF1J&keywords=fear+and+loathing+in+las+vegas+book&qid=1707075450&sprefix=fear+and+loa%2Caps%2C103&sr=8-1",
        texts:"Hunter S. Thompson",
        page:"204",
        dis:"Fear and Loathing in Las Vegas is the best chronicle of drug-soaked, addle-brained, rollicking good times ever committed to the printed page. It is also the tale of a long weekend road trip that has gone down in the annals of American pop culture as one of the strangest journeys ever undertaken.",
        tit:"Fear and Loathing in Las Vegas",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1971",
     
    },
    {
        combination: ["Psilocybin Tea", "Sea Monkeys", "2024 Volvo S60"],
        text: "ALice Adventures in Wonderland / Through the Looking-Glass",
        textb: "24",
        texty: "https://www.goodreads.com/book/show/24213.Alice_s_Adventures_in_Wonderland_Through_the_Looking_Glass?ac=1&from_search=true&qid=qFly9NnVug&rank=1",
        textz: "https://www.amazon.ca/Alice-Wonderland-Lewis-Carroll/dp/184022780X/ref=sr_1_6?crid=2ZSYBUFL7XRWX&keywords=alice+in+wonderland+book&qid=1707846360&sprefix=alice+in+wonder+land+book%2Caps%2C107&sr=8-6",
        texts:"Lewis Carroll",
        page:"239",
        dis:"When Alice sees a white rabbit take a watch out of its waistcoat pocket she decides to follow it, and a sequence of most unusual events is set in motion. This mini book contains the entire topsy-turvy stories of Alice's Adventures in Wonderland and Through the Looking-Glass, accompanied by practical notes and Martina Pelouso's memorable full-colour illustrations.",
        tit:"Alice Adventures in Wonderland",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1871",
    },
    {  
        combination: ["Psilocybin Tea", "Sea Monkeys", "Tesla Model 3"],
        text: "Brave New World by Aldous Huxley",
        textb: "27",
        texty: "https://www.goodreads.com/book/show/5129.Brave_New_World?ref=nav_sb_noss_l_5",
        textz: "https://www.amazon.ca/Brave-New-World-Aldous-Huxley/dp/030735654X/ref=sr_1_1?crid=2EPL55KRZVIFE&keywords=brave+new+world+aldous+huxley&qid=1707154329&sprefix=brave+new+%2Caps%2C92&sr=8-1",
        texts:"Aldous Huxley",
        page:"268",
        dis:"Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an Author:itarian ruling order–all at the cost of our freedom, full humanity, and perhaps also our souls. “A genius [who] who spent his life decrying the onward march of the Machine” (The New Yorker), Huxley was a man of incomparable talents: equally an artist, a spiritual seeker, and one of history’s keenest observers of human nature and civilization. Brave New World, his masterpiece, has enthralled and terrified millions of readers, and retains its urgent relevance to this day as both a warning to be heeded as we head into tomorrow and as thought-provoking, satisfying work of literature. Written in the shadow of the rise of fascism during the 1930s, Brave New Worldd likewise speaks to a 21st-century world dominated by mass-entertainment, technology, medicine and pharmaceuticals, the arts of persuasion, and the hidden influence of elites.",
        tit:"Brave New World",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1932",
    },
    {
        combination: ["Psilocybin Tea", "Rabbit", "1965 Shelby Cobra"],
    
       
        text: "The Time Machine by H.G. Wells",
        textb: "11",
        texty: "https://www.goodreads.com/book/show/2493.The_Time_Machine?from_search=true&from_srp=true&qid=i0CW8UaZbP&rank=1",
        textz: "https://www.amazon.ca/Time-Machine-H-G-Wells/dp/1659539153/ref=sr_1_4?crid=234C7NL3HBTIY&keywords=the+time+machine+by+h.+g.+wells&qid=1707154301&sprefix=the+time+machine%2Caps%2C97&sr=8-4",
        texts:"H.G. Wells",
        page:"118",
        dis:"So begins the Time Traveller’s astonishing firsthand account of his journey 800,000 years beyond his own era—and the story that launched H.G. Wells’s successful career and earned him his reputation as the father of science fiction. With a speculative leap that still fires the imagination, Wells sends his brave explorer to face a future burdened with our greatest hopes...and our darkest fears. A pull of the Time Machine’s lever propels him to the age of a slowly dying Earth.  There he discovers two bizarre races—the ethereal Eloi and the subterranean Morlocks—who not only symbolize the duality of human nature, but offer a terrifying portrait of the men of tomorrow as well.  Published in 1895, this masterpiece of invention captivated readers on the threshold of a new century. Thanks to Wells’s expert storytelling and provocative insight, The Time Machine will continue to enthrall readers for generations to come.",
        tit:"The Time Machine",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1895",
    },
    {
        combination: ["Psilocybin Tea", "Rabbit", "2024 Volvo S60"],
        text: "1984 by George Orwell",
        textb: "26",
        texty: "https://www.goodreads.com/book/show/61439040-1984?from_search=true&from_srp=true&qid=2aAWZLF7kB&rank=1",
        textz: "https://www.amazon.ca/1984-George-Orwell/dp/B09PK6F3J8/ref=sr_1_1?crid=21FGPZD191ZQB&keywords=1984&qid=1707154250&sprefix=1984%2Caps%2C96&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
        texts:"George Orwell",
        page:"368",
        dis:"A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching Thought Police Big Brother Orwellian These words have entered our vocabulary because of George Orwell s classic dystopian novel 1984 The story of one man s nightmare odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality With a foreword by Thomas Pynchon With a foreword by Thomas Pynchon A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching View our feature on George Orwell s 1984 Thought Police Big Brother Orwellian These words have entered our vocabulary because of George Orwell s classic dystopian novel 1984 The story of one man s nightmare odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality This beautiful paperback edition features deckled edges and french flaps a perfect gift for any occasion",
        tit:"1984",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1949",
    },
    {  
        combination: ["Psilocybin Tea", "Rabbit", "Tesla Model 3"],
        text: "DMT the Spirit Molecule by Rick Strassman, M.D.",
        textb: "19",
        texty: "https://www.goodreads.com/book/show/51654.DMT?ref=nav_sb_noss_l_10",
        textz: "https://www.amazon.ca/DMT-Molecule-Revolutionary-Near-Death-Experiences-ebook/dp/B003N3U3J4/ref=sr_1_2?crid=3UUYWQQ9MPOJY&keywords=dmt+the+sp&qid=1707154228&sprefix=dmt+the+sp%2Caps%2C92&sr=8-2",
        texts:"Rick Strassman, M.D.",
        page:"363",
        dis:"A Doctor's Revolutionary Research into the Biology of Near-Death & Mystical Experiences. A clinical psychiatrist explores the effects of DMT: A behind-the-scenes look at the cutting edge of psychedelic research. From 1990 to 1995 Dr. Rick Strassman conducted US DEA-approved clinical research at the University of New Mexico in which he injected 60 volunteers with DMT, one of the most powerful psychedelics known. His detailed account of those sessions is an inquiry into the nature of the human mind and the therapeutic potential of psychedelics. DMT, a plant-derived chemical that is also manufactured by the human brain, consistently produced near-death and mystical experiences. Many volunteers reported convincing encounters with intelligent nonhuman presences, especially aliens. Nearly all felt that the sessions were among the most profound experiences of their lives. Strassman's research connects DMT with the pineal gland, considered by Hindus to be the site of the seventh chakra and by René Descartes to be the seat of the soul. DMT: The Spirit Molecule makes the case that DMT, naturally released by the pineal gland, facilitates the soul's movement in and out of the body and is an integral part of the birth and death experiences, as well as the highest states of meditation and even sexual transcendence. Strassman also believes that alien abduction experiences are brought on by accidental releases of DMT. If used wisely, DMT could trigger a period of remarkable progress in the scientific exploration of the most mystical regions of the human mind and soul.",
        tit:"Dmt the Spitit Molecule",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"2000",
    },
    {
        combination: ["Psilocybin Tea", "Dog", "1965 Shelby Cobra"],
    
       
        text: "The Fellowship of the Ring by J.R.R. Tolkien",
        textb: "20",
        texty: "https://www.goodreads.com/book/show/61215351-the-fellowship-of-the-ring?from_search=true&from_srp=true&qid=WyChHkKVqB&rank=1",
        textz: "https://www.amazon.ca/Fellowship-Ring-Lord-Rings-Book-ebook/dp/B002RI9THI/ref=sr_1_1?crid=103FY2OR86JDI&keywords=fellowship+of+the+ring&qid=1707154139&sprefix=felolow%2Caps%2C112&sr=8-1",
        texts:"J.R.R. Tolkien",
        page:"432",
        dis:"One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.",
        tit:"The Fellowship of the Ring",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1954",
    },
    {
        combination: ["Psilocybin Tea", "Dog", "2024 Volvo S60"],
        text: "Dune by Frank Herbert",
        textb: "9",
        texty: "https://www.goodreads.com/book/show/44767458-dune?ref=nav_sb_ss_1_4",
        textz: "https://www.amazon.ca/Dune-Frank-Herbert-ebook/dp/B00B7NPRY8/ref=sr_1_2?crid=J389C360LCKY&keywords=dune&qid=1707154119&sprefix=dune%2Caps%2C137&sr=8-2",
        texts:"Frank Herbert",
        page:"658",
        dis:"Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream.",
        tit:"Dune",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1965",
    },
    {  
        combination: ["Psilocybin Tea", "Dog", "Tesla Model 3"],
        text: "The HitchHiker's Guilde to the Galaxy by Douglas Adams",
        textb: "25",
        texty: "https://www.goodreads.com/book/show/11.The_Hitchhiker_s_Guide_to_the_Galaxy?ref=nav_sb_noss_l_5",
        textz: "https://www.amazon.ca/Hitchhikers-Guide-Galaxy-Douglas-Adams-ebook/dp/B003GK2180/ref=sr_1_1?crid=2B7GI837URTSC&keywords=hitchhiker%27s+guide+to+the+galaxy&qid=1707152941&sprefix=hitch%2Caps%2C109&sr=8-1",
        texts:"Douglas Adams",
        page:"216",
        dis:"Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor. Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide (A towel is about the most massively useful thing an interstellar hitchhiker can have) and a galaxy-full of fellow travelers: Zaphod Beeblebrox--the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years. Where are these pens? Why are we born? Why do we die? Why do we spend so much time between wearing digital watches? For all the answers stick your thumb to the stars. And don't forget to bring a towel!",
        tit:"The HitchHikers's Guilde to the Galaxy",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1979",
    },
    {
        combination: ["Cream Soda", "Sea Monkeys", "1965 Shelby Cobra"],
        text: "One Flew Over the Cuckoo's Nest by Ken Kesey",
        textb: "2",
        texty: "https://www.goodreads.com/book/show/332613.One_Flew_Over_the_Cuckoo_s_Nest?ref=nav_sb_ss_1_19",
        textz: "https://www.amazon.ca/One-Flew-Over-Cuckoos-Nest-ebook/dp/B000SWV680/ref=sr_1_1?crid=YF7BZH0A0XHL&keywords=one+flew+over+the+cuckoo%27s+nest+book&qid=1707152853&sprefix=one+flew+over+the+%2Caps%2C99&sr=8-1",
        texts:"Ken Kesy",
        page:"325",
        dis:"Tyrannical Nurse Ratched rules her ward in an Oregon State mental hospital with a strict and unbending routine, unopposed by her patients, who remain cowed by mind-numbing medication and the threat of electric shock therapy. But her regime is disrupted by the arrival of McMurphy – the swaggering, fun-loving trickster with a devilish grin who resolves to oppose her rules on behalf of his fellow inmates. His struggle is seen through the eyes of Chief Bromden, a seemingly mute half-Indian patient who understands McMurphy's heroic attempt to do battle with the powers that keep them imprisoned. Ken Kesey's extraordinary first novel is an exuberant, ribald and devastatingly honest portrayal of the boundaries between sanity and madness.        ",
        tit:"One Flew Over the Cuckoo's Nest",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1962",
    },
    {
        combination: ["Cream Soda", "Sea Monkeys", "2024 Volvo S60"],
        text: "Catch 22 by Joeseph Heller",
        textb: "23",
        texty: "https://www.goodreads.com/book/show/168668.Catch_22?from_search=true&from_srp=true&qid=FmFfQhhyZf&rank=1",
        textz: "https://www.amazon.ca/Catch-22-50th-Anniversary-Joseph-Heller-ebook/dp/B0048WQDIE/ref=sr_1_1?crid=372HQE05IZDXC&keywords=catch+22&qid=1707152796&sprefix=catch+22%2Caps%2C111&sr=8-1",
        texts:"Joeseph Heller",
        page:"453",
        dis:"Fifty years after its original publication, Catch-22 remains a cornerstone of American literature and one of the funniest—and most celebrated—books of all time. In recent years it has been named to best novels lists by Time, Newsweek, the Modern Library, and the London Observer. Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved. This fiftieth-anniversary edition commemorates Joseph Heller’s masterpiece with a new introduction by Christopher Buckley; a wealth of critical essays and reviews by Norman Mailer, Alfred Kazin, Anthony Burgess, and others; rare papers and photos from Joseph Heller’s personal archive; and much more. Here, at last, is the definitive edition of a classic of world literature.",
        tit:"Catch 22",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"1961",
    },
    {  
        combination: ["Cream Soda", "Sea Monkeys", "Tesla Model 3"],
        text: "A Visit From The Goon Squad by Jennifer Egan",
        textb: "3",
        texty: "https://www.goodreads.com/book/show/7331435-a-visit-from-the-goon-squad?ref=nav_sb_noss_l_27",
        textz: "https://www.amazon.ca/Visit-Goon-Squad-Jennifer-Egan-ebook/dp/B0036S4C6G/ref=sr_1_1?crid=6XV0NJBIB5BI&keywords=a+visit+from+the+goon+squad+by+jennifer+egan&qid=1707152776&sprefix=avisit+from+teh+%2Caps%2C94&sr=8-1",
        texts:"Jennifer Egan",
        page:"274",
        dis:"Bennie is an aging former punk rocker and record executive. Sasha is the passionate, troubled young woman he employs. Here Jennifer Egan brilliantly reveals their pasts, along with the inner lives of a host of other characters whose paths intersect with theirs. ",
        tit:"A Visit From the Goon Squad",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"2010",
    },
    {
        combination: ["Cream Soda", "Rabbit", "1965 Shelby Cobra"],
    
       
        text: "Slaughter House-Five by Kurt Vonnegut",
        textb: "8",
        texty: "https://www.goodreads.com/book/show/59737226-slaughter-house-five?ref=nav_sb_noss_l_16",
        textz: "https://www.amazon.ca/Slaughterhouse-Five-Novel-Modern-Library-Novels-ebook/dp/B000SEGHT6/ref=sr_1_1?crid=20COLX64UZJGS&keywords=slaughterhouse+five&qid=1707152695&sprefix=slaug%2Caps%2C91&sr=8-1",
        texts:"Kurt Vonnegut",
        page:"192",
        dis:"With Kurt Vonnegut's seminal anti-war story, Slaughterhouse-Five, Eisner Award-winning writer Ryan North (Unbeatable Squirrel Girl) and Eisner Award-nominated artist Albert Monteys (Universe!) translate a literary classic into comic book form in the tradition of A Wrinkle in Time and Fight Club 2. Billy Pilgrim has read Kilgore Trout and opened a successful optometry business. Billy Pilgrim has built a loving family and witnessed the firebombing of Dresden. Billy Pilgrim has traveled to the planet Tralfamadore and met Kurt Vonnegut. Billy Pilgrim has come unstuck in time. Slaughterhouse-Five is at once a farcical look at the horror and tragedy of war where children are placed on the frontlines and die (so it goes), and a moving examination of what it means to be a fallible human.",
        tit:"Slaughter House-Five",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"2020",
    },
    {
        combination: ["Cream Soda", "Rabbit", "2024 Volvo S60"],
        text: "The Road by Cormac McCarthy",
        textb: "4",
        texty: "https://www.goodreads.com/book/show/6288.The_Road?from_search=true&from_srp=true&qid=jLs6tuUY5x&rank=1",
        textz: "https://www.amazon.ca/Road-Vintage-International-Cormac-McCarthy-ebook/dp/B000OI0G1Q/ref=sr_1_1?crid=3428620Y9NSJ2&keywords=the+road+cormac+mccarthy&qid=1707152669&sprefix=the+road%2Caps%2C118&sr=8-1",
        texts:"Cormac McCarthy",
        page:"241",
        dis:"A searing, postapocalyptic novel destined to become Cormac McCarthy’s masterpiece. A father and his son walk alone through burned America. Nothing moves in the ravaged landscape save the ash on the wind. It is cold enough to crack stones, and when the snow falls it is gray. The sky is dark. Their destination is the coast, although they don’t know what, if anything, awaits them there. They have nothing; just a pistol to defend themselves against the lawless bands that stalk the road, the clothes they are wearing, a cart of scavenged food—and each other. The Road is the profoundly moving story of a journey. It boldly imagines a future in which no hope remains, but in which the father and his son, each the other’s world entire, are sustained by love. Awesome in the totality of its vision, it is an unflinching meditation on the worst and the best that we are capable of: ultimate destructiveness, desperate tenacity, and the tenderness that keeps two people alive in the face of total devastation.",
        tit:"The Road",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"2006",
    },
    {  
        combination: ["Cream Soda", "Rabbit", "Tesla Model 3"],
        text: "American Dirt by Jeanine Cummins",
        textb: "5",
        texty: "https://www.goodreads.com/book/show/45046527-american-dirt?from_search=true&from_srp=true&qid=i7WEpSb3UR&rank=1",
        textz: "https://www.amazon.ca/American-Dirt-Novel-Jeanine-Cummins-ebook/dp/B07QQLCZY1/ref=sr_1_1?crid=2N4OP0LVP66ZH&keywords=american+dirt&qid=1707152611&sprefix=american+dirt%2Caps%2C91&sr=8-1",
        texts:"Jeanine Cummins",
        page:"459",
        dis:"Jeanine Cummins's American Dirt, the #1 New York Times bestseller and Oprah Book Club pick that has sold over two million copies, is finally available in paperback. Lydia lives in Acapulco. She has a son, Luca, the love of her life, and a wonderful husband who is a journalist. And while cracks are beginning to show in Acapulco because of the cartels, Lydia’s life is, by and large, fairly comfortable. But after her husband’s tell-all profile of the newest drug lord is published, none of their lives will ever be the same. Forced to flee, Lydia and Luca find themselves joining the countless people trying to reach the United States. Lydia soon sees that everyone is running from something. But what exactly are they running to?",
        tit:"American Dirt",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"2020",
    },
    {
        combination: ["Cream Soda", "Dog", "1965 Shelby Cobra"],
    
       
        text: "The Complete Tales Of H.P. Lovecraft by H.P. Lovecraft",
        textb: "10",
        texty: "https://www.goodreads.com/book/show/43617306-the-complete-tales-of-h-p-lovecraft?ref=nav_sb_noss_l_24",
        textz: "https://www.amazon.ca/Complete-Tales-Lovecraft-Knickerbocker-Classics-ebook/dp/B08VN21DKR/ref=sr_1_1?crid=2P4CBXG6W1E10&keywords=Want+to+read+Buy+on+Amazon+CA+Rate+this+book+The+Complete+Tales+of+H.P.+Lovecraft&qid=1707152594&sprefix=want+to+read+buy+on+amazon+ca+rate+this+book+the+complete+tales+of+h+p+lovecraft%2Caps%2C85&sr=8-1",
        texts:"H.P. Lovecraft",
        page:"1112",
        dis:"A must-have classic that every Lovecraft fan and collector will love. From the sumptuously designed Timeless Classics series, The Complete Tales of H.P. Lovecraft collects the Author:'s novel, four novellas, and fifty-three short stories. Written between the years 1917 and 1935, this collection features Lovecraft's trademark fantastical creatures and supernatural thrills , as well as many horrific and cautionary science-fiction themes that have influenced some of today's writers and filmmakers, including Stephen King, Alan Moore, F. Paul Wilson, Guillermo del Toro, and Neil Gaiman. Included in this volume are The Case of Charles Dexter Ward , The Call of Cthulhu, The Dream-Quest of Unknown Kadath, At the Mountains of Madness, The Shadow Over Innsmouth, The Colour Out of Space, The Dunwich Horror, and many more hair-raising tales. The Timeless Classics series from Rock Point brings together the works of classic Author:s from around the world. Complete and unabridged, these elegantly designed gift editions feature luxe, patterned endpapers, ribbon markers, and foil and deboss details on vibrantly colored cases. Celebrate these beloved works of literature as true standouts in your personal library collection. Other titles in the series The Complete Grimm’s Fairy Tales , The Complete Novels of Jane Austen , The Complete Sherlock Holmes , The Complete Tales & Poems of Edgar Allan Poe , and The Complete Works of William Shakespeare .",
        tit:"The Complete Tales of H.P. Lovecraft",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"2010",
    },
    {
        combination: ["Cream Soda", "Dog", "2024 Volvo S60"],
        text: "Bradbury Stories by Ray Bradbury",
        textb: "12",
        texty: "https://www.goodreads.com/book/show/9619.Bradbury_Stories?from_search=true&from_srp=true&qid=fcj0tCiu1h&rank=1",
        textz: "https://www.amazon.ca/Bradbury-Stories-Most-Celebrated-Tales/dp/0060544880/ref=sr_1_1?crid=3JTXVMU3UAB9I&keywords=bradbury+stories+100&qid=1707152527&sprefix=bradbury+stories+100%2Caps%2C89&sr=8-1",
        texts:"Ray Bradbury",
        page:"912",
        dis:"For more than sixty years, the imagination of Ray Bradbury has opened doors into remarkable places, ushering us across unexplored territories of the heart and mind while leading us inexorably toward a profound understanding of ourselves and the universe we inhabit. In this landmark volume, America's preeminent storyteller offers us one hundred treasures from a lifetime of words and ideas. The stories within these pages were chosen by Bradbury himself, and span a career that blossomed in the pulp magazines of the early 1940s and continues to flourish in the new millennium. Here are representatives of the legendary Author:'s finest works of short fiction, including many that have not been republished for decades, all forever fresh and vital, evocative and immensely entertaining.",
        tit:"Bradbury Stories: 100 of His Most Celebrated Tales",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"2003",
    },
    {  
        combination: ["Cream Soda", "Dog", "Tesla Model 3"],
        text: "The Way of Kings by Brandon Sanderson",
        textb: "7",
        texty: "https://www.goodreads.com/book/show/7235533-the-way-of-kings?ref=nav_sb_noss_l_16",
        textz: "https://www.amazon.ca/Way-Kings-Stormlight-Archive-Book-ebook/dp/B003P2WO5E/ref=sr_1_1?crid=O7VKOWVZ4W54&keywords=The+Way+of+Kings&qid=1707152500&sprefix=the+way+of+kings%2Caps%2C82&sr=8-1",
        texts:"Brandon Sanderson",
        page:"1007",
        dis:"From #1 New York Times bestselling Author: Brandon Sanderson, The Way of Kings, book one of The Stormlight Archive begins an incredible new saga of epic proportion. Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter. The result of over ten years of planning, writing, and world-building, The Way of Kings is but the opening movement of the Stormlight Archive, a bold masterpiece in the making.",
        tit:"The Way of Kings",
        texts1:"Author:",
        page1:"Page Count:",
        dis1:"Description:",
        tit1:"Title:",
        year:"Year:",
        year1:"2010",
    },
]
// need to have a default answer to compensate for lack of combination data

const unansweredQuestions = []
const chosenAnswers = []
const populateQuestions = () => {
    questions.forEach((question, index) => {
        const titleBlock = document.createElement('div');
        titleBlock.id = question.id;
        titleBlock.classList.add('title-block');

        // Add class based on index
        titleBlock.classList.add(`title-block-${index}`);

        const titleHeading = document.createElement('h2');
        titleHeading.textContent = question.text;
        titleBlock.append(titleHeading);

        // Add event listeners for mouseover and mouseout
        titleBlock.addEventListener('mouseover', () => highlightBlocks(question.id, true));
        titleBlock.addEventListener('mouseout', () => highlightBlocks(question.id, false));

        questionDisplay.append(titleBlock);

        const answersBlock = document.createElement('div');
        answersBlock.id = question.id + "-questions";
        
        // Add class based on index for answer-options
        answersBlock.classList.add(`answer-options-${index}`);
        
        answersBlock.classList.add('answer-options');

        unansweredQuestions.push(question.id);

        question.answers.forEach((answer, answerIndex) => { // Added answerIndex parameter
            const answerBlock = document.createElement('div');
            answerBlock.classList.add('answer-block');

            // Add class based on index and answerIndex
            answerBlock.classList.add(`answer-block-${index}-${answerIndex}`);

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
        //videoElement.style.display = 'block'; // Show the video element
        videoElement.style.display = 'none'; // dont show the video element

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
    
   // answerTitle.textContent = result.text
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
            function ReplaceTexti(ii){
                document.getElementById("i.1").innerText=ii
               
            }
            function ReplacePagei(pp){
            document.getElementById("p.1").innerText=pp
            }
            function Replacedisi(dd){
                document.getElementById("d.1").innerText=dd
                }
                function Replacetiti(tt){
                    document.getElementById("t.1").innerText=tt
                    }
                    function Replaceyear(yx){
                        document.getElementById("yx").innerText=yx
                        }
                        function Replaceyeari(yyx){
                            document.getElementById("y.1").innerText=yyx
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
    ReplaceTexti(""+result.texts1+"");
    ReplacePagei(""+result.page1+"");
    Replacedisi(""+result.dis1+"");
    Replacetiti(""+result.tit1+"");
    Replaceyear(""+result.year+"");
    Replaceyeari(""+result.year1+"");
    
    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

  // Trigger height change of additional result block
    const additionalResultBlock = document.getElementById('additional-result-block');
    additionalResultBlock.style.height = '5vw';
    additionalResultBlock.style.overflow = 'hidden'; // Hide content when height is 0

}


function disableQuestionBlock(questionId, chosenAnswer) {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.innerText !== chosenAnswer) {
            block.style.opacity = "10%"
          

        }
    })
}
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



