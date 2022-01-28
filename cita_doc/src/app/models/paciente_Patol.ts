import { Enfermedad } from "./Enfermedad";
import { Paciente } from "./Paciente";

export class PacientePatologia{
    pacientePatologiaId: number;
    tipo: string;
    paciente: Paciente;
    enfermedad: Enfermedad;

}