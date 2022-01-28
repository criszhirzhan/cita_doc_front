import { Direccion } from "./Direccion";
import { Paciente } from "./Paciente";

export class DireccionPaciente{
    direccionPacienteId: number;
    tipo: string;
    paciente: Paciente;
    direccion: Direccion;
}