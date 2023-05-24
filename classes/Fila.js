class Fila {
    constructor() {
        this.fila = []
    }

    adicionar(valor){
        this.fila.push(valor)
    }

    remover(){
        if(this.fila.length > 0){
            this.fila.shift()
        }else{
            return "Fila vazia!"
        }
    }

    obterElemento(){
        return this.fila.length > 0 ? this.fila[0] : 'Fila vazia!'
    }
}