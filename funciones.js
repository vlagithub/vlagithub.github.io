//muestra y esconde la lista de "info-personal" al apretar el "boton"

document.getElementById("boton").onclick=
function() {
  var click = document.getElementById("info-personal");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

