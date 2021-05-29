document.getElementById('output').style.visibility='hidden';
document.querySelector('#lbsInput').addEventListener('input',converter);

function converter(e){
    document.getElementById('output').style.visibility='visible';
    let lbsvalue=e.target.value;
    let gramsvalue=453.592*lbsvalue;
    let kgvalue=0.453592*lbsvalue;
    let ovalue=16*lbsvalue;

    const go=document.querySelector('#gramsOutput');
    const kgo=document.querySelector('#kgOutput');
    const oo=document.querySelector('#ozOutput');
    go.textContent.value='';
    kgo.textContent.value='';
    oo.textContent.value='';

    go.textContent=gramsvalue;
    kgo.textContent=kgvalue;
    oo.textContent=ovalue;
}