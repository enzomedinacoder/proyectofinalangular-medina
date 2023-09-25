import { Component } from '@angular/core';
import { Ialumno } from 'src/models/alumnos.class';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {



  alumnos:Ialumno[]=[
    { 
      nombre:'Enzo',
      apellido:'Medina',
      nota:2,
      aprobado:false,
    
      
    },
    {
      nombre:'Bruno',
      apellido:'Almaraz',
      nota:5,
      aprobado:false
    },
  
    {
      nombre:'Luciana',
      apellido:'Medina',
      nota:8,
      aprobado:true,
      
  
    },
  
      {
        nombre:'Rocio',
        apellido:'Farias',
        nota:10,
        aprobado:true
      }
  ]
  
}
