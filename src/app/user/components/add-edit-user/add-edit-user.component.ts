import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  //Reactive Form
  userForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    //private _notasService: NotasserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<AddEditUserComponent>,

  ){
    this.userForm = this._fb.group({
      nombre: ['', Validators.required],
      usuario: ['', Validators.required],
      perfil: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }


  prioridadOpciones: string[] = [
    'Administrador',
  ];

  estadoOpciones: string[] = [
    'Activado',
    'Desactivado',
  ];





  ngOnInit(): void {

  }

  onFormSubmit() {

  }

  //Form Control

  get nombre() {
    return this.userForm.get('nombre') as FormControl;
  }

  get usuario() {
    return this.userForm.get('usuario') as FormControl;
  }

  get perfil() {
    return this.userForm.get('perfil') as FormControl;
  }

  get estado(){
    return this.userForm.get('estado') as FormControl;
  }


}
