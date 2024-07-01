import Palabra from "../Model/Palabra.js";
import { palabraValida } from "../utils/utils.js";

class PalabraService {
  palabra = new Palabra();
  createPalabraService = async (palabra) => {
    try {
      const validate = palabraValida(palabra);
      if (!validate) throw error;
      const newPalabra = await this.palabra.create(palabra);
      return newPalabra;
    } catch (error) {
      throw error;
    }
  };
  getPalabrasService = async (req, res) => {
    const palabras = await this.palabra.getAll();
    return palabras;
  };

  getCatidadPalabrasService = async (cantidad) => {
    try {
      const newPalabra = await fetch(
        `https://texto.deno.dev/palabras?cantidad=${cantidad}`
      );
      const data = await newPalabra.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
}

export default PalabraService;