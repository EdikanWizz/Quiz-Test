const correctAnswers=['B','B','B','B'];
const form= document.querySelector('.quiz-form');
const result=document.querySelector('.result');

form.addEventListener('submit', e=>{
e.preventDefault();
let score=0;
const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value];

userAnswers.forEach((userAnswer,answer)=> {
    if(userAnswer===correctAnswers[answer]){score+=25};
});
console.log(score);
scrollTo(0,0);
//setting interval and timing
let output=0;
const timer=setInterval(()=>{
    result.querySelector('span').textContent=`${output}%`;
if(output===score){clearInterval(timer);
}else{
    output++;
}
}, 100);
result.style.display='block';
})