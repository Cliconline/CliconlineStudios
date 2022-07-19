
function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("planes").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    conta=0;
    contador=0;
    history.replaceState({ids: null}, 'Default state', './');

}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;

    let ids = 0;

function servicios() {

    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
    ids = 1;
    history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`);
}

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
}

window.addEventListener('popstate', e => {
    backweb();
    
});

let urlclick =`https://cliconline.github.io/CliconlineStudios`; 


function backweb() {
   
    if (ids==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.replaceState({ids: null}, 'Default state', './');

    } else if (ids==2) {
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("comofunciona").style.display = "none";
        document.getElementById("planes").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        backarriba();
        ids = 1;
        contador=1;

    }
    else{
        window.open(urlclick);

    }
   
    } 



function categorias() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("costos").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("planes").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
        ids = 2;
        history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`);
    
    
}

function comofunciona() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("comofunciona").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("planes").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
        ids = 2;
        history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`);
    
    
}

function planes() {
    document.getElementById("planes").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    conta=0;
    contador=3;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });  
        ids = 2;
        history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`);  
}

function cotizar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("planes").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("costos").style.display = "none";
    conta=0;
    contador=2;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });  
        ids = 2;
        history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`);   
}

//   boton atras

function back() {
    
    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("planes").style.display = "none"
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        history.replaceState({ids: null}, 'Default state', './');

    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("comofunciona").style.display = "none";
        document.getElementById("planes").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        conta=0;
        ids = 1;
        contador=1;
        history.pushState({ids}, `Selected: ${ids}`, `./selected=${ids}`);

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
  

      //ALERTAS>
      function save(){
        let url = `https://drive.google.com/u/0/uc?id=1DqW2tGa2OhflXNlJL7t5D9ryyOS5mnX0&export=download`;
        window.open(url); 
       };
      
      function ftuser() {
          Swal.fire({
              title: 'William Paredes',
              text: 'Marketing Digital.',
              imageUrl: 'img/click.png',
              imageWidth: 100,
              confirmButtonText: 'Añadir a Contactos',
              showCloseButton: 'true',
              showCancelButton: true,
        
          
            }).then((result) => {
              if (result.isConfirmed) {
                save();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Descarga Correcta',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
      
       
      };
      
      function abrirpagos(){
        let urla = `https://cliconlinestudios.blogspot.com/p/opciones-de-pago.html`;
        window.open(urla); 
       };


       function verpagos(){
        let urlsp = `https://cliconlinestudios.blogspot.com/p/opciones-de-pago.html`;
        window.open(urlsp); 
       };


      function msjpagos() {
        Swal.fire({
            title: 'Opciones de Pago',
            icon: 'info',
            html:
           '<a href="https://api.whatsapp.com//send?text=Enviado%20desde%20la%20App%20de%20Cliconline%20Ver%20Tarjeta%20Digital%20aqui%20https://cliconlinestudios.blogspot.com/p/opciones-de-pago.html" class="botonp" ><span class="fa fa-share-alt"></span >&nbsp;Compartir nro. Cuenta</a>',
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Ver nro. Cuenta',
          })
          .then((result) => {
            if (result.isConfirmed) {
              verpagos();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Información ',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
      
       
      };
      
      function msj2() {
        Swal.fire({
          icon: 'info',
          title: 'Traducir a Ingles',
          text: 'Opción Disponible Próximamente',
          footer: 'Tarjeta De Presentación'
        });
      
       
      };

  
