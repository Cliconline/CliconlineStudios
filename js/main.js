
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
    document.getElementById("planes").style.display = "none";
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

//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;

    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("comofunciona").style.display = "none";
        document.getElementById("planes").style.display = "none";
        contador=1;

    }
    
    
    }  

             //    menu laterl 

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
// llevar arriba
       

document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});
document.querySelector('.portafolio')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});


document.querySelector('.costos')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

document.querySelector('.side1')   
.addEventListener('click',()=>{
 window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

document.querySelector('.side2')   
.addEventListener('click',()=>{
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

document.querySelector('.side3')   
.addEventListener('click',()=>{
window.scrollTo({
top: 0,
behavior: 'smooth'
});
 });

document.querySelector('.back')   
.addEventListener('click',()=>{
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});    

