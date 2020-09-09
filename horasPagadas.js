    exports.pagoMes =  (precioHora,horasTrabajas) => ((precioHora*horasTrabajas)*20);
    exports.pagos =  (precioHora, personas,horasTrabajas) => ((precioHora*horasTrabajas)*personas);
    exports.holgura =  (precioHora, horasTrabajas) => ((precioHora*horasTrabajas)/0.08);