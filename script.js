// Questions will be asked
const Questions = [{
        id: 0,
        q: "Who founded the umbrella corp",
        a: [{ text: "william birkin", isCorrect: false },
            { text: "Albert Wesker", isCorrect: false },
            { text: "Ozwell Spencer", isCorrect: true },
            { text: "James marcus", isCorrect: false }
        ]
  
    },
    {
        id: 1,
        q: "What provokes Claire into Racoon City in Resident Evil 2",
        a: [{ text: "She's infected", isCorrect: false, isSelected: false },
            { text: "She's just visiting", isCorrect: false },
            { text: "She is writing a story", isCorrect: false },
            { text: "Her brother is missing", isCorrect: true }
        ]
  
    },
    {
        id: 2,
        q: "Was Chris ever found in Resident Evil 2",
        a: [{ text: "He's rescuing survivors", isCorrect: false },
            { text: "Yes", isCorrect: false },
            { text: "No", isCorrect: true },
            { text: "He's hiding", isCorrect: false }
        ]
  
    },
    {
        id: 3,
        q: "What is Leon's last name",
        a: [{ text: "Burton", isCorrect: false },
            { text: "Redfield", isCorrect: false },
            { text: "Kennedy", isCorrect: true },
            { text: "Valentine", isCorrect: false }
        ]
  
    },
    {
        id: 4,
        q: "What is the weapon of choice when defeating a tyrant",
        a: [{ text: "Magnum", isCorrect: false },
            { text: "Shotgun", isCorrect: false },
            { text: "Rocket Launcher", isCorrect: true },
            { text: "Handgun", isCorrect: false }
        ]
  
    }
  
]
  
// Set start
var start = true;
  
// Iterate
function iterate(id) {
  
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    // Getting the question
    const question = document.getElementById("question");
  
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
  
  
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
  
    var selected = "";
  
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
  
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })
  
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
  
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}
  
if (start) {
    iterate("0");
}
  
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 4) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})