const questions = [
  {
    id: 1,
    que: "I feel overwhelmed by my emotions.",
    ans: 0,
  },
  {
    id: 2,
    que: "I am able to handle the level of stress I experience.",
    ans: 0,
  },
  {
    id: 3,
    que: "I have physical symptoms of anxiety, such as sweaty palms.",
    ans: 0,
  },
  {
    id: 4,
    que: "I have strong relationships with people I care about.",
    ans: 0,
  },
  {
    id: 5,
    que: "I cannot get beyond long-past traumatic events or significant losses.",
    ans: 0,
  },
  {
    id: 6,
    que: " I trust that if I confide in others, they will be supportive.",
    ans: 0,
  },
  {
    id: 7,
    que: "When I experience a strong emotion, I usually know why it's hitting me.",
    ans: 0,
  },
  {
    id: 8,
    que: " I procrastinate and/or avoid dealing with important things in my life.",
    ans: 0,
  },
  {
    id: 9,
    que: "I feel like I am living up to my own expectations, or those of others.",
    ans: 0,
  },
  {
    id: 10,
    que: "I haven't noticed changes in my appetite or sleep patterns relative to when I was at my best.",
    ans: 0,
  },
];
let qnum = 0;
var ques = document.getElementById("question");
var qid = document.getElementById("question-num");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var submit = document.getElementById("submit");
var btn1 = document.querySelector("#bubble_1");
var btn2 = document.querySelector("#bubble_2");
var btn3 = document.querySelector("#bubble_3");
var btn4 = document.querySelector("#bubble_4");
var btn5 = document.querySelector("#bubble_5");

let sum = 0;
let condition = "";
var ratingbtn = document.getElementsByClassName("bubbles");
function displayQuestions(index) {
  var ques = document.getElementById("question");
  ques.innerHTML = questions[index].que;
}
function rating(score) {
  questions[qnum].ans = score;
}
btn1.addEventListener("click", () => {
  rating(1);
});
btn2.addEventListener("click", () => {
  rating(2);
});
btn3.addEventListener("click", () => {
  rating(3);
});
btn4.addEventListener("click", () => {
  rating(4);
});
btn5.addEventListener("click", () => {
  rating(5);
});

function submitData() {
  for (let i = 0; i < questions.length; i++) {
    sum += questions[i].ans;
  }
    if (sum<=16){
      condition = "Critical";
    }
    else if (sum>16&&sum<=35){
      condition = "Moderate";
    }
    else if (sum>35){
      condition = "Normal";
    }
  window.location.href = "./index2.html";
  localStorage.setItem("condition",condition);
  
}
submit.addEventListener("click", () => {
  submitData();
});
function prevQuestion() {
  if (qnum > 0 && qnum <= questions.length - 1) {
    qnum--;
    nextBtn.removeAttribute("disabled");
    submit.style.display = "none";
    nextBtn.style.display = "block";
    ques.innerHTML = questions[qnum].que;
    ques.classList.remove("animate__animated");
    qid.innerHTML = "Question " + questions[qnum].id;
    qid.classList.remove("animate__animated");
  }
  if (qnum == 0) {
    prevBtn.setAttribute("disabled", "true");
  }
}
function nextQuestion() {
  if (qnum >= 0 && qnum < questions.length - 1) {
    qnum++;
    prevBtn.removeAttribute("disabled");
    ques.innerHTML = questions[qnum].que;
    qid.innerHTML = "Question " + questions[qnum].id;
    nextBtn.classList.remove("animate__animated");
  }
  if (qnum == questions.length - 1) {
    submit.style.display = "block";
    nextBtn.style.display = "none";
  }
}

displayQuestions(0);
prevBtn.setAttribute("disabled", "true");

function checkHealth() {}
