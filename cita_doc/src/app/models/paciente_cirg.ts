import { Cirugia } from "./cirugia";
import { Paciente } from "./paciente";

export class PacienteCirugia{
    pacienteCirugiaId: number;
    tipo: string;
    paciente: Paciente;
    cirugia: Cirugia;
}