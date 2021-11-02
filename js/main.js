
function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("planes").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=0;
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {

if (contador==0) {
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
}
else{

}


}

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        document.getElementById("back")
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("comofunciona").style.display = "none";
        document.getElementById("planes").style.display = "none";
        contador=1;
        document.getElementById("back")
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

    }
    
    
    }


    function categorias() {
        document.getElementById("informacion").style.display = "none";	
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("costos").style.display = "block";
        document.getElementById("back").style.display = "block";
        document.getElementById("side").style.display = "none";
        document.getElementById("informacion").style.display = "none";
        document.getElementById("planes").style.display = "none";
        document.getElementById("comofunciona").style.display = "none";
        conta=0;
        contador=2;
        
        
    }

    function comofunciona() {
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("comofunciona").style.display = "block";
        document.getElementById("side").style.display = "none";
        document.getElementById("informacion").style.display = "none";
        document.getElementById("back").style.display = "block";
        document.getElementById("costos").style.display = "none";
        conta=0;
        contador=2;
        
        
    }

    function planes() {
        document.getElementById("planes").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("informacion").style.display = "none";
        document.getElementById("back").style.display = "block";
        document.getElementById("comofunciona").style.display = "none";
        document.getElementById("costos").style.display = "none";
        conta=0;
        contador=3;
        
        
    }

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }


       
        document.querySelector('.tarjeta')  
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

      

        
        




