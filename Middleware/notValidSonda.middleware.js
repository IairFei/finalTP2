export const notValidSonda = async (req, res, next) => {
    try {
      const sonda = req.body;
      console.log(sonda)
      if (!sonda) throw error;
      next();
    } catch (error) {
      res.status(422).send("La sonda proporcionada es invalida, no puede tener campos null");
    }
  };

  export const notIdValid = async (req, res, next) => {
    try {
      const { id } = req.body;
      if (!id) throw error;
      next();
    } catch (error) {
      res.status(422).send("El id propocionado no se encuentra en la lista de sondas");
    }
  };