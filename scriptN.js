let contador=0;
function incremento(){
    contador+=1;
    updateCounter()
}
function decremento(){
    contador-=1;
    updateCounter()
}
function resetear() {
    contador=0;
    updateCounter()
}
function updateCounter(){
    document.getElementById("contador").textContent = contador
}