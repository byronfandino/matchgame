var verificador ="";
var conteoSegundos = 60;
var conteoMinutos = 1;
var tiempo = $("#timer").text(); 
var tiempo = tiempo.split(":");


function cronometro (){
    conteoSegundos--;
    if (conteoSegundos < 10){
        $("#timer").text("0"+conteoMinutos + ":0" + conteoSegundos);
    }else{
        $("#timer").text("0"+conteoMinutos + ":" + conteoSegundos);
    }

    if (conteoSegundos == 0){
        if (conteoMinutos > 0){
            conteoMinutos--;
            conteoSegundos = 60;
        }        
        else{
            clearInterval(verificador);
            quitarTablero();
            quitarTiempo();
            $("title-estado").remove();
            setTimeout(tabPuntos,500);
            $(".elemento").remove();
            $(".panel-tablero").before("<h2 style='color: yellow; font-size:3em; font-family: gameFont; text-align: center; width:100%'>Juego Terminado</h2>")
        }
    }
}

function quitarTablero(){
    $(".main-container").removeClass("display", "flex");
    $(".panel-tablero").animate(
        {
            width: 0,
            height: 0,
            border: 0
        },
        500
    );
}

function quitarTiempo(){
    setTimeout((function(){$("#timer").text("")}),200);
    
    setTimeout((function(){
        $(".panel-score > div:nth-child(3) > h2").attr("id", "title-tiempo");
        $("#title-tiempo").text("");
    }),200);

    $(".time").animate(
        {
            width: 0,
            height: 0,
            border: 0
        },
        500,
        function(){
            $(".time").remove();
        }
    );
}

function tabPuntos (){
    $(".panel-score").animate(
        {
          width: "+=1200"
        },
        500
    )
}

$(document).ready(function(){
    $(".btn-reinicio").click(function(){
        if ($(this).text() == "Iniciar"){            
            verificador = setInterval(cronometro,1000);
        }
    }) 
});
