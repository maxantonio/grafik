    //namespace global
    var GRAFIK = GRAFIK || {};
    window.GRAFIK = GRAFIK;

    GRAFIK.Tooltip = GRAFIK.Tooltip || {};
    GRAFIK.logs = []; //mensajes de errores

// Caracteristicas generales de todas las graficas
    GRAFIK.default_options = {
        fontFamily: "Arial",// la fuente
        fontSize: 12,// tamano de letra
        background: "", //color de fondo de la grafica
        chart_width: 550, // Ancho
        chart_height: 300, // Altura
        showgridLines: true, // mostrar las grillas
        gridLines: {color: 'lightgrey', horizontal: true, vertical: true},
        ticks: {x: 5, y: 5}, //ticks del eje X and Y
        animation: true, // Si tiene animación o no
        animacionType: '', // Tipo de animacion
        responsive: true, //Responsiva
        showToolTip: true,
        showLeyenda: true //Si se muestra o no la leyenda
    };


    //Almacena los errores que ocurran en tiempo de ejecucion
    GRAFIK.log = function(error){
        GRAFIK.logs.push(error);
        console.info(error);
    };

    // Mezcla las opciones por default con las opciones especificadas por el usuario
    GRAFIK.my_extend = function(opciones){
        // implementarlo
    };