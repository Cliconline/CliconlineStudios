document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMEROS DE WHATSAPP VALIDOS AQUI:
    let cuenta = "https://deuna.onelink.me/H92p/bc99d0ae?token=7C1F07A144AD1CAB9C6119376B289266830AB021";
  
    let cliente = document.querySelector("#cliente").value;
    let modulos = document.querySelector("#modulos").value;
    let Cantidad = document.querySelector("#modulos2").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=593959907464&text=
          *Activo Digital*%0A
          *Datos de Usuario*%0A
          *Nombre*%0A
          ${cliente}%0A
          *Cotizar*%0A
          ${modulos}%0A
          *Cantidad*%0A
          ${Cantidad}%0A`;
          

  
    if (cliente === "") {
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