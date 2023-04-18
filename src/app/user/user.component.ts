import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../models/user';
import { Adress } from '../models/adress';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user!: User;
  address!: Adress;

  userForm = this.formBuilder.group({
    username:  [''],
    credentials: this.formBuilder.group({
      email: [''],
      password: [''],
    }),
    street: [''],
    postalCode: [''],
    city: [''],
  })

  constructor(private formBuilder: FormBuilder){}

  
  onSubmit(){  
    console.log(this.userForm.value);
  }
}
