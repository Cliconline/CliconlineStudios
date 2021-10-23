
function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("inicio").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    contador=0;
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {

if (contador==0) {
    document.getElementById("informacion").style.display = "none";
    document.getElementById("inicio").style.display = "block";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("back").style.display = "block";
    contador=1;
}
else{

}


}

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("inicio").style.display = "none";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("back").style.display = "none";
        contador=0;
    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("comofunciona").style.display = "none";
        contador=1;
    }
    
    
    }


    function categorias() {
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("costos").style.display = "block";
        contador=2;
        
        
    }

    function comofunciona() {
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("comofunciona").style.display = "block";
        contador=2;
        
        
    }




