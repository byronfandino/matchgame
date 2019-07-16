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
    {nomElm : "elm0", posInicial: 0, dragElm: false, estado:true},
    {nomElm : "elm1", posInicial: 0, dragElm: false, estado:true},
    {nomElm : "elm2", posInicial: 0, dragElm: false, estado:true},
    {nomElm : "elm3", posInicial: 0, dragElm: false, estado:true},
    {nomElm : "elm4", posInicial: 0, dragElm: false, estado:true},
    {nomElm : "elm5", posInicial: 0, dragElm: false, estado:true},
    {nomElm : "elm6", posInicial: 0, dragElm: false, estado:true}
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
      $(".elemento").css("border", "solid 1px yellow"); /*-------  ELIMINAR  -------*/
});

function crearElemento(numElm){
    var nuevoElemento = $("<div>");
    nuevoElemento.addClass("elemento");
    nuevoElemento.css("border", "1px solid yellow");//Eliminar
    nuevoElemento.text(numElm);//Eliminar
    nuevoElemento.css("color", "white");//Eliminar
    nuevoElemento.css("font-size", "3em");//Eliminar
    nuevoElemento.attr("id","elm" + numElm);
    nuevoElemento.css("opacity","1")
    nuevoElemento.css("z-index",numElm);
    nuevoElemento.draggable({
        axis:"y",
        containment: '.col-' + (numElm+1),
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
    var numCol = ".col-" + 1;
    $(numCol).append(nuevoElemento);
};

$(function(){

    //CREAR ELEMENTO
    var cantElm = $(".elemento");
    if (cantElm.length == 0){
        for (var i = 0; i<7; i++){
            crearElemento(i);
        }
    }

    /*Al soltar el click del mouse se evalua si se deja en la posición 
    arrastrada o se devualve al punto de origen*/
    
    $(".elemento").on("mouseup",function(){
        console.info("Levantaste el click del elemento ", $(this).attr("id"),
                     " / La distancia recorrida es de: ", op, "px");
        $(this).css("z-index","0");
        //Si sobrepasa las posiciones permitidas, se regresa a su última posición guardada
        if(op < 50 || op > 144){
            //Se consulta la posición actual del elemento y se asigna al top
            ultPosDrag=0;
            for(var i = 0; i < 7; i++){
                if (arrPosicion[i].nomElm == $(this).attr("id")){
                    ultPosDrag = arrPosicion[i].posInicial;
                    break;
                }
            }
            $(this).animate(
                {
                    top: ultPosDrag
                }, 
                1000
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

            if (desplazamiento == "subio"){
                if((op >= 50) && (op <= 144)){
                    console.log("SUBIO ' ", $(ui.helper).attr("id")," ', y se desplazó", op, "px");
                    /*Se asigna el objeto this a la variable self porque en esta
                      instancia this hace referencia al elemento drop, y al usarlo
                      en la funcion de callback hará referencia al elemento drag*/
                    var self = this;
                    var posUiHelper = 0;
                    for (var i = 0; i < 7; i++){
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
                            for (var i = 0; i < 7; i++){
                                if (arrPosicion[i].nomElm == $(self).attr("id")){
                                    arrPosicion[i].posInicial += 96;
                                    posSelf = arrPosicion[i].posInicial;
                                    break; 
                                } 
                            }
                            $(self).animate({
                                    top: posSelf
                                },
                                1000
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
                    for (var i = 0; i < 7; i++){
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
                            for (var i = 0; i < 7; i++){
                                if (arrPosicion[i].nomElm == $(self).attr("id")){
                                    arrPosicion[i].posInicial -= 96;
                                    posSelf = arrPosicion[i].posInicial;
                                    break; 
                                } 
                            }
                            $(self).animate({
                                    top: posSelf
                                },
                                1000
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

