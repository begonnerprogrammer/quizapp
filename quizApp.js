const quizDB = [
    {
        question: 'Q1: What is the full form of HTML?',
        a: 'Hello To My Freind',
        b: 'Hey Text Markup Language',
        c: 'HyperText Makeup Language',
        d: 'Hypertext Markup Language',
        ans: 'ans4'
    },
    {
        question: 'Q2: What is the full form of CSS?',
        a: 'Cascading Style Sheet',
        b: 'Cascading Style Sheep',
        c: 'Cartoon Style Sheets',
        C: 'Cascading Super Sheets',
        ans: 'ans1'
    },
    {
        question: 'Q3: What is the full form of HTTP?',
        a: 'Hypertext Transfer Product',
        b: 'Hypertext Test Protocol',
        c: 'Hey Transfer Protocol',
        d: 'Hypertext Transfer Protocol',
        ans: 'ans4'
    },
    {
        question: 'Q4: What is the full form of JS?',
        a: 'Javascript',
        b: 'Javasuper',
        c: 'JustScript',
        d: 'JordenShoes',
        ans: 'ans1'
    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const showscore = document.querySelector('#showScore');


// function loadquestion(){
//      question.innerText=quizDB[0].question1;
//      option1.innerText=quizDB[0].a;
//      option2.innerText=quizDB[0].b;
//      option3.innerText=quizDB[0].c;
//      option4.innerText=quizDB[0].d;
// }
// const answers=document.querySelectorAll('.answer');
// let score=0;

// let questioncount=0;
// function loadquestion(){
//     const questionlist=quizDB[questioncount];
//    question.innerHTML=questionlist.question;
//    option1.innerText=questionlist.a;
//    option2.innerText=questionlist.b;
//    option3.innerText=questionlist.c;
//    option4.innerText=questionlist.d;
// }

// loadquestion();
// function getchecanswer(){
//     let answer;
//      answers.forEach((x)=>{
//         if(x.checked){
//             answer=x.id;
//         }
//      })
//      return answer;
// }
// function deleteAll(){
//     answers.forEach((x)=>{x.checked=false});
// }
// submit.addEventListener('click',()=>{
//     const chekedanswer=getchecanswer();
//     console.log(chekedanswer);
//     if(chekedanswer===quizDB[questioncount].ans){
//         score++;
//     };
//     deleteAll();
//     questioncount++;
//     if(questioncount<quizDB.length){
//         loadquestion();
//     }
//     else{
//         showscore.innerHTML=`<h3>You score  ${score}/${quizDB.length}<h3>
//         <button class='btn' onclick='location.reload()'>Play again</button>
//         `;
//         showscore.classList.remove('scoreArea');
//     }
// }
// )



const answers = document.querySelectorAll('.answer')
let score = 0;
let questioncount = 0;
const loadquestion = () => {

    const questionlist = quizDB[questioncount];
    question.innerHTML = questionlist.question;
    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}


loadquestion();

const getanswer = () => {
    let answer;
    answers.forEach((x) => {
        if (x.checked) {
            answer = x.id;
        }
    })
    return answer;
}


const deleteAll = () => {
    answers.forEach((x) => { x.checked = false });
}

submit.addEventListener('click', function () {
    const checkedanswer = getanswer();
    console.log(checkedanswer);

    if (checkedanswer === quizDB[questioncount].ans) {
        score++;
    }
    deleteAll();
    questioncount++;
    if (questioncount < quizDB.length) {
        loadquestion();
    }
    else {

        showscore.innerHTML = `<h3>You score  ${score}/${quizDB.length}<h3>
                <button class='btn' onclick='location.reload()'>Play again</button>
                    `;
        showscore.classList.remove('scoreArea');

    }
}
)