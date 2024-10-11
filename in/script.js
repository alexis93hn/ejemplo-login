let emailvalido ="root@cbtis.edu.mx";
let passvalido ="admin123";

const chequelogin = (event) => {
	 const email = document.getelemetByID("email").value;
     const password = document.getelemetByID("password").value;
     const mensaje = document.getelemetByID("loginMensaje").value;
     if(email === emailvalido && password === passvalido){
     	mensaje.texcontent = "inicio de sesion correcto";
     	mensaje.style.color = "green";

     	seTimeout(() => {
     		window.location.href = "dashboard.html";
     	}, 1000);
     }
     else {
     	mensaje.texcontent = "emailvalido o contraseña incorrecta";
     	mensaje.style.color="red";
     }
 }