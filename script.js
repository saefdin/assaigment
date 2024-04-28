let btns=document.querySelectorAll('.tabs > button');
let conts=document.querySelectorAll('.flex');


function changeActave(i){
btns.forEach((btn , index)=>{
   btn.classList.toggle('btn-active' , index===i);

});

conts.forEach((box , index)=>{
box.classList.toggle('cont-actave' , index===i);
});
}