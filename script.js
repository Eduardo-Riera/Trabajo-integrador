var botonColor = document.getElementById("botonColor");
botonColor.addEventListener("click", color);

function color(){
    const collection = ['green', 'gray', 'pink', 'yellow', 'red', 'blue'];
    let i = 0;
        setInterval (function(){
            if (i<6){
                document.body.style.backgroundColor = collection[i];
                i++
            }else{
                i=0;
            }
        }, 1000);        
    };

