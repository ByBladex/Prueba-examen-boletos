class Boleto {
    constructor(id, fechaEmision) {
        this.id = id;
        this.fechaEmision = fechaEmision;
    }
}

class Servicio {
    
    constructor() {
        this.boletos = [new Boleto('32174', '2021-04-25')];
    }

    generarBoleto(id, fecha) {
        this.boletos.push(new Boleto(id, fecha));
    }
}