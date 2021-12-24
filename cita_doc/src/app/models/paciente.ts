import { Cita } from "./cita";
import { DireccionPaciente } from "./direccion_pac";
import { PacienteCirugia } from "./paciente_cirg";
import { PacientePatologia } from "./paciente_Patol";

export class Paciente{
    apellido: string;
    email: string;
    nombre: string;
    numeroContacto: string;
    password: string;
    recoveryEmail: string;
    username: string;
    fechaNacimiento: string;
    genero: string;
    tipoSangre: string;
    estado:string;
    pacientePatologias:  Array<PacientePatologia>;
    pacienteCirugias: Array<PacienteCirugia>;
    direccionPacientes: Array<DireccionPaciente>;
    //citas: Array<Cita>;

}