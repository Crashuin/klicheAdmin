import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { User } from '../../interfaces/user.interfaces';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditUserComponent } from '../../components/add-edit-user/add-edit-user.component';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements AfterViewInit {

  constructor(
    private _dialog: MatDialog,
  ) {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  //Nombres de las columnas que se usan en la tabla
  displayedColumns: string[] = ['id', 'nombre', 'usuario', 'perfil', 'estado', 'ultimo_login', 'fecha_creacion', 'acciones'];

  //Aqui se ponen la fuente de los datos de la tabla
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //TODO: Añadir filtro de busqueda

 /*  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } */

  //Dialog

  openAddEditUserForm() {
    const dialogRef = this._dialog.open(AddEditUserComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //this.getNotasList();
        }
      }
    })
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddEditUserComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //this.getNotasList();
        }
      }
    })
  }


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
  },
  {
    id: 4,
    nombre: 'Daniel',
    usuario: 'DanielAdmin',
    perfil: 'Administrador',
    estado: true,
    ultimo_login: new Date('2022-03-22'), // Usar el formato 'YYYY-MM-DD'
    fecha_creacion: new Date('2022-03-22')
  },
  {
    id: 5,
    nombre: 'Daniel',
    usuario: 'DanielAdmin',
    perfil: 'Administrador',
    estado: true,
    ultimo_login: new Date('2022-03-22'), // Usar el formato 'YYYY-MM-DD'
    fecha_creacion: new Date('2022-03-22')
  },
  {
    id: 6,
    nombre: 'Daniel',
    usuario: 'DanielAdmin',
    perfil: 'Administrador',
    estado: true,
    ultimo_login: new Date('2022-03-22'), // Usar el formato 'YYYY-MM-DD'
    fecha_creacion: new Date('2022-03-22')
  },
  {
    id: 7,
    nombre: 'Daniel',
    usuario: 'DanielAdmin',
    perfil: 'Administrador',
    estado: true,
    ultimo_login: new Date('2022-03-22'), // Usar el formato 'YYYY-MM-DD'
    fecha_creacion: new Date('2022-03-22')
  }

];
