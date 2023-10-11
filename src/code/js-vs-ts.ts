function somaComTipos(parametro1: number, parametro2: number) {
  return parametro1 + parametro2;
}

console.log(somaComTipos('2', 1));

type TipoDoMeuObjeto = {
  numero1: number;
  numero2: number;
  soma: () => number;
};

const meuObjetoComTipos: TipoDoMeuObjeto = {
  numero1: 10,
  numero2: 20,
  soma: function () {
    return this.numero1 + this.numero2;
  },
};

console.log(meuObjetoComTipos.soma());
