import Sonda from "../Model/Sonda.model.js";

class SondaService {
    sonda = new Sonda();

    createSondaService = async (sonda) => {
        try {
            if (sonda.id < 1 || sonda.id > 5) throw new Error("El ID debe estar entre 1 y 5");
            if (sonda.temperatura < -20 || sonda.temperatura > 100) throw new Error("La temperatura debe estar entre -20 y 100");
            const newSonda = await this.sonda.create(sonda);
            return newSonda;
        } catch (error) {
            throw error;
        }
    };

    getSondasService = async () => {
        const sondas = await this.sonda.getAll();
        return sondas;
    };

    getSondaByIdService = async (id) => {
        const sonda = await this.sonda.getById(parseInt(id));
        return sonda;
    };
}

export default SondaService;
