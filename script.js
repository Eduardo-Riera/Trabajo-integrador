var botonColor = document.getElementById("botonColor");
botonColor.addEventListener("click", color);

function color(){
    const collection = ['green', 'gray', 'pink', 'yellow', 'red', 'blue', 'orange', 'brown', 'white', 'black'];
    let i = 0;
        setInterval (function(){
            if (i<10){
                document.body.style.backgroundColor = collection[i];
                i++
            }
        }, 500);        
    };

