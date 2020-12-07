const form=document.querySelector(".quiz-form");
 const correct=['B','A','C','B','A'];



form.addEventListener("submit",e=>{
e.preventDefault();

let score=0;
const username=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];

username.forEach((answer,index) => {
    

    if(answer===correct[index])
    score+=20;
});
scrollTo(0,0);
// alert("your score"+" "+ score);

// const get=document.querySelector('span');
// get.textContent=`${score}%`;
let input=0;

let out=setInterval(()=>{

    const get=document.querySelector('span');
    get.textContent=`${input}%`;

    if(input==score)
    {
    clearInterval(out);
    }


else{
    input++;
}
},20);






});



