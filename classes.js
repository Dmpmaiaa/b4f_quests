class Porta {
    constructor() {
        this.trinco = true;
    }

    trancarEDestrancar() {
        this.trinco = !this.trinco
    }
}

const nossaPorta = new Porta()



nossaPorta.trancarEDestrancar()
console.log(nossaPorta.trinco)
nossaPorta.trancarEDestrancar()


