function highlight(e) {
    if (selected[0]) selected[0].className = '';
    e.target.parentNode.className = 'selected';
}

var table = document.getElementById('VistaTabla'),
selected = table.getElementsByClassName('selected');
table.onclick = highlight;

function fnselect(){
    valor = $("tr.selected td:first").html();
    alert('Usted acaba de seleccionar:');
    alert($("tr.selected td:first").html());
    console.log("Acabas de realizar la accion de seleccionar: " + "" + valor);
}

