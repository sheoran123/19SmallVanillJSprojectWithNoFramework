var button1=document.getElementById('button1');
var button2 =document.getElementById('button2');

button1.addEventListener('click',(e)=>{
    e.preventDefault();

    document.getElementById('modal2').style.display='none';
    document.getElementById('modal1').style.display='block';
})
button2.addEventListener('click',(e)=>{
    e.preventDefault();

    document.getElementById('modal1').style.display='none';
    document.getElementById('modal2').style.display='block';
})

document.getElementById('delete1').addEventListener('click',(e)=>{
    e.preventDefault();

    document.getElementById('modal1').style.display='none';
})

document.getElementById('delete2').addEventListener('click',(e)=>{
    e.preventDefault();

    document.getElementById('modal2').style.display='none';
})

