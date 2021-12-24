import { Direccion } from "./direccion";
import { Paciente } from "./paciente";

export class DireccionPaciente{
    direccionPacienteId: number;
    tipo: string;
    paciente: Paciente;
    direccion: Direccion;
}