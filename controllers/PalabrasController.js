import PalabraService from "../service/PalabraService.js";
class PalabrasController {
  palabra = new PalabraService();

  createPalabra = async (req, res) => {
    try {
      const { palabra } = req.body;
      // if (!palabra) throw error;
      const newPalabra = await this.palabra.createPalabraService(palabra);
      res.status(200).send(newPalabra);
    } catch (error) {
      res.status(422).send("no valida");
    }
  };

  getPalabras = async (req, res) => {
    try {
      const palabras = await this.palabra.getPalabrasService();
      res.status(200).send(palabras);
    } catch (error) {
      res.status(422).send("no valida");
    }
  };

  deletePalabra = async (req, res) => {
    try {
      res.status(200).send("palabraeliminada correctamente");
    } catch (error) {
      res.status(422).send("palabra no válida");
    }
  };

  getCatidadPalabras = async (req, res) => {
    try {
      const { cantidad } = req.params;
      if (!cantidad) throw error;
      const data = await this.palabra.getCatidadPalabrasService(cantidad);
      res.status(200).send(data);
    } catch (error) {
      res.status(422).send("cantidad no válida");
    }
  };
}



export default PalabrasController;