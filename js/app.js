//Guarda la diferencia del desplazamiento para hacer la comparación de desplazamiento
//pero siempre va a ser positivo.
var op = 0; 
/*Guarda dos valores "subio" o  "bajo" para saber que animación se debe hacer
 en el elemento droppable*/ 
var desplazamiento = ""; 
//Registro de posiciones de los elementos
var arrPosicion=[
    //nomElm = guarda el nombre del elemento para encontrarlo y cambiar propiedades del objeto
    //posElm = se guardará la última posición "aceptada" del elemento
    /*dragElm = se sabrá si el elemento fue o no arrastrado por el mouse, ya que al eliminar un
                elemento, ocasionará que los elementos NO arrastrados se reubiquen automáticamente
                con un valor en el top de 0px, mientras que aquellos que SI fueron arrastrados se 
                quedan en la misma posición*/
    //estado = Se conocerá si el elemento fue eliminado o no.
    {nomElm: "elm0",  numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm1",  numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm2",  numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm3",  numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm4",  numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm5",  numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm6",  numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm7",  numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm8",  numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm9",  numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm10", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm11", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm12", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm13", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm14", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm15", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm16", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm17", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm18", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm19", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm20", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm21", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm22", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm23", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm24", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm25", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm26", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm27", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm28", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm29", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm30", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm31", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm32", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm33", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm34", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm35", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm36", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm37", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm38", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm39", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm40", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm41", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm42", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm43", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm44", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm45", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm46", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm47", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true},
    {nomElm: "elm48", numCol: 0, numPng: 0, posInicial: 0, dragElm: false, estado:true}
    
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
      $("div[class^='col']").css("border", "solid 1px red"); /*-------  ELIMINAR  ----------*/
});

//Function para generar un número aleatorio para asignar la imagen al elemento.
function numAleatorio(min, max){
    return Math.round(Math.random() * (max -min) + min);
}

// FUNCION PARA CREAR ELEMENTO Y CALCULAR POSICIÓN SEGUN DRAGGABLE 
function crearElemento(numElm, numColumn, numPng){
    var nuevoElemento = $("<div>");
    nuevoElemento.addClass("elemento");
    // nuevoElemento.css("border", "1px solid yellow");//Eliminar
    // nuevoElemento.text(numElm);//Eliminar
    // nuevoElemento.css("color", "white");//Eliminar
    // nuevoElemento.css("font-size", "3em");//Eliminar
    nuevoElemento.attr("id","elm" + numElm);
    nuevoElemento.css("opacity","1");
    nuevoElemento.css("z-index","0");

    arrPosicion[numElm].numCol = numColumn;
    arrPosicion[numElm].numPng = numPng;
    var claseColumna = ".col-" + numColumn;
    console.log("numEl = ", numElm, " / Columna = ", claseColumna);
    nuevoElemento.draggable({
        axis:"y",
        containment: claseColumna,
        drag: function(event, ui){
            /*Se suma el z-index por 100 porque el primer elemento
              tiene como index 0 y se necesita quetenga prioridad de visualización
              sino se hace el evento drag fallará */
            $(ui.helper).css("z-index", (numElm + 100));

            arrPosicion[numElm].dragElm = true;
            console.log("Drag "+ numElm + " top: ", ui.position.top);
            if(arrPosicion[numElm].posInicial==0 && ui.position.top > 0){
                desplazamiento = "bajo";
                op = ui.position.top - arrPosicion[numElm].posInicial;
                console.log("pasó por la opción 1"); 
            }
            if(arrPosicion[numElm].posInicial==0 && ui.position.top < 0){
                desplazamiento = "subio";
                op = ui.position.top - arrPosicion[numElm].posInicial;
                op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                console.log("pasó por la opción 2"); 
            }
            if(arrPosicion[numElm].posInicial>0 && ui.position.top == 0){
                desplazamiento = "subio";
                op = arrPosicion[numElm].posInicial - ui.position.top;
                console.log("pasó por la opción 3"); 
            }
            if(arrPosicion[numElm].posInicial<0 && ui.position.top == 0){
                desplazamiento = "bajo";
                op = ui.position.top - arrPosicion[numElm].posInicial;
                if (op < 0){
                    op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                }
                console.log("pasó por la opción 4"); 
            }
            if(arrPosicion[numElm].posInicial<0 && ui.position.top >0){
                desplazamiento = "bajo";
                op = ui.position.top - arrPosicion[numElm].posInicial;
                
                if (op < 0){
                    op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                }
                console.log("pasó por la opción 5"); 
            }
            if(arrPosicion[numElm].posInicial>0 && ui.position.top <0){
                desplazamiento = "subio";
                op = ui.position.top - arrPosicion[numElm].posInicial;
                
                if (op < 0){
                    op = op * (-1);//Lo convertimos en positivo para hacer la comparación 
                }
                console.log("pasó por la opción 6"); 
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
                console.log("pasó por la opción 7"); 
            }
            if(arrPosicion[numElm].posInicial>0 && ui.position.top > 0){
                op = ui.position.top - arrPosicion[numElm].posInicial;
                if (arrPosicion[numElm].posInicial < ui.position.top){
                    desplazamiento = "bajo";                    
                }else if (arrPosicion[numElm].posInicial > ui.position.top){
                    desplazamiento = "subio";
                    op=op * (-1);                    
                }
                console.log("pasó por la opción 8"); 
            }
            console.log("Posición Inicial : ", arrPosicion[numElm].posInicial,
                        "\nPosición Final : ", ui.position.top,
                        "\nDistancia total: ", op);
        }
    });

    //Creando la imagen
    var nuevaImagen = $("<img>");
    nuevaImagen.attr("src", "image/" + numPng + ".png");
    nuevaImagen.attr("alt", "Dulce" + numPng);
    nuevaImagen.css("width", "100%");

    $(nuevoElemento).append(nuevaImagen);
    $(claseColumna).append(nuevoElemento);

};

$(function(){

    //CREAR ELEMENTO
    var cantElm = $(".elemento");
    if (cantElm.length == 0){
        var nCol=1;
        for (var nEl = 0; nEl<49; nEl++){
            
            if (nEl == 7 || nEl == 14 || nEl == 21 || nEl == 28 || nEl == 35 || nEl == 42){
                nCol += 1;
            }

            var nPng = numAleatorio(1,4);

            crearElemento(nEl, nCol, nPng);
        }
    }

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
                    console.log("SUBIO ' ", $(ui.helper).attr("id")," ', y se desplazó", op, "px");
                    /*Se asigna el objeto this a la variable self porque en esta
                      instancia this hace referencia al elemento drop, y al usarlo
                      en la funcion de callback hará referencia al elemento drag*/
                    var self = this;
                    var posUiHelper = 0;
                    for (var i = 0; i < 49; i++){
                        if (arrPosicion[i].nomElm == $(ui.helper).attr("id")){
                            arrPosicion[i].posInicial -= 96;
                            posUiHelper = arrPosicion[i].posInicial;
                            break; 
                        }
                    }
                    
                    $(ui.helper).animate({
                            top: posUiHelper
                        },
                        0,
                        function(){
                            console.log("El elemento Drop es :" + $(self).attr("id"));

                            var posSelf = 0;
                            for (var i = 0; i < 49; i++){
                                if (arrPosicion[i].nomElm == $(self).attr("id")){
                                    arrPosicion[i].posInicial += 96;
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
                    
                    var self = this;
                    var posUiHelper = 0;
                    for (var i = 0; i < 49; i++){
                        if (arrPosicion[i].nomElm == $(ui.helper).attr("id")){
                            arrPosicion[i].posInicial += 96;
                            posUiHelper = arrPosicion[i].posInicial;
                            break; 
                        }
                    }
                    
                    $(ui.helper).animate({
                            top: posUiHelper
                        },
                        0,
                        function(){
                            console.log("El elemento Drop es :" + $(self).attr("id"));

                            var posSelf = 0;
                            for (var i = 0; i < 49; i++){
                                if (arrPosicion[i].nomElm == $(self).attr("id")){
                                    arrPosicion[i].posInicial -= 96;
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
        },
        /*El valor 'intersect' permite la intersectación 
          entre los elementos droppable y draggable*/
        tolerance: 'intersect'
    });

})

