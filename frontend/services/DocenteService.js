class DocenteService {

    constructor() {
        this.URI = `http://localhost:4000/api/v2/docente`;
    }

    async getDocentes() {
        const response = await fetch(this.URI);    
        const docentes = await response.json();
        return docentes;
    }

    async postDocente(docente) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: docente
        });
        const data = await res.json();
    }

    async deleteDocente(docenteId) {
        const res = await fetch(`${this.URI}/${docenteId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default DocenteService;