const lbtn =document.getElementById('lbtn');
const rbtn=document.getElementById('rbtn');

let crnt=1;

lbtn.addEventListener('click',lt);

rbtn.addEventListener('click',rt);

function lt(e){
    e.preventDefault();
    if(crnt>1){
        document.getElementById('bg'+crnt).style.transform='translateX(2000px)';
        document.getElementById('card'+crnt).style.transform='translateX(-2000px)';
        crnt=crnt-1;
        document.getElementById('bg'+crnt).style.transform='translateX(0px)';
        document.getElementById('card'+crnt).style.transform='translateX(0px)';
    }
}

function rt(e){
    e.preventDefault();
    if(crnt<6){
        document.getElementById('bg'+crnt).style.transform='translateX(2000px)';
        document.getElementById('card'+crnt).style.transform='translateX(-2000px)';
        crnt=crnt+1;
        document.getElementById('bg'+crnt).style.transform='translateX(0px)';
        document.getElementById('card'+crnt).style.transform='translateX(0px)';
    }
}