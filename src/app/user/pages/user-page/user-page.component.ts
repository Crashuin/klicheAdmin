import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../interfaces/user.interfaces';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  //Nombres de las columnas que se usan en la tabla
  displayedColumns: string[] = ['id', 'nombre', 'usuario', 'perfil', 'estado', 'ultimo_login', 'fecha_creacion'];

  //Aqui se ponen la fuente de los datos de la tabla
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  //TODO: TERMINAR FUNCIONAMIENTO PAGINACION


}


const ELEMENT_DATA: User[] = [
  {
    id: 1,
    nombre: 'Daniel',
    usuario: 'DanielAdmin',
    perfil: 'Administrador',
    estado: true,
    ultimo_login: new Date('2022-03-22'), // Usar el formato 'YYYY-MM-DD'
    fecha_creacion: new Date('2022-03-22')
  },
  {
    id: 2,
    nombre: 'Daniel',
    usuario: 'DanielAdmin',
    perfil: 'Administrador',
    estado: true,
    ultimo_login: new Date('2022-03-22'), // Usar el formato 'YYYY-MM-DD'
    fecha_creacion: new Date('2022-03-22')
  },
  {
    id: 3,
    nombre: 'Daniel',
    usuario: 'DanielAdmin',
    perfil: 'Administrador',
    estado: true,
    ultimo_login: new Date('2022-03-22'), // Usar el formato 'YYYY-MM-DD'
    fecha_creacion: new Date('2022-03-22')
  }

];
