import { MedicoEspecialidad } from "./Medico_espe";
import { MedicoSubespecialidad } from "./Medico_sub";

export class Medico{
    usuarioId:string;
    apellido: string;
    email: string;
    nombre: string;
    numeroContacto: string;
    descripcion:string;
    especialidades: Array<MedicoEspecialidad>
    subespecialidades: Array<MedicoSubespecialidad>
}