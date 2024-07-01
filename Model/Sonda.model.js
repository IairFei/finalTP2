class Sonda {
  sondas = [];

  create = async (sonda) => {
      this.sondas.push(sonda);
      return sonda;
  };

  getAll = async () => {
      return this.sondas;
  };

  getById = async (id) => {
    return this.sondas.find(sonda => sonda.id === parseInt(id));
  };
}

export default Sonda;
