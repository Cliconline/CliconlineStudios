
// Registro del Service Worker y lógica de instalación PWA.
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(new URL("./sw.js", document.baseURI).href).catch((error) => {
      console.warn("No se pudo registrar el Service Worker:", error);
    });
  });
}

let promptEvent = null;
const installButton = document.getElementById("install-toggle");
const installHelp = document.getElementById("install-help");

// Chrome/Edge entregan este evento cuando la PWA cumple sus requisitos de instalación.
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  promptEvent = event;
  if (installButton) {
    installButton.hidden = false;
    installButton.disabled = false;
    installButton.setAttribute("aria-label", "Instalar aplicación");
    installButton.title = "Instalar Cliconline Studios";
  }
});

window.addEventListener("appinstalled", () => {
  promptEvent = null;
  if (installHelp) installHelp.hidden = true;
  if (installButton) {
    installButton.setAttribute("aria-label", "Aplicación instalada");
    installButton.title = "Aplicación instalada";
  }
});

async function instaler() {
  // Debe ejecutarse directamente desde el clic del usuario.
  if (promptEvent) {
    const eventToPrompt = promptEvent;
    promptEvent = null;
    try {
      await eventToPrompt.prompt();
      const choice = await eventToPrompt.userChoice;
      if (choice && choice.outcome === "accepted" && installHelp) installHelp.hidden = true;
    } catch (error) {
      console.warn("El navegador no pudo abrir el diálogo de instalación:", error);
      showInstallHelp();
    }
    return;
  }
  // Safari/iOS y navegadores que no exponen beforeinstallprompt no permiten abrir
  // el diálogo nativo por JavaScript; mostrar ayuda en lugar de no hacer nada.
  showInstallHelp();
}

function showInstallHelp() {
  if (!installHelp) return;
  installHelp.hidden = false;
  installHelp.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
window.instaler = instaler;
if (installButton) {
  installButton.addEventListener("click", (event) => {
    event.preventDefault();
    instaler();
  });
}

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
     document.getElementById("screen4").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("comofunciona").style.display = "none";
    document.getElementById("planes").style.display = "none";
    document.getElementById("side").style.display = "none";
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
         document.getElementById("screen4").style.display = "none";
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
    // Ocultar la portada y las demás secciones al abrir Cotizar directamente.
    ["informacion", "planes", "portafolio", "side", "comofunciona", "costos", "sharelink"].forEach((id) => {
        const seccion = document.getElementById(id);
        if (seccion) seccion.style.display = "none";
    });
    const formularioCotizar = document.getElementById("screen4");
    if (formularioCotizar) formularioCotizar.style.display = "block";
    conta=0;
    contador=2;
    backarriba();
    ids2();
};

//   boton atras

function back() {
    // El boton vuelve a la vista anterior dentro de la pagina sin recargarla.
    backarriba();

    const ocultar = ["informacion", "portafolio", "costos", "comofunciona", "planes", "side", "screen4", "sharelink"];
    ocultar.forEach((id) => {
        const seccion = document.getElementById(id);
        if (seccion) seccion.style.display = "none";
    });

    // Desde una subseccion de servicios, volver al listado de servicios.
    if (contador === 2) {
        document.getElementById("portafolio").style.display = "block";
        navioff();
        conta = 0;
        contador = 1;
        ids1();
        return;
    }

    // Desde servicios o compartir, volver al inicio.
    document.getElementById("informacion").style.display = "block";
    naviactive();
    conta = 0;
    contador = 0;
}



// Sidebar flotante con efecto liquid glass.
(function () {
  const toggle = document.getElementById("sidebar");
  const menu = document.getElementById("search-links");
  const backdrop = document.getElementById("sidebar-backdrop");

  function openMenu() {
    if (!menu || !backdrop) return;
    menu.hidden = false;
    backdrop.hidden = false;
    requestAnimationFrame(() => {
      menu.classList.add("is-open");
      backdrop.classList.add("is-visible");
      menu.setAttribute("aria-hidden", "false");
      menu.removeAttribute("inert");
      if (toggle) toggle.setAttribute("aria-expanded", "true");
    });
  }
  function closeMenu() {
    if (!menu || !backdrop) return;
    menu.classList.remove("is-open");
    backdrop.classList.remove("is-visible");
    menu.setAttribute("aria-hidden", "true");
    menu.setAttribute("inert", "");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    window.setTimeout(() => {
      if (!menu.classList.contains("is-open")) {
        menu.hidden = true;
        backdrop.hidden = true;
      }
    }, 320);
  }
  window.cerrarside = closeMenu;
  if (toggle) toggle.addEventListener("click", () => {
    if (menu && menu.classList.contains("is-open")) closeMenu();
    else openMenu();
  });
  if (backdrop) backdrop.addEventListener("click", closeMenu);
  if (menu) menu.querySelectorAll("a").forEach(link => {
    if (!link.href.includes("cerrarside")) link.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
})();

// Mostrar/ocultar el código QR.
(function () {
  const button = document.getElementById("qr-toggle");
  const panel = document.getElementById("qr-footer");
  const close = document.getElementById("qr-close");
  function toggleQr(force) {
    if (!button || !panel) return;
    const show = typeof force === "boolean" ? force : panel.hidden;
    panel.hidden = !show;
    button.setAttribute("aria-expanded", String(show));
    if (show) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  if (button) button.addEventListener("click", () => toggleQr());
  if (close) close.addEventListener("click", () => toggleQr(false));
})();

 // slider
 
    const slider = document.querySelector("#slider");
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionlast = sliderSection[sliderSection.length -1];
    
    const btnLeft = document.querySelector("#btn-left");
    const btnRight = document.querySelector("#btn-rigth");
    
    if (slider && sliderSection.length && btnLeft && btnRight) {
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
    }

const submitButton = document.querySelector("#submit");
if (submitButton) submitButton.addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMEROS DE WHATSAPP VALIDOS AQUI:
    let whatsapp = "998968077";
  
    let cliente = document.querySelector("#cliente").value;
    let tipo = document.querySelector("#cardt").value;
    let modulos = document.querySelector("#modulos").value;
    let Cantidad = document.querySelector("#modulos2").value;
    let fecha = document.querySelector("#fecha").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=593${whatsapp}&text=
          *CliconlineStudios*%0A
          *Datos de la Cotización*%0A
          *Nombre*%0A
          ${cliente}%0A
          *Tipo de Tarjeta*%0A
          ${tipo}%0A
          *Categoría*%0A
          ${modulos}%0A
          *Cantidad*%0A
          ${Cantidad}%0A
          *Fecha de la cotización*%0A
          ${fecha}%0A`;
          

  
    if (cliente === "" || tipo === "" || fecha === "" ) {
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
              title: 'cliconline',
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


      //perfil2>
      function save2(){
        let url = `https://drive.google.com/u/0/uc?id=1Rjcw1pFmVGDtDtUv23qslh9Zk2ms44p2&export=download`;
        window.open(url); 
       };
      
      function ftuser2() {
          Swal.fire({
              title: 'Yesenia Cajas',
              text: 'Dirección de Ventas.',
              imageUrl: 'img/click.png',
              imageWidth: 100,
              confirmButtonText: 'Añadir a Contactos',
              showCloseButton: 'true',
              showCancelButton: true,
        
          
            }).then((result) => {
              if (result.isConfirmed) {
                save2();
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
      
   
       function Unirse(){
        let urlsp = `https://www.youtube.com/channel/UC5nley-NIFYYC9wFaRLxhCg/join`;
        window.open(urlsp); 
       };


      function msjpagos() {
        Swal.fire({
            title: 'Cliconline Premium',
            icon: 'success',
            text:'Accede a los beneficios de la membresía',
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Unirse',
          })
          .then((result) => {
            if (result.isConfirmed) {
              Unirse();
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
const $content = document.getElementById('textareacopy');
      const $btncopy = document.getElementById('btcopi');
      const $title = document.getElementById('titlelink');

      if ($btncopy && $content) $btncopy.addEventListener('click', () => {
        $content.select();
        try { document.execCommand('copy'); } catch (_) {}
        if (typeof msj2 === "function") msj2();
      });


// nuevo share

const shareData = {
    title: 'Web Tarjeta Digital',
    text: 'CliconlineStudios',
    url: 'https://cliconline.github.io/CliconlineStudios'
  };
  
  
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
 };

 // share tarjeta

const shareData2 = {
    title: 'Cliconline',
    text: 'Enviado desde Cliconline App. Tarjeta Digital Yesenia Cajas',
    url: 'https://cliconlinestudios.blogspot.com/p/yesenia-cajas.html',
    };
    
    
    // Share must be triggered by "user activation"
   
    var urltarjeta = 'https://api.whatsapp.com//send?text=Enviado%20desde%20la%20App%20de%20Cliconline%20Ver%20Tarjeta%20Digital%20aqui%20https://cliconlinestudios.blogspot.com/p/yesenia-cajas.html'
  
    function sharetarjeta(){
    if (navigator.share) {
        navigator
       .share(shareData2)
       .then(() => console.log('correcto'))
       .catch(error => console.log ('error sharing',error) );
    }else {
      window.open(urltarjeta);
    }
    };
    

