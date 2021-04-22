class Boleto {
    constructor(id, fechaEmision) {
        this.id = id;
        this.fechaEmision = fechaEmision;
    }

    esPar() {
        let esPar = false;
        if (this.id % 2 == 0)
            esPar = true;
        else
            esPar = false;
        return esPar;
    }
}

class Servicio {

    constructor() {
        var arrayBoletos = [new Boleto("15651", "22/04/2021"), new Boleto("65451", "22/04/2021")];
    }

    generarBoleto() {
        this.arrayBoletos.push(new Boleto("15258", "22/04/2021"))
    }

    mostrarBoletos() {
        for (let i = 0; i < this.arrayBoletos.length; i++) {
            const boleto = arrayBoletos[i];
            console.log(boleto.id);
        }
    }

    mostrarBoletosPares() {
        for (let i = 0; i < arrayBoletos.length; i++) {
            const boleto = arrayBoletos[i];
            if (boleto.isPar())
                console.log(boleto.id);
        }
    }
    mostrarBoletosImpares() {
        for (let i = 0; i < arrayBoletos.length; i++) {
            const boleto = arrayBoletos[i];
            if (!boleto.isPar())
                console.log(boleto.id);
        }
    }
}