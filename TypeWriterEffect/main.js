// const TypeWriter =function(txtElement ,words,wait=3000){
//     this.txtElement=txtElement;
//     this.words=words;
//     this.txt='';
//     this.wordIndex=0;
//     this.wait=parseInt(wait,10);
//     this.type();
//     this.isDeleting=false;
// }


// // Type Method
// TypeWriter.prototype.type=function(){
//     // current index of word 
//     const current =this.wordIndex%this.words.length;
//     // Get full text of current word
//     const fulltxt =this.words[current];
    
//     // check if deleting 
//     if(this.isDeleting){
//         // Remove a char
//         this.txt=fulltxt.substring(0,this.txt.length-1);
//     }else{
//         // Add a char
//         this.txt=fulltxt.substring(0,this.txt.length+1)
//     }

//     // Insert txt into element 
//     this.txtElement.innerHTML='<span class="txt">'+this.txt+'</span>';


//     //Initial Type speed

//     let typespeed=300;
//     if(this.isDeleting){
//         typespeed /=2;
//     }

//     // If word is complete

//     if(!this.isDeleting&&this.txt === fulltxt){
//         // this will make a pause at end
//         typespeed=this.wait;
//         // set deleting to true
//         this.isDeleting=true;
//     }else if(this.isDeleting&&this.txt===''){
//         this.isDeleting=false;
//         // Move to the next word
//         this.wordIndex++;
//         // Pause before start typing 
//         typespeed=500;
//     }

//     setTimeout(()=>this.type(),typespeed);
// }



// // Init on DOM load
// document.addEventListener('DOMContentLoaded',init);

// // Init App

// function init(){
//     const txtElement=document.querySelector('.txt-type');
//     const words =JSON.parse(txtElement.getAttribute('data-words'));
//     const wait=txtElement.getAttribute('data-wait');

//     // Init TypeWriter
//     new TypeWriter(txtElement,words,wait);
// }





// ES6 classes 

class TypeWriter{
    constructor(txtElement ,words,wait=3000){
        this.txtElement=txtElement;
        this.words=words;
        this.txt='';
        this.wordIndex=0;
        this.wait=parseInt(wait,10);
        this.type();
        this.isDeleting=false;
    }


    type() {
            // current index of word 
        const current =this.wordIndex%this.words.length;
        // Get full text of current word
        const fulltxt =this.words[current];
        
        // check if deleting 
        if(this.isDeleting){
            // Remove a char
            this.txt=fulltxt.substring(0,this.txt.length-1);
        }else{
            // Add a char
            this.txt=fulltxt.substring(0,this.txt.length+1)
        }

        // Insert txt into element 
        this.txtElement.innerHTML='<span class="txt">'+this.txt+'</span>';


        //Initial Type speed

        let typespeed=300;
        if(this.isDeleting){
            typespeed /=2;
        }

        // If word is complete

        if(!this.isDeleting&&this.txt === fulltxt){
            // this will make a pause at end
            typespeed=this.wait;
            // set deleting to true
            this.isDeleting=true;
        }else if(this.isDeleting&&this.txt===''){
            this.isDeleting=false;
            // Move to the next word
            this.wordIndex++;
            // Pause before start typing 
            typespeed=500;
        }

        setTimeout(()=>this.type(),typespeed);
        }
}


// Init on DOM load
document.addEventListener('DOMContentLoaded',init);

// Init App

function init(){
    const txtElement=document.querySelector('.txt-type');
    const words =JSON.parse(txtElement.getAttribute('data-words'));
    const wait=txtElement.getAttribute('data-wait');

    // Init TypeWriter
    new TypeWriter(txtElement,words,wait);
}
