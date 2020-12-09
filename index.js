
//document.addEventListener("mousedown", mouse)
var flagFirma = false
var xant, xact, yant, yact  = 0
function activarFirma() {
  flagFirma = true
}
function desactivarFirma() {
  flagFirma = false
}
function firmar(evento) {
  var cuadrito = document.getElementById("firma");
  var papel = cuadrito.getContext("2d");
  xact = evento.layerX;
  yact = evento.layerY;
  if (flagFirma==true) {
    dx = xact -xant
    dy = yact -yant
    console.log(evento.layerX + ' ' + evento.layerY);
    console.log(xact +' '+ yact +' '+ xant +' '+ yant);
    console.log(dx + ' ' + dy)
    console.log(Math.abs(Math.sqrt(dx*dx+dy*dy)));
    if (dx == 0 & dy == 0) {
      dibujarLinea("black", xant, yant, papel);
    }else{
      dibujarLinea("black", xant, yant, papel, dx, dy);
    }
  }
  xant = evento.layerX;
  yant  =evento.layerY;
 }

function dibujarLinea(color, x, y, lienzo, incx=1, incy=1)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 1;
  lienzo.moveTo(x-incx, y-incy);
  lienzo.lineTo(x+incx, y+incy);
  lienzo.stroke();
  lienzo.closePath();
}

function capturaEvento(evento)
{
  var colorcito = "#FAA";
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}
