function menorData(datas){

    return new Date(Math.min(...datas))
}


console.log(menorData([new Date('Wed Jul 08 1987 12:25:33 GMT+0200 (Central European Summer Time)'), new Date("Fri Apr 15 1994 00:11:18 GMT+0200 (Central European Summer Time)"), new Date("2020-05-17 09:00"), new Date("2006-05-17 09:00")]));

// $ node menorData.js 
// 1987-07-08T10:25:33.000Z