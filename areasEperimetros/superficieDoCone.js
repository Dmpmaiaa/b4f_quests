function superficieDoCone(raio, altura){
    const pi = Math.PI;
    const ladoInclinado = Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2));
    const areaBase = pi * Math.pow(raio, 2);
    const areaLateral = pi * raio * ladoInclinado;
  
    const areaDaSuperficie = areaBase + areaLateral;
    return areaDaSuperficie;
  }
