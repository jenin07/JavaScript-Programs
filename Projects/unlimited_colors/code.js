// generate a random color

const randomcolor = function () {
    const hex = "0123456789ABCDEF";
    let color  = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor((Math.random() * 16))];
    }
    return color;
}


let colorinter;
const startcolor = function(){
    
    if(!colorinter){
        colorinter = setInterval(color, 100);
    }

    function color(){
        document.body.style.backgroundColor = randomcolor();
    }
}

const stopcolor = function(){
    clearInterval(colorinter);
    colorinter = null; //flushing out the value from the variable
}

document.querySelector('#start').addEventListener('click', startcolor);

document.querySelector('#stop').addEventListener('click', stopcolor);
