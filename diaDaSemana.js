function diaDaSemana(dia){
    if (dia < 1 || dia > 7) return 'Número inválido. Por favor insira um número entre 1 e 7.'
   const mapaDosDias = new Map([
       [1, 'Domingo'],
       [2, 'Segunda-Feira'],
       [3, 'Terça-Feira'],
       [4, 'Quarta-Feira'],
       [5, 'Quinta-Feira'],
       [6, 'Sexta-Feira'],
       [7, 'Sábado'],
   ])

   return mapaDosDias.get(dia)
}