var horasPagadas = require('./horasPagadas');

/*var horasPagadas = {
    pagoMes: (precioHora,horasTrabajas) => ((precioHora*horasTrabajas)*20),
    pagos: (precioHora, personas,horasTrabajas) => ((precioHora*horasTrabajas)*personas),
    holgura: (precioHora, horasTrabajas) => ((precioHora*horasTrabajas)/0.08)
};*/
function costoTotal(precioHora,personas,horasTrabajas, materiales) {
    console.log("Costo total de gastos en el proyecto");
    horasPagadas(precioHora,personas,horasTrabajas, materiales,(err,hP) => {
        if (err) {
            console.log("ERROR", err.message);
        }else{
            var pagoBruto = (hP.pagoMes(precioHora,horasTrabajas))*4;
            var hol = hP.holgura(precioHora,horasTrabajas);
            var cobro = hP.pagos(precioHora,personas,horasTrabajas);
            var totalPago = (pagoBruto-hol);
            var totalPagos = (cobro*20)*4;
            var costoT = totalPagos+materiales;
            console.log("Una Persona cobra por dia tomando en cuenta que trabajo 8 horas diarias por 4 meses: $" + pagoBruto);
            console.log("La holgura retenida en caso de accidentes por persona es: $" + hol);
            console.log("Total pagado por persona: $" + totalPago);
            console.log("Total pagado a 15 personas en el proyecto: $" + totalPagos);
            console.log("Costos total incluyendo los materiales: $" + costoT);
        }
    });
    
}
costoTotal(8,15,8,50000);

