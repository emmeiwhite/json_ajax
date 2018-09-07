
var btn = document.getElementById('fetch');
var animalContainer = document.getElementById('animal-info');

// This page counter variable is to be incremented based on the button click and get data from different urls
var pageCounter = 1;
// button click Handler
btn.addEventListener("click",getData);


function getData(event){
    var req = new XMLHttpRequest();

    //preparing the request : Here we will make use of the pageCounter variable, we'll also make use of back-tick in ES6
    req.open(`GET`,`https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);

    // onload comprises of both the onreadyStateChange,It works  when readyState=4 as well as status=200

    
    req.onload  = function(){
        var ourData =  JSON.parse(req.responseText);
        // Handling data in another function
        renderHTML(ourData);
    }

    // Sending the Request
    req.send();

    pageCounter+=1;

    if(pageCounter>3){
        btn.classList.add('hide-button');
    }
}


function renderHTML(data){
    var htmlString = "";
    data.forEach((animal)=>{
        htmlString+=`<p>${animal.name} is a ${animal.species} and food it likes is`;
        animal.foods.likes.forEach(function(likes){
            htmlString+=` ${likes} `;
        })

        htmlString+=`</p>`;
      
    });
    htmlString+="<hr/>";
    animalContainer.insertAdjacentHTML('beforeend',htmlString);
}