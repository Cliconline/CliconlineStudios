
//   service worked

navigator.serviceWorker.register("sw.js");

let promptEvent = null;
window.addEventListener("beforeinstallprompt", (e)=>{
    console.log("listo instal")
    promptEvent = e;
    
})

document.querySelector('.icon5').addEventListener('click',(e)=>{
    promptEvent.prompt();
    });





//   barrade navegacion

var naviactive =function (){
    var navi = document.getElementById("icon3");

    if (navi.className == "icon3off") {
        navi.className = "icon3active";
     }
     
}; 


var navioff =function (){
    var navi = document.getElementById("icon3");

    if (navi.className == "icon3active") {
        navi.className = "icon3off";
     }
     
}; 

//   variableswebatras
let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};

window.addEventListener('popstate', e => {
    backweb();
    
});

function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("planes").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    naviactive();
    backarriba();
    conta=0;
    contador=0;
    backweb();

};


var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;

function servicios() {
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("planes").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    navioff();
    conta=0;
    contador=1;
    ids1();
   
};

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

let urlclick =`https://cliconline.github.io/CliconlineStudios`; 


function backweb() {
    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("planes").style.display = "none"
        document.getElementById("side").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        naviactive();
        conta=0;
        contador=0;
        history.back();
    

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("comofunciona").style.display = "none";
        document.getElementById("planes").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        conta=0;
        contador=1;
        ids1();
      

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
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    backarriba();
    ids2();
        
    
    
};

function comofunciona() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("comofunciona").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("planes").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    backarriba();
    ids2();  
    
};

function planes() {
    document.getElementById("planes").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    backarriba();
    ids2();
};


function sharetj() {
    document.getElementById("sharelink").style.display = "block";
    document.getElementById("planes").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    navioff();
    conta=0;
    contador=1;
    backarriba();
    ids1();
    
       
};



function cotizar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("planes").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    backarriba();
    ids2();
};

//   boton atras

function back() {
    backarriba();
    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("planes").style.display = "none"
        document.getElementById("side").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        naviactive();
        conta=0;
        contador=0;
        history.back();
    

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("comofunciona").style.display = "none";
        document.getElementById("planes").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        conta=0;
        contador=1;
        ids1();
      

    }
    
    
    }; 


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
        };

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        };    
        
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
    };
    
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
    };
    
    btnRight.addEventListener('click', function(){
        next();
    });
    
    btnLeft.addEventListener('click', function(){
        Prev();
    });
    
    setInterval(function(){
        next();
    },5000);


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
            icon: 'success',
            html:
           '<a href="https://api.whatsapp.com//send?text=Enviado%20desde%20la%20App%20de%20Cliconline%20Ver%20Opciones%20de%20Pago%20https://cliconlinestudios.blogspot.com/p/opciones-de-pago.html" class="botonp" ><span class="fa fa-share-alt"></span >&nbsp;Compartir nro. Cuenta</a>',
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
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
        showCloseButton: true,
        icon: 'success',
        title: 'Tarjeta Digital',
        text: 'Link Copiado a Portapapeles',
        footer: 'CliconlineStudios'
        });
      
       
      };

      function shareok() {
        Swal.fire({
        icon: 'success',
        title: 'Tarjeta Digital',
        text: 'lista Para Compartir',
        timer: 1500,
        footer: 'CliconlineStudios'
        });
      
      };

      function instaler() {
        Swal.fire({
        icon: 'success',
        title: 'Web Tarjeta Digital',
        text: 'CliconlineStudios',
        timer: 1500
        });
      
      };
     
  

const $content = document.getElementById('textareacopy');
      $btncopy = document.getElementById ('btcopi');
      $title = document.getElementById ('titlelink')

      $btncopy.addEventListener('click', e => {
        $content.select();
        document.execCommand('copy')
        msj2();
      });


// nuevo share

const shareData = {
    title: 'Web Tarjeta Digital',
    text: 'CliconlineStudios',
    url: 'https://cliconline.github.io/CliconlineStudios'
  }
  
  
  // Share must be triggered by "user activation"

  function shareplus (){
    if (navigator.share) {
        navigator
       .share(shareData)
       .then(() => console.log('correcto'))
       .catch(error => console.log ('error sharing',error) );
    }else {
        sharetj();
    }
 }
