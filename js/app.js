//variable retornable de una funcion que avisa si hay dulces en linea
var verComparar = false;
//Es el contador utilizado para ejecutar una funcion y parar su ejecución 
var repetidor="";
//String para almacenar los nombres de los elementos que se eliminarán
var nomElemento = "";
//Variable para guardar la ultima posición de un elemento antes de ser eliminado
var ultPosDrag=0;
/*Guardará el array nomELemento del cual se irá eliminando a medida que 
  se vaya asignando al arreglo */
var arrNom = "";
//Guarda la fila de los elementos que se restauran 
var idBorrado = "";
//String para almacenar los nombres de los elementos recuperados por cada fila
var recup = [[null],[null],[null],[null],[null],[null],[null]];
//Contador de movimientos del usuario
var moveUser = 0;
//Guarda la cantidad de puntos que tiene el usuario
//1 punto por cada dulce eliminado
var puntos = 0;
//Guarda la diferencia del desplazamiento para hacer la comparación de desplazamiento
//pero siempre va a ser positivo.
var op = 0; 
/*Guarda dos valores "subio" o  "bajo" para saber que animación se debe hacer
en el elemento droppable*/ 
var desplazamiento = "";
//Contador para la animación de los dulces que se eliminarán
var cntAnimacion = 0;
//Variable que contendrá la funcion temporizadora de la eliminación de los elementos
var temporizador = 0;
var contar = 0;
/*Se guarda la posición de los dulces segun la posición de cada columna*/
var arrPng = [
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null]
]
/*Se guarda en cada campo el número 1 si es que en alguna de sus columnas hay algun elemento
  para eliminar, con el fin de modificar la posicion de los elementos restantes a 0*/
var arrDrag = [[null],[null],[null],[null],[null],[null],[null]];
//Arreglo para guardar el elemento que se eliminará según la posición de cada columna
//siempre y cuando se cumpla la condición de los 3 dulces como mínima cantidad.
var arrBorrar =[
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null]
] 
//Arreglo para registrar la cantidad de posiciones que debe recorrer cada elemento
var arrCantPos =[
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
] 
//Este es un arreglo temporal para detectar si el dulce es eliminado o no de acuerdo a la
//condición de numeros del mismo dulce, tanto horizontal y vertical y llenar la matriz arrBorrar[]
var dulce = [[null],[null],[null],[null],[null],[null],[null]];
//Registro de posiciones de los elementos
var arrPosicion=[
    {nomElm: "elm0",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm1",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm2",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm3",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm4",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm5",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm6",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm7",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm8",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm9",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm10", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm11", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm12", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm13", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm14", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm15", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm16", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm17", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm18", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm19", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm20", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm21", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm22", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm23", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm24", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm25", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm26", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm27", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm28", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm29", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm30", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm31", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm32", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm33", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm34", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm35", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm36", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm37", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm38", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm39", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm40", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm41", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm42", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm43", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm44", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm45", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm46", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm47", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0},
    {nomElm: "elm48", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0}
    
]

//Function para generar un número aleatorio para asignar la imagen al elemento.
function numAleatorio(min, max){
    return Math.round(Math.random() * (max -min) + min);
}

/*Funcion para crear los dulces */
function crearElemento(numElm, numColumn, numPng, numPosElm){
    var nuevoElemento = $("<div>");
    nuevoElemento.addClass("elemento");
    nuevoElemento.attr("id","elm" + numElm);
    nuevoElemento.css("opacity","1");
    nuevoElemento.css("z-index","0");

    arrPosicion[numElm].numPng = numPng;
    arrPosicion[numElm].numCol = numColumn;
    arrPosicion[numElm].numPos = numPosElm;

    //Creando la imagen
    var nuevaImagen = $("<img>");
    nuevaImagen.attr("src", "image/" + numPng + ".png");
    nuevaImagen.attr("alt", "Dulce" + numPng);
    nuevaImagen.css("width", "100%");

    $(nuevoElemento).append(nuevaImagen);
    $(".col-" + numColumn).append(nuevoElemento);

    elementoDrag(numElm);
    columnaDrop();
    elementoDrop();
};
/*Funcion para recuperar los dulces */
function recuperarElemento(nombreElm, numColumn, numPng, numPosElm){

    if (nombreElm != "" && nombreElm != undefined){
        var cadena =  new String(nombreElm);
        var modNombre = cadena.substring(1);

        console.log("Elemento recuperado, nombreElm = ", nombreElm);
    for (var i = 0; i < 49; i++){
        if (arrPosicion[i].nomElm == modNombre){
                arrPosicion[i].numCol = numColumn;
                arrPosicion[i].numPng = numPng;
                arrPosicion[i].numPos = numPosElm;
                arrPosicion[i].cantPos = moverElm;
                break;        
        }
    }

    var nuevoElemento = $("<div>");
    nuevoElemento.addClass("elemento");
    nuevoElemento.attr("id", modNombre);
    nuevoElemento.css("opacity","1");
    nuevoElemento.css("z-index","0");

    //Creando la imagen
    var nuevaImagen = $("<img>");
    nuevaImagen.attr("src", "image/" + numPng + ".png");
    nuevaImagen.attr("alt", "Dulce" + numPng);
    nuevaImagen.css("width", "100%");
    
    if ($("#timer").text()!=""){
        $(nuevoElemento).append(nuevaImagen);
        $(".col-" + numColumn).append(nuevoElemento);
        var numDulce = cadena.substr(4);
        console.log("Funcion RecuperarElemento() numDUulce = ", numDulce);
        elementoDrag(numDulce);
        columnaDrop();
        elementoDrop();
        
        var moverElm = 0;
        moverElm = -96 * (6 - numPosElm);
        $(nombreElm).css("top", moverElm);
    
    }

    
    }else{
        return;
    }

};

/*Funcion para configurar el drag de los dulces creados y recuperados*/
function elementoDrag(numDulce){

    var claseColumna = "";
    for(var i = 0; i < 49; i++){
        if(arrPosicion[i].nomElm == "elm"+numDulce ){
            claseColumna = ".col-" + arrPosicion[i].numCol;
            ultPosDrag = arrPosicion[i].posInicial;
            break;
        }
    }

    $("#elm"+numDulce).draggable({
        axis:"y",
        containment: claseColumna,
        drag: function(event, ui){
            /*Se suma el z-index por 100 porque el primer elemento
              tiene como index 0 y se necesita quetenga prioridad de visualización
              sino se hace el evento drag fallará */
            $(ui.helper).css("z-index", (numDulce + 100));

            /*---------------------CALCULO DE POSICION -------------------------*/
            if(arrPosicion[numDulce].posInicial==0 && ui.position.top > 0){
                desplazamiento = "bajo";
                op = ui.position.top - arrPosicion[numDulce].posInicial;
            }
            if(arrPosicion[numDulce].posInicial==0 && ui.position.top < 0){
                desplazamiento = "subio";
                op = ui.position.top - arrPosicion[numDulce].posInicial;
                op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
            }
            if(arrPosicion[numDulce].posInicial>0 && ui.position.top == 0){
                desplazamiento = "subio";
                op = arrPosicion[numDulce].posInicial - ui.position.top;
            }
            if(arrPosicion[numDulce].posInicial<0 && ui.position.top == 0){
                desplazamiento = "bajo";
                op = ui.position.top - arrPosicion[numDulce].posInicial;
                if (op < 0){
                    op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                }
            }
            if(arrPosicion[numDulce].posInicial<0 && ui.position.top >0){
                desplazamiento = "bajo";
                op = ui.position.top - arrPosicion[numDulce].posInicial;                
                if (op < 0){
                    op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                }
            }
            if(arrPosicion[numDulce].posInicial>0 && ui.position.top <0){
                desplazamiento = "subio";
                op = ui.position.top - arrPosicion[numDulce].posInicial;                
                if (op < 0){
                    op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                }
            }
            if(arrPosicion[numDulce].posInicial<0 && ui.position.top <0){
                if (arrPosicion[numDulce].posInicial < ui.position.top){
                    desplazamiento = "bajo";                    
                }else if (arrPosicion[numDulce].posInicial > ui.position.top){
                    desplazamiento = "subio";                    
                }

                op = ui.position.top - arrPosicion[numDulce].posInicial;
                if (op < 0){
                    op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                }
            }
            if(arrPosicion[numDulce].posInicial>0 && ui.position.top > 0){
                op = ui.position.top - arrPosicion[numDulce].posInicial;
                if (arrPosicion[numDulce].posInicial < ui.position.top){
                    desplazamiento = "bajo";                    
                }else if (arrPosicion[numDulce].posInicial > ui.position.top){
                    desplazamiento = "subio";
                    op=op * (-1);                    
                }
            }
        }    
    });
}
/*Funcion para configurar el drop de los dulces creados y recuperados*/
function elementoDrop(){
    $(".elemento").droppable({
        accept:".elemento",
        drop: function(event, ui){
            /*Verificamos si el desplazamiento se hizo hacia 
                arriba(valor negativo) o viceversa*/
            $(ui.helper).css("z-index","10");
            $(this).css("z-index","0")
            if (desplazamiento == "subio"){
                if((op >= 50) && (op <= 144)){
                    //Sumamos en uno el contador de movimientos
                    moveUser +=1;
                    
                    //Mostrar en pantalla los movimientos del usuario
                    $("#movimientos-text").text(moveUser);
                    
                    /*Se asigna el objeto this a la variable self porque en esta
                        instancia this hace referencia al elemento drop, y al usarlo
                        en la funcion de callback hará referencia al elemento drag*/
                    var self = this;
                    var posUiHelper = 0;
                    for (var i = 0; i < 49; i++){
                        if (arrPosicion[i].nomElm == $(ui.helper).attr("id")){
                            arrPosicion[i].posInicial -= 96;
                            arrPosicion[i].numPos += 1;
                            posUiHelper = arrPosicion[i].posInicial;
                            
                            break; 
                        }
                    }
                    
                    $(ui.helper).animate({
                            top: posUiHelper //Se asigna la posición obtenida en el for
                        },
                        0,
                        function(){
                            var posSelf = 0;
                            for (var i = 0; i < 49; i++){
                                if (arrPosicion[i].nomElm == $(self).attr("id")){
                                    arrPosicion[i].posInicial += 96;
                                    arrPosicion[i].numPos -= 1;
                                    posSelf = arrPosicion[i].posInicial;
                                    break;
                                } 
                            }
                            $(self).animate({
                                    top: posSelf
                                },
                                200
                            )
                        }
                    )
                }
            }
            else{
                if((op >= 50) && (op <= 144)){
                    //Sumamos en uno el contador de movimientos
                    moveUser +=1;
                    
                    //Mostrar en pantalla los movimientos del usuario
                    $("#movimientos-text").text(moveUser);
                    var self = this;
                    var posUiHelper = 0;
                    for (var i = 0; i < 49; i++){
                        if (arrPosicion[i].nomElm == $(ui.helper).attr("id")){
                            arrPosicion[i].posInicial += 96;
                            arrPosicion[i].numPos -= 1;
                            posUiHelper = arrPosicion[i].posInicial;
                            break; 
                        }
                    }
                    
                    $(ui.helper).animate({
                            top: posUiHelper
                        },
                        0,
                        function(){
                            var posSelf = 0;
                            for (var i = 0; i < 49; i++){
                                if (arrPosicion[i].nomElm == $(self).attr("id")){
                                    arrPosicion[i].posInicial -= 96;
                                    arrPosicion[i].numPos += 1;
                                    posSelf = arrPosicion[i].posInicial;
                                    break; 
                                } 
                            }
                            $(self).animate({
                                    top: posSelf
                                },
                                200
                            )
                        }
                    )
                }
            }

        },
        /*El valor 'intersect' permite la intersectación 
            entre los elementos droppable y draggable*/
        tolerance: 'intersect'
    });
}
/*Configuración de la columna Drop para eliminar mantener el control del movimiento excedido de los dulces
  y evitar que se ejecute de forma indefinida la ejecución de la funcion main*/
function columnaDrop(){
    $("div[class^='col']").droppable({
        accept:".elemento",
        drop: function(event, ui){
            //Se consulta la posición actual del elemento y se asigna al top
            for(var i = 0; i < 49; i++){
                if (arrPosicion[i].nomElm == $(ui.helper).attr("id")){
                    ultPosDrag = arrPosicion[i].posInicial;
                    break;
                }
            }

            if(op < 50 || op > 144){
                $(ui.helper).animate(
                    {
                        top: ultPosDrag
                    }, 
                    200,
                    function(){
                        $(this).css("z-index", "0");
                    }
                )             
            }
            setTimeout(main, 300);
            repetidor = setInterval(main, 3500); 
        }
    })
}

/*Funcion inicial para crear los primeros dulces */
function asignarDulces(){
       var cantElm = $(".elemento");
       if (cantElm.length == 0){
           var nCol=1; //Indica el número de la columna donde se debe posicionar el elemento creado
           var nPosElm = -1; //Indica la posición que se le asignará al elemento dentro de la columna
           for (var nEl = 0; nEl<49; nEl++){
   
               nPosElm +=1;
   
               if (nEl == 7 || nEl == 14 || nEl == 21 || nEl == 28 || nEl == 35 || nEl == 42){
                   nCol += 1;
                   nPosElm = 0;
               }
   
               var nPng = numAleatorio(1,4);
   
               crearElemento(nEl, nCol, nPng, nPosElm);
           }
    }
}

/*Debido a que al mover un dulce cambia la posición, esta función ordenará en la matriz arrPng
  los dulces según la posición que aparece en el arrPosicion, con el fin de realizar la 
  comparación del alineamiento de los dulces de forma vertical y horizontal*/
function ordenarDulces(){

    $(".elemento").draggable(
        {
            cancel: ".elemento"
        }
    )

    /*Separamos los dulces en cada uno de los arreglos*/
    for (var i = 0; i < 7; i++){
        for (var j = 0; j < 7; j++){
            for (var p = 0; p < 49; p++){
                if (arrPosicion[p].numCol == i+1 && arrPosicion[p].numPos == j){
                    arrPng[i][j]= arrPosicion[p].numPng;
                }
            }
        }
    }
}

/*Una vez ordenados los dulces se utiliza la funcion alineación para determinar en la matriz 
  arrBorrar los elementos que cumplen la condicion de ser "ELIMINADOS" tanto de forma
  vertical como horizontal*/
  function alineacion(pos1, pos2, cnt, estado, linea){
    
    if (estado=="agregar"){
        dulce[pos1] = pos2;
    }
    if (estado == "borrar"){
        var fila = pos1;
        for(var n = cnt; n > 0; n--){
            fila--;
            dulce[fila]=null;
        }
    }
    
    if (estado == "final"){
        
        if (cnt < 3){
            var fila = pos1;
            for(var n = cnt; n > 0; n--){
                dulce[fila]=null;
                fila--;
            }
        }
        if (linea=="horizontal"){
            for (var n = 0; n < 7; n++){
                if (dulce[n] != null){
                    arrBorrar[n][pos2] = dulce[n];
                }
            }
        }
        else{
            for (var n = 0; n < 7; n++){
                if (dulce[n] != null){
                    arrBorrar[pos2][n] = n;
                }
            }
        }
    }
}

/*La función comparar dulces, primero ejecuta la función ordenar dulces 
y luego realiza la verificación de cumplimiento de dulces repetidos en secuencia*/
function compararDulces(){
    verComparar = false;
    contar = 0;
    var elm = 0; 
    ordenarDulces();
    console.log("DULCES ORDENADOS");

    /*Verifica en la misma posición de todas las columnas si el dulce se repite,
      si se repite mínimo 3 veces, se incluye en el arreglo dulce[] mediante la función 
      alineación que a su vez lo colocará en la matriz arrBorrar*/
    for(var i=0; i<7; i++){
        cnt = 0;

        for(j=0; j<7; j++){
            if (j == 0 ){
                elm = arrPng[j][i];
            }

            if (elm == arrPng[j][i]){
                cnt++;
                alineacion(j, i , cnt, "agregar");
            }else{
                elm = arrPng[j][i];
                if (cnt < 3 ){
                    /* Se borran el numero de posiciones de cnt hacia atras
                       y se agrega el nuevo elemento en la siguiente posición del arreglo*/
                    alineacion(j, i , cnt, "borrar");
                    cnt = 1;
                    alineacion(j, i , cnt, "agregar");
                    
                }else{
                    //agregamos el nuevo elemento al array de dulces
                    cnt = 1;
                    alineacion(j, i, cnt, "agregar");
                }
            }

            if(j==6){
                //pasamos la columna a la tabla matriz de borrar
                alineacion(j, i, cnt, "final", "horizontal");
            }

        }
    }

    /*Realiza el mismo procedimiento que el for anterior, pero de forma vertical, es decir,
      verifica dentro de cada columna si tiene elementos repetidos con las mismas condiciones
      que el arreglo anterior*/
    for(var i=0; i<7; i++){
        cnt = 0;

        for(j=0; j<7; j++){
            if (j == 0 ){
                elm = arrPng[i][j];
            }

            if (elm == arrPng[i][j]){
                cnt++;
                alineacion(j, i, cnt, "agregar");
            }else{
                elm = arrPng[i][j];
                if (cnt < 3 ){
                    /* Se borran el numero de posiciones de cnt hacia atras
                       y se agrega el nuevo elemento en la siguiente posición del arreglo*/
                    alineacion(j, i , cnt, "borrar");
                    cnt = 1;
                    alineacion(j, i , cnt, "agregar");
                    
                }else{
                    //agregamos a l
                    cnt = 1;
                    alineacion(j, i, cnt, "agregar");
                }
            }

            if(j==6){
                //pasamos la columna a la tabla matriz de borrar
                alineacion(j, i, cnt, "final", "vertical");
            }

        }
    }

    console.log("DULCES COMPARADOS");
    /*Verificando el arreglo arrBorrar para generar un return booleano
      true = indica que si hay dulces para borrar y hay que proseguir
      false = indica que no hay dulces para eliminar*/

    for (var i = 0; i < 7; i++){
        for(var j = 0; j < 7; j ++){
            if (arrBorrar[i][j] != null){
                verComparar = true;
                return verComparar;
            }
        }
    }
    if (verComparar == false){
        return verComparar;
    }
}

function prepararEliminacion(){
    
    console.log("Inicio de la función preparEliminación()");
    for(var i = 0; i < 7; i++){
        for(var j = 0; j < 7; j++){
            arrCantPos[i][j] = 0;
        }
    }

    nomElemento = "";
    for(var i = 0; i<7; i++){
        for(var j = 0; j<7; j++){
            if (arrBorrar[i][j] != null){
                for (var p = 0; p < 49; p++){
                    if (arrPosicion[p].numCol == i+1 && arrPosicion[p].numPos == j){
                        if (nomElemento==""){
                            nomElemento = "#" + arrPosicion[p].nomElm; 
                        }else{
                            nomElemento = nomElemento + ",#" + arrPosicion[p].nomElm;
                        }
                        //Cambiamos el estado a false para saber qué elementos fueron eliminados
                        arrPosicion[p].posInicial = 0; 
                    }
                }
                
                /*En el arreglo incrementamos el numero de veces en que la misma posicion
                  se debe desplazar para efectuar la animación de los elementos existentes*/
                for (var n = j; n<7; n++){
                    arrCantPos[i][n]++;
                }

            }
        }
    }
    temporizador = setInterval(aniParpadear,500);
}

/*Función que se encarga de la animación de los elementos a eliminar*/
function aniParpadear(){
    if (contar==3){

        clearInterval(temporizador);
    }else{

        contar++;

        $(nomElemento).animate(
            {
                'opacity' : 1
            },
            250,
            function(){
                var self = this;
                $(this).animate(
                    {
                        'opacity' : 0
                    },
                    250
                )
            }
        )
        
    }
    
}

/*FUNCION QUE ELIMINA LOS DULCES */
function eliminarDulces(){
    
    if ($("#timer").text()!=""){
        console.log("INICIO de la función 'eliminarDulces'");

    /*En este punto los dulces se encuentran ocultos */
    $(nomElemento).css("opacity", "0"); 

    /*Guardamos la cantidad de posiciones que deben recorrer cada uno de los elementos EXISTENTES*/ 
    for(var i = 0; i < 7; i++){
        for(var j = 0; j < 7; j++){
            for (var p = 0; p < 49; p++){
                if (arrPosicion[p].numCol == i+1 && arrPosicion[p].numPos == j){
                    arrPosicion[p].cantPos = arrCantPos[i][j];
                }
            }
        }
    }
    //Eliminar dulces
    $(nomElemento).remove();

    for(var i = 0; i < 7; i++){
        for(var j = 0; j < 7; j++){
            if (arrBorrar[i][j]!=null){
                arrDrag[i]=1;
            }
        }
    }


    for (var i = 0; i < 7; i++ ){
        if (arrDrag[i]==1){
            for (var j = 0; j < 7; j ++){
                for (var p = 0; p < 49; p++ ){
                    if (arrPosicion[p].numCol == i+1 && arrPosicion[p].numPos == j ){
                        arrPosicion[p].posInicial = 0;
                        var idElm = "#"+arrPosicion[p].nomElm;
                        $(idElm).css("top", "0");
                    }
                }
            }
        }
    }


    //Actualizamos la puntuación determinando la longitud del arreglo nomElemento
    var arrEliminados = nomElemento.split(",");
    console.log("FUNCION eliminarDulces(), actualizamos la puntuación general");
    puntos += arrEliminados.length;
    $("#score-text").text(puntos);

    //Actualizamos la posicion de cada elemento
    for (var i = 0; i < 49; i++){
        arrPosicion[i].numPos = arrPosicion[i].numPos - arrPosicion[i].cantPos;
    }
    
    //Convertimos arrNom en un arreglo 
    arrNom = nomElemento.split(",");

    }
    
}

function recuperarDulces(){
    if ($("#timer").text()!=""){
        idBorrado = "";
        if (arrNom.length != 0){
            console.log ("INICIO DE LA FUNCIÓN recuperarDulces()");
            for (var i = 0; i < 7; i++){
            recup[i] = arrCantPos[i][6];
            }
                
            for (var i = 0; i < 7; i++){
                if (recup[i] == 0){
                    continue;
                }else{
                    
                    var nPng = numAleatorio(1,4);
                    var nPos = 7 - recup[i];
                    recuperarElemento(arrNom[0], i+1, nPng, nPos);
                    //eliminamos la primera posición del arreglo que almacena los nombres eliminados
                    var dulceBorrado = arrNom.shift();
                    if (idBorrado == ""){
                        idBorrado = dulceBorrado;
                    }else{
                        idBorrado = idBorrado + "," + dulceBorrado;
                    }
                    //restamos en uno la última posición del arreglo principal
                    arrCantPos[i][6] -=1;
                }
            }
    
            if (idBorrado != ""){
                $(idBorrado).animate(
                    {
                        top: 0
                    },
                    160,
                    function(){
                        verificarDulcesRecuperados();
                    } 
                );
            }
        }
    }
}

function verificarDulcesRecuperados(){
    console.info("Inicia la función verificarDulcesRecuperados");
    recuperarDulces();
}

function limpiar(){
    verComparar = false;
    nomElemento = "";
    arrNom = "";
    idBorrado = "";
    op = 0; 
    desplazamiento = "";
    cntAnimacion = 0;
    temporizador = 0;
    verificarCantPos = false;
    contar=0;
    ultPosDrag=0;

    for(var i = 0; i < 7; i++){
        for(var j = 0; j < 7; j++){
            arrPng[i][j] = null;
            arrBorrar[i][j] = null;
            arrCantPos[i][j] = 0;
        }
        recup[i] = null;
        dulce[i] = null;
        arrDrag[i] = null;
    }

    for (var i = 0; i < 49; i ++){
        arrPosicion[i].cantPos=0;
    }
    console.log("FUNCION LIMPIAR LISTO!!!");

}

/************************* FUNCION PRINCIPAL ************************/
function main(){
    if ($("#timer").text()!=""){
        console.log("INICIO DE LA 'FUNCION PRINCIPAL'");
        ordenarDulces();
        if (compararDulces()){
            console.log("SI HYA DULCES REPETIDOS --> verComparar = ", verComparar);
            prepararEliminacion();
            setTimeout(eliminarDulces, 1700);
            setTimeout(recuperarDulces, 2000);
            setTimeout(limpiar, 3150);
            $("#title-estado").css("color", "rgb(255, 0, 232)");
            $("#title-estado").text("VERIFICANDO DULCES....");
            

        }else{
            console.log("NO HAY MAS DULCES PARA COMPARAR!!!! --> verComparar = ", verComparar);
            clearInterval(repetidor);
            $(".elemento").draggable(
                {
                    cancel: ""
                }
            );
            $("#title-estado").css("color", "rgb(66, 255, 0)")
            $("#title-estado").text("PUEDES ARRASTRAR LOS DULCES");

            console.log("REPETIDOR = ", repetidor);
        }
    }else{
        clearInterval(repetidor);
        console.log("Estamos en la funcion main()...se termino el tiempo")
    }

}

// CAMBIAR COLOR DE TÍTULO
$(document).ready(function(){

    /* --------- CAMBIAR EL COLOR DEL TITULO -------- */
    function cambiarColor(){
        if($(".main-titulo").css("color") == "rgb(220, 255, 14)"){
            $(".main-titulo").css("color","white");
        }else{
            $(".main-titulo").css("color","rgb(220, 255, 14)");
        }
    }
    setInterval(cambiarColor,1000);

    /*Se cambia el valor flex-end por flex-start, para que 
      los objetos aparezcan al final de la columna*/
    $("div[class^='col']").css("justify-content", "flex-start");
    /*Se cambia a column-reverse para que los objetos se añadan desde
      la parte superior*/
    $("div[class^='col']").css("flex-flow", "column-reverse wrap");
    
    var titleEstado = $("<h2>");
    titleEstado.attr("id", "title-estado");
    titleEstado.css("background-color", "rgba(0, 0, 0, 0.7);");
    titleEstado.css("color", "white");
    titleEstado.css("font-size", "2.5em");
    titleEstado.css("font-family", "gameFont");
    titleEstado.css("width", "100%");
    titleEstado.css("text-align", "center");
    $("body").append(titleEstado);


    $(".btn-reinicio").click(function(){

        if ($(this).text() == "Iniciar"){
            $(this).text("Reiniciar");
            
            asignarDulces();
            main();
            repetidor = setInterval(main, 3200);

        }else{
            //Recargar la pagina
            location.reload();
        }

    }) 
});

