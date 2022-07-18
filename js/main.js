
function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("planes").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    ids = 1;
    history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`)
    conta=0;
    contador=0;
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;

    let ids = 0;

function servicios() {

    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    ids = 1;
    history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`)
    conta=0;
    contador=1;
}

window.addEventListener('popstate', e => {
    backweb();
});


function backweb() {
   
    if (ids==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        history.replaceState({ids: null}, 'Default state', './');
        conta=0;
        contador=0;

    } else if (ids==2) {
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("comofunciona").style.display = "none";
        document.getElementById("planes").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        ids = 1;
        contador=1;

    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("comofunciona").style.display = "none";
        document.getElementById("planes").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;

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
    document.getElementById("screen4").style.display = "none";
    ids = 2;
    history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`)
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    
    
}

function comofunciona() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("comofunciona").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("costos").style.display = "none";
    document.getElementById("planes").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    ids = 2;
    history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`)
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    
    
}

function planes() {
    document.getElementById("planes").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    ids = 2;
    history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`)
    conta=0;
    contador=3;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });     
}

function cotizar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("planes").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("costos").style.display = "none";
    ids = 2;
    history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`)
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });     
}

//   boton atras

function back() {
    
    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        history.replaceState({ids: null}, 'Default state', './');
        conta=0;
        contador=0;

    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("comofunciona").style.display = "none";
        document.getElementById("planes").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        ids = 1;
        history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`)
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
        
        // llevar cerrar side automatico

document.querySelector('.tarjeta').addEventListener('click',()=>{
    document.getElementById("side").style.display = "none";
    conta=0;
    });
        
 // slider
 
    const slider = document.querySelector("#slider");
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionlast = sliderSection[sliderSection.length -1];
    
    const btnLeft = document.querySelector("#btn-left");
    const btnRight = document.querySelector("#btn-rigth");
    
    slider.insertAdjacentElement('afterbegin', sliderSectionlast);
    
    function next (){
        let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
        slider.style.marginLeft = "-200%";
        slider.style.transition = "all 0.5s";
        setTimeout(function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionFirst);
            slider.style.marginLeft = "-100%";
        }, 500);  
    }
    
    function Prev (){
        let sliderSection = document.querySelectorAll(".slider__section");
        let sliderSectionLast = sliderSection[sliderSection.length -1];
        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.5s";
        setTimeout(function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin', sliderSectionLast);
            slider.style.marginLeft = "-100%";
        }, 500);  
    }
    
    btnRight.addEventListener('click', function(){
        next();
    });
    
    btnLeft.addEventListener('click', function(){
        Prev();
    });
    
    setInterval(function(){
        next();
    },5000);





// llevar arriba
       

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


document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMEROS DE WHATSAPP VALIDOS AQUI:
    let whatsapp = "998968077";
  
    let cliente = document.querySelector("#cliente").value;
    let edad = document.querySelector("#edad").value;
    let fecha = document.querySelector("#fecha").value;
    let modulos = document.querySelector("#modulos").value;
    let Cantidad = document.querySelector("#modulos2").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=593${whatsapp}&text=
          *CliconlineStudios*%0A
          *Datos de la Cotización*%0A
          *Nombre*%0A
          ${cliente}%0A
          *Número de Contacto*%0A
          ${edad}%0A
          *Fecha de la comprar*%0A
          ${fecha}%0A
          *Cotiza*%0A
          ${modulos}%0A
          *Cantidad*%0A
          ${Cantidad}%0A`;
          

  
    if (cliente === "" || edad === "" || fecha === "" ) {
      resp.classList.add("fail");
      resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.classList.remove("pagok");
    resp.classList.add("pagook");
    resp.innerHTML = `Tu Cotización se Envio, ${cliente}`;
  
    window.open(url);
  });


  let boxes = Array.from(document.getElementsByClassName('box'));

  function selectBox (id) {
      boxes.forEach(b => {
          b.classList.toggle('selected', b.id === id);
      });
  }
  
  
  history.replaceState({id: null}, 'Default state', './');