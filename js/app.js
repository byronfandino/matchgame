var verComparar = false;
var repetidor="";

//String para almacenar los nombres de los elementos que se eliminarán
var nomElemento = "";

/*Guardará el array nomELemento del cual se irá eliminando a medida que 
  se vaya asignando al arreglo */
var arrNom = "";

//Guarda la fila de los elementos que se restauran 
var idBorrado = "";

//String para almacenar los nombres de los elementos recuperados por cada fila
var recup = [[null],[null],[null],[null],[null],[null],[null]];

//nueva variable
// var verificarCantPos = false;

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
    //nomElm = guarda el nombre del elemento para encontrarlo y cambiar propiedades del objeto
    //posElm = se guardará la última posición "aceptada" del elemento
    /*dragElm = se sabrá si el elemento fue o no arrastrado por el mouse, ya que al eliminar un
                elemento, ocasionará que los elementos NO arrastrados se reubiquen automáticamente
                con un valor en el top de 0px, mientras que aquellos que SI fueron arrastrados se 
                quedan en la misma posición*/
    //estado = Se conocerá si el elemento fue eliminado o no.
    {nomElm: "elm0",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm1",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm2",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm3",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm4",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm5",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm6",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm7",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm8",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm9",  numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm10", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm11", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm12", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm13", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm14", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm15", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm16", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm17", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm18", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm19", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm20", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm21", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm22", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm23", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm24", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm25", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm26", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm27", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm28", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm29", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm30", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm31", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm32", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm33", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm34", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm35", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm36", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm37", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm38", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm39", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm40", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm41", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm42", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm43", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm44", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm45", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm46", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm47", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true},
    {nomElm: "elm48", numCol: 0, numPos: 0, cantPos: 0, posInicial: 0, numPng: 0, dragElm: false, estado:true}
    
]

// CAMBIAR COLOR DE TÍTULO
$(document).ready(function(){

    //PREPARACIÓN INICIAL
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
    //   $("div[class^='col']").css("border", "solid 1px red"); /*-------  ELIMINAR  ----------*/

});

//Function para generar un número aleatorio para asignar la imagen al elemento.
function numAleatorio(min, max){
    return Math.round(Math.random() * (max -min) + min);
}

/* FUNCION PARA CREAR ELEMENTO, CALCULAR POSICIÓN SEGUN DRAGGABLE,
   ASGINAR NUMERO DE POSICION, UBICACION DE COLUMNA*/ 
function crearElemento(numElm, numColumn, numPng, numPosElm, recuperado){
    var nuevoElemento = $("<div>");
    nuevoElemento.addClass("elemento");
    nuevoElemento.css("border", "1px solid yellow");//Eliminar
    // nuevoElemento.text(numElm);//Eliminar
    // nuevoElemento.css("color", "white");//Eliminar
    // nuevoElemento.css("font-size", "3em");//Eliminar
    nuevoElemento.attr("id","elm" + numElm);
    nuevoElemento.css("opacity","1");
    nuevoElemento.css("z-index","0");
    if (recuperado){
        nuevoElemento.css("background-color","blue");
    }

    arrPosicion[numElm].numCol = numColumn;
    arrPosicion[numElm].numPng = numPng;
    arrPosicion[numElm].numPos = numPosElm;
    arrPosicion[numElm].estado = true;
    var claseColumna = ".col-" + numColumn;
    nuevoElemento.draggable({
        axis:"y",
        containment: claseColumna,
        drag: function(event, ui){
            /*Se suma el z-index por 100 porque el primer elemento
              tiene como index 0 y se necesita quetenga prioridad de visualización
              sino se hace el evento drag fallará */
            $(ui.helper).css("z-index", (numElm + 100));

            arrPosicion[numElm].dragElm = true;
            // console.log("Drag "+ numElm + " top: ", ui.position.top);
            if(arrPosicion[numElm].posInicial==0 && ui.position.top > 0){
                desplazamiento = "bajo";
                op = ui.position.top - arrPosicion[numElm].posInicial;
                // console.log("pasó por la opción 1"); 
            }
            if(arrPosicion[numElm].posInicial==0 && ui.position.top < 0){
                desplazamiento = "subio";
                op = ui.position.top - arrPosicion[numElm].posInicial;
                op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                // console.log("pasó por la opción 2"); 
            }
            if(arrPosicion[numElm].posInicial>0 && ui.position.top == 0){
                desplazamiento = "subio";
                op = arrPosicion[numElm].posInicial - ui.position.top;
                // console.log("pasó por la opción 3"); 
            }
            if(arrPosicion[numElm].posInicial<0 && ui.position.top == 0){
                desplazamiento = "bajo";
                op = ui.position.top - arrPosicion[numElm].posInicial;
                if (op < 0){
                    op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                }
                // console.log("pasó por la opción 4"); 
            }
            if(arrPosicion[numElm].posInicial<0 && ui.position.top >0){
                desplazamiento = "bajo";
                op = ui.position.top - arrPosicion[numElm].posInicial;
                
                if (op < 0){
                    op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                }
                // console.log("pasó por la opción 5"); 
            }
            if(arrPosicion[numElm].posInicial>0 && ui.position.top <0){
                desplazamiento = "subio";
                op = ui.position.top - arrPosicion[numElm].posInicial;
                
                if (op < 0){
                    op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                }
                // console.log("pasó por la opción 6"); 
            }
            if(arrPosicion[numElm].posInicial<0 && ui.position.top <0){
                if (arrPosicion[numElm].posInicial < ui.position.top){
                    desplazamiento = "bajo";                    
                }else if (arrPosicion[numElm].posInicial > ui.position.top){
                    desplazamiento = "subio";                    
                }

                op = ui.position.top - arrPosicion[numElm].posInicial;
                if (op < 0){
                    op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                }
                // console.log("pasó por la opción 7"); 
            }
            if(arrPosicion[numElm].posInicial>0 && ui.position.top > 0){
                op = ui.position.top - arrPosicion[numElm].posInicial;
                if (arrPosicion[numElm].posInicial < ui.position.top){
                    desplazamiento = "bajo";                    
                }else if (arrPosicion[numElm].posInicial > ui.position.top){
                    desplazamiento = "subio";
                    op=op * (-1);                    
                }
                // console.log("pasó por la opción 8"); 
            }
            // console.log("Posición Inicial : ", arrPosicion[numElm].posInicial,
            //             "\nPosición Final : ", ui.position.top,
            //             "\nDistancia total: ", op);
        }
    });

    //Creando la imagen
    var nuevaImagen = $("<img>");
    nuevaImagen.attr("src", "image/" + numPng + ".png");
    nuevaImagen.attr("alt", "Dulce" + numPng);
    nuevaImagen.css("width", "100%");

    $(nuevoElemento).append(nuevaImagen);
    $(claseColumna).append(nuevoElemento);

    if(recuperado){
        var moverElm = 6 - numPosElm;
        $(nuevoElemento).css("top", (moverElm * -96));
        /*Almacenamos en cantPos del arreglo principal, la cantidad de posiciones movidas 
          para posteriormente, realizar la animación descendente */
        arrPosicion[numElm].cantPos = moverElm;
    }
    soltarClick();
    elementoDrop();
};

function soltarClick(){
    /*Al soltar el click del mouse se evalua si se deja en la posición 
        arrastrada o se devualve al punto de origen*/    
        $(".elemento").on("mouseup",function(){
            console.info("Levantaste el click del elemento ", $(this).attr("id"),
                         " / La distancia recorrida es de: ", op, "px");
            $(this).css("z-index","60");
            //Si sobrepasa las posiciones permitidas, se regresa a su última posición guardada
            if(op < 50 || op > 144){
                //Se consulta la posición actual del elemento y se asigna al top
                ultPosDrag=0;
                for(var i = 0; i < 49; i++){
                    if (arrPosicion[i].nomElm == $(this).attr("id")){
                        ultPosDrag = arrPosicion[i].posInicial;
                        break;
                    }
                }
                $(this).animate(
                    {
                        top: ultPosDrag
                    }, 
                    500,
                    function(){
                        $(this).css("z-index", "0");
                    }
                )             
            }                            
        })
        console.log("1. Pasó por la función 'soltarClick'");
}
 
function elementoDrop(){
    $(".elemento").droppable({
        activeClass:"activaElemento",
        hoverClass:"sobreElemento",
        accept:".elemento",
        drop: function(event, ui){
            /*Verificamos si el desplazamiento se hizo hacia 
                arriba(valor negativo) o viceversa*/
            $(ui.helper).css("z-index","10");
            $(this).css("z-index","0")
            if (desplazamiento == "subio"){
                if((op >= 50) && (op <= 144)){
                    // console.log("SUBIO ' ", $(ui.helper).attr("id")," ', y se desplazó", op, "px");
                    
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
                            // console.log("El elemento Drop es :" + $(self).attr("id"));

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
                                500
                            )
                        }
                    )
                }
            }
            else{
                if((op >= 50) && (op <= 144)){
                    console.log("BAJO ' ", $(ui.helper).attr("id")," ', y se desplazó", op, "px");
                    
                    //Sumamos en uno el contador de movimientos
                    moveUser +=1;
                    
                    //Mostrar en pantalla los movimientos del usuario
                    $("#movimientos-text").text(moveUser);
                    var self = this;
                    var posUiHelper = 0;
                    for (var i = 0; i < 49; i++){
                        if (arrPosicion[i].nomElm == $(ui.helper).attr("id")){
                            arrPosicion[i].posInicial += 96;
                            posUiHelper = arrPosicion[i].posInicial;
                            arrPosicion[i].numPos -= 1;
                            break; 
                        }
                    }
                    
                    $(ui.helper).animate({
                            top: posUiHelper
                        },
                        0,
                        function(){
                            // console.log("El elemento Drop es :" + $(self).attr("id"));

                            var posSelf = 0;
                            for (var i = 0; i < 49; i++){
                                if (arrPosicion[i].nomElm == $(self).attr("id")){
                                    arrPosicion[i].posInicial -= 96;
                                    posSelf = arrPosicion[i].posInicial;
                                    arrPosicion[i].numPos += 1;
                                    break; 
                                } 
                            }
                            $(self).animate({
                                    top: posSelf
                                },
                                500
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
    console.log("2. Pasó por la función 'elementoDrop'");
}

/*************************** 1. CREAR DULCES ******************************************************/
function asignarDulces(){
    //Crear cada elemento (imagen) dentro de cada columna
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
           compararDulces();
    }
}
   
/*************************** 2. ORDENAR DULCES ****************************************************/
/*Debido a que al mover un dulce cambia la posición, esta función ordenará en la matriz arrPng
  los dulces según la posición que aparece en el arrPosicion, con el fin de realizar la 
  comparación del alineamiento de los dulces de forma vertical y horizontal*/
function ordenarDulces(){
    /*Separamos los dulces en cada uno de los arreglos
        que representan cada una de las columnas*/

    for (var i = 0; i < 7; i++){
        for (var j = 0; j < 7; j++){
            for (var p = 0; p < 49; p++){
                if (arrPosicion[p].numCol == i+1 && arrPosicion[p].numPos == j){
                    arrPng[i][j]= arrPosicion[p].numPng;
                }
            }
        }
    }

    console.log("3. Pasó por la función 'ordenarDulces'");
    console.log("arrPng Ordenados así: ", arrPng);
}

/*************************** 3. COMPARAR DULCES ****************************************************/
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
    ordenarDulces();

    console.log("Estamos en el INICIO de la función comparar Dulces. \n En este punto ya se asignaron los dulces al arreglo PNG", arrPng);
    console.log("EMPEZAMOS CON LA FUNCIÓN compararDulces()");
    var elm = 0; 

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

    console.log("arrBorrar quedó así:", arrBorrar );
    /*Verificando el arreglo arrBorrar para generar un return booleano
      true = indica que si hay dulces para borrar y hay que proseguir
      false = indica que no hay dulces para eliminar*/

    for (var i = 0; i < 7; i++){
        for(var j = 0; j < 7; j ++){
            if (arrBorrar[i][j] != null){
                verComparar = true;
                console.log("verComparar es verdadero , verComparar = ", verComparar);
                return verComparar;
            }
        }
    }
    if (verComparar == false){
        console.log("verComparar es false, verComparar = ", verComparar);
        return verComparar;
    }

    console.log("4. FIN DE LA FUNCION compararDulces()");
    //--------------------> prepararEliminacion();
}

function prepararEliminacion(){
    // verPrepEliminacion = false;
    /*Recorremos el arreglo para obtener el id de cada elemento de la matriz
      y determinar el numero de posiciones que debe recorrer cada elemento*/

    //limpiamos el arreglo que contendrá las poscisiones de cada elemento
    console.log("INICIO DE LA FUNCION prepararEliminacion()\nEmpezamos vaciando el arreglo arrCantPos()");
    
    for(var i = 0; i < 7; i++){
        for(var j = 0; j < 7; j++){
            arrCantPos[i][j] = 0;
        }
    }
    console.info("FUNCION prepararEliminacion(), arrCantPos() vaciado; el arrgelo quedó así:", arrCantPos);

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
                        arrPosicion[p].estado = false;
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
    console.log("FIN de la asignación de valores al arreglo arrCantPos(). \nMediante la variable 'verificarCanPos' recorremos el arreglo para saber si hay elementos para eliminar o no");
    // console.log("FUNCION prepararEliminacion(), valor inicial de verificarCantPos = ", verificarCantPos);
 
    temporizador = setInterval(aniParpadear,500);
}

/*Función que se encarga de la animación de los elementos a eliminar*/
function aniParpadear(){
    if (contar==3){
        verPrepEliminacion= true;
        clearInterval(temporizador);
    }else{
        verPrepEliminacion = false;
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
   //Por último eliminamos los dulces 
   console.log("FUNCION eliminarDulces(), empezamos la eliminaciòn literal de los dulces");
   $(nomElemento).remove();
   
   //Actualizamos la puntuación determinando la longitud del arreglo nomElemento
   var arrEliminados = nomElemento.split(",");
   console.log("FUNCION eliminarDulces(), actualizamos la puntuación general");
    puntos += arrEliminados.length;
    $("#score-text").text(puntos);

    //Actualizamos la posicion de cada elemento
    for (var i = 0; i < 49; i++){
        arrPosicion[i].numPos = arrPosicion[i].numPos - arrPosicion[i].cantPos;
    }
    
    /********************************************************************** */
    //Convertimos arrNom en un arreglo 
    arrNom = nomElemento.split(",");

    /*Se realiza un mapeo en el arreglo para eliminar los primeros 4 cuarateres de cada
      uno de los elementos del arreglo*/
    arrNom = arrNom.map(
        function(item){ 
            item = item.substring(4); 
            return item 
        }
    );

}

function recuperarDulces(){
    console.log ("INICIO DE LA FUNCIÓN recuperarDulces()");

    for (var i = 0; i < 7; i++){
        recup[i] = arrCantPos[i][6];
    }
       
    idBorrado = "";
    for (var i = 0; i < 7; i++){
        if (recup[i] == 0){
            continue;
        }else{

            var nPng = numAleatorio(1,4);
            var nPos = 7 - recup[i];
            //             numELm  ,numCol, numPng, numPosElm, recuperado       
            crearElemento(arrNom[0],  i+1,     nPng , nPos,     true);
            console.log("arrNom : \n",arrNom);
            console.log("arrCantPos : \n",arrCantPos);
            //eliminamos la primera posición del arreglo que almacena los nombres eliminados
            var dulceBorrado = arrNom.shift();
            if (idBorrado == ""){
                idBorrado = "#elm"+dulceBorrado;
            }else{
                idBorrado = idBorrado + ",#elm" + dulceBorrado;
            }
            //restamos en un la última posición del arreglo principal
            arrCantPos[i][6] -=1;

        }
    }
    console.log("FUNCION recuperarDulces(), ejecutando animación de caida de los dulces");
    $(idBorrado).animate(
        {
            top: 0
        },
        200,
        function(){
            console.log("FUNCION recuperarDulces(), terminaron de caer los dulces llamamos la funcion verificarDulcesRecuperados");
            setTimeout(verificarDulcesRecuperados,0);
        }
    );
}

function verificarDulcesRecuperados(){
    console.log ("INICIO DE LA FUNCIÓN verificarDulcesRecuperados()");
    recuperarDulces();
    console.log ("FIN DE LA FUNCIÓN verificarDulcesRecuperados()");
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

    for(var i = 0; i < 7; i++){
        for(var j = 0; j < 7; j++){
            arrPng[i][j] = null;
            arrBorrar[i][j] = null;
            arrCantPos[i][j] = 0;
        }
        recup[i] = null;
        dulce[i] = null;
    }

    for (var i = 0; i < 49; i ++){
        arrPosicion[i].cantPos=0;
    }
    console.log("11. Pasó por la función 'Limpiar'");
    console.info("FUNCION limpiar(): Se borró el arreglo arrCantPos : \n", arrCantPos);
}

/************************* FUNCION PRINCIPAL ************************/
function main(){
    console.log("INICIO DE LA 'FUNCION PRINCIPAL'");
    ordenarDulces();
    if (compararDulces()){
        console.log("VERDADERO compDulces = ", verComparar);
        prepararEliminacion();
        setTimeout(eliminarDulces, 2000);
        setTimeout(recuperarDulces, 2500);
        setTimeout(limpiar, 3950);
    }else{
        console.log("FALSO!!!! compDulces = ", verComparar);
        console.log("arrPng = ", arrPng);
        clearInterval(repetidor);
    }
}

$(function(){
    asignarDulces();
    main();
    repetidor = setInterval(main, 4000);
 }
)
