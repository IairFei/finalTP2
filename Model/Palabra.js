class Palabra {
    palabras = [];
    create = async (palabra) => {
      this.palabras.push(palabra);
      return "ok";
    };
  
  getAll=async()=>{
     return this.palabras.join(" ")
  }
  
  }
  
  export default Palabra;