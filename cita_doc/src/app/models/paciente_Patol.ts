import { Enfermedad } from "./enfermedad";
import { Paciente } from "./paciente";

export class PacientePatologia{
    pacientePatologiaId: number;
    tipo: string;
    paciente: Paciente;
    enfermedad: Enfermedad;

}