var images=[];
images[0]='img/p1.jpeg';
images[1]='img/p2.jpeg';
images[2]='img/p3.jpeg';
images[3]='img/p4.jpeg';
images[4]='img/p5.jpeg';
images[5]='img/p6.jpeg';
images[6]='img/p7.jpeg';
images[7]='img/p8.jpeg';




let group=document.querySelector('.group');

group.addEventListener('click',showcase);
var prev='img1';


function showcase(e){
    e.preventDefault();

    document.querySelector('.mainshow').classList.remove('mainshow');
    var cur=e.target.classList[0];
    e.target.classList.add('mainshow');
    document.querySelector('.mainImg').classList.remove(prev);
    prev=cur;
    document.querySelector('.mainImg').classList.add(cur);
}

