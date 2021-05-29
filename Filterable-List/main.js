const input=document.querySelector('#filter-input');
input.addEventListener('input',filter);


function filter(e){
    const val=e.target.value.toLowerCase();
    const ulitems=document.querySelectorAll('#names');
    ulitems.forEach((name)=>{
        let liitems=document.querySelectorAll('.collection-item');
        liitems.forEach((item)=>{
            var textc=item.children[0].textContent.toLowerCase();
            if(textc.indexOf(val)==-1){
                item.remove();
            }
        })
    })
}