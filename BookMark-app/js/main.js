// site class


class Site{
    constructor(name,url){
        this.name=name;
        this.url=url;
    }
}

// UI class
class UI{
    static displaySite(){
        const sites =store.getSite();

        sites.forEach((site)=>{
            this.addSiteToList(site);
        })

    }

    static addSiteToList(site){
        const sitelist =document.getElementById('output');
        const div=document.createElement('div');

        div.innerHTML=`
        <div class="card" style="width: 100%;">
                <div class="card-body">
                    <h5 class="card-title">${site.name}</h5>
                    <p class="card-text">${site.url}</p>
                </div>
                <div><a href="#" class="btn btn-danger btn-sm delete">X</a></div>
        </div>
        `;
        sitelist.appendChild(div);
    }

    static showalert(message,className){
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="alert alert-${className} alert-dismissible fade show" role="alert">
            ${message} 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        const rc=document.getElementById('rc');
        const form_1=document.getElementById('form-1');
        rc.insertBefore(div,form_1);

        // Vanish in 3 sec
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },3000);
    }



    static deleteSite(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }


    static clearfields(){
        document.getElementById('name').value='';
        document.getElementById('url').value='';
    }
}


// store class
class store{
    static getSite(){
        let sites ;
        if(localStorage.getItem('sites')===null){
            sites=[];
        }
        else{
            sites=JSON.parse(localStorage.getItem(sites));
        }
        return sites;
    }

    static addSite(site){
        const sites=store.getSite();
        sites.push(site);
        localStorage.setItem('sites',JSON.stringify(sites)); 
    }
    static removeSite(name){
        const sites=store.getSite();
        sites.forEach((site,index)=>{
            if(site.name==name){
                site.splice(index,1);
            }
        });
        localStorage.setItem('sites',JSON.stringify(sites));
    }
}

// Events

// Event:Display Sites
document.addEventListener('DOMContentLoaded',UI.displaySite);


// Event :Add a site
document.querySelector('#submit').addEventListener('click',(e)=>{
    e.preventDefault();
    const name =document.querySelector('#name').value;
    const url= document.querySelector('#url').value;

    if(name===''||url===''){
        UI.showalert('Please fill all the fields before submitting ','danger');
        UI.clearfields();
    }
    else{
        const nsite=new Site(name,url);

        UI.addSiteToList(nsite);

        store.addSite(nsite);

        UI.showalert('Successfully added !!','success');

        UI.clearfields();
    }
});



// Event:Remove a site


document.getElementById('output').addEventListener('click',(e)=>{
    UI.deleteSite(e.target);

    store.removeSite(e.target.parentElement.previousElementSibling.firstElementChild.textContent);

    UI.showalert('Site Removed','success');
})


