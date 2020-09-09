/*exports.pagoMes =  (precioHora,horasTrabajas) => ((precioHora*horasTrabajas)*20);
exports.pagos =  (precioHora, personas,horasTrabajas) => ((precioHora*horasTrabajas)*personas);
exports.holgura =  (precioHora, horasTrabajas) => ((precioHora*horasTrabajas)/0.08);*/

module.exports = (precioHora,personas,horasTrabajas, materiales,callback) => {
    if (precioHora<=0||personas<=0||horasTrabajas<=0||materiales<=0)
        setTimeout(() => 
            callback(
                new Error("No hay presupuesto"), 
                null),
            2000);
    else
        setTimeout(() => 
            callback(null, {
                pagoMes:  (precioHora,horasTrabajas) => ((precioHora*horasTrabajas)*20),
                pagos: (precioHora, personas,horasTrabajas) => ((precioHora*horasTrabajas)*personas),
                holgura: (precioHora, horasTrabajas) => ((precioHora*horasTrabajas)/0.08)
            }), 
            2000);
}
