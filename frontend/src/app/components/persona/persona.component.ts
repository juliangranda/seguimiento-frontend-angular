import { Component, OnInit } from '@angular/core';

import{FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.sass']
})
export class PersonaComponent implements OnInit {

  forma:FormGroup;
  constructor() { 
    this.forma = new FormGroup({
      //valor varible default/validadores/validadores asincronos
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl('', Validators.required),
      'correo': new FormControl('', [ Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    })
  }
  guardarCambios(){
    console.log(this.forma);
  }
  ngOnInit() {
  }

}
