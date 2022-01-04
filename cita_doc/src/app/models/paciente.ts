import { Cita } from "./Cita";
import { DireccionPaciente } from "./Direccion_pac";
import { PacienteCirugia } from "./Paciente_cirg";
import { PacientePatologia } from "./Paciente_Patol";

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