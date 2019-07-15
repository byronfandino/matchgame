//Guarda la diferencia del desplazamiento para hacer la comparación de desplazamiento
//pero siempre va a ser positivo.
var op = 0; 
//Guarda el valor de op en negativo o positivo según sea el caso para determinar si
//el desplazamiento se hizo en y o -y 
var desplazamiento = 0; 
//Ultimo elemento drag 
var ultElemDrag = 0;
//Último elemento drop
var ultElemDrop = 0;
//Registro de posiciones de los elementos
var arrPosicion=[
    //posElm = se guardará la última posición del elemento
    //dragElm = se sabrá si el elemento fue o no arrastrado por el mouse
    //estado = Se conocerá si el elemento fue eliminado o no.
    {posInicial: 0, dragElm: false, estado:true},//Elemento 0
    {posInicial: 0, dragElm: false, estado:true},//Elemento 1
    {posInicial: 0, dragElm: false, estado:true},//Elemento 2
    {posInicial: 0, dragElm: false, estado:true},//Elemento 3
    {posInicial: 0, dragElm: false, estado:true},//Elemento 4
    {posInicial: 0, dragElm: false, estado:true},//Elemento 5
    {posInicial: 0, dragElm: false, estado:true},//Elemento 6
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
    var nuevoElemento = $("<a>");
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
              tiene como index 0*/
            $(ui.helper).css("z-index", (numElm + 100));

            arrPosicion[numElm].dragElm = true;
            console.log("Drag "+ numElm + " top: ", ui.position.top);
            if(arrPosicion[numElm].posInicial==0 && ui.position.top > 0){
                op = ui.position.top - arrPosicion[numElm].posInicial;
                desplazamiento = op;
                console.log("pasó por la opción 1"); 
            }
            if(arrPosicion[numElm].posInicial==0 && ui.position.top < 0){
                op = ui.position.top - arrPosicion[numElm].posInicial;
                desplazamiento = op;
                op = op * (-1);//Lo convertimos en positivo para hace la comparación 
                console.log("pasó por la opción 2"); 
            }
            if(arrPosicion[numElm].posInicial<0 && ui.position.top >0){
                op = ui.position.top + arrPosicion[numElm].posInicial;
                if (op < 0){
                    desplazamiento = op;
                    op = op * (-1);//Lo convertimos en positivo para hace la comparación 
                }
                console.log("pasó por la opción 3"); 
            }
            if(arrPosicion[numElm].posInicial<0 && ui.position.top <0){
                op = ui.position.top - arrPosicion[numElm].posInicial;
                if (op < 0){
                    desplazamiento = op;
                    op = op * (-1);//Lo convertimos en positivo para hace la comparación 
                }
                console.log("pasó por la opción 4"); 
            }
            //Se asigna el último elemento arrastrado a la variable global
            ultElemDrag = numElm;

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
        console.info("Levantaste el click del elemento", $(this).attr("id") ," / EL valor de op es ", op);
        $(this).css("z-index","0");
        if(op < 50 || op > 143){
            $(this).animate(
                {
                    top: 0
                }, 
                1000
            )             
        }                            
    })

    $(".elemento").droppable({
        activeClass:"activaElemento",
        hoverClass:"sobreElemento",
        accept:".elemento",
        /*Con drop definimos que vamos a hacer
          cuando soltemos el elemento dentro del contenedor*/
        drop: function(event, ui){
            console.log("Drop", $(ui.helper).css("top"));
            /*Verificamos si el desplazamiento se hizo hacia 
              arriba(valor negativo) o viceversa*/

            if (desplazamiento >=0){
                if((op >= 50) || (op <= 144)){
                    $(ui.helper).animate({
                            top: "+=96"
                        },
                        1000,
                        function(){
                            $(this).animate({
                                    top: "-=96"
                                },
                                1000
                            )
                            //Guardando la posición del drag
                            arrPosicion[ultElemDrag].posInicial += 96;
                            //Guardando la posición del drop
                            arrPosicion[ultElemDrop].posInicial -= 96;
                            
                        }
                    )
                }
            }else{
                if((op >= 50) || (op <= 144)){
                    $(ui.helper).animate({
                            top: "-=96"
                        },
                        1000,
                        function(){
                            $(this).animate({
                                    top: "+=96"
                                },
                                1000
                            )
                            //Guardando la posición del drag
                            arrPosicion[ultElemDrag].posInicial -= 96;
                            //Guardando la posición del drop
                            arrPosicion[ultElemDrop].posInicial += 96;   
                        }
                    )
                }
            }
        },
        tolerance: 'intersect'
    });
})

