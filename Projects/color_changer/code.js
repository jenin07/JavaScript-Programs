const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach( function (button) 
{
    button.addEventListener("click", function (e) {
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'aqua'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'azure'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'violet'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id
        }
    })
})