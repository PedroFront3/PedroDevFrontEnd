const titulo = document.querySelector('#text1');
typeWriter(titulo);

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = "";
textoArray.forEach((letra,i) => {
    setTimeout(function(){
       elemento.innerHTML += letra
    },75 * i);
});

}