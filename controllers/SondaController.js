import SondaService from "../service/SondaService.js";

class SondaController {
    sonda = new SondaService();

    createSonda = async (req, res) => {
        try {
            const sonda = req.body;
            const newSonda = await this.sonda.createSondaService(sonda);
            res.status(201).json({ status: "success", payload: newSonda });
        } catch (error) {
            res.status(422).json({ status: "Error", msg: "Error, debe ingresar los datos correctos" });
            console.log(error.message);
        }
    };

    getSondas = async (req, res) => {
        try {
            const sondas = await this.sonda.getSondasService();
            res.status(200).json({ status: "success", payload: sondas });
        } catch (error) {
            res.status(422).json({ status: "Error", msg: "Error, no se pudieron obtener las sondas" });
            console.log(error.message);
        }
    };

    getSondaById = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await this.sonda.getSondaByIdService(id);
            console.log(data)
            if (data) {
                res.status(200).json({ status: "success", payload: data });
            } else {
                res.status(404).json({ status: "Error", msg: "Número de sonda incorrecto" });
            }
        } catch (error) {
            res.status(422).json({ status: "Error", msg: "Error, ingrese un numero" });
        };
    };
}

export default SondaController;
