import { Cirugia } from "./Cirugia";
import { Paciente } from "./Paciente";

export class PacienteCirugia{
    pacienteCirugiaId: number;
    tipo: string;
    paciente: Paciente;
    cirugia: Cirugia;
}