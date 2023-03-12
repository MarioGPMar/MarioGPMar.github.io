document.getElementById ("ancla_informacion_personal").onclick = function() {
    document.getElementById ("informacion_personal").style.display = "grid";
    document.getElementById ("experiencia").style.display = "none";
    document.getElementById ("habilidades").style.display = "none";
    document.getElementById ("contacto").style.display = "none";
}

document.getElementById ("ancla_experiencia").onclick = function() {
    document.getElementById ("informacion_personal").style.display = "none";
    document.getElementById ("experiencia").style.display = "grid";
    document.getElementById ("habilidades").style.display = "none";
    document.getElementById ("contacto").style.display = "none";
}

document.getElementById ("ancla_habilidades").onclick = function() {
    document.getElementById ("informacion_personal").style.display = "none";
    document.getElementById ("experiencia").style.display = "none";
    document.getElementById ("habilidades").style.display = "grid";
    document.getElementById ("contacto").style.display = "none";
}

document.getElementById ("ancla_contacto").onclick = function() {
    document.getElementById ("informacion_personal").style.display = "none";
    document.getElementById ("experiencia").style.display = "none";
    document.getElementById ("habilidades").style.display = "none";
    document.getElementById ("contacto").style.display = "grid";
}

document.getElementById ("enviar").onclick = function() {
    document.getElementById ("mensaje_enviar_correcto").style.display = "block";
}
