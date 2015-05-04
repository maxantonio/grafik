//test
var tiempo =['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'];
tiempo = tiempo.slice(1,tiempo.length);

//Selecciona el periodo
function todo () {
  chart.axis.min({x: tiempo[0] });
};
function tresdias () {
  chart.axis.min({x: tiempo[tiempo.length-3] });
};
